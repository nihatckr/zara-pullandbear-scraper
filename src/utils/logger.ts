import winston from 'winston'
import path from 'path'

// Log formatını tanımla
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`
  }),
)

// Log directory oluştur
const logsDir = path.join(process.cwd(), 'logs')

// Logger instance oluştur
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  transports: [
    // Console output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),

    // Error log file
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),

    // Combined log file
    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log'),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),

    // Scraper specific log
    new winston.transports.File({
      filename: path.join(logsDir, 'scraper.log'),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
})

// Production ortamında sadece warn ve error logla
if (process.env.NODE_ENV === 'production') {
  logger.level = 'warn'
}

// Utility functions
export const createModuleLogger = (module: string) => {
  return {
    info: (message: string, meta?: object) =>
      logger.info(`[${module}] ${message}`, meta),
    warn: (message: string, meta?: object) =>
      logger.warn(`[${module}] ${message}`, meta),
    error: (message: string, error?: Error, meta?: object) => {
      const errorMeta = error
        ? { ...meta, error: error.message, stack: error.stack }
        : meta
      logger.error(`[${module}] ${message}`, errorMeta)
    },
    debug: (message: string, meta?: object) =>
      logger.debug(`[${module}] ${message}`, meta),
  }
}

// Performance logging
export const performanceLogger = {
  start: (operation: string) => {
    const startTime = Date.now()
    return {
      end: (meta?: object) => {
        const duration = Date.now() - startTime
        logger.info(`Performance: ${operation} completed in ${duration}ms`, {
          ...meta,
          duration,
        })
      },
    }
  },
}

export default logger
