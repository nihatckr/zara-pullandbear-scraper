"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseService = exports.DatabaseService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DatabaseService {
    // Save category data to database
    async saveCategoryData(categories) {
        console.log('🗄️  Saving category data to database...');
        for (const category of categories) {
            try {
                // Create main category
                const savedCategory = await prisma_1.default.categoryData.create({
                    data: {
                        brand: category.brand,
                        gender: category.gender,
                        mainCategoryId: category.mainCategoryId,
                        mainCategoryName: category.mainCategoryName,
                        timestamp: new Date(category.timestamp),
                        subcategories: {
                            create: category.subcategories.map((sub) => ({
                                categoryId: sub.categoryId,
                                categoryName: sub.categoryName,
                                isLeaf: sub.isLeaf || false,
                                matchingId: sub.matchingId,
                                matchingCategoryName: sub.matchingCategoryName,
                                productCount: sub.productCount || 0,
                                productIds: {
                                    create: (sub.productIds || []).map((pid) => ({
                                        productId: pid,
                                    })),
                                },
                                subcategories: {
                                    create: sub.subcategories.map((nested) => ({
                                        name: nested.name,
                                        isLeaf: nested.isLeaf || false,
                                        productCount: nested.productCount || 0,
                                        productIds: {
                                            create: (nested.productIds || []).map((pid) => ({
                                                productId: pid,
                                            })),
                                        },
                                    })),
                                },
                            })),
                        },
                    },
                });
                console.log(`✅ Saved ${category.brand} ${category.gender} category (ID: ${savedCategory.id})`);
            }
            catch (error) {
                console.error(`❌ Error saving category ${category.brand} ${category.gender}:`, error);
                throw error;
            }
        }
        console.log('✅ All category data saved successfully!');
    }
    // Save product data to database
    async saveProducts(products) {
        console.log('🗄️  Saving product data to database...');
        for (const product of products) {
            try {
                // Determine brand from product data
                const brand = this.determineBrand(product);
                // Create product with all related data
                await prisma_1.default.product.create({
                    data: {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        currency: product.currency,
                        brand: brand,
                        colors: {
                            create: product.colors.map((color) => ({
                                colorId: color.id,
                                name: color.name,
                                sizes: {
                                    create: color.sizes.map((size) => ({
                                        name: size.name,
                                        sku: size.sku,
                                        availability: size.availability,
                                        price: typeof size.price === 'string'
                                            ? parseInt(size.price) || 0
                                            : size.price,
                                    })),
                                },
                            })),
                        },
                        images: {
                            create: product.images.map((imageUrl, index) => ({
                                url: imageUrl,
                                order: index,
                            })),
                        },
                    },
                });
                console.log(`✅ Saved product ${product.id} - ${product.name}`);
            }
            catch (error) {
                // Handle duplicate key error gracefully
                if (error.code === 'P2002') {
                    console.log(`⚠️  Product ${product.id} already exists, updating...`);
                    await this.updateProduct(product);
                }
                else {
                    console.error(`❌ Error saving product ${product.id}:`, error);
                    throw error;
                }
            }
        }
        console.log('✅ All product data saved successfully!');
    }
    // Update existing product
    async updateProduct(product) {
        const brand = this.determineBrand(product);
        // Delete existing relations first
        await prisma_1.default.productColor.deleteMany({
            where: { productId: product.id },
        });
        await prisma_1.default.productImage.deleteMany({
            where: { productId: product.id },
        });
        // Update product with new data
        await prisma_1.default.product.update({
            where: { id: product.id },
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                currency: product.currency,
                brand: brand,
                updatedAt: new Date(),
                colors: {
                    create: product.colors.map((color) => ({
                        colorId: color.id,
                        name: color.name,
                        sizes: {
                            create: color.sizes.map((size) => ({
                                name: size.name,
                                sku: size.sku,
                                availability: size.availability,
                                price: typeof size.price === 'string'
                                    ? parseInt(size.price) || 0
                                    : size.price,
                            })),
                        },
                    })),
                },
                images: {
                    create: product.images.map((imageUrl, index) => ({
                        url: imageUrl,
                        order: index,
                    })),
                },
            },
        });
    }
    // Determine brand from product URL or other indicators
    determineBrand(product) {
        // Check if product images contain zara or pullandbear domains
        const sampleImage = product.images[0] || '';
        if (sampleImage.includes('zara.net')) {
            return 'Zara';
        }
        else if (sampleImage.includes('pullandbear.')) {
            return 'Pull&Bear';
        }
        // ID-based detection - Zara IDs are typically 9 digits, Pull&Bear IDs are typically 9-10 digits but different pattern
        const productId = product.id;
        // Zara products typically have smaller IDs
        if (parseInt(productId) < 500000000) {
            return 'Zara';
        }
        else {
            return 'Pull&Bear';
        }
    }
    // Get database statistics
    async getStats() {
        const [categories, subcategories, nestedSubcategories, products, productIds, productColors, productSizes, productImages,] = await Promise.all([
            prisma_1.default.categoryData.count(),
            prisma_1.default.subcategoryData.count(),
            prisma_1.default.nestedSubcategory.count(),
            prisma_1.default.product.count(),
            prisma_1.default.productId.count(),
            prisma_1.default.productColor.count(),
            prisma_1.default.productSize.count(),
            prisma_1.default.productImage.count(),
        ]);
        return {
            categories,
            subcategories,
            nestedSubcategories,
            products,
            productIds,
            productColors,
            productSizes,
            productImages,
        };
    }
    // Clear all data (useful for testing)
    async clearAll() {
        console.log('🗑️  Clearing all database data...');
        await prisma_1.default.productSize.deleteMany();
        await prisma_1.default.productColor.deleteMany();
        await prisma_1.default.productImage.deleteMany();
        await prisma_1.default.product.deleteMany();
        await prisma_1.default.productId.deleteMany();
        await prisma_1.default.nestedSubcategory.deleteMany();
        await prisma_1.default.subcategoryData.deleteMany();
        await prisma_1.default.categoryData.deleteMany();
        console.log('✅ All data cleared successfully!');
    }
}
exports.DatabaseService = DatabaseService;
exports.databaseService = new DatabaseService();
//# sourceMappingURL=DatabaseService.js.map