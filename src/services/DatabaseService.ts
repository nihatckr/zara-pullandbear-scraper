import prisma from '../prisma'
import { TargetSubcategoryData, MinimalProduct, DatabaseStats } from '../types'

export class DatabaseService {
  // Save category data to database
  async saveCategoryData(categories: TargetSubcategoryData[]): Promise<void> {
    console.log('🗄️  Saving category data to database...')

    for (const category of categories) {
      try {
        // Create main category
        const savedCategory = await prisma.categoryData.create({
          data: {
            brand: category.brand,
            gender: category.gender,
            mainCategoryId: category.mainCategoryId,
            mainCategoryName: category.mainCategoryName,
            timestamp: new Date(category.timestamp),
            subcategories: {
              create: category.subcategories.map((sub: any) => ({
                categoryId: sub.categoryId,
                categoryName: sub.categoryName,
                isLeaf: sub.isLeaf || false,
                matchingId: sub.matchingId,
                matchingCategoryName: sub.matchingCategoryName,
                productCount: sub.productCount || 0,
                productIds: {
                  create: (sub.productIds || []).map((pid: string) => ({
                    productId: pid,
                  })),
                },
                subcategories: {
                  create: sub.subcategories.map((nested: any) => ({
                    name: nested.name,
                    isLeaf: nested.isLeaf || false,
                    productCount: nested.productCount || 0,
                    productIds: {
                      create: (nested.productIds || []).map((pid: string) => ({
                        productId: pid,
                      })),
                    },
                  })),
                },
              })),
            },
          },
        })

        console.log(
          `✅ Saved ${category.brand} ${category.gender} category (ID: ${savedCategory.id})`,
        )
      } catch (error: any) {
        console.error(
          `❌ Error saving category ${category.brand} ${category.gender}:`,
          error,
        )
        throw error
      }
    }

    console.log('✅ All category data saved successfully!')
  }

  // Save product data to database
  async saveProducts(products: MinimalProduct[]): Promise<void> {
    console.log('🗄️  Saving product data to database...')

    for (const product of products) {
      try {
        // Determine brand from product data
        const brand = this.determineBrand(product)

        // Create product with all related data
        await prisma.product.create({
          data: {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            currency: product.currency,
            brand: brand,
            colors: {
              create: product.colors.map((color: any) => ({
                colorId: color.id,
                name: color.name,
                sizes: {
                  create: color.sizes.map((size: any) => ({
                    name: size.name,
                    sku: size.sku,
                    availability: size.availability,
                    price:
                      typeof size.price === 'string'
                        ? parseInt(size.price) || 0
                        : size.price,
                  })),
                },
              })),
            },
            images: {
              create: product.images.map((imageUrl: string, index: number) => ({
                url: imageUrl,
                order: index,
              })),
            },
          },
        })

        console.log(`✅ Saved product ${product.id} - ${product.name}`)
      } catch (error: any) {
        // Handle duplicate key error gracefully
        if (error.code === 'P2002') {
          console.log(`⚠️  Product ${product.id} already exists, updating...`)
          await this.updateProduct(product)
        } else {
          console.error(`❌ Error saving product ${product.id}:`, error)
          throw error
        }
      }
    }

    console.log('✅ All product data saved successfully!')
  }

  // Update existing product
  private async updateProduct(product: MinimalProduct): Promise<void> {
    const brand = this.determineBrand(product)

    // Delete existing relations first
    await prisma.productColor.deleteMany({
      where: { productId: product.id },
    })

    await prisma.productImage.deleteMany({
      where: { productId: product.id },
    })

    // Update product with new data
    await prisma.product.update({
      where: { id: product.id },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        currency: product.currency,
        brand: brand,
        updatedAt: new Date(),
        colors: {
          create: product.colors.map((color: any) => ({
            colorId: color.id,
            name: color.name,
            sizes: {
              create: color.sizes.map((size: any) => ({
                name: size.name,
                sku: size.sku,
                availability: size.availability,
                price:
                  typeof size.price === 'string'
                    ? parseInt(size.price) || 0
                    : size.price,
              })),
            },
          })),
        },
        images: {
          create: product.images.map((imageUrl: string, index: number) => ({
            url: imageUrl,
            order: index,
          })),
        },
      },
    })
  }

  // Determine brand from product URL or other indicators
  private determineBrand(product: MinimalProduct): string {
    // Check if product images contain zara or pullandbear domains
    const sampleImage = product.images[0] || ''

    if (sampleImage.includes('zara.net')) {
      return 'Zara'
    } else if (sampleImage.includes('pullandbear.')) {
      return 'Pull&Bear'
    }

    // ID-based detection - Zara IDs are typically 9 digits, Pull&Bear IDs are typically 9-10 digits but different pattern
    const productId = product.id

    // Zara products typically have smaller IDs
    if (parseInt(productId) < 500000000) {
      return 'Zara'
    } else {
      return 'Pull&Bear'
    }
  }

  // Get database statistics
  async getStats(): Promise<DatabaseStats> {
    const [
      categories,
      subcategories,
      nestedSubcategories,
      products,
      productIds,
      productColors,
      productSizes,
      productImages,
    ] = await Promise.all([
      prisma.categoryData.count(),
      prisma.subcategoryData.count(),
      prisma.nestedSubcategory.count(),
      prisma.product.count(),
      prisma.productId.count(),
      prisma.productColor.count(),
      prisma.productSize.count(),
      prisma.productImage.count(),
    ])

    return {
      categories,
      subcategories,
      nestedSubcategories,
      products,
      productIds,
      productColors,
      productSizes,
      productImages,
    }
  }

  // Clear all data (useful for testing)
  async clearAll(): Promise<void> {
    console.log('🗑️  Clearing all database data...')

    await prisma.productSize.deleteMany()
    await prisma.productColor.deleteMany()
    await prisma.productImage.deleteMany()
    await prisma.product.deleteMany()
    await prisma.productId.deleteMany()
    await prisma.nestedSubcategory.deleteMany()
    await prisma.subcategoryData.deleteMany()
    await prisma.categoryData.deleteMany()

    console.log('✅ All data cleared successfully!')
  }
}

export const databaseService = new DatabaseService()
