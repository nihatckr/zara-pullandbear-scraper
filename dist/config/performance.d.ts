/**
 * Performance Configuration for High-Volume Scraping
 * Production-ready settings for thousands of products
 */
export interface PerformanceConfig {
    maxConcurrentRequests: number;
    maxConcurrentPerBrand: number;
    batchSize: number;
    requestDelay: number;
    brandSwitchDelay: number;
    retryDelay: number;
    maxRetries: number;
    exponentialBackoff: boolean;
    backoffMultiplier: number;
    memoryThreshold: number;
    garbageCollectInterval: number;
    batchProcessingSize: number;
    saveInterval: number;
    progressReportInterval: number;
    checkpointInterval: number;
    maxConsecutiveErrors: number;
    errorCooldownPeriod: number;
    skipOnError: boolean;
    validateResponses: boolean;
    minRequiredFields: string[];
    responseTimeoutMs: number;
}
export declare const PRODUCTION_CONFIG: PerformanceConfig;
export declare const AGGRESSIVE_CONFIG: PerformanceConfig;
export declare const CONSERVATIVE_CONFIG: PerformanceConfig;
export declare function getPerformanceConfig(): PerformanceConfig;
//# sourceMappingURL=performance.d.ts.map