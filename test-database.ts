import { DatabaseService } from './src/database-service'
import { readFileSync, readdirSync } from 'fs'
import path from 'path'

async function testDatabaseSave() {
  console.log('🧪 Database Kaydetme Testi Başlatılıyor...')

  try {
    const databaseService = new DatabaseService()

    // En son oluşturulan dosyaları bul
    const outputDir = './output'
    const files = readdirSync(outputDir)

    // Kategori verilerini bul
    const categoryFile = files.find((f) =>
      f.startsWith('hierarchical-subcategories'),
    )
    if (categoryFile) {
      console.log(`📁 Kategori dosyası: ${categoryFile}`)
      const categoryData = JSON.parse(
        readFileSync(path.join(outputDir, categoryFile), 'utf-8'),
      )
      console.log("💾 Kategori verileri database'e kaydediliyor...")
      await databaseService.saveCategoryData(categoryData)
      console.log('✅ Kategori verileri başarıyla kaydedildi!')
    }

    // Ürün verilerini bul
    const productFile = files.find((f) =>
      f.startsWith('product-details-minimal'),
    )
    if (productFile) {
      console.log(`📁 Ürün dosyası: ${productFile}`)
      const productData = JSON.parse(
        readFileSync(path.join(outputDir, productFile), 'utf-8'),
      )
      console.log("💾 Ürün verileri database'e kaydediliyor...")
      await databaseService.saveProducts(productData)
      console.log('✅ Ürün verileri başarıyla kaydedildi!')
    }

    // İstatistikleri göster
    const stats = await databaseService.getStats()
    console.log('\n📊 Database İstatistikleri:')
    console.log(`   • Kategoriler: ${stats.categories}`)
    console.log(`   • Alt Kategoriler: ${stats.subcategories}`)
    console.log(`   • İç İçe Alt Kategoriler: ${stats.nestedSubcategories}`)
    console.log(`   • Ürün ID'leri: ${stats.productIds}`)
    console.log(`   • Ürünler: ${stats.products}`)
    console.log(`   • Ürün Renkleri: ${stats.productColors}`)
    console.log(`   • Ürün Bedenleri: ${stats.productSizes}`)
    console.log(`   • Ürün Görselleri: ${stats.productImages}`)
  } catch (error) {
    console.error('❌ Hata:', error)
  }
}

testDatabaseSave()
