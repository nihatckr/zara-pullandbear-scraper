// v2.0 Product ID Test Script
import fs from 'fs'

// Product ID API interfaces
interface ZaraProductApiResponse {
  productGroups?: {
    elements?: {
      commercialComponents?: {
        id: string | number
      }[]
    }[]
  }[]
}

interface PullBearProductApiResponse {
  productIds?: (string | number)[]
}

// Product ID çekme fonksiyonları
async function fetchZaraProductIds(categoryId: number): Promise<string[]> {
  try {
    console.log(`🔍 Zara product ID'leri çekiliyor: category ${categoryId}`)

    const response = await fetch(
      `https://www.zara.com/tr/tr/category/${categoryId}/products?ajax=true`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          Referer: 'https://www.zara.com/tr/',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    )

    if (!response.ok) {
      console.warn(
        `⚠️ Zara product API hatası: ${response.status} for category ${categoryId}`,
      )
      return []
    }

    const data = (await response.json()) as ZaraProductApiResponse

    // Zara API structure: productGroups[0].elements[0].commercialComponents[].id
    const productIds: string[] = []

    if (
      data.productGroups &&
      data.productGroups[0] &&
      data.productGroups[0].elements
    ) {
      for (const element of data.productGroups[0].elements) {
        if (element.commercialComponents) {
          for (const component of element.commercialComponents) {
            if (component.id) {
              productIds.push(component.id.toString())
            }
          }
        }
      }
    }

    console.log(
      `✅ Zara category ${categoryId}: ${productIds.length} product ID bulundu`,
    )
    return productIds
  } catch (error) {
    console.error(
      `❌ Zara product ID'leri çekilirken hata (category ${categoryId}):`,
      error,
    )
    return []
  }
}

async function fetchPullBearProductIds(categoryId: number): Promise<string[]> {
  try {
    console.log(
      `🔍 Pull&Bear product ID'leri çekiliyor: category ${categoryId}`,
    )

    const response = await fetch(
      `https://www.pullandbear.com/itxrest/3/catalog/store/25009521/20309457/category/${categoryId}/product?languageId=-43&typeCatalog=1&appId=1`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          Referer: 'https://www.pullandbear.com/tr/',
          Origin: 'https://www.pullandbear.com',
        },
      },
    )

    if (!response.ok) {
      console.warn(
        `⚠️ Pull&Bear product API hatası: ${response.status} for category ${categoryId}`,
      )
      return []
    }

    const data = (await response.json()) as PullBearProductApiResponse

    // Pull&Bear API structure: productIds[]
    const productIds: string[] = []

    if (data.productIds && Array.isArray(data.productIds)) {
      productIds.push(...data.productIds.map((id: any) => id.toString()))
    }

    console.log(
      `✅ Pull&Bear category ${categoryId}: ${productIds.length} product ID bulundu`,
    )
    return productIds
  } catch (error) {
    console.error(
      `❌ Pull&Bear product ID'leri çekilirken hata (category ${categoryId}):`,
      error,
    )
    return []
  }
}

// Mevcut JSON'u oku ve product ID'leri ekle
async function addProductIdsToExistingData() {
  // Mevcut v1.0 data'yı oku
  const files = fs.readdirSync('output')
  const latestFile = files.find((f) =>
    f.startsWith('hierarchical-subcategories-'),
  )

  if (!latestFile) {
    console.log('❌ Mevcut hierarchical data bulunamadı')
    return
  }

  const existingData = JSON.parse(
    fs.readFileSync(`output/${latestFile}`, 'utf8'),
  )
  console.log(`📖 Mevcut data okundu: ${latestFile}`)

  // Her leaf kategoriye product ID'leri ekle
  for (const brandData of existingData) {
    console.log(`\n🔄 İşleniyor: ${brandData.brand} ${brandData.gender}`)

    for (const subcategory of brandData.subcategories) {
      console.log(
        `\n📂 Alt kategori: ${subcategory.categoryName} (ID: ${subcategory.categoryId})`,
      )

      // Subcategory leaf ise
      if (subcategory.isLeaf) {
        console.log(
          `🌿 Leaf kategori tespit edildi: ${subcategory.categoryName}`,
        )

        if (brandData.brand === 'Zara') {
          const productIds = await fetchZaraProductIds(subcategory.categoryId)
          subcategory.productIds = productIds
          subcategory.productCount = productIds.length
        } else if (brandData.brand === 'Pull&Bear') {
          const productIds = await fetchPullBearProductIds(
            subcategory.categoryId,
          )
          subcategory.productIds = productIds
          subcategory.productCount = productIds.length
        }

        // Rate limiting için kısa bekleme
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      // Alt subcategories'i de kontrol et
      if (
        subcategory.subcategories &&
        Array.isArray(subcategory.subcategories)
      ) {
        for (const deepSub of subcategory.subcategories) {
          if (deepSub.isLeaf) {
            console.log(`🌿 Deep leaf kategori tespit edildi: ${deepSub.name}`)

            if (brandData.brand === 'Zara') {
              const productIds = await fetchZaraProductIds(deepSub.id)
              deepSub.productIds = productIds
              deepSub.productCount = productIds.length
            } else if (brandData.brand === 'Pull&Bear') {
              const productIds = await fetchPullBearProductIds(deepSub.id)
              deepSub.productIds = productIds
              deepSub.productCount = productIds.length
            }

            // Rate limiting için kısa bekleme
            await new Promise((resolve) => setTimeout(resolve, 500))
          }
        }
      }
    }
  }

  // v2.0 data'yı kaydet
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const v2Filename = `hierarchical-subcategories-v2-${timestamp}.json`
  fs.writeFileSync(
    `output/${v2Filename}`,
    JSON.stringify(existingData, null, 2),
  )

  console.log(`\n✅ v2.0 data kaydedildi: ${v2Filename}`)

  // Product sayılarını göster
  let totalProducts = 0
  let leafCategoriesWithProducts = 0

  for (const brandData of existingData) {
    for (const subcategory of brandData.subcategories) {
      if (subcategory.productCount) {
        totalProducts += subcategory.productCount
        leafCategoriesWithProducts++
      }

      if (subcategory.subcategories) {
        for (const deepSub of subcategory.subcategories) {
          if (deepSub.productCount) {
            totalProducts += deepSub.productCount
            leafCategoriesWithProducts++
          }
        }
      }
    }
  }

  console.log(`\n📊 v2.0 İstatistikleri:`)
  console.log(
    `🏷️ Product ID'si bulunan leaf kategoriler: ${leafCategoriesWithProducts}`,
  )
  console.log(`🛍️ Toplam product sayısı: ${totalProducts}`)
}

// Script'i çalıştır
addProductIdsToExistingData()
  .then(() => {
    console.log('\n🎉 v2.0 Product ID entegrasyonu tamamlandı!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ v2.0 Product ID entegrasyonu hatası:', error)
    process.exit(1)
  })
