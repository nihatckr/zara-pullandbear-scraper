import { HighPerformanceQueue, ScrapingResult } from './HighPerformanceQueue'
import { DatabaseService } from './DatabaseService'
import { PerformanceConfig } from '../config/performance'
import { MinimalProduct } from '../types'
import { ZaraScraper, PullBearScraper } from '../scrapers'

/**
 * Production Scraper Manager
 * Orchestrates high-volume scraping with database persistence and monitoring
 */

export interface ProductionScrapingOptions {
  productIds: {
    zara?: string[]
    pullandbear?: string[]
  }
  config: PerformanceConfig
  saveToDatabase: boolean
  saveToBatch: boolean
  resumeFromCheckpoint?: any
  enableMonitoring: boolean
}

export interface ProductionStats {
  totalProducts: number
  successfulProducts: number
  failedProducts: number
  duration: number
  averageRate: number
  memoryUsage: NodeJS.MemoryUsage
  databaseStats?: any
  errorReport: string[]
}

export class ProductionScraper {
  private zaraScraper: ZaraScraper
  private pullBearScraper: PullBearScraper
  private databaseService: DatabaseService
  private queue: HighPerformanceQueue | null = null
  private startTime: Date | null = null
  private monitoringInterval: NodeJS.Timeout | null = null

  constructor() {
    this.zaraScraper = new ZaraScraper()
    this.pullBearScraper = new PullBearScraper()
    this.databaseService = new DatabaseService()
  }

  /**
   * Start production scraping with full monitoring and persistence
   */
  async scrapeProducts(
    options: ProductionScrapingOptions,
  ): Promise<ProductionStats> {
    console.log('🚀 Starting Production Scraping...')
    this.startTime = new Date()

    // Initialize queue
    this.queue = new HighPerformanceQueue(options.config, {
      zara: this.zaraScraper,
      pullandbear: this.pullBearScraper,
    })

    // Setup event monitoring
    if (options.enableMonitoring) {
      this.setupEventMonitoring()
    }

    // Resume from checkpoint if provided
    if (options.resumeFromCheckpoint) {
      this.queue.resumeFromCheckpoint(options.resumeFromCheckpoint)
      console.log('📁 Resumed from checkpoint')
    }

    // Add products to queue
    if (options.productIds.zara?.length) {
      this.queue.addProducts(options.productIds.zara, 'zara', 2)
      console.log(`➕ Added ${options.productIds.zara.length} Zara products`)
    }

    if (options.productIds.pullandbear?.length) {
      this.queue.addProducts(options.productIds.pullandbear, 'pullandbear', 1)
      console.log(
        `➕ Added ${options.productIds.pullandbear.length} Pull&Bear products`,
      )
    }

    // Start scraping
    const result = await this.queue.start()

    // Save results
    if (options.saveToDatabase && result.success.length > 0) {
      console.log('\n💾 Saving to database...')
      await this.saveToDatabase(result.success)
    }

    if (options.saveToBatch && result.success.length > 0) {
      console.log('\n💾 Saving batch files...')
      await this.saveBatchFiles(result.success)
    }

    // Generate final statistics
    const stats = await this.generateStats(result)
    this.cleanup()

    return stats
  }

  /**
   * Setup comprehensive event monitoring
   */
  private setupEventMonitoring(): void {
    if (!this.queue) return

    this.queue.on('scraping-started', (data) => {
      console.log(`🎯 Scraping ${data.total} products started`)
    })

    this.queue.on('product-scraped', (data) => {
      if (data.product.id % 100 === 0) {
        // Log every 100th product
        console.log(`✅ Scraped: ${data.product.name} (${data.product.id})`)
      }
    })

    this.queue.on('job-error', (data) => {
      console.error(`❌ Error scraping ${data.job.productId}: ${data.error}`)
    })

    this.queue.on('high-memory-usage', (data) => {
      console.warn(
        `🧠 High memory: ${data.usedMB}MB (threshold: ${data.threshold}MB)`,
      )
    })

    this.queue.on('checkpoint-saved', (data) => {
      console.log(`💾 Checkpoint saved: ${data.results} products completed`)
    })

    // System monitoring
    this.monitoringInterval = setInterval(() => {
      this.logSystemStats()
    }, 60000) // Every minute
  }

  /**
   * Log system statistics
   */
  private logSystemStats(): void {
    const usage = process.memoryUsage()
    const uptime = process.uptime()

    console.log('\n📊 System Stats:')
    console.log(
      `   Memory: ${(usage.heapUsed / 1024 / 1024).toFixed(1)}MB used`,
    )
    console.log(`   Uptime: ${Math.floor(uptime / 60)} minutes`)
    console.log(`   CPU Load: ${process.cpuUsage().user / 1000}ms`)
  }

  /**
   * Save scraped products to database
   */
  private async saveToDatabase(products: MinimalProduct[]): Promise<void> {
    try {
      // Save all products at once (brand detection is automatic in DatabaseService)
      await this.databaseService.saveProducts(products)
      console.log(`✅ Saved ${products.length} products to database`)
    } catch (error) {
      console.error('❌ Database save error:', error)
      throw error
    }
  }

  /**
   * Save products to batch JSON files
   */
  private async saveBatchFiles(products: MinimalProduct[]): Promise<void> {
    const fs = require('fs').promises
    const path = require('path')

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const outputDir = path.join(process.cwd(), 'output')

    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true })

    // Save by brand
    const zaraProducts = products.filter((p) => p.id.toString().startsWith('4'))
    const pullBearProducts = products.filter((p) =>
      p.id.toString().startsWith('6'),
    )

    if (zaraProducts.length > 0) {
      const zaraFile = path.join(outputDir, `zara-products-${timestamp}.json`)
      await fs.writeFile(zaraFile, JSON.stringify(zaraProducts, null, 2))
      console.log(
        `📄 Saved ${zaraProducts.length} Zara products to ${zaraFile}`,
      )
    }

    if (pullBearProducts.length > 0) {
      const pullBearFile = path.join(
        outputDir,
        `pullandbear-products-${timestamp}.json`,
      )
      await fs.writeFile(
        pullBearFile,
        JSON.stringify(pullBearProducts, null, 2),
      )
      console.log(
        `📄 Saved ${pullBearProducts.length} Pull&Bear products to ${pullBearFile}`,
      )
    }

    // Save combined file
    const combinedFile = path.join(outputDir, `all-products-${timestamp}.json`)
    await fs.writeFile(combinedFile, JSON.stringify(products, null, 2))
    console.log(`📄 Saved ${products.length} total products to ${combinedFile}`)
  }

  /**
   * Generate comprehensive statistics
   */
  private async generateStats(
    result: ScrapingResult,
  ): Promise<ProductionStats> {
    const endTime = new Date()
    const duration = this.startTime
      ? endTime.getTime() - this.startTime.getTime()
      : 0
    const durationSeconds = duration / 1000

    const stats: ProductionStats = {
      totalProducts: result.stats.total,
      successfulProducts: result.success.length,
      failedProducts: result.failed.length,
      duration: durationSeconds,
      averageRate: result.success.length / (durationSeconds / 60), // per minute
      memoryUsage: process.memoryUsage(),
      errorReport: result.failed
        .map((job) => `${job.productId}: ${job.error}`)
        .slice(0, 10),
    }

    // Get database stats if available
    try {
      stats.databaseStats = await this.databaseService.getStats()
    } catch (error) {
      console.warn('Could not get database stats:', error)
    }

    // Log final stats
    console.log('\n🎉 Scraping Completed!')
    console.log('='.repeat(50))
    console.log(`📊 Total Products: ${stats.totalProducts}`)
    console.log(
      `✅ Successful: ${stats.successfulProducts} (${(
        (stats.successfulProducts / stats.totalProducts) *
        100
      ).toFixed(1)}%)`,
    )
    console.log(
      `❌ Failed: ${stats.failedProducts} (${(
        (stats.failedProducts / stats.totalProducts) *
        100
      ).toFixed(1)}%)`,
    )
    console.log(
      `⏱️  Duration: ${Math.floor(durationSeconds / 60)}m ${Math.floor(
        durationSeconds % 60,
      )}s`,
    )
    console.log(
      `⚡ Average Rate: ${stats.averageRate.toFixed(1)} products/minute`,
    )
    console.log(
      `🧠 Memory Used: ${(stats.memoryUsage.heapUsed / 1024 / 1024).toFixed(
        1,
      )}MB`,
    )

    if (stats.databaseStats) {
      console.log(
        `🗄️  Database: ${stats.databaseStats.products} products stored`,
      )
    }

    return stats
  }

  /**
   * Cleanup resources
   */
  private cleanup(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
    }
  }

  /**
   * Get current checkpoint for crash recovery
   */
  getCheckpoint(): any {
    return this.queue?.getCheckpoint()
  }

  /**
   * Estimate scraping time based on configuration and product count
   */
  static estimateScrapingTime(
    productCount: number,
    config: PerformanceConfig,
  ): { minutes: number; hours: number } {
    // Calculate theoretical max rate (requests per minute)
    const maxRate =
      ((60 * 1000) / config.requestDelay) * config.maxConcurrentRequests

    // Apply efficiency factor (typically 60-80% of theoretical max)
    const efficiencyFactor = 0.7
    const actualRate = maxRate * efficiencyFactor

    const minutes = productCount / actualRate
    const hours = minutes / 60

    return { minutes: Math.ceil(minutes), hours: Math.ceil(hours) }
  }
}
