import { CategoryApiResponse, MinimalProduct } from '../types';
export declare class PullBearScraper {
    fetchCategories(): Promise<CategoryApiResponse>;
    fetchProductIds(categoryId: number): Promise<string[]>;
    fetchProductDetail(productId: string): Promise<MinimalProduct | null>;
}
//# sourceMappingURL=PullBearScraper.d.ts.map