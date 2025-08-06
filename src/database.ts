import { TargetSubcategoryData, MinimalProduct } from './main'
import prisma from './prisma'

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
              create: category.subcategories.map((sub) => ({
                categoryId: sub.categoryId,
                categoryName: sub.categoryName,
                isLeaf: sub.isLeaf || false,
                matchingId: sub.matchingId,
                matchingCategoryName: sub.matchingCategoryName,
                productCount: sub.productCount || 0,
                productIds: {
                  create: (sub.productIds || []).map((pid) => ({
                    productId: pid,
                  })),
                },
                subcategories: {
                  create: sub.subcategories.map((nested) => ({
                    name: nested.name,
                    isLeaf: nested.isLeaf || false,
                    productCount: nested.productCount || 0,
                    productIds: {
                      create: (nested.productIds || []).map((pid) => ({
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
      } catch (error) {
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
        // Determine brand from product data (we'll need to add this logic)
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
              create: product.colors.map((color) => ({
                colorId: color.id,
                name: color.name,
                sizes: {
                  create: color.sizes.map((size) => ({
                    name: size.name,
                    sku: size.sku,
                    availability: size.availability,
                    price: size.price,
                  })),
                },
              })),
            },
            images: {
              create: product.images.map((imageUrl, index) => ({
                url: imageUrl,
                order: index,
              })),
            },
          },
        })

        console.log(`✅ Saved product ${product.id} - ${product.name}`)
      } catch (error) {
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
          create: product.colors.map((color) => ({
            colorId: color.id,
            name: color.name,
            sizes: {
              create: color.sizes.map((size) => ({
                name: size.name,
                sku: size.sku,
                availability: size.availability,
                price: size.price,
              })),
            },
          })),
        },
        images: {
          create: product.images.map((imageUrl, index) => ({
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

    // Fallback - could be enhanced with more logic
    return 'Unknown'
  }

  // Get database statistics
  async getStats(): Promise<{
    categories: number
    subcategories: number
    products: number
    productIds: number
  }> {
    const [categories, subcategories, products, productIds] = await Promise.all(
      [
        prisma.categoryData.count(),
        prisma.subcategoryData.count(),
        prisma.product.count(),
        prisma.productId.count(),
      ],
    )

    return {
      categories,
      subcategories,
      products,
      productIds,
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
