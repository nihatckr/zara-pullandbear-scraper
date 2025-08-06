// Core interfaces for the scraper system

export interface CategoryApiResponse {
  brand: string
  url: string
  data: any
  timestamp: string
}

export interface FilteredCategory {
  id: number
  name: string
  brand: string
  subcategories?: any[]
  [key: string]: any
}

export interface CategoryApiResponse {
  brand: string
  url: string
  data: any
  timestamp: string
}

export interface TargetCategory {
  id: number
  name: string
  brand: string
  subcategories: any[]
}

// Target subcategory structure with hierarchical data
export interface TargetSubcategoryData {
  brand: string
  gender: string
  mainCategoryId: number
  mainCategoryName: string
  subcategories: {
    categoryId: number
    categoryName: string
    subcategories: any[]
    isLeaf?: boolean
    matchingId?: number
    matchingCategoryName?: string
    productIds?: string[]
    productCount?: number
  }[]
  timestamp: string
}

// Minimal Product Interfaces
export interface MinimalProductSize {
  name: string
  sku: number
  availability: string
  price: number | string
}

export interface MinimalProductColor {
  id: string
  name: string
  sizes: MinimalProductSize[]
}

export interface MinimalProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  colors: MinimalProductColor[]
  images: string[]
}

// API Response interfaces
export interface ZaraApiResponse {
  categories: any[]
  [key: string]: any
}

export interface PullBearApiResponse {
  categories: any[]
  [key: string]: any
}

// Scraper configuration interfaces
export interface ScraperConfig {
  maxRetries: number
  requestDelay: number
  testProductCount: number
  outputDirectory: string
}

// Database statistics interface
export interface DatabaseStats {
  categories: number
  subcategories: number
  nestedSubcategories: number
  products: number
  productIds: number
  productColors: number
  productSizes: number
  productImages: number
}
