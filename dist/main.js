"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const services_1 = require("./services");
// Kategori temizleme fonksiyonları
function cleanZaraSubcategory(subcategory) {
    const cleaned = {
        id: subcategory.id,
        name: subcategory.name,
        sectionName: subcategory.sectionName,
        isLeaf: !subcategory.subcategories || subcategory.subcategories.length === 0,
    };
    // Subcategories varsa onları da temizle
    if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
        cleaned.subcategories = subcategory.subcategories.map((sub) => cleanZaraSubcategory(sub));
    }
    return cleaned;
}
function cleanPullBearSubcategory(subcategory) {
    const cleaned = {
        id: subcategory.id,
        name: subcategory.name,
        isLeaf: !subcategory.subcategories || subcategory.subcategories.length === 0,
    };
    // Subcategories varsa onları da temizle
    if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
        cleaned.subcategories = subcategory.subcategories.map((sub) => cleanPullBearSubcategory(sub));
    }
    return cleaned;
}
// API çağırma fonksiyonları
async function fetchZaraCategories() {
    console.log('🛍️ Zara kategorileri çekiliyor...');
    try {
        const response = await fetch('https://www.zara.com/tr/tr/categories?ajax=true', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'application/json, text/plain, */*',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                Referer: 'https://www.zara.com/tr/',
                'X-Requested-With': 'XMLHttpRequest',
            },
        });
        if (!response.ok) {
            throw new Error(`Zara API hatası: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('✅ Zara kategorileri başarıyla çekildi');
        return data;
    }
    catch (error) {
        console.error('❌ Zara kategorileri çekilirken hata:', error);
        throw error;
    }
}
async function fetchPullAndBearCategories() {
    console.log('🛍️ Pull&Bear kategorileri çekiliyor...');
    try {
        const response = await fetch('https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'application/json, text/plain, */*',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                Referer: 'https://www.pullandbear.com/tr/',
                Origin: 'https://www.pullandbear.com',
            },
        });
        if (!response.ok) {
            throw new Error(`Pull&Bear API hatası: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('✅ Pull&Bear kategorileri başarıyla çekildi');
        return data;
    }
    catch (error) {
        console.error('❌ Pull&Bear kategorileri çekilirken hata:', error);
        throw error;
    }
}
// ID eşleştirme haritası
const categoryMapping = {
    women: {
        2583113: 1030204607, // CEKET | KABAN -> CEKET
        2420944: 1030441307, // BLAZER -> BLAZER VE TAKIM
        2420895: 1030204616, // ELBİSE -> ELBISE
        2420368: 1030204645, // GÖMLEK -> GÖMLEK VE BLUZ
        2419939: 1030207187, // TOP | BODY -> TOP VE BODY
        2420416: 1030204631, // T-SHIRT -> TIŞÖRT
        2419242: 1030204692, // JEAN -> JEAN
        2420794: 1030207189, // PANTOLON -> PANTOLONLAR
        2420453: 1030204678, // ETEK -> ETEK
        2420482: 1030204685, // ŞORT | BERMUDA -> ŞORT VE BERMUDA ŞORT
        2420505: 1030441307, // YELEK -> BLAZER VE TAKIM
        2420284: 1030441307, // TAKIM -> BLAZER VE TAKIM
        2419181: 1030204660, // SWEATSHIRT | EŞOFMAN -> SWEATSHIRTLER
        2420293: 1030204669, // TRİKO -> ÖRGÜ VE KROŞE
        2418953: 1030204707, // PLAJ GİYİM -> BIKINI VE MAYO
    },
    men: {
        2432163: 1030204712, // ŞORT | BERMUDA -> ŞORT
        2432095: 1030204719, // PANTOLON -> PANTOLONLAR
        2431993: 1030204766, // GÖMLEK | KETEN GÖMLEK -> GÖMLEKLER
        2432040: 1030204791, // T-SHIRT -> TIŞÖRT
        2432056: 1030204788, // POLO T-SHIRT -> POLOLAR
        2432264: 1030204756, // KAZAK | HIRKA -> TRIKO
        2432193: 1030204710, // PLAJ GİYİM -> MAYO
        2432231: 1030204822, // SWEATSHIRT -> SWEATSHIRTLER
        2432279: 1030204837, // İNCE CEKET -> CEKET
        2537410: 1030204837, // MONT | YELEK -> CEKET
        2432130: 1030204730, // JEAN -> JEAN
    },
};
// Kategori ismi eşleştirme haritası
const categoryNameMapping = {
    // Zara'dan Pull&Bear'a
    zara: {
        2583113: 'CEKET',
        2420944: 'BLAZER VE TAKIM',
        2420895: 'ELBISE',
        2420368: 'GÖMLEK VE BLUZ',
        2419939: 'TOP VE BODY',
        2420416: 'TIŞÖRT',
        2419242: 'JEAN',
        2420794: 'PANTOLONLAR',
        2420453: 'ETEK',
        2420482: 'ŞORT VE BERMUDA ŞORT',
        2420505: 'BLAZER VE TAKIM',
        2420284: 'BLAZER VE TAKIM',
        2419181: 'SWEATSHIRTLER',
        2420293: 'ÖRGÜ VE KROŞE',
        2418953: 'BIKINI VE MAYO',
        2432163: 'ŞORT',
        2432095: 'PANTOLONLAR',
        2431993: 'GÖMLEKLER',
        2432040: 'TIŞÖRT',
        2432056: 'POLOLAR',
        2432264: 'TRIKO',
        2432193: 'MAYO',
        2432231: 'SWEATSHIRTLER',
        2432279: 'CEKET',
        2537410: 'CEKET',
        2432130: 'JEAN',
    },
    // Pull&Bear'dan Zara'ya
    pullbear: {
        1030204607: 'CEKET | KABAN',
        1030441307: 'BLAZER',
        1030204616: 'ELBİSE',
        1030204645: 'GÖMLEK',
        1030207187: 'TOP | BODY',
        1030204631: 'T-SHIRT',
        1030204692: 'JEAN',
        1030207189: 'PANTOLON',
        1030204678: 'ETEK',
        1030204685: 'ŞORT | BERMUDA',
        1030204660: 'SWEATSHIRT | EŞOFMAN',
        1030204669: 'TRİKO',
        1030204707: 'PLAJ GİYİM',
        1030204712: 'ŞORT | BERMUDA',
        1030204719: 'PANTOLON',
        1030204766: 'GÖMLEK | KETEN GÖMLEK',
        1030204791: 'T-SHIRT',
        1030204788: 'POLO T-SHIRT',
        1030204756: 'KAZAK | HIRKA',
        1030204710: 'PLAJ GİYİM',
        1030204822: 'SWEATSHIRT',
        1030204837: 'İNCE CEKET',
        1030204730: 'JEAN',
    },
};
async function filterTargetSubcategories(filteredCategories) {
    const targetSubcategories = [];
    // Erkek hedef alt kategori ID'leri
    const menTargetIds = {
        zara: [
            2432163, 2432095, 2431993, 2432040, 2432056, 2432264, 2432193, 2432231,
            2432279, 2537410, 2432130,
        ],
        pullBear: [
            1030204712, 1030204719, 1030204766, 1030204791, 1030204788, 1030204756,
            1030204710, 1030204822, 1030204837, 1030204730,
        ],
    };
    // Kadın hedef alt kategori ID'leri
    const womenTargetIds = {
        zara: [
            2583113, 2420944, 2420895, 2420368, 2419939, 2420416, 2419242, 2420794,
            2420453, 2420482, 2420505, 2420284, 2419181, 2420293, 2418953,
        ],
        pullBear: [
            1030204607, 1030441307, 1030204616, 1030204645, 1030207187, 1030204631,
            1030204692, 1030207189, 1030204678, 1030204685, 1030441307, 1030441307,
            1030204660, 1030204669, 1030204707,
        ],
    };
    for (const category of filteredCategories) {
        if (category.subcategories && Array.isArray(category.subcategories)) {
            // Erkek kategorilerini kontrol et
            if ((category.brand === 'Zara' && category.id === 1885841) ||
                (category.brand === 'Pull&Bear' && category.id === 1030616396)) {
                const targetIds = category.brand === 'Zara' ? menTargetIds.zara : menTargetIds.pullBear;
                const foundSubcategories = [];
                // Pull&Bear için daha derin arama yap
                if (category.brand === 'Pull&Bear') {
                    for (const subcategory of category.subcategories) {
                        if (subcategory.subcategories &&
                            Array.isArray(subcategory.subcategories)) {
                            for (const deepSubcategory of subcategory.subcategories) {
                                if (targetIds.includes(deepSubcategory.id)) {
                                    const matchingId = Object.entries(categoryMapping.men).find(([, pullBearId]) => pullBearId === deepSubcategory.id)?.[0];
                                    foundSubcategories.push({
                                        categoryId: deepSubcategory.id,
                                        categoryName: deepSubcategory.name || deepSubcategory.key,
                                        subcategories: deepSubcategory.subcategories
                                            ? deepSubcategory.subcategories.map((sub) => cleanPullBearSubcategory(sub))
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
                            const matchingId = categoryMapping.men[subcategory.id];
                            foundSubcategories.push({
                                categoryId: subcategory.id,
                                categoryName: subcategory.name || subcategory.key,
                                subcategories: subcategory.subcategories
                                    ? subcategory.subcategories.map((sub) => cleanZaraSubcategory(sub))
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
            // Kadın kategorilerini kontrol et
            if ((category.brand === 'Zara' && category.id === 1881757) ||
                (category.brand === 'Pull&Bear' && category.id === 1030616387)) {
                const targetIds = category.brand === 'Zara'
                    ? womenTargetIds.zara
                    : womenTargetIds.pullBear;
                const foundSubcategories = [];
                // Pull&Bear için daha derin arama yap
                if (category.brand === 'Pull&Bear') {
                    for (const subcategory of category.subcategories) {
                        if (subcategory.subcategories &&
                            Array.isArray(subcategory.subcategories)) {
                            for (const deepSubcategory of subcategory.subcategories) {
                                if (targetIds.includes(deepSubcategory.id)) {
                                    const matchingId = Object.entries(categoryMapping.women).find(([, pullBearId]) => pullBearId === deepSubcategory.id)?.[0];
                                    foundSubcategories.push({
                                        categoryId: deepSubcategory.id,
                                        categoryName: deepSubcategory.name || deepSubcategory.key,
                                        subcategories: deepSubcategory.subcategories
                                            ? deepSubcategory.subcategories.map((sub) => cleanPullBearSubcategory(sub))
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
                            const matchingId = categoryMapping.women[subcategory.id];
                            foundSubcategories.push({
                                categoryId: subcategory.id,
                                categoryName: subcategory.name || subcategory.key,
                                subcategories: subcategory.subcategories
                                    ? subcategory.subcategories.map((sub) => cleanZaraSubcategory(sub))
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
    }
    return targetSubcategories;
}
async function filterTargetCategories(data) {
    const targetCategories = [];
    // Zara hedef kategori ID'leri
    const zaraTargetIds = [1881757, 1885841]; // Kadın, Erkek
    // Pull&Bear hedef kategori ID'leri
    const pullBearTargetIds = [1030616387, 1030616396]; // Kadın, Erkek
    for (const response of data) {
        if (response.brand === 'Zara' && response.data.categories) {
            for (const category of response.data.categories) {
                if (zaraTargetIds.includes(category.id)) {
                    targetCategories.push({
                        ...category,
                        brand: 'Zara',
                    });
                }
            }
        }
        if (response.brand === 'Pull&Bear' && response.data.categories) {
            for (const category of response.data.categories) {
                if (pullBearTargetIds.includes(category.id)) {
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
// Product ID'leri çekme fonksiyonu (hızlı test için sınırlı)
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
                        await new Promise((resolve) => setTimeout(resolve, 300));
                    }
                }
                // Rate limiting
                await new Promise((resolve) => setTimeout(resolve, 300));
            }
            catch (error) {
                console.error(`❌ ${subcat.categoryName} product ID hatası:`, error);
            }
        }
        processedCategories++;
        // Tüm kategorileri işle - sınır kaldırıldı
    }
    console.log(`\n🎉 Product ID Toplama Tamamlandı!`);
    console.log(`📊 Toplam Product ID: ${totalProductIds}`);
    return categories;
}
// Marka bazında product ID çekme
async function fetchProductIds(brand, categoryId) {
    try {
        if (brand === 'Zara') {
            return await fetchZaraProductIds(categoryId);
        }
        else if (brand === 'Pull&Bear') {
            return await fetchPullBearProductIds(categoryId);
        }
        return [];
    }
    catch (error) {
        console.error(`Product ID fetch error for ${brand} ${categoryId}:`, error);
        return [];
    }
}
// Zara product ID'leri çekme
async function fetchZaraProductIds(categoryId) {
    try {
        const url = `https://www.zara.com/tr/tr/category/${categoryId}/products?ajax=true`;
        const response = await fetch(url);
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
// Pull&Bear product ID'leri çekme
async function fetchPullBearProductIds(categoryId) {
    try {
        const url = `https://www.pullandbear.com/itxrest/3/catalog/store/25009521/20309457/category/${categoryId}/product?languageId=-43&showProducts=false&priceFilter=true&appId=1`;
        // First get the main page to establish session
        await fetch('https://www.pullandbear.com/tr/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
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
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'application/json, text/plain, */*',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                Referer: 'https://www.pullandbear.com/',
                Origin: 'https://www.pullandbear.com',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'X-Requested-With': 'XMLHttpRequest',
            },
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
async function clearOutputDirectory() {
    const outputDir = path_1.default.join(process.cwd(), 'output');
    try {
        if (fs_1.default.existsSync(outputDir)) {
            // Klasördeki tüm dosyaları listele
            const files = fs_1.default.readdirSync(outputDir);
            // Her dosyayı sil
            for (const file of files) {
                const filePath = path_1.default.join(outputDir, file);
                fs_1.default.unlinkSync(filePath);
                console.log(`🗑️ Silindi: ${file}`);
            }
            console.log('📁 Output klasörü temizlendi');
        }
    }
    catch (error) {
        console.error('❌ Output klasörü temizlenirken hata:', error);
    }
}
async function saveToJson(data, filename) {
    const outputDir = path_1.default.join(process.cwd(), 'output');
    // Output klasörü yoksa oluştur
    if (!fs_1.default.existsSync(outputDir)) {
        fs_1.default.mkdirSync(outputDir, { recursive: true });
    }
    const filePath = path_1.default.join(outputDir, filename);
    try {
        fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`📄 Veriler ${filePath} dosyasına kaydedildi`);
    }
    catch (error) {
        console.error('❌ Dosya kaydetme hatası:', error);
        throw error;
    }
}
// Test için 24 ürün seçme ve detaylarını çekme
async function testMinimalProductDetails() {
    try {
        // Önce kategori dosyasını oku
        const outputDir = path_1.default.join(process.cwd(), 'output');
        const files = fs_1.default.readdirSync(outputDir);
        const categoryFile = files.find((f) => f.startsWith('hierarchical-subcategories-'));
        if (!categoryFile) {
            throw new Error('Kategori dosyası bulunamadı! Önce kategorileri çekin.');
        }
        const categoryData = JSON.parse(fs_1.default.readFileSync(path_1.default.join(outputDir, categoryFile), 'utf8'));
        // Her kategoriden 6 ürün ID'si topla (4 kategori × 6 = 24 ürün)
        const testProductIds = [];
        for (const category of categoryData) {
            let count = 0;
            for (const subcat of category.subcategories) {
                if (count >= 6)
                    break; // Kategori başına 6 ürün
                // Leaf kategorileri kullan - bunlarda productIds olabilir
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
        console.log(`📦 Test için ${testProductIds.length} ürün ID'si toplandı`);
        if (testProductIds.length === 0) {
            console.log('⚠️ Test için ürün ID bulunamadı. Product ID collection gerekli.');
            return [];
        }
        // Ürün detaylarını çek
        const testResults = [];
        let successCount = 0;
        let errorCount = 0;
        for (const productInfo of testProductIds) {
            try {
                console.log(`🔍 ${productInfo.brand} - ${productInfo.id} çekiliyor...`);
                let productDetail = null;
                if (productInfo.brand === 'Zara') {
                    productDetail = await fetchZaraProductDetail(productInfo.id);
                }
                else if (productInfo.brand === 'Pull&Bear') {
                    productDetail = await fetchPullBearProductDetail(productInfo.id);
                }
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
            await saveToJson(testResults, `product-details-minimal-v4-${timestamp}.json`);
            console.log(`\n🎉 24 Ürün Test Tamamlandı!`);
            console.log(`✅ Başarılı: ${successCount}/${testProductIds.length}`);
            console.log(`❌ Hatalı: ${errorCount}/${testProductIds.length}`);
            console.log(`📊 Başarı Oranı: %${((successCount / testProductIds.length) *
                100).toFixed(1)}`);
            // İstatistikler
            const avgColors = testResults.reduce((sum, p) => sum + p.colors.length, 0) /
                testResults.length;
            const avgImages = testResults.reduce((sum, p) => sum + p.images.length, 0) /
                testResults.length;
            const avgSizes = testResults.reduce((sum, p) => sum + p.colors.reduce((s, c) => s + c.sizes.length, 0), 0) / testResults.length;
            console.log(`📈 İstatistikler:`);
            console.log(`   • Ortalama Renk: ${avgColors.toFixed(1)}/ürün`);
            console.log(`   • Ortalama Görsel: ${avgImages.toFixed(1)}/ürün`);
            console.log(`   • Ortalama Beden: ${avgSizes.toFixed(1)}/ürün`);
            return testResults;
        }
        return [];
    }
    catch (error) {
        console.error('❌ Test hatası:', error);
        return [];
    }
}
// Zara ürün detay çekme
async function fetchZaraProductDetail(productId) {
    try {
        const url = `https://www.zara.com/tr/tr/products-details?productIds=${productId}&ajax=true`;
        const response = await fetch(url);
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
// Pull&Bear ürün detay çekme
async function fetchPullBearProductDetail(productId) {
    try {
        // First get the main page to establish session
        await fetch('https://www.pullandbear.com/tr/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
            },
        });
        // Wait a bit to mimic human behavior
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const url = `https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category/0/product/${productId}/detail?languageId=-43&appId=1`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'application/json, text/plain, */*',
                'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                Referer: 'https://www.pullandbear.com/',
                Origin: 'https://www.pullandbear.com',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'X-Requested-With': 'XMLHttpRequest',
            },
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
async function main() {
    console.log('🚀 Hiyerarşik Kategoriler Çekme İşlemi Başlatılıyor...');
    try {
        // Output klasörünü temizle
        await clearOutputDirectory();
        const results = [];
        // Zara kategorilerini çek
        console.log('\n📡 Zara Categories API çağrılıyor...');
        const zaraData = await fetchZaraCategories();
        results.push({
            brand: 'Zara',
            url: 'https://www.zara.com/tr/tr/categories?ajax=true',
            data: zaraData,
            timestamp: new Date().toISOString(),
        });
        // Pull&Bear kategorilerini çek
        console.log('\n📡 Pull&Bear Categories API çağrılıyor...');
        const pullAndBearData = await fetchPullAndBearCategories();
        results.push({
            brand: 'Pull&Bear',
            url: 'https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1',
            data: pullAndBearData,
            timestamp: new Date().toISOString(),
        });
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
        await saveToJson(categoriesWithProductIds, `hierarchical-subcategories-${timestamp}.json`);
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
            const readline = require('readline');
            const rl2 = readline.createInterface({
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
//# sourceMappingURL=main.js.map