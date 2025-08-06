export interface CategoryApiResponse {
    brand: string;
    url: string;
    data: any;
    timestamp: string;
}
export interface FilteredCategory {
    id: number;
    name: string;
    brand: string;
    subcategories?: any[];
    [key: string]: any;
}
export interface CategoryApiResponse {
    brand: string;
    url: string;
    data: any;
    timestamp: string;
}
export interface TargetCategory {
    id: number;
    name: string;
    brand: string;
    subcategories: any[];
}
export interface TargetSubcategoryData {
    brand: string;
    gender: string;
    mainCategoryId: number;
    mainCategoryName: string;
    subcategories: {
        categoryId: number;
        categoryName: string;
        subcategories: any[];
        isLeaf?: boolean;
        matchingId?: number;
        matchingCategoryName?: string;
        productIds?: string[];
        productCount?: number;
    }[];
    timestamp: string;
}
export interface MinimalProductSize {
    name: string;
    sku: number;
    availability: string;
    price: number | string;
}
export interface MinimalProductColor {
    id: string;
    name: string;
    sizes: MinimalProductSize[];
}
export interface MinimalProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    colors: MinimalProductColor[];
    images: string[];
}
export interface ZaraApiResponse {
    categories: any[];
    [key: string]: any;
}
export interface PullBearApiResponse {
    categories: any[];
    [key: string]: any;
}
export interface ScraperConfig {
    maxRetries: number;
    requestDelay: number;
    testProductCount: number;
    outputDirectory: string;
}
export interface DatabaseStats {
    categories: number;
    subcategories: number;
    nestedSubcategories: number;
    products: number;
    productIds: number;
    productColors: number;
    productSizes: number;
    productImages: number;
}
//# sourceMappingURL=index.d.ts.map