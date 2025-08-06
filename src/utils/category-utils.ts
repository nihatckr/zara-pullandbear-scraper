/**
 * Category cleaning utilities for different brands
 */

/**
 * Clean Zara subcategory data
 */
export function cleanZaraSubcategory(subcategory: any): any {
  const cleaned: any = {
    id: subcategory.id,
    name: subcategory.name,
    sectionName: subcategory.sectionName,
    isLeaf:
      !subcategory.subcategories || subcategory.subcategories.length === 0,
  }

  // Subcategories varsa onları da temizle
  if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
    cleaned.subcategories = subcategory.subcategories.map((sub: any) =>
      cleanZaraSubcategory(sub),
    )
  }

  return cleaned
}

/**
 * Clean Pull&Bear subcategory data
 */
export function cleanPullBearSubcategory(subcategory: any): any {
  const cleaned: any = {
    id: subcategory.id,
    name: subcategory.name,
    isLeaf:
      !subcategory.subcategories || subcategory.subcategories.length === 0,
  }

  // Subcategories varsa onları da temizle
  if (subcategory.subcategories && Array.isArray(subcategory.subcategories)) {
    cleaned.subcategories = subcategory.subcategories.map((sub: any) =>
      cleanPullBearSubcategory(sub),
    )
  }

  return cleaned
}
