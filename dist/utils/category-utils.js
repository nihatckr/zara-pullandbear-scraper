"use strict";
/**
 * Category cleaning utilities for different brands
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanZaraSubcategory = cleanZaraSubcategory;
exports.cleanPullBearSubcategory = cleanPullBearSubcategory;
/**
 * Clean Zara subcategory data
 */
function cleanZaraSubcategory(subcategory) {
    const cleaned = {
        id: subcategory.id,
        name: subcategory.name,
        sectionName: subcategory.sectionName,
        isLeaf: !subcategory.subcategories || subcategory.subcategories.length === 0,
    };
    // Subcategories varsa onları da temizle
    if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
        cleaned.subcategories = subcategory.subcategories.map((sub) => cleanZaraSubcategory(sub));
    }
    return cleaned;
}
/**
 * Clean Pull&Bear subcategory data
 */
function cleanPullBearSubcategory(subcategory) {
    const cleaned = {
        id: subcategory.id,
        name: subcategory.name,
        isLeaf: !subcategory.subcategories || subcategory.subcategories.length === 0,
    };
    // Subcategories varsa onları da temizle
    if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
        cleaned.subcategories = subcategory.subcategories.map((sub) => cleanPullBearSubcategory(sub));
    }
    return cleaned;
}
//# sourceMappingURL=category-utils.js.map