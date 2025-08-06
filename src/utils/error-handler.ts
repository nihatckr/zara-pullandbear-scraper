import { createModuleLogger } from './logger'

const logger = createModuleLogger('ErrorHandler')

// Custom error types
export class ScrapingError extends Error {
  constructor(
    message: string,
    public brand: string,
    public productId?: string,
    public statusCode?: number,
    public originalError?: Error,
  ) {
    super(message)
    this.name = 'ScrapingError'
  }
}

export class DatabaseError extends Error {
  constructor(
    message: string,
    public operation: string,
    public originalError?: Error,
  ) {
    super(message)
    this.name = 'DatabaseError'
  }
}

export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ConfigurationError'
  }
}

export class RateLimitError extends Error {
  constructor(message: string, public retryAfter?: number) {
    super(message)
    this.name = 'RateLimitError'
  }
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler
  private errorCounts = new Map<string, number>()
  private lastErrors = new Map<string, Date>()

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  // Handle different types of errors
  handleError(error: Error, context?: Record<string, any>): void {
    const errorKey = `${error.name}-${error.message}`
    this.incrementErrorCount(errorKey)

    switch (error.constructor) {
      case ScrapingError:
        this.handleScrapingError(error as ScrapingError, context)
        break
      case DatabaseError:
        this.handleDatabaseError(error as DatabaseError, context)
        break
      case RateLimitError:
        this.handleRateLimitError(error as RateLimitError, context)
        break
      default:
        this.handleGenericError(error, context)
    }
  }

  private handleScrapingError(
    error: ScrapingError,
    context?: Record<string, any>,
  ): void {
    logger.error('Scraping error occurred', error, {
      brand: error.brand,
      productId: error.productId,
      statusCode: error.statusCode,
      ...context,
    })
  }

  private handleDatabaseError(
    error: DatabaseError,
    context?: Record<string, any>,
  ): void {
    logger.error('Database error occurred', error, {
      operation: error.operation,
      ...context,
    })
  }

  private handleRateLimitError(
    error: RateLimitError,
    context?: Record<string, any>,
  ): void {
    logger.warn('Rate limit reached', {
      error: error.message,
      retryAfter: error.retryAfter,
      ...context,
    })
  }

  private handleGenericError(
    error: Error,
    context?: Record<string, any>,
  ): void {
    logger.error('Unexpected error occurred', error, context)
  }

  private incrementErrorCount(errorKey: string): void {
    const current = this.errorCounts.get(errorKey) || 0
    this.errorCounts.set(errorKey, current + 1)
    this.lastErrors.set(errorKey, new Date())
  }

  // Get error statistics
  getErrorStats(): Record<string, any> {
    const stats: Record<string, any> = {}
    for (const [errorKey, count] of this.errorCounts.entries()) {
      stats[errorKey] = {
        count,
        lastOccurred: this.lastErrors.get(errorKey),
      }
    }
    return stats
  }

  // Check if error rate is too high
  isErrorRateHigh(
    errorKey: string,
    threshold: number = 10,
    timeWindow: number = 60000,
  ): boolean {
    const count = this.errorCounts.get(errorKey) || 0
    const lastError = this.lastErrors.get(errorKey)

    if (!lastError) return false

    const timeDiff = Date.now() - lastError.getTime()
    return count >= threshold && timeDiff < timeWindow
  }

  // Reset error counts
  resetErrorCounts(): void {
    this.errorCounts.clear()
    this.lastErrors.clear()
    logger.info('Error counts reset')
  }
}

// Global error handler
export const globalErrorHandler = ErrorHandler.getInstance()

// Utility functions
export const createError = {
  scraping: (
    message: string,
    brand: string,
    productId?: string,
    statusCode?: number,
    originalError?: Error,
  ) => new ScrapingError(message, brand, productId, statusCode, originalError),

  database: (message: string, operation: string, originalError?: Error) =>
    new DatabaseError(message, operation, originalError),

  configuration: (message: string) => new ConfigurationError(message),

  rateLimit: (message: string, retryAfter?: number) =>
    new RateLimitError(message, retryAfter),
}

// Async error wrapper
export const asyncErrorHandler = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
) => {
  return async (...args: T): Promise<R | null> => {
    try {
      return await fn(...args)
    } catch (error) {
      globalErrorHandler.handleError(error as Error, {
        function: fn.name,
        args,
      })
      return null
    }
  }
}

export default ErrorHandler
