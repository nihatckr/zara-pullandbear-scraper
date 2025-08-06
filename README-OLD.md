# Zara & Pull&Bear Product Scraper v4.1 🛍️

## 📋 Proje Hakkında

Bu proje, **Zara** ve **Pull&Bear** e-ticaret sitelerinden ürün bilgilerini otomatik olarak toplayan, normalize eden ve **Prisma ORM** ile veritabanına kaydeden profesyonel bir web scraping sistemidir.

## 🎯 Özellikler

### ✅ **Kategori Sistemi (v2.0)**
- Hiyerarşik kategori yapısını çeker
- Zara ve Pull&Bear kategorilerini eşleştirir
- **37,230+ unique ürün ID'si** toplar
- Otomatik kategori filtreleme

### ✅ **Ürün Detay Sistemi (v4.1)**
- Minimal 6-field yapı: `id`, `name`, `description`, `price`, `currency`, `colors`, `images`
- Her iki marka için unified API
- **Prisma ORM** ile MySQL veritabanı entegrasyonu
- **%100 başarı oranı** test edildi

### ✅ **Production Ready**
- Profesyonel modüler yapı
- Database persistence
- Error handling ve logging
- TypeScript type safety

## � Proje Yapısı

## 📁 Proje Yapısı

```
zara-pullandbear-scraper/
├── 📄 README.md                           # Ana dokümantasyon
├── 📄 package.json                        # Node.js bağımlılıkları
├── 📄 tsconfig.json                       # TypeScript konfigürasyonu
├── 📁 src/                                # Ana kaynak kod
│   ├── 📄 main-modular.ts                 # Modüler ana giriş noktası
│   ├── 📄 main.ts                         # Legacy ana dosya
│   ├── 📄 prisma.ts                       # Database bağlantısı
│   ├── 📁 config/                         # Konfigürasyon
│   │   └── 📄 index.ts                    # Merkezi yapılandırma
│   ├── 📁 scrapers/                       # Scraper sınıfları
│   │   ├── 📄 index.ts                    # Scraper exports
│   │   ├── 📄 ZaraScraper.ts              # Zara API implementasyonu
│   │   └── 📄 PullBearScraper.ts          # Pull&Bear API implementasyonu
│   ├── 📁 services/                       # İş mantığı servisleri
│   │   ├── 📄 index.ts                    # Service exports
│   │   └── 📄 DatabaseService.ts          # Database CRUD operations
│   ├── 📁 types/                          # TypeScript tipleri
│   │   └── 📄 index.ts                    # Type definitions
│   └── 📁 utils/                          # Yardımcı fonksiyonlar
│       ├── 📄 index.ts                    # Utility exports
│       ├── 📄 category-utils.ts           # Kategori işlemleri
│       └── 📄 file-utils.ts               # Dosya işlemleri
├── 📁 prisma/                             # Prisma ORM
│   └── 📄 schema.prisma                   # Database şeması
├── 📁 output/                             # Çıktı dosyaları
│   ├── 📄 hierarchical-subcategories-*.json     # 37,230+ ürün ID'si
│   └── 📄 product-details-minimal-v4-*.json     # Test edilmiş ürün detayları
└── 📄 .env                                # Environment variables
```

## 🚀 Hızlı Başlangıç

### 1. Kurulum

```bash
# Projeyi klonla
git clone https://github.com/nihatckr/zara-pullandbear-scraper
cd zara-pullandbear-scraper

# Bağımlılıkları yükle
npm install
```

### 2. Scraping İşlemini Başlat

```bash
# Modüler sistem ile scraping (önerilen)
npm run scrape:modular

# Legacy sistem ile scraping
npm run scrape
```

Bu komut sırasıyla şunları yapar:
1. **Kategori + Product ID çekme** (v2.0)
2. **24 ürün detay testi** (v4.1) 
3. **Database kaydetme** (Prisma ORM ile MySQL)

## 📊 Veri Yapıları

### 🔷 Kategori Verisi (v2.0)
```typescript
interface CategoryData {
  brand: string              // "Zara" | "Pull&Bear"
  gender: string             // "women" | "men"
  mainCategoryId: number     // Ana kategori ID'si
  mainCategoryName: string   // Ana kategori adı
  subcategories: Array<{
    categoryId: number       // Alt kategori ID'si
    categoryName: string     // Alt kategori adı
    productIds: string[]     // Bu kategorideki ürün ID'leri
    productCount: number     // Ürün sayısı
    isLeaf: boolean         // Yaprak kategori mi?
  }>
}
```

### 🔶 Minimal Ürün Verisi (v4.0)
```typescript
interface MinimalProduct {
  id: string                 // Ürün ID
  name: string              // Ürün adı
  description: string       // Ürün açıklaması
  price: number            // Fiyat
  currency: string         // Para birimi
  colors: Array<{          // Renk seçenekleri
    id: string
    name: string
    sizes: Array<{         // Beden seçenekleri
      name: string
      sku: number
      availability: string
      price: number
    }>
  }>
  images: string[]          // Ürün görselleri
}
```
## 🔗 API Endpoint'leri

### **Zara API'ları**
- **Kategoriler:** `https://www.zara.com/tr/tr/categories?ajax=true`
- **Ürün ID'leri:** `https://www.zara.com/tr/tr/category/{categoryId}/products?ajax=true`
- **Ürün Detayları:** `https://www.zara.com/tr/tr/products-details?productIds={productId}&ajax=true`

### **Pull&Bear API'ları**
- **Kategoriler:** `https://www.pullandbear.com/itxrest/2/catalog/store/25009621/30359503/category?languageId=-17&appId=1`
- **Ürün ID'leri:** `https://www.pullandbear.com/itxrest/2/catalog/store/25009621/30359503/category/{categoryId}/product?languageId=-17&appId=1`
- **Ürün Detayları:** `https://www.pullandbear.com/itxrest/2/catalog/store/25009621/30359503/category/0/product/{productId}/detail?languageId=-17&appId=1`

## 📈 İstatistikler

### **Kategori Sistemi (v2.0)**
- ✅ **Toplam Ürün:** 37,230+ unique
- ✅ **Zara:** ~25,000+ ürün
- ✅ **Pull&Bear:** ~12,000+ ürün
- ✅ **Kategoriler:** 139 leaf kategori
- ✅ **Başarı Oranı:** %100

### **Ürün Detay Sistemi (v4.1)**
- ✅ **Test Edilen:** 18 ürün (Zara: 6, Pull&Bear: 12)
- ✅ **Başarı Oranı:** %100 (18/18)
- ✅ **Ortalama Renk:** 1.7/ürün
- ✅ **Ortalama Görsel:** 9.3/ürün
- ✅ **Ortalama Beden:** 18.6/ürün

### **Database Entegrasyonu (v4.1)**
- ✅ **Prisma ORM:** MySQL provider
- ✅ **Kategoriler:** 29 saved
- ✅ **Alt kategoriler:** 364 saved
- ✅ **Product ID'ler:** 42,390 saved
- ✅ **Test ürünleri:** 29 saved

## ⚙️ Konfigürasyon

### **Production Scraper Ayarları**
```typescript
const PRODUCTION_CONFIG = {
  maxConcurrency: 5,           // Eşzamanlı istek sayısı
  rateLimitDelay: 1000,        // İstekler arası gecikme (ms)
  batchSize: 50,              // Batch başına ürün sayısı
  retryAttempts: 3,           // Yeniden deneme sayısı
  retryDelay: 2000,           // Yeniden deneme gecikmesi (ms)
  saveInterval: 5 * 60 * 1000, // Otomatik kaydetme sıklığı (5dk)
}
```

## 🛠 Geliştirme

### **Bağımlılıklar**
- **Node.js** >= 16.0.0
- **TypeScript** >= 4.5.0
- **@types/node** (dev dependency)

### **Script Komutları**
```bash
# Ana scraping komutu (modüler sistem - önerilen)
npm run scrape:modular

# Legacy scraping komutu
npm run scrape

# TypeScript derleme kontrolü
npm run build

# Çıktı dosyalarını temizle
npm run clean

# Database generate (Prisma)
npm run db:generate

# Database push (Prisma)
npm run db:push
```

## 🔄 Versiyon Geçmişi

### **v4.1 - Professional Modular Architecture + Database Integration (Mevcut)**
- ✅ Profesyonel modüler yapı (config/, scrapers/, services/, types/, utils/)
- ✅ Prisma ORM ile MySQL database entegrasyonu
- ✅ 8 kapsamlı database modeli
- ✅ %100 test başarı oranı (18/18 ürün)
- ✅ 37,230+ product ID toplama
- ✅ Temiz kod yapısı ve TypeScript type safety

### **v4.0 - Minimal Product Details**
- ✅ Unified 6-field product structure
- ✅ Single-file architecture (src/main.ts)
- ✅ Interactive pipeline: Category → Test → Production
- ✅ %100 test success rate

### **v3.0 - Enhanced Product Details**
- ✅ Comprehensive product data extraction
- ✅ 100+ field detailed structure
- ✅ API discovery ve normalization

### **v2.0 - Category + Product IDs**
- ✅ Hierarchical category mapping
- ✅ Product ID extraction (16,071+ products)
- ✅ Brand cross-referencing

### **v1.0 - Basic Category Scraping**
- ✅ Basic category structure
- ✅ Initial API discovery

## 📖 API Response Örnekleri

### **Zara Product Detail Response**
```json
{
  "0": {
    "id": 480773496,
    "name": "KRUVAZE KISA CEKET",
    "detail": {
      "colors": [{
        "id": "401",
        "name": "LACİVERT",
        "price": 279900,
        "sizes": [{"name": "XS", "sku": 480773499}]
      }]
    }
  }
}
```

### **Pull&Bear Product Detail Response**
```json
{
  "bundleProductSummaries": [{
    "id": 698625044,
    "name": "Uzun süper bol tulum",
    "detail": {
      "colors": [{
        "id": "800",
        "name": "SIYAH",
        "price": 179900
      }]
    }
  }]
}
```

## 🎯 Kullanım Alanları

- **E-ticaret Analizi:** Fiyat karşılaştırma ve trend analizi
- **Market Research:** Ürün kategorileri ve fiyatlandırma stratejileri
- **Stok Takibi:** Ürün mevcudiyeti ve beden analizi
- **Fiyat Monitoring:** Otomatik fiyat değişikliği takibi

## 📝 Lisans

ISC License

## 👨‍💻 Geliştirici

Bu proje açık kaynak olarak geliştirilmiştir ve topluluk katkılarına açıktır.

---

**🚀 v4.1 ile profesyonel modüler yapı, database entegrasyonu ve %100 başarı oranı!**

## 🗄️ Database Şeması (Prisma)

```prisma
model Brand {
  id          Int       @id @default(autoincrement())
  name        String    @unique
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  categories  Category[]
  products    Product[]
}

model Category {
  id             Int            @id @default(autoincrement())
  externalId     String
  name           String
  gender         String
  brand          Brand          @relation(fields: [brandId], references: [id])
  brandId        Int
  subcategories  Subcategory[]
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
}

model Product {
  id          Int       @id @default(autoincrement())
  externalId  String    @unique
  name        String
  description String?   @db.Text
  price       Float
  currency    String
  brand       Brand     @relation(fields: [brandId], references: [id])
  brandId     Int
  colors      Color[]
  images      Image[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

## � Kurulum ve Çalıştırma

```bash
# Repoyu klonla
git clone https://github.com/nihatckr/zara-pullandbear-scraper.git
cd zara-pullandbear-scraper

# Bağımlılıkları yükle
npm install

# v1.0 - Kategori verileri
npx tsx src/main.ts

# v2.0 - Product ID entegrasyonu ✅
npx tsx test-v2.ts
```

## 📁 Dosya Yapısı

```
├── src/
│   └── main.ts           # v1.0 Ana scraper
├── test-v2.ts           # v2.0 Product ID scraper ✅
├── output/
│   ├── hierarchical-subcategories-{timestamp}.json  # v1.0 data
│   └── hierarchical-subcategories-v2-{timestamp}.json # v2.0 data ✅
├── package.json
├── tsconfig.json
└── README.md
```

## 📈 v2.0 İstatistikleri (Tamamlandı ✅)

- **Brands**: 2 (Zara, Pull&Bear)
- **Genders**: 2 (Women, Men)
- **Categories**: 49 ana kategori
- **Leaf Categories**: 202 (product ID'li) ✅
- **Total Products**: 16,071 ✅
- **File Size**: v1.0: 44KB → v2.0: 491KB ✅
- **API Calls**: 202 successful calls ✅

## � Teknik Detaylar

- **Runtime**: Node.js + tsx
- **Dil**: TypeScript
- **API Calls**: Fetch API
- **Rate Limiting**: 500ms delay between calls ✅
- **Error Handling**: Try-catch with graceful fallbacks ✅
- **Data Enhancement**: productIds + productCount fields ✅

## 🌿 Leaf Kategori Sistemi

**isLeaf boolean değeri** ile her kategorinin leaf (son seviye) olup olmadığı belirlenir:
- `isLeaf: true` → Son seviye kategori (subcategories boş) + Product ID'leri çekilir ✅
- `isLeaf: false` → Ara seviye kategori (subcategories dolu)

## 🔄 Kategori Eşleştirme

v1.0'da **49 kategori çifti** başarıyla eşleştirildi:
- **Kadın kategorileri**: 15 adet
- **Erkek kategorileri**: 11 adet  
- **Pull&Bear kadın**: 13 adet
- **Pull&Bear erkek**: 10 adet

## 🎉 v2.0 Başarı Özetı

✅ **Hedef**: Leaf kategorilerden product ID'lerini çekme  
✅ **Sonuç**: 202 leaf kategori için 16,071 product ID çekildi  
✅ **Performance**: API rate limiting ile sorunsuz çekme  
✅ **Data Quality**: Her leaf kategori için productCount + productIds  
✅ **Version Control**: Git tag v2.0 ile kayıt altına alındı  

## 📊 Versiyon Karşılaştırması

| Özellik | v1.0 | v2.0 |
|---------|------|------|
| Categories | ✅ 49 | ✅ 49 |
| Leaf Detection | ✅ isLeaf boolean | ✅ isLeaf boolean |
| Product IDs | ❌ Yok | ✅ 16,071 adet |
| Product Count | ❌ Yok | ✅ Her kategoride |
| File Size | 44KB | 491KB |
| API Integration | 2 endpoint | 4 endpoint |
| Data Richness | Basic | Enhanced ✅ |

---

**Not**: Bu proje, competitive intelligence ve veri analizi amacıyla geliştirilmiştir. API kullanım koşullarına uygun şekilde kullanılmalıdır.
