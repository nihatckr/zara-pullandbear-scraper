"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const scrapers_1 = require("./scrapers");
const services_1 = require("./services");
const utils_1 = require("./utils");
const category_utils_1 = require("./utils/category-utils");
const config_1 = require("./config");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Initialize scrapers
const zaraScraper = new scrapers_1.ZaraScraper();
const pullBearScraper = new scrapers_1.PullBearScraper();
// Category name mappings for display
const categoryNameMapping = {
    zara: {
        2432163: 'ŞORT | BERMUDA',
        2432095: 'PANTOLON',
        2431993: 'GÖMLEK | KETEN GÖMLEK',
        2432040: 'T-SHIRT',
        2432056: 'POLO T-SHIRT',
        2432264: 'KAZAK | HIRKA',
        2432193: 'PLAJ GİYİM',
        2432231: 'SWEATSHIRT',
        2432279: 'İNCE CEKET',
        2583113: 'CEKET | KABAN',
        2420944: 'BLAZER',
        2420895: 'ELBİSE',
        2420368: 'GÖMLEK',
        2419939: 'TOP | BODY',
        2420416: 'T-SHIRT',
        2419242: 'JEAN',
        2420794: 'PANTOLON',
        2420453: 'ETEK',
        2420482: 'ŞORT | BERMUDA',
        2420505: 'YELEK',
        2420284: 'TAKIM',
        2419181: 'SWEATSHIRT | EŞOFMAN',
        2420293: 'TRİKO',
        2418953: 'PLAJ GİYİM',
    },
    pullbear: {
        1030204712: 'ŞORT',
        1030204719: 'PANTOLONLAR',
        1030204766: 'GÖMLEKLER',
        1030204791: 'TIŞÖRT',
        1030204788: 'POLOLAR',
        1030204756: 'TRIKO',
        1030204710: 'MAYO',
        1030204822: 'SWEATSHIRTLER',
        1030204837: 'CEKET',
        1030204607: 'CEKET',
        1030441307: 'BLAZER VE TAKIM',
        1030204616: 'ELBISE',
        1030204645: 'GÖMLEK VE BLUZ',
        1030207187: 'TOP VE BODY',
        1030204631: 'TIŞÖRT',
        1030204692: 'JEAN',
        1030207189: 'PANTOLONLAR',
        1030204678: 'ETEK',
        1030204685: 'ŞORT VE BERMUDA ŞORT',
        1030204660: 'SWEATSHIRTLER',
        1030204669: 'ÖRGÜ VE KROŞE',
        1030204707: 'BIKINI VE MAYO',
    },
};
// Filter target categories from API responses
async function filterTargetCategories(responses) {
    const targetCategories = [];
    for (const response of responses) {
        const pullBearTargetIds = [
            ...config_1.TARGET_CATEGORIES.MEN.PULLANDBEAR,
            ...config_1.TARGET_CATEGORIES.WOMEN.PULLANDBEAR,
        ];
        if (response.brand === 'Zara' && response.data.categories) {
            for (const category of response.data.categories) {
                targetCategories.push({
                    ...category,
                    brand: 'Zara',
                });
            }
        }
        if (response.brand === 'Pull&Bear' && response.data.categories) {
            for (const category of response.data.categories) {
                // Pull&Bear için ana kategorileri de ekle (MEN ve WOMEN)
                if (category.id === config_1.MAIN_CATEGORY_IDS.PULLANDBEAR.MEN ||
                    category.id === config_1.MAIN_CATEGORY_IDS.PULLANDBEAR.WOMEN ||
                    pullBearTargetIds.includes(category.id)) {
                    targetCategories.push({
                        ...category,
                        brand: 'Pull&Bear',
                    });
                }
            }
        }
    }
    return targetCategories;
}
// Filter target subcategories with hierarchical matching
async function filterTargetSubcategories(categories) {
    const targetSubcategories = [];
    for (const category of categories) {
        // Men categories check
        if ((category.brand === 'Zara' &&
            category.id === config_1.MAIN_CATEGORY_IDS.ZARA.MEN) ||
            (category.brand === 'Pull&Bear' &&
                category.id === config_1.MAIN_CATEGORY_IDS.PULLANDBEAR.MEN)) {
            const targetIds = category.brand === 'Zara'
                ? [...config_1.TARGET_CATEGORIES.MEN.ZARA]
                : [...config_1.TARGET_CATEGORIES.MEN.PULLANDBEAR];
            const foundSubcategories = [];
            // Pull&Bear için daha derin arama yap
            if (category.brand === 'Pull&Bear') {
                for (const subcategory of category.subcategories) {
                    if (subcategory.subcategories &&
                        Array.isArray(subcategory.subcategories)) {
                        for (const deepSubcategory of subcategory.subcategories) {
                            if (targetIds.includes(deepSubcategory.id)) {
                                const matchingId = Object.entries(config_1.CATEGORY_MAPPING.MEN).find(([, pullBearId]) => pullBearId === deepSubcategory.id)?.[0];
                                foundSubcategories.push({
                                    categoryId: deepSubcategory.id,
                                    categoryName: deepSubcategory.name || deepSubcategory.key,
                                    subcategories: deepSubcategory.subcategories
                                        ? deepSubcategory.subcategories.map((sub) => (0, category_utils_1.cleanPullBearSubcategory)(sub))
                                        : [],
                                    isLeaf: !deepSubcategory.subcategories ||
                                        deepSubcategory.subcategories.length === 0,
                                    matchingId: matchingId ? parseInt(matchingId) : undefined,
                                    matchingCategoryName: matchingId
                                        ? categoryNameMapping.pullbear[deepSubcategory.id]
                                        : undefined,
                                });
                            }
                        }
                    }
                }
            }
            else {
                // Zara için normal arama
                for (const subcategory of category.subcategories) {
                    if (targetIds.includes(subcategory.id)) {
                        const matchingId = config_1.CATEGORY_MAPPING.MEN[subcategory.id];
                        foundSubcategories.push({
                            categoryId: subcategory.id,
                            categoryName: subcategory.name || subcategory.key,
                            subcategories: subcategory.subcategories
                                ? subcategory.subcategories.map((sub) => (0, category_utils_1.cleanZaraSubcategory)(sub))
                                : [],
                            isLeaf: !subcategory.subcategories ||
                                subcategory.subcategories.length === 0,
                            matchingId: matchingId || undefined,
                            matchingCategoryName: matchingId
                                ? categoryNameMapping.zara[subcategory.id]
                                : undefined,
                        });
                    }
                }
            }
            if (foundSubcategories.length > 0) {
                targetSubcategories.push({
                    brand: category.brand,
                    gender: 'men',
                    mainCategoryId: category.id,
                    mainCategoryName: category.name,
                    subcategories: foundSubcategories,
                    timestamp: new Date().toISOString(),
                });
            }
        }
        // Women categories check
        if ((category.brand === 'Zara' &&
            category.id === config_1.MAIN_CATEGORY_IDS.ZARA.WOMEN) ||
            (category.brand === 'Pull&Bear' &&
                category.id === config_1.MAIN_CATEGORY_IDS.PULLANDBEAR.WOMEN)) {
            const targetIds = category.brand === 'Zara'
                ? [...config_1.TARGET_CATEGORIES.WOMEN.ZARA]
                : [...config_1.TARGET_CATEGORIES.WOMEN.PULLANDBEAR];
            const foundSubcategories = [];
            // Pull&Bear için daha derin arama yap
            if (category.brand === 'Pull&Bear') {
                for (const subcategory of category.subcategories) {
                    if (subcategory.subcategories &&
                        Array.isArray(subcategory.subcategories)) {
                        for (const deepSubcategory of subcategory.subcategories) {
                            if (targetIds.includes(deepSubcategory.id)) {
                                const matchingId = Object.entries(config_1.CATEGORY_MAPPING.WOMEN).find(([, pullBearId]) => pullBearId === deepSubcategory.id)?.[0];
                                foundSubcategories.push({
                                    categoryId: deepSubcategory.id,
                                    categoryName: deepSubcategory.name || deepSubcategory.key,
                                    subcategories: deepSubcategory.subcategories
                                        ? deepSubcategory.subcategories.map((sub) => (0, category_utils_1.cleanPullBearSubcategory)(sub))
                                        : [],
                                    isLeaf: !deepSubcategory.subcategories ||
                                        deepSubcategory.subcategories.length === 0,
                                    matchingId: matchingId ? parseInt(matchingId) : undefined,
                                    matchingCategoryName: matchingId
                                        ? categoryNameMapping.pullbear[deepSubcategory.id]
                                        : undefined,
                                });
                            }
                        }
                    }
                }
            }
            else {
                // Zara için normal arama
                for (const subcategory of category.subcategories) {
                    if (targetIds.includes(subcategory.id)) {
                        const matchingId = config_1.CATEGORY_MAPPING.WOMEN[subcategory.id];
                        foundSubcategories.push({
                            categoryId: subcategory.id,
                            categoryName: subcategory.name || subcategory.key,
                            subcategories: subcategory.subcategories
                                ? subcategory.subcategories.map((sub) => (0, category_utils_1.cleanZaraSubcategory)(sub))
                                : [],
                            isLeaf: !subcategory.subcategories ||
                                subcategory.subcategories.length === 0,
                            matchingId: matchingId || undefined,
                            matchingCategoryName: matchingId
                                ? categoryNameMapping.zara[subcategory.id]
                                : undefined,
                        });
                    }
                }
            }
            if (foundSubcategories.length > 0) {
                targetSubcategories.push({
                    brand: category.brand,
                    gender: 'women',
                    mainCategoryId: category.id,
                    mainCategoryName: category.name,
                    subcategories: foundSubcategories,
                    timestamp: new Date().toISOString(),
                });
            }
        }
    }
    return targetSubcategories;
}
// Collect product IDs from categories
async function collectProductIds(categories) {
    console.log('\n📦 Product ID Toplama İşlemi Başlatılıyor...');
    let totalProductIds = 0;
    let processedCategories = 0;
    for (const category of categories) {
        console.log(`\n🏷️ ${category.brand} ${category.gender} kategorisi işleniyor...`);
        let processedSubcats = 0;
        for (const subcat of category.subcategories) {
            if (processedSubcats >= 5)
                break; // Her ana kategoriden 5 alt kategori
            try {
                // Leaf kategoriler için product ID'leri çek
                if (subcat.isLeaf) {
                    const productIds = await fetchProductIds(category.brand, subcat.categoryId);
                    if (productIds && productIds.length > 0) {
                        ;
                        subcat.productIds = productIds;
                        subcat.productCount = productIds.length;
                        totalProductIds += productIds.length;
                        console.log(`  ✅ ${subcat.categoryName}: ${productIds.length} ürün`);
                        processedSubcats++;
                    }
                }
                else {
                    // Non-leaf kategoriler için de dene (Pull&Bear için)
                    const productIds = await fetchProductIds(category.brand, subcat.categoryId);
                    if (productIds && productIds.length > 0) {
                        ;
                        subcat.productIds = productIds;
                        subcat.productCount = productIds.length;
                        totalProductIds += productIds.length;
                        console.log(`  ✅ ${subcat.categoryName}: ${productIds.length} ürün (non-leaf)`);
                        processedSubcats++;
                    }
                }
                // Alt kategoriler varsa onları da işle (sınırlı sayıda)
                if (subcat.subcategories && Array.isArray(subcat.subcategories)) {
                    let deepCount = 0;
                    for (const deepSub of subcat.subcategories) {
                        if (deepCount >= 5)
                            break; // Her alt kategoriden 5 tane
                        if (deepSub.isLeaf) {
                            const productIds = await fetchProductIds(category.brand, deepSub.id);
                            if (productIds && productIds.length > 0) {
                                deepSub.productIds = productIds;
                                deepSub.productCount = productIds.length;
                                totalProductIds += productIds.length;
                                console.log(`    ✅ ${deepSub.name}: ${productIds.length} ürün`);
                                deepCount++;
                            }
                        }
                        // Rate limiting
                        await new Promise((resolve) => setTimeout(resolve, config_1.config.requestDelay));
                    }
                }
                // Rate limiting
                await new Promise((resolve) => setTimeout(resolve, config_1.config.requestDelay));
            }
            catch (error) {
                console.error(`❌ ${subcat.categoryName} product ID hatası:`, error);
            }
        }
        processedCategories++;
    }
    console.log(`\n🎉 Product ID Toplama Tamamlandı!`);
    console.log(`📊 Toplam Product ID: ${totalProductIds}`);
    return categories;
}
// Fetch product IDs by brand
async function fetchProductIds(brand, categoryId) {
    try {
        if (brand === 'Zara') {
            return await zaraScraper.fetchProductIds(categoryId);
        }
        else if (brand === 'Pull&Bear') {
            return await pullBearScraper.fetchProductIds(categoryId);
        }
        return [];
    }
    catch (error) {
        console.error(`Product ID fetch error for ${brand} ${categoryId}:`, error);
        return [];
    }
}
// Test product details for 24 products
async function testMinimalProductDetails() {
    try {
        // Önce kategori dosyasını oku
        const outputDir = path.join(process.cwd(), config_1.config.outputDirectory);
        const files = fs.readdirSync(outputDir);
        const categoryFile = files.find((f) => f.startsWith('hierarchical-subcategories-'));
        if (!categoryFile) {
            throw new Error('Kategori dosyası bulunamadı! Önce kategorileri çekin.');
        }
        const categoryData = JSON.parse(fs.readFileSync(path.join(outputDir, categoryFile), 'utf8'));
        // Her kategoriden 6 ürün ID'si topla (4 kategori × 6 = 24 ürün)
        const testProductIds = [];
        for (const category of categoryData) {
            let count = 0;
            for (const subcat of category.subcategories) {
                if (count >= 6)
                    break; // Kategori başına 6 ürün
                // Leaf kategorileri kullan
                if (subcat.isLeaf &&
                    subcat.productIds &&
                    subcat.productIds.length > 0) {
                    const productId = subcat.productIds[0]; // İlk ürün ID'sini al
                    testProductIds.push({
                        id: productId,
                        brand: category.brand,
                        categoryName: subcat.categoryName,
                    });
                    count++;
                }
                // Alt kategorilere de bak
                if (subcat.subcategories && Array.isArray(subcat.subcategories)) {
                    for (const deepSub of subcat.subcategories) {
                        if (count >= 6)
                            break;
                        if (deepSub.isLeaf &&
                            deepSub.productIds &&
                            deepSub.productIds.length > 0) {
                            const productId = deepSub.productIds[0];
                            testProductIds.push({
                                id: productId,
                                brand: category.brand,
                                categoryName: `${subcat.categoryName} > ${deepSub.name}`,
                            });
                            count++;
                        }
                    }
                }
            }
        }
        console.log(`\n🧪 ${testProductIds.length} Ürün Detay Test Başlatılıyor...`);
        const testResults = [];
        let successCount = 0;
        let errorCount = 0;
        for (const productInfo of testProductIds) {
            try {
                console.log(`🔍 ${productInfo.brand} ${productInfo.id} detay çekiliyor...`);
                const productDetail = productInfo.brand === 'Zara'
                    ? await zaraScraper.fetchProductDetail(productInfo.id)
                    : await pullBearScraper.fetchProductDetail(productInfo.id);
                if (productDetail) {
                    testResults.push(productDetail);
                    successCount++;
                    console.log(`✅ ${productDetail.name} - ${productDetail.price / 100}₺`);
                }
                else {
                    errorCount++;
                    console.log(`❌ ${productInfo.id} detay çekilemedi`);
                }
                // Rate limiting
                await new Promise((resolve) => setTimeout(resolve, 500));
            }
            catch (error) {
                errorCount++;
                console.log(`❌ ${productInfo.id} hatası: ${error}`);
            }
        }
        // Test sonuçlarını kaydet
        if (testResults.length > 0) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            await (0, utils_1.saveToJsonFile)(testResults, `product-details-minimal-v4-${timestamp}.json`);
            console.log(`\n🎉 ${config_1.config.testProductCount} Ürün Test Tamamlandı!`);
            console.log(`✅ Başarılı: ${successCount}/${testProductIds.length}`);
            console.log(`❌ Hatalı: ${errorCount}/${testProductIds.length}`);
            console.log(`📊 Başarı Oranı: %${((successCount / testProductIds.length) *
                100).toFixed(1)}`);
            // İstatistikler
            const stats = (0, utils_1.calculateProductStats)(testResults);
            console.log(`📈 İstatistikler:`);
            console.log(`   • Ortalama Renk: ${stats.averageColors}/ürün`);
            console.log(`   • Ortalama Görsel: ${stats.averageImages}/ürün`);
            console.log(`   • Ortalama Beden: ${stats.averageSizes}/ürün`);
            return testResults;
        }
        return [];
    }
    catch (error) {
        console.error('❌ Test hatası:', error);
        return [];
    }
}
// Main function
async function main() {
    console.log('🚀 Hiyerarşik Kategoriler Çekme İşlemi Başlatılıyor...');
    try {
        // Output klasörünü temizle
        await (0, utils_1.clearOutputDirectory)();
        const results = [];
        // Zara kategorilerini çek
        console.log('\n📡 Zara Categories API çağrılıyor...');
        const zaraData = await zaraScraper.fetchCategories();
        results.push(zaraData);
        // Pull&Bear kategorilerini çek
        console.log('\n📡 Pull&Bear Categories API çağrılıyor...');
        const pullBearData = await pullBearScraper.fetchCategories();
        results.push(pullBearData);
        // Hedef kategorileri filtrele
        console.log('\n🔍 Hedef kategoriler filtreleniyor...');
        const filteredCategories = await filterTargetCategories(results);
        // Hedef alt kategorileri filtrele
        console.log('\n🔍 Hedef alt kategoriler filtreleniyor...');
        const targetSubcategories = await filterTargetSubcategories(filteredCategories);
        // Product ID'leri topla
        console.log('\n📦 Product ID toplanıyor...');
        const categoriesWithProductIds = await collectProductIds(targetSubcategories);
        // Sadece hiyerarşik alt kategorileri kaydet
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await (0, utils_1.saveToJsonFile)(categoriesWithProductIds, `hierarchical-subcategories-${timestamp}.json`);
        console.log('\n✅ Hiyerarşik kategoriler başarıyla çekildi ve kaydedildi!');
        console.log('🎯 Hedef alt kategori sayısı:', categoriesWithProductIds.length);
        // Leaf kategori sayısını hesapla
        let leafCount = 0;
        categoriesWithProductIds.forEach((subcat) => {
            subcat.subcategories.forEach((sub) => {
                if (sub.isLeaf) {
                    leafCount++;
                }
                if (sub.subcategories && Array.isArray(sub.subcategories)) {
                    sub.subcategories.forEach((deepSub) => {
                        if (deepSub.isLeaf) {
                            leafCount++;
                        }
                    });
                }
            });
        });
        console.log('🌿 Leaf kategori sayısı:', leafCount);
        // Hedef alt kategorileri göster
        console.log('\n📋 Hiyerarşik Alt Kategoriler (Eşleştirmeli):');
        categoriesWithProductIds.forEach((subcat) => {
            console.log(`  • ${subcat.brand} ${subcat.gender}: ${subcat.mainCategoryName} (ID: ${subcat.mainCategoryId})`);
            subcat.subcategories.forEach((sub) => {
                const matchInfo = sub.matchingId
                    ? ` ↔️ ${sub.matchingCategoryName} (ID: ${sub.matchingId})`
                    : ' (Eşleştirme yok)';
                console.log(`    - ${sub.categoryName} (ID: ${sub.categoryId})${matchInfo}`);
            });
        });
        // Kullanıcıya soru sor: 24 ürün test etmek istiyor mu?
        console.log('\n❓ 24 ürün detay test etmek ister misiniz? (y/N)');
        const readline = await import('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const answer = await new Promise((resolve) => {
            rl.question('', (input) => {
                rl.close();
                resolve(input.toLowerCase().trim());
            });
        });
        if (answer === 'y' || answer === 'yes' || answer === 'evet') {
            console.log('\n🧪 24 Ürün Detay Test Başlatılıyor...');
            const products = await testMinimalProductDetails();
            // Database kaydetme seçeneği
            const readline2 = require('readline');
            const rl2 = readline2.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            console.log('\n💾 Bu verileri veritabanına kaydetmek ister misiniz? (y/n):');
            const dbAnswer = await new Promise((resolve) => {
                rl2.question('', (input) => {
                    rl2.close();
                    resolve(input.toLowerCase().trim());
                });
            });
            if (dbAnswer === 'y' || dbAnswer === 'yes' || dbAnswer === 'evet') {
                console.log('\n🗄️  Veritabanına kaydetme işlemi başlatılıyor...');
                // Kategori verilerini kaydet
                console.log('\n📂 Kategori verilerini kaydediyor...');
                await services_1.databaseService.saveCategoryData(categoriesWithProductIds);
                // Ürün verilerini kaydet
                if (products && products.length > 0) {
                    console.log('\n🛍️  Ürün verilerini kaydediyor...');
                    await services_1.databaseService.saveProducts(products);
                }
                // İstatistikleri göster
                const stats = await services_1.databaseService.getStats();
                console.log('\n📊 Veritabanı İstatistikleri:');
                console.log(`   Categories: ${stats.categories}`);
                console.log(`   Subcategories: ${stats.subcategories}`);
                console.log(`   Products: ${stats.products}`);
                console.log(`   Product IDs: ${stats.productIds}`);
                console.log('\n✅ Tüm veriler başarıyla veritabanına kaydedildi!');
            }
            else {
                console.log('\n⏭️ Veritabanına kaydetme atlandı');
            }
        }
        else {
            console.log('\n⏭️ 24 ürün test atlandı');
        }
    }
    catch (error) {
        console.error('\n❌ Ana işlem hatası:', error);
        throw error;
    }
}
main()
    .then(() => {
    console.log('\n✅ İşlem başarıyla tamamlandı');
    process.exit(0);
})
    .catch((error) => {
    console.error('\n💥 Kritik hata:', error);
    process.exit(1);
});
//# sourceMappingURL=main-modular.js.map