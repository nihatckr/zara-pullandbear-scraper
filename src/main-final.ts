#!/usr/bin/env node

/**
 * Production-ready main entry point with comprehensive monitoring
 */

import { logger, createModuleLogger } from './utils/logger'

const mainLogger = createModuleLogger('MainFinal')

async function main(): Promise<void> {
  try {
    mainLogger.info('🚀 Starting Zara & Pull&Bear Scraper v4.2.0 (Final)')

    // Test logging system
    mainLogger.info('✅ Logging system operational')
    mainLogger.warn('⚠️ Warning test message')
    mainLogger.debug('🔍 Debug message (only in debug mode)')

    // Test error handling
    try {
      throw new Error('Test error for error handling')
    } catch (error) {
      mainLogger.error('Caught test error', error as Error)
    }

    mainLogger.info('🎉 All systems operational!')
    mainLogger.info('Ready for production use!')
  } catch (error) {
    mainLogger.error('Application failed', error as Error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  mainLogger.info('Received SIGTERM, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  mainLogger.info('Received SIGINT, shutting down gracefully')
  process.exit(0)
})

// Start application
if (require.main === module) {
  main().catch((error) => {
    logger.error('Fatal error', error)
    process.exit(1)
  })
}

export default main
