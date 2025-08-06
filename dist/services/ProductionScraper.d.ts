import { PerformanceConfig } from '../config/performance';
/**
 * Production Scraper Manager
 * Orchestrates high-volume scraping with database persistence and monitoring
 */
export interface ProductionScrapingOptions {
    productIds: {
        zara?: string[];
        pullandbear?: string[];
    };
    config: PerformanceConfig;
    saveToDatabase: boolean;
    saveToBatch: boolean;
    resumeFromCheckpoint?: any;
    enableMonitoring: boolean;
}
export interface ProductionStats {
    totalProducts: number;
    successfulProducts: number;
    failedProducts: number;
    duration: number;
    averageRate: number;
    memoryUsage: NodeJS.MemoryUsage;
    databaseStats?: any;
    errorReport: string[];
}
export declare class ProductionScraper {
    private zaraScraper;
    private pullBearScraper;
    private databaseService;
    private queue;
    private startTime;
    private monitoringInterval;
    constructor();
    /**
     * Start production scraping with full monitoring and persistence
     */
    scrapeProducts(options: ProductionScrapingOptions): Promise<ProductionStats>;
    /**
     * Setup comprehensive event monitoring
     */
    private setupEventMonitoring;
    /**
     * Log system statistics
     */
    private logSystemStats;
    /**
     * Save scraped products to database
     */
    private saveToDatabase;
    /**
     * Save products to batch JSON files
     */
    private saveBatchFiles;
    /**
     * Generate comprehensive statistics
     */
    private generateStats;
    /**
     * Cleanup resources
     */
    private cleanup;
    /**
     * Get current checkpoint for crash recovery
     */
    getCheckpoint(): any;
    /**
     * Estimate scraping time based on configuration and product count
     */
    static estimateScrapingTime(productCount: number, config: PerformanceConfig): {
        minutes: number;
        hours: number;
    };
}
//# sourceMappingURL=ProductionScraper.d.ts.map