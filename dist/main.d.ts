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
    price: number;
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
//# sourceMappingURL=main.d.ts.map