import 'dotenv/config'

// Simple configuration without complex validation for now
export const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SCRAPER_MODE: process.env.SCRAPER_MODE || 'production',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  MAX_CONCURRENT_JOBS: parseInt(process.env.MAX_CONCURRENT_JOBS || '8'),
  REQUEST_DELAY_MS: parseInt(process.env.REQUEST_DELAY_MS || '500'),
  ENABLE_PERFORMANCE_MONITORING:
    process.env.ENABLE_PERFORMANCE_MONITORING === 'true',
  MAX_RETRIES: parseInt(process.env.MAX_RETRIES || '3'),
  TIMEOUT_MS: parseInt(process.env.TIMEOUT_MS || '30000'),
  DATABASE_URL: process.env.DATABASE_URL || '',
}

// Helper functions
export const isDevelopment = () => config.NODE_ENV === 'development'
export const isProduction = () => config.NODE_ENV === 'production'
export const isTest = () => config.NODE_ENV === 'test'

// Database helpers
export const getDatabaseConfig = () => ({
  url: config.DATABASE_URL,
  ssl: isProduction() ? { rejectUnauthorized: false } : undefined,
})

// Scraper configuration
export const getScraperConfig = () => ({
  mode: config.SCRAPER_MODE,
  maxConcurrent: config.MAX_CONCURRENT_JOBS,
  requestDelay: config.REQUEST_DELAY_MS,
  maxRetries: config.MAX_RETRIES,
  timeout: config.TIMEOUT_MS,
})

export default config
