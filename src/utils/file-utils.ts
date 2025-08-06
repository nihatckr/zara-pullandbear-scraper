import fs from 'fs'
import path from 'path'

/**
 * Clear output directory and remove old files
 */
export async function clearOutputDirectory(
  outputDir: string = './output',
): Promise<void> {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
    return
  }

  const files = fs.readdirSync(outputDir)
  const jsonFiles = files.filter((file) => file.endsWith('.json'))

  for (const file of jsonFiles) {
    const filePath = path.join(outputDir, file)
    fs.unlinkSync(filePath)
    console.log(`🗑️ Silindi: ${file}`)
  }

  if (jsonFiles.length > 0) {
    console.log('📁 Output klasörü temizlendi\n')
  }
}

/**
 * Save data to JSON file with timestamp
 */
export function saveToJsonFile(
  data: any,
  filename: string,
  outputDir: string = './output',
): string {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const fullFilename = `${filename}-${timestamp}.json`
  const filePath = path.join(outputDir, fullFilename)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
  return filePath
}

/**
 * Get the latest file matching a pattern
 */
export function getLatestFile(
  pattern: string,
  outputDir: string = './output',
): string | null {
  if (!fs.existsSync(outputDir)) {
    return null
  }

  const files = fs
    .readdirSync(outputDir)
    .filter((file) => file.includes(pattern) && file.endsWith('.json'))
    .sort()
    .reverse()

  return files.length > 0 ? path.join(outputDir, files[0]!) : null
}

/**
 * Read JSON file and parse it
 */
export function readJsonFile<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content) as T
}

/**
 * Sleep for specified milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Format price from cents to TRY
 */
export function formatPrice(priceInCents: number): string {
  return (priceInCents / 100).toFixed(0) + '₺'
}

/**
 * Calculate statistics for product data
 */
export function calculateProductStats(products: any[]): {
  totalProducts: number
  averageColors: number
  averageImages: number
  averageSizes: number
} {
  if (products.length === 0) {
    return {
      totalProducts: 0,
      averageColors: 0,
      averageImages: 0,
      averageSizes: 0,
    }
  }

  const totalColors = products.reduce(
    (sum, product) => sum + (product.colors?.length || 0),
    0,
  )
  const totalImages = products.reduce(
    (sum, product) => sum + (product.images?.length || 0),
    0,
  )
  const totalSizes = products.reduce((sum, product) => {
    return (
      sum +
      (product.colors?.reduce(
        (colorSum: number, color: any) => colorSum + (color.sizes?.length || 0),
        0,
      ) || 0)
    )
  }, 0)

  return {
    totalProducts: products.length,
    averageColors: parseFloat((totalColors / products.length).toFixed(1)),
    averageImages: parseFloat((totalImages / products.length).toFixed(1)),
    averageSizes: parseFloat((totalSizes / products.length).toFixed(1)),
  }
}
