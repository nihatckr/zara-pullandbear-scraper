export * from './performance';
import { ScraperConfig } from '../types';
export declare const REQUEST_HEADERS: {
    readonly ZARA: {
        readonly 'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
        readonly Accept: "application/json, text/plain, */*";
        readonly 'Accept-Language': "tr-TR,tr;q=0.9,en;q=0.8";
        readonly 'Accept-Encoding': "gzip, deflate, br";
        readonly Connection: "keep-alive";
        readonly Referer: "https://www.zara.com/tr/";
        readonly 'X-Requested-With': "XMLHttpRequest";
    };
    readonly PULLANDBEAR: {
        readonly 'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
        readonly Accept: "application/json, text/plain, */*";
        readonly 'Accept-Language': "tr-TR,tr;q=0.9,en;q=0.8";
        readonly 'Accept-Encoding': "gzip, deflate, br";
        readonly Referer: "https://www.pullandbear.com/tr/";
        readonly Origin: "https://www.pullandbear.com";
        readonly 'Sec-Fetch-Dest': "empty";
        readonly 'Sec-Fetch-Mode': "cors";
        readonly 'Sec-Fetch-Site': "same-origin";
        readonly 'X-Requested-With': "XMLHttpRequest";
    };
};
export declare const API_ENDPOINTS: {
    readonly ZARA: {
        readonly CATEGORIES: "https://www.zara.com/tr/tr/categories?ajax=true";
        readonly PRODUCTS: (categoryId: number) => string;
        readonly PRODUCT_DETAIL: (productId: string) => string;
    };
    readonly PULLANDBEAR: {
        readonly CATEGORIES: "https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category?languageId=-43&typeCatalog=1&appId=1";
        readonly PRODUCTS: (categoryId: number) => string;
        readonly PRODUCT_DETAIL: (productId: string) => string;
        readonly MAIN_PAGE: "https://www.pullandbear.com/tr/";
    };
};
export declare const TARGET_CATEGORIES: {
    readonly MEN: {
        readonly ZARA: readonly [2432163, 2432095, 2431993, 2432040, 2432056, 2432264, 2432193, 2432231, 2432279];
        readonly PULLANDBEAR: readonly [1030204712, 1030204719, 1030204766, 1030204791, 1030204788, 1030204756, 1030204710, 1030204822, 1030204837];
    };
    readonly WOMEN: {
        readonly ZARA: readonly [2583113, 2420944, 2420895, 2420368, 2419939, 2420416, 2419242, 2420794, 2420453, 2420482, 2420505, 2420284, 2419181, 2420293, 2418953];
        readonly PULLANDBEAR: readonly [1030204607, 1030441307, 1030204616, 1030204645, 1030207187, 1030204631, 1030204692, 1030207189, 1030204678, 1030204685, 1030204660, 1030204669, 1030204707];
    };
};
export declare const CATEGORY_MAPPING: {
    readonly MEN: {
        readonly 2432163: 1030204712;
        readonly 2432095: 1030204719;
        readonly 2431993: 1030204766;
        readonly 2432040: 1030204791;
        readonly 2432056: 1030204788;
        readonly 2432264: 1030204756;
        readonly 2432193: 1030204710;
        readonly 2432231: 1030204822;
        readonly 2432279: 1030204837;
    };
    readonly WOMEN: {
        readonly 2583113: 1030204607;
        readonly 2420944: 1030441307;
        readonly 2420895: 1030204616;
        readonly 2420368: 1030204645;
        readonly 2419939: 1030207187;
        readonly 2420416: 1030204631;
        readonly 2419242: 1030204692;
        readonly 2420794: 1030207189;
        readonly 2420453: 1030204678;
        readonly 2420482: 1030204685;
        readonly 2420505: 1030441307;
        readonly 2420284: 1030441307;
        readonly 2419181: 1030204660;
        readonly 2420293: 1030204669;
        readonly 2418953: 1030204707;
    };
};
export declare const MAIN_CATEGORY_IDS: {
    readonly ZARA: {
        readonly MEN: 1881758;
        readonly WOMEN: 1881757;
    };
    readonly PULLANDBEAR: {
        readonly MEN: 1030616396;
        readonly WOMEN: 1030616387;
    };
};
export declare const config: ScraperConfig;
//# sourceMappingURL=index.d.ts.map