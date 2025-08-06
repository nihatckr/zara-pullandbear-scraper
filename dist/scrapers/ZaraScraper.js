"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZaraScraper = void 0;
const config_1 = require("../config");
class ZaraScraper {
    async fetchCategories() {
        console.log('🛍️ Zara kategorileri çekiliyor...');
        try {
            const response = await fetch(config_1.API_ENDPOINTS.ZARA.CATEGORIES, {
                headers: config_1.REQUEST_HEADERS.ZARA,
            });
            if (!response.ok) {
                throw new Error(`Zara API hatası: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log('✅ Zara kategorileri başarıyla çekildi');
            return {
                brand: 'Zara',
                url: config_1.API_ENDPOINTS.ZARA.CATEGORIES,
                data,
                timestamp: new Date().toISOString(),
            };
        }
        catch (error) {
            console.error('❌ Zara kategorileri çekilirken hata:', error);
            throw error;
        }
    }
    async fetchProductIds(categoryId) {
        try {
            const url = config_1.API_ENDPOINTS.ZARA.PRODUCTS(categoryId);
            const response = await fetch(url, {
                headers: config_1.REQUEST_HEADERS.ZARA,
            });
            if (!response.ok) {
                console.error(`Zara API error: ${response.status} ${response.statusText}`);
                return [];
            }
            const data = await response.json();
            const productIds = [];
            if (data.productGroups?.[0]?.elements?.[0]?.commercialComponents) {
                for (const component of data.productGroups[0].elements[0]
                    .commercialComponents) {
                    if (component.id) {
                        productIds.push(component.id.toString());
                    }
                }
            }
            return productIds;
        }
        catch (error) {
            console.error(`Zara product IDs fetch error for ${categoryId}:`, error);
            return [];
        }
    }
    async fetchProductDetail(productId) {
        try {
            const url = config_1.API_ENDPOINTS.ZARA.PRODUCT_DETAIL(productId);
            const response = await fetch(url, {
                headers: config_1.REQUEST_HEADERS.ZARA,
            });
            if (!response.ok) {
                console.error(`Zara API error: ${response.status} ${response.statusText}`);
                return null;
            }
            const data = await response.json();
            if (!data || !data['0'])
                return null;
            const product = data['0'];
            return {
                id: productId,
                name: product.name || 'N/A',
                description: product.description || product.name || 'N/A',
                price: product.detail?.colors?.[0]?.price || 0,
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
                images: product.detail?.colors?.[0]?.xmedia
                    ?.map((img) => img.url)
                    .filter(Boolean) || [],
            };
        }
        catch (error) {
            console.error(`Zara ${productId} fetch error:`, error);
            return null;
        }
    }
}
exports.ZaraScraper = ZaraScraper;
//# sourceMappingURL=ZaraScraper.js.map