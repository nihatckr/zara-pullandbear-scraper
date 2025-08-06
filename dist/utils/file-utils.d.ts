/**
 * Clear output directory and remove old files
 */
export declare function clearOutputDirectory(outputDir?: string): Promise<void>;
/**
 * Save data to JSON file with timestamp
 */
export declare function saveToJsonFile(data: any, filename: string, outputDir?: string): string;
/**
 * Get the latest file matching a pattern
 */
export declare function getLatestFile(pattern: string, outputDir?: string): string | null;
/**
 * Read JSON file and parse it
 */
export declare function readJsonFile<T>(filePath: string): T;
/**
 * Sleep for specified milliseconds
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Format price from cents to TRY
 */
export declare function formatPrice(priceInCents: number): string;
/**
 * Calculate statistics for product data
 */
export declare function calculateProductStats(products: any[]): {
    totalProducts: number;
    averageColors: number;
    averageImages: number;
    averageSizes: number;
};
//# sourceMappingURL=file-utils.d.ts.map