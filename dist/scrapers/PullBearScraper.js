"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullBearScraper = void 0;
const config_1 = require("../config");
class PullBearScraper {
    async fetchCategories() {
        console.log('🛍️ Pull&Bear kategorileri çekiliyor...');
        try {
            const response = await fetch(config_1.API_ENDPOINTS.PULLANDBEAR.CATEGORIES, {
                headers: config_1.REQUEST_HEADERS.PULLANDBEAR,
            });
            if (!response.ok) {
                throw new Error(`Pull&Bear API hatası: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log('✅ Pull&Bear kategorileri başarıyla çekildi');
            return {
                brand: 'Pull&Bear',
                url: config_1.API_ENDPOINTS.PULLANDBEAR.CATEGORIES,
                data,
                timestamp: new Date().toISOString(),
            };
        }
        catch (error) {
            console.error('❌ Pull&Bear kategorileri çekilirken hata:', error);
            throw error;
        }
    }
    async fetchProductIds(categoryId) {
        try {
            // First get the main page to establish session
            await fetch(config_1.API_ENDPOINTS.PULLANDBEAR.MAIN_PAGE, {
                headers: {
                    'User-Agent': config_1.REQUEST_HEADERS.PULLANDBEAR['User-Agent'],
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Language': config_1.REQUEST_HEADERS.PULLANDBEAR['Accept-Language'],
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Cache-Control': 'max-age=0',
                    'Sec-Fetch-Dest': 'document',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-Site': 'none',
                    'Sec-Fetch-User': '?1',
                    'Upgrade-Insecure-Requests': '1',
                },
            });
            // Wait a bit to mimic human behavior
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const url = config_1.API_ENDPOINTS.PULLANDBEAR.PRODUCTS(categoryId);
            const response = await fetch(url, {
                headers: config_1.REQUEST_HEADERS.PULLANDBEAR,
            });
            if (!response.ok) {
                console.error(`Pull&Bear API error: ${response.status} ${response.statusText}`);
                return [];
            }
            const data = await response.json();
            const productIds = [];
            if (data.productIds && Array.isArray(data.productIds)) {
                productIds.push(...data.productIds.map((id) => id.toString()));
            }
            return productIds;
        }
        catch (error) {
            console.error(`Pull&Bear product IDs fetch error for ${categoryId}:`, error);
            return [];
        }
    }
    async fetchProductDetail(productId) {
        try {
            // First get the main page to establish session
            await fetch(config_1.API_ENDPOINTS.PULLANDBEAR.MAIN_PAGE, {
                headers: {
                    'User-Agent': config_1.REQUEST_HEADERS.PULLANDBEAR['User-Agent'],
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Language': config_1.REQUEST_HEADERS.PULLANDBEAR['Accept-Language'],
                },
            });
            // Wait a bit to mimic human behavior
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const url = config_1.API_ENDPOINTS.PULLANDBEAR.PRODUCT_DETAIL(productId);
            const response = await fetch(url, {
                headers: config_1.REQUEST_HEADERS.PULLANDBEAR,
            });
            if (!response.ok) {
                console.error(`Pull&Bear API error: ${response.status} ${response.statusText}`);
                return null;
            }
            const data = await response.json();
            if (!data?.bundleProductSummaries?.[0])
                return null;
            const product = data.bundleProductSummaries[0];
            return {
                id: productId,
                name: product.name || 'N/A',
                description: product.detail?.description || product.name || 'N/A',
                price: (() => {
                    // For Pull&Bear, get price from first size if main price is 0
                    const mainPrice = product.detail?.colors?.[0]?.price || 0;
                    if (mainPrice === 0) {
                        const firstSize = product.detail?.colors?.[0]?.sizes?.[0];
                        return typeof firstSize?.price === 'string'
                            ? parseInt(firstSize.price) || 0
                            : firstSize?.price || 0;
                    }
                    return mainPrice;
                })(),
                currency: 'TRY',
                colors: (product.detail?.colors || []).map((color) => ({
                    id: color.id || 'N/A',
                    name: color.name || 'N/A',
                    sizes: (color.sizes || []).map((size) => ({
                        name: size.name || 'N/A',
                        sku: size.sku || 0,
                        availability: size.availability || 'N/A',
                        price: size.price || color.price || 0,
                    })),
                })),
                images: (() => {
                    const xmedia = product.detail?.xmedia || [];
                    const allImages = [];
                    // Extract images from xmedia structure
                    xmedia.forEach((mediaGroup) => {
                        if (mediaGroup.xmediaItems && mediaGroup.xmediaItems.length > 0) {
                            mediaGroup.xmediaItems.forEach((item) => {
                                if (item.medias) {
                                    item.medias.forEach((media) => {
                                        if (media.url && media.format === 1) {
                                            // format 1 = images
                                            allImages.push(`https://static.pullandbear.net/${media.extraInfo?.url || media.url}`);
                                        }
                                    });
                                }
                            });
                        }
                    });
                    return allImages.slice(0, 10); // Limit to first 10 images
                })(),
            };
        }
        catch (error) {
            console.error(`Pull&Bear ${productId} fetch error:`, error);
            return null;
        }
    }
}
exports.PullBearScraper = PullBearScraper;
//# sourceMappingURL=PullBearScraper.js.map