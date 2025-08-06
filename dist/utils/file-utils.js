"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearOutputDirectory = clearOutputDirectory;
exports.saveToJsonFile = saveToJsonFile;
exports.getLatestFile = getLatestFile;
exports.readJsonFile = readJsonFile;
exports.sleep = sleep;
exports.formatPrice = formatPrice;
exports.calculateProductStats = calculateProductStats;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Clear output directory and remove old files
 */
async function clearOutputDirectory(outputDir = './output') {
    if (!fs_1.default.existsSync(outputDir)) {
        fs_1.default.mkdirSync(outputDir, { recursive: true });
        return;
    }
    const files = fs_1.default.readdirSync(outputDir);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));
    for (const file of jsonFiles) {
        const filePath = path_1.default.join(outputDir, file);
        fs_1.default.unlinkSync(filePath);
        console.log(`🗑️ Silindi: ${file}`);
    }
    if (jsonFiles.length > 0) {
        console.log('📁 Output klasörü temizlendi\n');
    }
}
/**
 * Save data to JSON file with timestamp
 */
function saveToJsonFile(data, filename, outputDir = './output') {
    if (!fs_1.default.existsSync(outputDir)) {
        fs_1.default.mkdirSync(outputDir, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fullFilename = `${filename}-${timestamp}.json`;
    const filePath = path_1.default.join(outputDir, fullFilename);
    fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return filePath;
}
/**
 * Get the latest file matching a pattern
 */
function getLatestFile(pattern, outputDir = './output') {
    if (!fs_1.default.existsSync(outputDir)) {
        return null;
    }
    const files = fs_1.default
        .readdirSync(outputDir)
        .filter((file) => file.includes(pattern) && file.endsWith('.json'))
        .sort()
        .reverse();
    return files.length > 0 ? path_1.default.join(outputDir, files[0]) : null;
}
/**
 * Read JSON file and parse it
 */
function readJsonFile(filePath) {
    const content = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}
/**
 * Sleep for specified milliseconds
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Format price from cents to TRY
 */
function formatPrice(priceInCents) {
    return (priceInCents / 100).toFixed(0) + '₺';
}
/**
 * Calculate statistics for product data
 */
function calculateProductStats(products) {
    if (products.length === 0) {
        return {
            totalProducts: 0,
            averageColors: 0,
            averageImages: 0,
            averageSizes: 0,
        };
    }
    const totalColors = products.reduce((sum, product) => sum + (product.colors?.length || 0), 0);
    const totalImages = products.reduce((sum, product) => sum + (product.images?.length || 0), 0);
    const totalSizes = products.reduce((sum, product) => {
        return (sum +
            (product.colors?.reduce((colorSum, color) => colorSum + (color.sizes?.length || 0), 0) || 0));
    }, 0);
    return {
        totalProducts: products.length,
        averageColors: parseFloat((totalColors / products.length).toFixed(1)),
        averageImages: parseFloat((totalImages / products.length).toFixed(1)),
        averageSizes: parseFloat((totalSizes / products.length).toFixed(1)),
    };
}
//# sourceMappingURL=file-utils.js.map