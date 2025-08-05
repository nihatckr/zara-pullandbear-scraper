# Zara ve Pull&Bear Kategori Scraper - v1.0

## 📋 Proje Hakkında

Bu proje, Zara ve Pull&Bear e-ticaret sitelerinden kategori bilgilerini otomatik olarak toplayan, normalize eden ve hiyerarşik yapıda saklayan bir web scraping sistemidir.

## 🎯 v1.0 Özellikleri

- ✅ **Zara Categories API**: Zara'nın kadın ve erkek kategorilerini çekme
- ✅ **Pull&Bear Categories API**: Pull&Bear'ın kadın ve erkek kategorilerini çekme  
- ✅ **Kategori Filtreleme**: Belirlenen hedef kategorileri filtreleme
- ✅ **Hiyerarşik Yapı**: Ana kategori → Alt kategori → Alt-alt kategori yapısı
- ✅ **Kategori Eşleştirme**: Zara ve Pull&Bear kategorilerini ID ve isim bazında eşleştirme
- ✅ **Veri Temizleme**: Gereksiz alanları filtreleme (SEO, layout, attributes vb.)
- ✅ **isLeaf Tanımlaması**: Her kategorinin leaf (yaprak) kategori olup olmadığını belirleme
- ✅ **JSON Export**: Temiz ve yapılandırılmış JSON formatında export

## 📊 v1.0 Çıktı Yapısı

```json
{
  "brand": "Zara",
  "gender": "women", 
  "mainCategoryId": 1881757,
  "mainCategoryName": "KADIN",
  "subcategories": [
    {
      "categoryId": 2583113,
      "categoryName": "CEKET | KABAN",
      "subcategories": [],
      "isLeaf": true,
      "matchingId": 1030204607,
      "matchingCategoryName": "CEKET"
    }
  ]
}
```

## 🌿 Leaf Kategori Sistemi

**isLeaf boolean değeri** ile her kategorinin leaf (son seviye) olup olmadığı belirlenir:
- `isLeaf: true` → Son seviye kategori (subcategories boş)
- `isLeaf: false` → Ara seviye kategori (subcategories dolu)

## 🔄 Kategori Eşleştirme

v1.0'da **49 kategori çifti** başarıyla eşleştirildi:
- **Kadın kategorileri**: 15 adet
- **Erkek kategorileri**: 11 adet  
- **Pull&Bear kadın**: 13 adet
- **Pull&Bear erkek**: 10 adet

## 📈 v1.0 İstatistikleri

- **Toplam Hedef Kategoriler**: 4 (brand-gender kombinasyonları)
- **Toplam Leaf Kategoriler**: 202 adet
- **Temizlenen Gereksiz Alanlar**: 20+ alan filtrelendi
- **API Endpoint'leri**: 2 adet (Zara + Pull&Bear)

## 📚 **ÖNEMLİ: Proje Dokümantasyon Kuralları**

### 🔴 **ANA KURAL**
Bu projeyle ilgili **herhangi bir soru sorulduğunda** veya **geliştirme yapılırken**, aşağıdaki **4 temel dokümana** mutlaka referans alınmalıdır:

1. **`docs/architecture.md`** - API'ler, veri modeli, teknik mimarisi
2. **`categories.md`** - Kategori mapping'leri ve shared ID'ler  
3. **`requirements.md`** - Teknoloji stack, proje yapısı, gereksinimler
4. **`docs/help.md`** - Detaylı API dokümantasyonu ve implementation guide

### 📖 **Bu dokümanlarda şunlar bulunur:**

#### `docs/architecture.md`
- Pull&Bear ve Zara API endpoint'leri
- Response yapıları ve veri çıkarım yolları
- NormalizedProduct interface'i
- Veri akışı ve örnekler

#### `categories.md`
- Kadın ve Erkek kategorileri
- Zara, Pull&Bear kategori ID'leri
- Shared ID eşleştirmeleri

#### `requirements.md`
- TypeScript + Node.js + Prisma + MySQL tech stack
- Yalın ve modüler proje yapısı
- Basitleştirilmiş gereksinimler
- KISS prensibi ve kod kuralları

#### `docs/help.md`
- Detaylı API response formatları
- Gerçek veri örnekleri
- Implementation stratejileri
- Kategori detay tabloları

## 🚀 Hızlı Başlangıç

### 1. Kurulum
```bash
npm install
```

### 2. Database Setup
```bash
npm run db:setup
```

### 3. Environment Ayarları
```bash
cp .env.example .env
# .env dosyasını düzenle
```

### 4. Geliştirme
```bash
npm run dev
```

## 🏗 Proje Yapısı

```
zara-pullandbear-scraper/
├── src/
│   ├── types.ts              # Tüm TypeScript types
│   ├── config.ts             # Environment ve config yönetimi
│   ├── database.ts           # Prisma client ve DB operations
│   ├── scraper.ts            # Ana scraping logic
│   ├── normalizer.ts         # Veri normalizasyon
│   ├── utils.ts              # Yardımcı fonksiyonlar
│   └── main.ts               # Entry point
├── prisma/
│   └── schema.prisma
├── docs/
│   ├── architecture.md       # 📖 API ve teknik mimarisi
│   └── help.md               # 📖 Detaylı API dokümantasyonu
├── data/
│   └── categories.json
├── categories.md             # 📖 Kategori mapping'leri
├── requirements.md           # 📖 Proje gereksinimleri
├── package.json
├── tsconfig.json
└── .env.example
```

## 🎨 Tasarım Prensipleri

### ✨ Yalınlık (KISS Prensibi)
- Gereksiz karmaşıklıktan kaçınma
- Her dosya tek sorumluluk
- Basit ve anlaşılır kod

### 🔧 Modülerlik
- Loose coupling
- Clear interfaces
- Minimal bağımlılık

### 🎯 Fonksiyonel Akış
1. Kategorileri oku
2. Ürün listelerini çek
3. Ürün detaylarını topla
4. Veriyi normalize et
5. Database'e kaydet

## 🛠 Teknoloji Stack

- **Runtime**: Node.js (v18+)
- **Language**: TypeScript
- **Database**: MySQL + Prisma ORM
- **HTTP Client**: node-fetch
- **Build**: TypeScript Compiler

## 📊 Veri Akışı

1. **categories.md** → Kategori ID'leri
2. **API Calls** → Ürün listeleri ve detayları
3. **Normalization** → Standart format
4. **Database** → Kalıcı depolama

## 🤝 Geliştirme Kuralları

- Fonksiyonlar **20 satırı** geçmesin
- Dosyalar **200 satırı** geçmesin
- **3 seviyeden** fazla nesting yapmayın
- **Açıklayıcı** değişken isimleri kullanın
- **Dokümantasyonu** güncel tutun

## 📞 Destek

Herhangi bir sorunuz olduğunda, yukarıdaki **4 temel dokümanı** kontrol edin:
- **docs/architecture.md** - Teknik mimari ve API'ler
- **categories.md** - Kategori mapping'leri  
- **requirements.md** - Proje gereksinimleri
- **docs/help.md** - Detaylı implementation guide

Bu dokümanlarda projenin tüm detayları mevcuttur.

---

**Not**: Bu proje, competitive intelligence ve veri analizi amacıyla geliştirilmiştir. API kullanım koşullarına uygun şekilde kullanılmalıdır.
