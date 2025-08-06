"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighPerformanceQueue = void 0;
const events_1 = require("events");
class HighPerformanceQueue extends events_1.EventEmitter {
    config;
    scrapers;
    jobs = new Map();
    inProgress = new Set();
    completed = new Set();
    failed = new Set();
    activeWorkers = 0;
    consecutiveErrors = 0;
    lastErrorTime = null;
    startTime = null;
    checkpointData = new Map();
    constructor(config, scrapers) {
        super();
        this.config = config;
        this.scrapers = scrapers;
        this.setupMemoryMonitoring();
    }
    /**
     * Add products to the scraping queue
     */
    addProducts(productIds, brand, priority = 1) {
        for (const productId of productIds) {
            const job = {
                id: `${brand}-${productId}`,
                productId,
                brand,
                priority,
                attempts: 0,
            };
            this.jobs.set(job.id, job);
        }
        this.emit('jobs-added', { count: productIds.length, brand });
    }
    /**
     * Start the high-performance scraping process
     */
    async start() {
        this.startTime = new Date();
        this.emit('scraping-started', { total: this.jobs.size });
        const results = [];
        const failedJobs = [];
        // Start worker promises
        const workers = Array.from({ length: this.config.maxConcurrentRequests }, (_, i) => this.worker(i, results, failedJobs));
        // Start progress reporting
        const progressInterval = setInterval(() => {
            this.reportProgress();
        }, this.config.progressReportInterval * 1000);
        // Start checkpoint saving
        const checkpointInterval = setInterval(() => {
            this.saveCheckpoint(results, failedJobs);
        }, this.config.checkpointInterval);
        // Wait for all workers to complete
        await Promise.all(workers);
        // Cleanup intervals
        clearInterval(progressInterval);
        clearInterval(checkpointInterval);
        const stats = this.getProgress();
        this.emit('scraping-completed', { stats });
        return {
            success: results,
            failed: failedJobs,
            stats,
        };
    }
    /**
     * Individual worker that processes jobs
     */
    async worker(workerId, results, failedJobs) {
        while (this.hasMoreJobs()) {
            // Check if we should pause due to errors
            if (this.shouldPauseForErrors()) {
                await this.sleep(this.config.errorCooldownPeriod);
                this.consecutiveErrors = 0;
                continue;
            }
            const job = this.getNextJob();
            if (!job) {
                await this.sleep(100);
                continue;
            }
            this.activeWorkers++;
            this.inProgress.add(job.id);
            try {
                const result = await this.processJob(job);
                if (result) {
                    results.push(result);
                    this.completed.add(job.id);
                    this.consecutiveErrors = 0;
                    this.emit('product-scraped', { product: result, workerId });
                }
                else {
                    throw new Error('No result returned');
                }
            }
            catch (error) {
                await this.handleJobError(job, error, failedJobs);
            }
            finally {
                this.inProgress.delete(job.id);
                this.activeWorkers--;
                // Memory management
                if (results.length % this.config.garbageCollectInterval === 0) {
                    if (global.gc)
                        global.gc();
                }
                // Rate limiting
                await this.sleep(this.config.requestDelay);
            }
        }
    }
    /**
     * Process a single scraping job
     */
    async processJob(job) {
        job.attempts++;
        job.lastAttempt = new Date();
        const scraper = job.brand === 'zara' ? this.scrapers.zara : this.scrapers.pullandbear;
        // Add timeout wrapper
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Request timeout')), this.config.responseTimeoutMs);
        });
        const scrapingPromise = scraper.fetchProductDetail(job.productId);
        const result = await Promise.race([scrapingPromise, timeoutPromise]);
        // Validate result if required
        if (this.config.validateResponses && !this.validateProduct(result)) {
            throw new Error('Product validation failed');
        }
        return result;
    }
    /**
     * Handle job errors with retry logic
     */
    async handleJobError(job, error, failedJobs) {
        job.error = error.message;
        this.consecutiveErrors++;
        this.lastErrorTime = new Date();
        this.emit('job-error', { job, error: error.message });
        if (job.attempts < this.config.maxRetries) {
            // Exponential backoff
            const delay = this.config.exponentialBackoff
                ? this.config.retryDelay *
                    Math.pow(this.config.backoffMultiplier, job.attempts - 1)
                : this.config.retryDelay;
            await this.sleep(delay);
            // Re-queue the job
            this.jobs.set(job.id, job);
        }
        else {
            // Mark as permanently failed
            this.failed.add(job.id);
            failedJobs.push(job);
            if (!this.config.skipOnError &&
                this.failed.size > this.config.maxConsecutiveErrors) {
                throw new Error(`Too many failures: ${this.failed.size}`);
            }
        }
    }
    /**
     * Get next job with priority and brand balancing
     */
    getNextJob() {
        const availableJobs = Array.from(this.jobs.values())
            .filter((job) => !this.inProgress.has(job.id))
            .sort((a, b) => {
            // First by priority
            if (a.priority !== b.priority)
                return b.priority - a.priority;
            // Then by brand balancing (to avoid overwhelming one API)
            const brandCounts = this.getBrandCounts();
            if (brandCounts[a.brand] !== brandCounts[b.brand]) {
                return brandCounts[a.brand] - brandCounts[b.brand];
            }
            // Finally by attempts (retry failed jobs less frequently)
            return a.attempts - b.attempts;
        });
        const job = availableJobs[0];
        if (job) {
            this.jobs.delete(job.id);
            return job;
        }
        return null;
    }
    /**
     * Check if there are more jobs to process
     */
    hasMoreJobs() {
        return this.jobs.size > 0 || this.inProgress.size > 0;
    }
    /**
     * Check if we should pause due to too many errors
     */
    shouldPauseForErrors() {
        return (this.consecutiveErrors >= this.config.maxConsecutiveErrors &&
            this.lastErrorTime !== null &&
            Date.now() - this.lastErrorTime.getTime() <
                this.config.errorCooldownPeriod);
    }
    /**
     * Get brand distribution for load balancing
     */
    getBrandCounts() {
        const counts = {
            zara: 0,
            pullandbear: 0,
        };
        for (const jobId of this.inProgress) {
            const job = Array.from(this.jobs.values()).find((j) => j.id === jobId);
            if (job)
                counts[job.brand]++;
        }
        return counts;
    }
    /**
     * Validate product data quality
     */
    validateProduct(product) {
        if (!product)
            return false;
        for (const field of this.config.minRequiredFields) {
            if (!product[field])
                return false;
        }
        return true;
    }
    /**
     * Get current progress statistics
     */
    getProgress() {
        const total = this.completed.size +
            this.failed.size +
            this.jobs.size +
            this.inProgress.size;
        const completed = this.completed.size;
        const failed = this.failed.size;
        const inProgress = this.inProgress.size;
        const elapsedMinutes = this.startTime
            ? (Date.now() - this.startTime.getTime()) / (1000 * 60)
            : 1;
        const rate = completed / elapsedMinutes;
        const remaining = total - completed - failed;
        const eta = rate > 0 ? (remaining / rate) * 60 : 0;
        return {
            total,
            completed,
            failed,
            inProgress,
            rate,
            eta,
            errors: Array.from(this.failed).slice(-10), // Last 10 errors
        };
    }
    /**
     * Report progress to console and emit events
     */
    reportProgress() {
        const progress = this.getProgress();
        console.log(`\n📊 Progress: ${progress.completed}/${progress.total} (${((progress.completed / progress.total) *
            100).toFixed(1)}%)`);
        console.log(`⚡ Rate: ${progress.rate.toFixed(1)} products/min`);
        console.log(`⏱️  ETA: ${Math.round(progress.eta)} seconds`);
        console.log(`🔄 In Progress: ${progress.inProgress}`);
        console.log(`❌ Failed: ${progress.failed}`);
        this.emit('progress-update', progress);
    }
    /**
     * Save checkpoint for crash recovery
     */
    saveCheckpoint(results, failedJobs) {
        const checkpoint = {
            timestamp: new Date().toISOString(),
            progress: this.getProgress(),
            results: results.length,
            failed: failedJobs.length,
            remainingJobs: Array.from(this.jobs.values()),
        };
        this.checkpointData.set('latest', checkpoint);
        this.emit('checkpoint-saved', checkpoint);
    }
    /**
     * Setup memory monitoring
     */
    setupMemoryMonitoring() {
        setInterval(() => {
            const usage = process.memoryUsage();
            const usedMB = usage.heapUsed / 1024 / 1024;
            if (usedMB > this.config.memoryThreshold) {
                console.warn(`⚠️  High memory usage: ${usedMB.toFixed(1)}MB`);
                if (global.gc)
                    global.gc();
                this.emit('high-memory-usage', {
                    usedMB,
                    threshold: this.config.memoryThreshold,
                });
            }
        }, 30000); // Check every 30 seconds
    }
    /**
     * Utility sleep function
     */
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * Get checkpoint data for recovery
     */
    getCheckpoint() {
        return this.checkpointData.get('latest');
    }
    /**
     * Resume from checkpoint
     */
    resumeFromCheckpoint(checkpoint) {
        if (checkpoint?.remainingJobs) {
            for (const job of checkpoint.remainingJobs) {
                this.jobs.set(job.id, job);
            }
            this.emit('checkpoint-resumed', {
                jobsRestored: checkpoint.remainingJobs.length,
            });
        }
    }
}
exports.HighPerformanceQueue = HighPerformanceQueue;
//# sourceMappingURL=HighPerformanceQueue.js.map