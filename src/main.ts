import fs from 'fs'
import path from 'path'

// Interfaces
interface CategoryApiResponse {
  brand: string
  url: string
  data: any
  timestamp: string
}

interface FilteredCategory {
  id: number
  name: string
  brand: string
  subcategories?: any[]
  [key: string]: any
}

interface TargetSubcategoryData {
  brand: string
  gender: string
  mainCategoryId: number
  mainCategoryName: string
  subcategories: {
    categoryId: number
    categoryName: string
    subcategories: any[]
    matchingId?: number
    matchingCategoryName?: string
  }[]
  timestamp: string
}

// Kategori temizleme fonksiyonları
function cleanZaraSubcategory(subcategory: any): any {
  const cleaned: any = {
    id: subcategory.id,
    name: subcategory.name,
    sectionName: subcategory.sectionName,
    isLeaf:
      !subcategory.subcategories || subcategory.subcategories.length === 0,
  }

  // Subcategories varsa onları da temizle
  if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
    cleaned.subcategories = subcategory.subcategories.map((sub: any) =>
      cleanZaraSubcategory(sub),
    )
  }

  return cleaned
}

function cleanPullBearSubcategory(subcategory: any): any {
  const cleaned: any = {
    id: subcategory.id,
    name: subcategory.name,
    isLeaf:
      !subcategory.subcategories || subcategory.subcategories.length === 0,
  }

  // Subcategories varsa onları da temizle
  if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
    cleaned.subcategories = subcategory.subcategories.map((sub: any) =>
      cleanPullBearSubcategory(sub),
    )
  }

  return cleaned
}

// API çağırma fonksiyonları
async function fetchZaraCategories(): Promise<any> {
  console.log('🛍️ Zara kategorileri çekiliyor...')

  try {
    const response = await fetch(
      'https://www.zara.com/tr/tr/categories?ajax=true',
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
      throw new Error(
        `Zara API hatası: ${response.status} - ${response.statusText}`,
      )
    }

    const data = await response.json()
    console.log('✅ Zara kategorileri başarıyla çekildi')
    return data
  } catch (error) {
    console.error('❌ Zara kategorileri çekilirken hata:', error)
    throw error
  }
}

async function fetchPullAndBearCategories(): Promise<any> {
  console.log('🛍️ Pull&Bear kategorileri çekiliyor...')

  try {
    const response = await fetch(
      'https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1',
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
      throw new Error(
        `Pull&Bear API hatası: ${response.status} - ${response.statusText}`,
      )
    }

    const data = await response.json()
    console.log('✅ Pull&Bear kategorileri başarıyla çekildi')
    return data
  } catch (error) {
    console.error('❌ Pull&Bear kategorileri çekilirken hata:', error)
    throw error
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
}

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
}

async function filterTargetSubcategories(
  filteredCategories: FilteredCategory[],
): Promise<TargetSubcategoryData[]> {
  const targetSubcategories: TargetSubcategoryData[] = []

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
  }

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
  }

  for (const category of filteredCategories) {
    if (category.subcategories && Array.isArray(category.subcategories)) {
      // Erkek kategorilerini kontrol et
      if (
        (category.brand === 'Zara' && category.id === 1885841) ||
        (category.brand === 'Pull&Bear' && category.id === 1030616396)
      ) {
        const targetIds =
          category.brand === 'Zara' ? menTargetIds.zara : menTargetIds.pullBear
        const foundSubcategories: any[] = []

        // Pull&Bear için daha derin arama yap
        if (category.brand === 'Pull&Bear') {
          for (const subcategory of category.subcategories) {
            if (
              subcategory.subcategories &&
              Array.isArray(subcategory.subcategories)
            ) {
              for (const deepSubcategory of subcategory.subcategories) {
                if (targetIds.includes(deepSubcategory.id)) {
                  const matchingId = Object.entries(categoryMapping.men).find(
                    ([, pullBearId]) => pullBearId === deepSubcategory.id,
                  )?.[0]

                  foundSubcategories.push({
                    categoryId: deepSubcategory.id,
                    categoryName: deepSubcategory.name || deepSubcategory.key,
                    subcategories: deepSubcategory.subcategories
                      ? deepSubcategory.subcategories.map((sub: any) =>
                          cleanPullBearSubcategory(sub),
                        )
                      : [],
                    isLeaf:
                      !deepSubcategory.subcategories ||
                      deepSubcategory.subcategories.length === 0,
                    matchingId: matchingId ? parseInt(matchingId) : undefined,
                    matchingCategoryName: matchingId
                      ? categoryNameMapping.pullbear[
                          deepSubcategory.id as keyof typeof categoryNameMapping.pullbear
                        ]
                      : undefined,
                  })
                }
              }
            }
          }
        } else {
          // Zara için normal arama
          for (const subcategory of category.subcategories) {
            if (targetIds.includes(subcategory.id)) {
              const matchingId =
                categoryMapping.men[
                  subcategory.id as keyof typeof categoryMapping.men
                ]

              foundSubcategories.push({
                categoryId: subcategory.id,
                categoryName: subcategory.name || subcategory.key,
                subcategories: subcategory.subcategories
                  ? subcategory.subcategories.map((sub: any) =>
                      cleanZaraSubcategory(sub),
                    )
                  : [],
                isLeaf:
                  !subcategory.subcategories ||
                  subcategory.subcategories.length === 0,
                matchingId: matchingId || undefined,
                matchingCategoryName: matchingId
                  ? categoryNameMapping.zara[
                      subcategory.id as keyof typeof categoryNameMapping.zara
                    ]
                  : undefined,
              })
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
          })
        }
      }

      // Kadın kategorilerini kontrol et
      if (
        (category.brand === 'Zara' && category.id === 1881757) ||
        (category.brand === 'Pull&Bear' && category.id === 1030616387)
      ) {
        const targetIds =
          category.brand === 'Zara'
            ? womenTargetIds.zara
            : womenTargetIds.pullBear
        const foundSubcategories: any[] = []

        // Pull&Bear için daha derin arama yap
        if (category.brand === 'Pull&Bear') {
          for (const subcategory of category.subcategories) {
            if (
              subcategory.subcategories &&
              Array.isArray(subcategory.subcategories)
            ) {
              for (const deepSubcategory of subcategory.subcategories) {
                if (targetIds.includes(deepSubcategory.id)) {
                  const matchingId = Object.entries(categoryMapping.women).find(
                    ([, pullBearId]) => pullBearId === deepSubcategory.id,
                  )?.[0]

                  foundSubcategories.push({
                    categoryId: deepSubcategory.id,
                    categoryName: deepSubcategory.name || deepSubcategory.key,
                    subcategories: deepSubcategory.subcategories
                      ? deepSubcategory.subcategories.map((sub: any) =>
                          cleanPullBearSubcategory(sub),
                        )
                      : [],
                    isLeaf:
                      !deepSubcategory.subcategories ||
                      deepSubcategory.subcategories.length === 0,
                    matchingId: matchingId ? parseInt(matchingId) : undefined,
                    matchingCategoryName: matchingId
                      ? categoryNameMapping.pullbear[
                          deepSubcategory.id as keyof typeof categoryNameMapping.pullbear
                        ]
                      : undefined,
                  })
                }
              }
            }
          }
        } else {
          // Zara için normal arama
          for (const subcategory of category.subcategories) {
            if (targetIds.includes(subcategory.id)) {
              const matchingId =
                categoryMapping.women[
                  subcategory.id as keyof typeof categoryMapping.women
                ]

              foundSubcategories.push({
                categoryId: subcategory.id,
                categoryName: subcategory.name || subcategory.key,
                subcategories: subcategory.subcategories
                  ? subcategory.subcategories.map((sub: any) =>
                      cleanZaraSubcategory(sub),
                    )
                  : [],
                isLeaf:
                  !subcategory.subcategories ||
                  subcategory.subcategories.length === 0,
                matchingId: matchingId || undefined,
                matchingCategoryName: matchingId
                  ? categoryNameMapping.zara[
                      subcategory.id as keyof typeof categoryNameMapping.zara
                    ]
                  : undefined,
              })
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
          })
        }
      }
    }
  }

  return targetSubcategories
}

async function filterTargetCategories(
  data: CategoryApiResponse[],
): Promise<FilteredCategory[]> {
  const targetCategories: FilteredCategory[] = []

  // Zara hedef kategori ID'leri
  const zaraTargetIds = [1881757, 1885841] // Kadın, Erkek

  // Pull&Bear hedef kategori ID'leri
  const pullBearTargetIds = [1030616387, 1030616396] // Kadın, Erkek

  for (const response of data) {
    if (response.brand === 'Zara' && response.data.categories) {
      for (const category of response.data.categories) {
        if (zaraTargetIds.includes(category.id)) {
          targetCategories.push({
            ...category,
            brand: 'Zara',
          })
        }
      }
    }

    if (response.brand === 'Pull&Bear' && response.data.categories) {
      for (const category of response.data.categories) {
        if (pullBearTargetIds.includes(category.id)) {
          targetCategories.push({
            ...category,
            brand: 'Pull&Bear',
          })
        }
      }
    }
  }

  return targetCategories
}

async function clearOutputDirectory(): Promise<void> {
  const outputDir = path.join(process.cwd(), 'output')

  try {
    if (fs.existsSync(outputDir)) {
      // Klasördeki tüm dosyaları listele
      const files = fs.readdirSync(outputDir)

      // Her dosyayı sil
      for (const file of files) {
        const filePath = path.join(outputDir, file)
        fs.unlinkSync(filePath)
        console.log(`🗑️ Silindi: ${file}`)
      }

      console.log('📁 Output klasörü temizlendi')
    }
  } catch (error) {
    console.error('❌ Output klasörü temizlenirken hata:', error)
  }
}

async function saveToJson(data: any[], filename: string): Promise<void> {
  const outputDir = path.join(process.cwd(), 'output')

  // Output klasörü yoksa oluştur
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const filePath = path.join(outputDir, filename)

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    console.log(`📄 Veriler ${filePath} dosyasına kaydedildi`)
  } catch (error) {
    console.error('❌ Dosya kaydetme hatası:', error)
    throw error
  }
}

async function main() {
  console.log('🚀 Hiyerarşik Kategoriler Çekme İşlemi Başlatılıyor...')

  try {
    // Output klasörünü temizle
    await clearOutputDirectory()

    const results: CategoryApiResponse[] = []

    // Zara kategorilerini çek
    console.log('\n📡 Zara Categories API çağrılıyor...')
    const zaraData = await fetchZaraCategories()
    results.push({
      brand: 'Zara',
      url: 'https://www.zara.com/tr/tr/categories?ajax=true',
      data: zaraData,
      timestamp: new Date().toISOString(),
    })

    // Pull&Bear kategorilerini çek
    console.log('\n📡 Pull&Bear Categories API çağrılıyor...')
    const pullAndBearData = await fetchPullAndBearCategories()
    results.push({
      brand: 'Pull&Bear',
      url: 'https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1',
      data: pullAndBearData,
      timestamp: new Date().toISOString(),
    })

    // Hedef kategorileri filtrele
    console.log('\n🔍 Hedef kategoriler filtreleniyor...')
    const filteredCategories = await filterTargetCategories(results)

    // Hedef alt kategorileri filtrele
    console.log('\n🔍 Hedef alt kategoriler filtreleniyor...')
    const targetSubcategories = await filterTargetSubcategories(
      filteredCategories,
    )

    // Sadece hiyerarşik alt kategorileri kaydet
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    await saveToJson(
      targetSubcategories,
      `hierarchical-subcategories-${timestamp}.json`,
    )

    console.log('\n� Hiyerarşik kategoriler başarıyla çekildi ve kaydedildi!')
    console.log('🎯 Hedef alt kategori sayısı:', targetSubcategories.length)

    // Leaf kategori sayısını hesapla
    let leafCount = 0
    targetSubcategories.forEach((subcat) => {
      subcat.subcategories.forEach((sub: any) => {
        if (sub.isLeaf) {
          leafCount++
        }
        if (sub.subcategories && Array.isArray(sub.subcategories)) {
          sub.subcategories.forEach((deepSub: any) => {
            if (deepSub.isLeaf) {
              leafCount++
            }
          })
        }
      })
    })
    console.log('🌿 Leaf kategori sayısı:', leafCount)

    // Hedef alt kategorileri göster
    console.log('\n📋 Hiyerarşik Alt Kategoriler (Eşleştirmeli):')
    targetSubcategories.forEach((subcat) => {
      console.log(
        `  • ${subcat.brand} ${subcat.gender}: ${subcat.mainCategoryName} (ID: ${subcat.mainCategoryId})`,
      )
      subcat.subcategories.forEach((sub) => {
        const matchInfo = sub.matchingId
          ? ` ↔️ ${sub.matchingCategoryName} (ID: ${sub.matchingId})`
          : ' (Eşleştirme yok)'
        console.log(
          `    - ${sub.categoryName} (ID: ${sub.categoryId})${matchInfo}`,
        )
      })
    })
  } catch (error) {
    console.error('\n❌ Ana işlem hatası:', error)
    throw error
  }
}

main()
  .then(() => {
    console.log('\n✅ İşlem başarıyla tamamlandı')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Kritik hata:', error)
    process.exit(1)
  })
