import { EventEmitter } from 'events'
import { PerformanceConfig } from '../config/performance'
import { MinimalProduct } from '../types'

/**
 * High-Performance Product Scraping Queue
 * Handles thousands of products with concurrency, rate limiting, and error recovery
 */

export interface ScrapingJob {
  id: string
  productId: string
  brand: 'zara' | 'pullandbear'
  priority: number
  attempts: number
  lastAttempt?: Date
  error?: string
}

export interface ScrapingProgress {
  total: number
  completed: number
  failed: number
  inProgress: number
  rate: number // products per minute
  eta: number // seconds
  errors: string[]
}

export interface ScrapingResult {
  success: MinimalProduct[]
  failed: ScrapingJob[]
  stats: ScrapingProgress
}

export class HighPerformanceQueue extends EventEmitter {
  private jobs: Map<string, ScrapingJob> = new Map()
  private inProgress: Set<string> = new Set()
  private completed: Set<string> = new Set()
  private failed: Set<string> = new Set()
  private activeWorkers: number = 0
  private consecutiveErrors: number = 0
  private lastErrorTime: Date | null = null
  private startTime: Date | null = null
  private checkpointData: Map<string, any> = new Map()

  constructor(
    private config: PerformanceConfig,
    private scrapers: { zara: any; pullandbear: any },
  ) {
    super()
    this.setupMemoryMonitoring()
  }

  /**
   * Add products to the scraping queue
   */
  addProducts(
    productIds: string[],
    brand: 'zara' | 'pullandbear',
    priority = 1,
  ): void {
    for (const productId of productIds) {
      const job: ScrapingJob = {
        id: `${brand}-${productId}`,
        productId,
        brand,
        priority,
        attempts: 0,
      }
      this.jobs.set(job.id, job)
    }

    this.emit('jobs-added', { count: productIds.length, brand })
  }

  /**
   * Start the high-performance scraping process
   */
  async start(): Promise<ScrapingResult> {
    this.startTime = new Date()
    this.emit('scraping-started', { total: this.jobs.size })

    const results: MinimalProduct[] = []
    const failedJobs: ScrapingJob[] = []

    // Start worker promises
    const workers = Array.from(
      { length: this.config.maxConcurrentRequests },
      (_, i) => this.worker(i, results, failedJobs),
    )

    // Start progress reporting
    const progressInterval = setInterval(() => {
      this.reportProgress()
    }, this.config.progressReportInterval * 1000)

    // Start checkpoint saving
    const checkpointInterval = setInterval(() => {
      this.saveCheckpoint(results, failedJobs)
    }, this.config.checkpointInterval)

    // Wait for all workers to complete
    await Promise.all(workers)

    // Cleanup intervals
    clearInterval(progressInterval)
    clearInterval(checkpointInterval)

    const stats = this.getProgress()
    this.emit('scraping-completed', { stats })

    return {
      success: results,
      failed: failedJobs,
      stats,
    }
  }

  /**
   * Individual worker that processes jobs
   */
  private async worker(
    workerId: number,
    results: MinimalProduct[],
    failedJobs: ScrapingJob[],
  ): Promise<void> {
    while (this.hasMoreJobs()) {
      // Check if we should pause due to errors
      if (this.shouldPauseForErrors()) {
        await this.sleep(this.config.errorCooldownPeriod)
        this.consecutiveErrors = 0
        continue
      }

      const job = this.getNextJob()
      if (!job) {
        await this.sleep(100)
        continue
      }

      this.activeWorkers++
      this.inProgress.add(job.id)

      try {
        const result = await this.processJob(job)
        if (result) {
          results.push(result)
          this.completed.add(job.id)
          this.consecutiveErrors = 0
          this.emit('product-scraped', { product: result, workerId })
        } else {
          throw new Error('No result returned')
        }
      } catch (error) {
        await this.handleJobError(job, error as Error, failedJobs)
      } finally {
        this.inProgress.delete(job.id)
        this.activeWorkers--

        // Memory management
        if (results.length % this.config.garbageCollectInterval === 0) {
          if (global.gc) global.gc()
        }

        // Rate limiting
        await this.sleep(this.config.requestDelay)
      }
    }
  }

  /**
   * Process a single scraping job
   */
  private async processJob(job: ScrapingJob): Promise<MinimalProduct | null> {
    job.attempts++
    job.lastAttempt = new Date()

    const scraper =
      job.brand === 'zara' ? this.scrapers.zara : this.scrapers.pullandbear

    // Add timeout wrapper
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(
        () => reject(new Error('Request timeout')),
        this.config.responseTimeoutMs,
      )
    })

    const scrapingPromise = scraper.fetchProductDetail(job.productId)

    const result = await Promise.race([scrapingPromise, timeoutPromise])

    // Validate result if required
    if (this.config.validateResponses && !this.validateProduct(result)) {
      throw new Error('Product validation failed')
    }

    return result
  }

  /**
   * Handle job errors with retry logic
   */
  private async handleJobError(
    job: ScrapingJob,
    error: Error,
    failedJobs: ScrapingJob[],
  ): Promise<void> {
    job.error = error.message
    this.consecutiveErrors++
    this.lastErrorTime = new Date()

    this.emit('job-error', { job, error: error.message })

    if (job.attempts < this.config.maxRetries) {
      // Exponential backoff
      const delay = this.config.exponentialBackoff
        ? this.config.retryDelay *
          Math.pow(this.config.backoffMultiplier, job.attempts - 1)
        : this.config.retryDelay

      await this.sleep(delay)

      // Re-queue the job
      this.jobs.set(job.id, job)
    } else {
      // Mark as permanently failed
      this.failed.add(job.id)
      failedJobs.push(job)

      if (
        !this.config.skipOnError &&
        this.failed.size > this.config.maxConsecutiveErrors
      ) {
        throw new Error(`Too many failures: ${this.failed.size}`)
      }
    }
  }

  /**
   * Get next job with priority and brand balancing
   */
  private getNextJob(): ScrapingJob | null {
    const availableJobs = Array.from(this.jobs.values())
      .filter((job) => !this.inProgress.has(job.id))
      .sort((a, b) => {
        // First by priority
        if (a.priority !== b.priority) return b.priority - a.priority

        // Then by brand balancing (to avoid overwhelming one API)
        const brandCounts = this.getBrandCounts()
        if (brandCounts[a.brand] !== brandCounts[b.brand]) {
          return brandCounts[a.brand] - brandCounts[b.brand]
        }

        // Finally by attempts (retry failed jobs less frequently)
        return a.attempts - b.attempts
      })

    const job = availableJobs[0]
    if (job) {
      this.jobs.delete(job.id)
      return job
    }

    return null
  }

  /**
   * Check if there are more jobs to process
   */
  private hasMoreJobs(): boolean {
    return this.jobs.size > 0 || this.inProgress.size > 0
  }

  /**
   * Check if we should pause due to too many errors
   */
  private shouldPauseForErrors(): boolean {
    return (
      this.consecutiveErrors >= this.config.maxConsecutiveErrors &&
      this.lastErrorTime !== null &&
      Date.now() - this.lastErrorTime.getTime() <
        this.config.errorCooldownPeriod
    )
  }

  /**
   * Get brand distribution for load balancing
   */
  private getBrandCounts(): Record<'zara' | 'pullandbear', number> {
    const counts: Record<'zara' | 'pullandbear', number> = {
      zara: 0,
      pullandbear: 0,
    }
    for (const jobId of this.inProgress) {
      const job = Array.from(this.jobs.values()).find((j) => j.id === jobId)
      if (job) counts[job.brand]++
    }
    return counts
  }

  /**
   * Validate product data quality
   */
  private validateProduct(product: any): boolean {
    if (!product) return false

    for (const field of this.config.minRequiredFields) {
      if (!product[field]) return false
    }

    return true
  }

  /**
   * Get current progress statistics
   */
  private getProgress(): ScrapingProgress {
    const total =
      this.completed.size +
      this.failed.size +
      this.jobs.size +
      this.inProgress.size
    const completed = this.completed.size
    const failed = this.failed.size
    const inProgress = this.inProgress.size

    const elapsedMinutes = this.startTime
      ? (Date.now() - this.startTime.getTime()) / (1000 * 60)
      : 1

    const rate = completed / elapsedMinutes
    const remaining = total - completed - failed
    const eta = rate > 0 ? (remaining / rate) * 60 : 0

    return {
      total,
      completed,
      failed,
      inProgress,
      rate,
      eta,
      errors: Array.from(this.failed).slice(-10), // Last 10 errors
    }
  }

  /**
   * Report progress to console and emit events
   */
  private reportProgress(): void {
    const progress = this.getProgress()

    console.log(
      `\n📊 Progress: ${progress.completed}/${progress.total} (${(
        (progress.completed / progress.total) *
        100
      ).toFixed(1)}%)`,
    )
    console.log(`⚡ Rate: ${progress.rate.toFixed(1)} products/min`)
    console.log(`⏱️  ETA: ${Math.round(progress.eta)} seconds`)
    console.log(`🔄 In Progress: ${progress.inProgress}`)
    console.log(`❌ Failed: ${progress.failed}`)

    this.emit('progress-update', progress)
  }

  /**
   * Save checkpoint for crash recovery
   */
  private saveCheckpoint(
    results: MinimalProduct[],
    failedJobs: ScrapingJob[],
  ): void {
    const checkpoint = {
      timestamp: new Date().toISOString(),
      progress: this.getProgress(),
      results: results.length,
      failed: failedJobs.length,
      remainingJobs: Array.from(this.jobs.values()),
    }

    this.checkpointData.set('latest', checkpoint)
    this.emit('checkpoint-saved', checkpoint)
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    setInterval(() => {
      const usage = process.memoryUsage()
      const usedMB = usage.heapUsed / 1024 / 1024

      if (usedMB > this.config.memoryThreshold) {
        console.warn(`⚠️  High memory usage: ${usedMB.toFixed(1)}MB`)
        if (global.gc) global.gc()
        this.emit('high-memory-usage', {
          usedMB,
          threshold: this.config.memoryThreshold,
        })
      }
    }, 30000) // Check every 30 seconds
  }

  /**
   * Utility sleep function
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  /**
   * Get checkpoint data for recovery
   */
  getCheckpoint(): any {
    return this.checkpointData.get('latest')
  }

  /**
   * Resume from checkpoint
   */
  resumeFromCheckpoint(checkpoint: any): void {
    if (checkpoint?.remainingJobs) {
      for (const job of checkpoint.remainingJobs) {
        this.jobs.set(job.id, job)
      }
      this.emit('checkpoint-resumed', {
        jobsRestored: checkpoint.remainingJobs.length,
      })
    }
  }
}
