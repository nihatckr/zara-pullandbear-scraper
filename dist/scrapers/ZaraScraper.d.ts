import { CategoryApiResponse, MinimalProduct } from '../types';
export declare class ZaraScraper {
    fetchCategories(): Promise<CategoryApiResponse>;
    fetchProductIds(categoryId: number): Promise<string[]>;
    fetchProductDetail(productId: string): Promise<MinimalProduct | null>;
}
//# sourceMappingURL=ZaraScraper.d.ts.map