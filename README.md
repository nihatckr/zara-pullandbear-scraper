# Zara & Pull&Bear Category Scraper - v2.0 ✅

## 📋 Proje Hakkında

Bu proje, Zara ve Pull&Bear e-ticaret sitelerinden kategori bilgilerini ve product ID'lerini otomatik olarak toplayan, normalize eden ve hiyerarşik yapıda saklayan bir web scraping sistemidir.

## 🎯 v2.0 Özellikleri (Tamamlandı ✅)

- ✅ **Product ID Entegrasyonu**: Leaf kategorilerden product ID'lerini çekme
- ✅ **API Integration**: Zara ve Pull&Bear product API'larını kullanma
- ✅ **Enhanced Data**: Her kategoriye productIds ve productCount ekleme
- ✅ **16,071** toplam product ID'si çekildi
- ✅ **202** leaf kategori işlendi
- ✅ **Rate Limiting**: API çağrıları arasında 500ms delay

## 🎯 v1.0 Özellikleri (Tamamlandı ✅)

- ✅ **Zara Categories API**: Zara'nın kadın ve erkek kategorilerini çekme
- ✅ **Pull&Bear Categories API**: Pull&Bear'ın kadın ve erkek kategorilerini çekme  
- ✅ **Kategori Filtreleme**: Belirlenen hedef kategorileri filtreleme
- ✅ **Hiyerarşik Yapı**: Ana kategori → Alt kategori → Alt-alt kategori yapısı
- ✅ **Kategori Eşleştirme**: Zara ve Pull&Bear kategorilerini ID ve isim bazında eşleştirme
- ✅ **Veri Temizleme**: Gereksiz alanları filtreleme (SEO, layout, attributes vb.)
- ✅ **isLeaf Tanımlaması**: Her kategorinin leaf (yaprak) kategori olup olmadığını belirleme
- ✅ **JSON Export**: Temiz ve yapılandırılmış JSON formatında export

## 📊 v2.0 Çıktı Yapısı

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
      "productIds": ["480773496", "452707754", "459127722"],
      "productCount": 106,
      "matchingId": 1030204607,
      "matchingCategoryName": "CEKET"
    }
  ]
}
```

## 🔗 API Endpoint'leri

### Kategori API'ları (v1.0)
- **Zara**: `https://www.zara.com/tr/tr/categories?ajax=true`
- **Pull&Bear**: `https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1`

### Product API'ları (v2.0) ✅
- **Zara**: `https://www.zara.com/tr/tr/category/{categoryId}/products?ajax=true`
- **Pull&Bear**: `https://www.pullandbear.com/itxrest/3/catalog/store/25009521/20309457/category/{categoryId}/product?languageId=-43&typeCatalog=1&appId=1`

### Veri Çıkarma Yolları ✅
- **Zara Product IDs**: `productGroups[0].elements[0].commercialComponents[].id`
- **Pull&Bear Product IDs**: `productIds[]`

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
