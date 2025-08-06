# Professional Zara & Pull&Bear Scraper v4.1.0

Production-ready, modular web scraper for Zara and Pull&Bear product data with complete database integration.

## 🏗️ Professional Architecture

### Modular Structure
```
src/
├── types/           # Type definitions and interfaces
├── config/          # Configuration and constants
├── scrapers/        # Brand-specific scraper classes
├── services/        # Database and business logic services
├── utils/           # Utility functions and helpers
├── main.ts          # Original monolithic version
└── main-modular.ts  # New professional modular version
```

## ✨ Features

- **29,755+ Product IDs** - Comprehensive coverage
- **Dual-brand Support** - Zara & Pull&Bear APIs
- **Database Integration** - Prisma ORM with MySQL
- **Professional Architecture** - Clean, maintainable modules
- **100% Type Safety** - Full TypeScript implementation
- **Rate Limiting** - Respectful API consumption
- **Error Handling** - Robust failure recovery
- **Automated Testing** - Built-in product validation

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+
MySQL 8+
```

### Installation
```bash
git clone <repository>
cd zara-pullandbear-scraper
npm install
```

### Database Setup
```bash
# Set up your MySQL database and update .env
cp .env.example .env

# Push database schema
npm run db:push

# Generate Prisma client
npm run db:generate
```

### Usage

#### Modular Version (Recommended)
```bash
# Run professional modular scraper
npm run scrape:modular

# Development mode
npm run dev:modular
```

#### Original Version
```bash
# Run original monolithic scraper
npm run scrape

# Development mode
npm run dev
```

## 📊 Database Statistics

Current database contains:
- **Categories**: 21
- **Subcategories**: 260  
- **Products**: 29+
- **Product IDs**: 30,534+

## 🛠️ Available Scripts

```bash
npm run scrape          # Run original scraper
npm run scrape:modular  # Run modular scraper
npm run build           # Build TypeScript
npm run dev             # Development mode (original)
npm run dev:modular     # Development mode (modular)
npm run db:studio       # Open Prisma Studio
npm run db:push         # Push database schema
npm run db:generate     # Generate Prisma client
npm run type-check      # TypeScript validation
npm run clean           # Clean output and dist
```

## 🎯 Architecture Benefits

### Before (Monolithic)
- Single 1,200+ line file
- Tightly coupled functions
- Difficult to maintain
- Hard to test individually

### After (Modular)
- Clean separation of concerns
- Reusable components
- Easy to maintain and extend
- Individual module testing
- Professional code organization

## 📁 Key Modules

### `src/types/index.ts`
Central type definitions for all interfaces and data structures.

### `src/config/index.ts`
Configuration management with API endpoints, headers, and settings.

### `src/scrapers/`
- `ZaraScraper.ts` - Zara-specific API implementation
- `PullBearScraper.ts` - Pull&Bear-specific API implementation

### `src/services/`
- `DatabaseService.ts` - Complete database operations

### `src/utils/`
- `file-utils.ts` - File operations and JSON handling
- `category-utils.ts` - Brand-specific data cleaning

## 🔧 Configuration

All configuration is centralized in `src/config/index.ts`:
- API endpoints for both brands
- Request headers and session management
- Category mappings and target IDs
- Rate limiting and retry settings

## 📈 Performance

- **Rate Limited**: 300ms between requests
- **Session Management**: Proper cookies and headers
- **Error Recovery**: Automatic retries with exponential backoff
- **Memory Efficient**: Streaming large datasets

## 🧪 Testing

Built-in testing features:
- 24-product validation test
- Success rate monitoring
- Statistical analysis
- Database integrity checks

## 🗄️ Database Schema

8 interconnected tables:
- CategoryData
- SubcategoryData
- NestedSubcategory
- Product
- ProductColor
- ProductSize
- ProductImage
- ProductId

## 📦 Dependencies

- **Prisma**: Database ORM
- **TypeScript**: Type safety
- **Node.js Fetch**: HTTP requests
- **tsx**: TypeScript execution

## 🎉 Success Metrics

- ✅ 100% success rate for product details
- ✅ 779+ product IDs collected in test run
- ✅ Complete category hierarchy mapped
- ✅ All images and pricing data captured
- ✅ Zero compilation errors

## 🔄 Version History

- **v4.1.0**: Professional modular architecture
- **v4.0**: Database integration with Prisma
- **v3.0**: Pull&Bear API fixes and improvements
- **v2.0**: Dual-brand support
- **v1.0**: Initial Zara scraper

## 📄 License

MIT License - See LICENSE file for details

---

*Professional scraper architecture preserving all features while improving maintainability and extensibility.*
