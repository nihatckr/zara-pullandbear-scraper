#!/usr/bin/env node
import { ProductionScraper } from './services'
import { PRODUCTION_CONFIG } from './config'

/**
 * High-Performance Production Scraper v4.1
 * Test mode with sample products
 */

async function main() {
  console.log('🚀 High-Performance Production Scraper v4.1 - Test Mode')
  console.log('='.repeat(60))

  // Test with Production mode and sample products
  console.log('\n🎯 Testing Production Mode...')
  console.log('   🔄 Concurrent Requests: 8')
  console.log('   ⏱️  Request Delay: 500ms')
  console.log('   🔁 Max Retries: 5')
  console.log('   💾 Batch Size: 50')

  // Sample product IDs from previous successful runs
  const sampleProducts = {
    zara: ['480773496', '464990655', '462239664'],
    pullandbear: ['698625044', '692156810', '694018001'],
    total: 6,
  }

  console.log(`\n📦 Testing with ${sampleProducts.total} sample products`)
  console.log(`   Zara: ${sampleProducts.zara.length} products`)
  console.log(`   Pull&Bear: ${sampleProducts.pullandbear.length} products`)

  // Estimate time
  const estimate = ProductionScraper.estimateScrapingTime(
    sampleProducts.total,
    PRODUCTION_CONFIG,
  )
  console.log(`\n⏱️  Time Estimation: ${estimate.minutes} minutes`)

  console.log('\n🚀 Starting test scraping...')

  const productionScraper = new ProductionScraper()

  try {
    const startTime = Date.now()

    const stats = await productionScraper.scrapeProducts({
      productIds: sampleProducts,
      config: PRODUCTION_CONFIG,
      saveToDatabase: true,
      saveToBatch: true,
      enableMonitoring: true,
    })

    const duration = (Date.now() - startTime) / 1000

    // Display results
    console.log('\n🎉 Production Test Completed!')
    console.log('='.repeat(60))
    console.log(`📊 Total: ${stats.totalProducts}`)
    console.log(
      `✅ Success: ${stats.successfulProducts} (${(
        (stats.successfulProducts / stats.totalProducts) *
        100
      ).toFixed(1)}%)`,
    )
    console.log(
      `❌ Failed: ${stats.failedProducts} (${(
        (stats.failedProducts / stats.totalProducts) *
        100
      ).toFixed(1)}%)`,
    )
    console.log(
      `⏱️  Duration: ${Math.floor(duration / 60)}m ${Math.floor(
        duration % 60,
      )}s`,
    )
    console.log(`⚡ Rate: ${stats.averageRate.toFixed(1)} products/minute`)

    if (stats.databaseStats) {
      console.log(
        `🗄️  Database: ${stats.databaseStats.products} products stored`,
      )
    }

    // Performance analysis
    console.log('\n💡 Performance Analysis:')
    if (stats.successfulProducts === stats.totalProducts) {
      console.log('✅ Perfect success rate! System is working optimally.')
    } else {
      console.log(
        `⚠️  ${stats.failedProducts} products failed. Check logs for details.`,
      )
    }

    if (stats.averageRate > 10) {
      console.log('🚀 Excellent performance! Ready for large-scale production.')
    } else if (stats.averageRate > 5) {
      console.log('✅ Good performance for production use.')
    } else {
      console.log(
        '⚠️  Consider optimizing configuration for better performance.',
      )
    }

    console.log('\n🎯 Scale Projections:')
    console.log(
      `   1,000 products: ~${Math.ceil(1000 / stats.averageRate)} minutes`,
    )
    console.log(
      `   10,000 products: ~${Math.ceil(10000 / stats.averageRate / 60)} hours`,
    )
    console.log(
      `   50,000 products: ~${Math.ceil(
        50000 / stats.averageRate / 60 / 24,
      )} days`,
    )
  } catch (error) {
    console.error('❌ Test failed:', error)
    process.exit(1)
  }

  console.log('\n✅ Production system test completed successfully!')
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n⚠️  Test interrupted...')
  process.exit(0)
})

// Run the test
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 Test failed:', error)
    process.exit(1)
  })
}
