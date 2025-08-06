import { EventEmitter } from 'events';
import { PerformanceConfig } from '../config/performance';
import { MinimalProduct } from '../types';
/**
 * High-Performance Product Scraping Queue
 * Handles thousands of products with concurrency, rate limiting, and error recovery
 */
export interface ScrapingJob {
    id: string;
    productId: string;
    brand: 'zara' | 'pullandbear';
    priority: number;
    attempts: number;
    lastAttempt?: Date;
    error?: string;
}
export interface ScrapingProgress {
    total: number;
    completed: number;
    failed: number;
    inProgress: number;
    rate: number;
    eta: number;
    errors: string[];
}
export interface ScrapingResult {
    success: MinimalProduct[];
    failed: ScrapingJob[];
    stats: ScrapingProgress;
}
export declare class HighPerformanceQueue extends EventEmitter {
    private config;
    private scrapers;
    private jobs;
    private inProgress;
    private completed;
    private failed;
    private activeWorkers;
    private consecutiveErrors;
    private lastErrorTime;
    private startTime;
    private checkpointData;
    constructor(config: PerformanceConfig, scrapers: {
        zara: any;
        pullandbear: any;
    });
    /**
     * Add products to the scraping queue
     */
    addProducts(productIds: string[], brand: 'zara' | 'pullandbear', priority?: number): void;
    /**
     * Start the high-performance scraping process
     */
    start(): Promise<ScrapingResult>;
    /**
     * Individual worker that processes jobs
     */
    private worker;
    /**
     * Process a single scraping job
     */
    private processJob;
    /**
     * Handle job errors with retry logic
     */
    private handleJobError;
    /**
     * Get next job with priority and brand balancing
     */
    private getNextJob;
    /**
     * Check if there are more jobs to process
     */
    private hasMoreJobs;
    /**
     * Check if we should pause due to too many errors
     */
    private shouldPauseForErrors;
    /**
     * Get brand distribution for load balancing
     */
    private getBrandCounts;
    /**
     * Validate product data quality
     */
    private validateProduct;
    /**
     * Get current progress statistics
     */
    private getProgress;
    /**
     * Report progress to console and emit events
     */
    private reportProgress;
    /**
     * Save checkpoint for crash recovery
     */
    private saveCheckpoint;
    /**
     * Setup memory monitoring
     */
    private setupMemoryMonitoring;
    /**
     * Utility sleep function
     */
    private sleep;
    /**
     * Get checkpoint data for recovery
     */
    getCheckpoint(): any;
    /**
     * Resume from checkpoint
     */
    resumeFromCheckpoint(checkpoint: any): void;
}
//# sourceMappingURL=HighPerformanceQueue.d.ts.map