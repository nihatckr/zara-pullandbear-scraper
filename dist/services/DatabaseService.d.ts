import { TargetSubcategoryData, MinimalProduct, DatabaseStats } from '../types';
export declare class DatabaseService {
    saveCategoryData(categories: TargetSubcategoryData[]): Promise<void>;
    saveProducts(products: MinimalProduct[]): Promise<void>;
    private updateProduct;
    private determineBrand;
    getStats(): Promise<DatabaseStats>;
    clearAll(): Promise<void>;
}
export declare const databaseService: DatabaseService;
//# sourceMappingURL=DatabaseService.d.ts.map