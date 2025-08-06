"use strict";
/**
 * Performance Configuration for High-Volume Scraping
 * Production-ready settings for thousands of products
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSERVATIVE_CONFIG = exports.AGGRESSIVE_CONFIG = exports.PRODUCTION_CONFIG = void 0;
exports.getPerformanceConfig = getPerformanceConfig;
exports.PRODUCTION_CONFIG = {
    // Conservative settings for production
    maxConcurrentRequests: 8,
    maxConcurrentPerBrand: 4,
    batchSize: 50,
    // Rate limiting for API stability
    requestDelay: 500, // 500ms between requests
    brandSwitchDelay: 1000, // 1s when switching brands
    retryDelay: 2000,
    // Robust retry logic
    maxRetries: 5,
    exponentialBackoff: true,
    backoffMultiplier: 1.5,
    // Memory management
    memoryThreshold: 500, // 500MB
    garbageCollectInterval: 100, // Every 100 requests
    batchProcessingSize: 25, // Process 25 products at once
    // Progress tracking
    saveInterval: 2 * 60 * 1000, // Save every 2 minutes
    progressReportInterval: 10, // Report every 10 products
    checkpointInterval: 5 * 60 * 1000, // Checkpoint every 5 minutes
    // Error handling
    maxConsecutiveErrors: 10,
    errorCooldownPeriod: 30000, // 30 seconds
    skipOnError: false,
    // Quality control
    validateResponses: true,
    minRequiredFields: ['id', 'name', 'price'],
    responseTimeoutMs: 15000, // 15 seconds
};
exports.AGGRESSIVE_CONFIG = {
    // Faster settings for development/testing
    maxConcurrentRequests: 20,
    maxConcurrentPerBrand: 10,
    batchSize: 100,
    requestDelay: 200,
    brandSwitchDelay: 500,
    retryDelay: 1000,
    maxRetries: 3,
    exponentialBackoff: true,
    backoffMultiplier: 2,
    memoryThreshold: 1000,
    garbageCollectInterval: 50,
    batchProcessingSize: 50,
    saveInterval: 60 * 1000, // 1 minute
    progressReportInterval: 25,
    checkpointInterval: 2 * 60 * 1000, // 2 minutes
    maxConsecutiveErrors: 20,
    errorCooldownPeriod: 10000, // 10 seconds
    skipOnError: true,
    validateResponses: false,
    minRequiredFields: ['id', 'name'],
    responseTimeoutMs: 10000,
};
exports.CONSERVATIVE_CONFIG = {
    // Ultra-safe settings for sensitive APIs
    maxConcurrentRequests: 3,
    maxConcurrentPerBrand: 2,
    batchSize: 10,
    requestDelay: 2000, // 2 seconds
    brandSwitchDelay: 5000,
    retryDelay: 5000,
    maxRetries: 10,
    exponentialBackoff: true,
    backoffMultiplier: 1.2,
    memoryThreshold: 200,
    garbageCollectInterval: 25,
    batchProcessingSize: 5,
    saveInterval: 30 * 1000, // 30 seconds
    progressReportInterval: 5,
    checkpointInterval: 60 * 1000, // 1 minute
    maxConsecutiveErrors: 3,
    errorCooldownPeriod: 60000, // 1 minute
    skipOnError: false,
    validateResponses: true,
    minRequiredFields: ['id', 'name', 'price', 'currency'],
    responseTimeoutMs: 30000,
};
// Environment-based configuration selection
function getPerformanceConfig() {
    const mode = process.env.SCRAPER_MODE || 'production';
    switch (mode) {
        case 'aggressive':
            return exports.AGGRESSIVE_CONFIG;
        case 'conservative':
            return exports.CONSERVATIVE_CONFIG;
        case 'production':
        default:
            return exports.PRODUCTION_CONFIG;
    }
}
//# sourceMappingURL=performance.js.map