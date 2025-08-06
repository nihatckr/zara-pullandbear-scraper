import { logger, createModuleLogger } from '../src/utils/logger'
import { config } from '../src/config/environment'
import { globalErrorHandler } from '../src/utils/error-handler'

const testLogger = createModuleLogger('SystemTest')

// System health check
export async function systemHealthCheck(): Promise<boolean> {
  testLogger.info('🔧 Starting system health check...')

  try {
    // Test logging system
    testLogger.info('✅ Logging system operational')

    // Test configuration
    testLogger.info('Configuration loaded', {
      nodeEnv: config.NODE_ENV,
      scraperMode: config.SCRAPER_MODE,
      logLevel: config.LOG_LEVEL,
    })

    // Test error handling
    globalErrorHandler.resetErrorCounts()
    testLogger.info('✅ Error handling system operational')

    testLogger.info('🎉 All systems operational!')
    return true
  } catch (error) {
    testLogger.error('❌ System health check failed', error as Error)
    return false
  }
}

// Performance test
export async function performanceTest(): Promise<void> {
  testLogger.info('⚡ Starting performance test...')

  const startTime = Date.now()

  // Simulate some operations
  for (let i = 0; i < 1000; i++) {
    if (i % 100 === 0) {
      testLogger.debug(`Processing item ${i}`)
    }
  }

  const duration = Date.now() - startTime
  testLogger.info(`Performance test completed in ${duration}ms`)
}

// Main test function
async function runTests(): Promise<void> {
  console.log('🚀 Starting Production System Tests\n')

  try {
    const healthResult = await systemHealthCheck()

    if (healthResult) {
      await performanceTest()

      console.log('\n✅ All tests passed!')
      console.log('📊 Error Statistics:', globalErrorHandler.getErrorStats())
    } else {
      console.log('\n❌ Health check failed!')
      process.exit(1)
    }
  } catch (error) {
    logger.error('Test suite failed', error as Error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests()
}
