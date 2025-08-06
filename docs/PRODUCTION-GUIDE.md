# 🚀 High-Performance Production Scraper System

Bu sistem, **binlerce ürünü hızlı ve güvenli** şekilde çekebilecek profesyonel yapıda geliştirilmiştir.

## 🎯 Production Features

### ⚡ **Performance Modes**

#### 1. 🐌 Conservative Mode (Ultra-Safe)
- **3 concurrent requests**
- **2 second delays**
- **10 retries**
- **Ultra-low API impact**
- **Perfect for sensitive APIs**

#### 2. ⚡ Production Mode (Balanced)
- **8 concurrent requests**
- **500ms delays**
- **5 retries**
- **Production optimized**
- **Recommended for most use cases**

#### 3. 🔥 Aggressive Mode (Fast)
- **20 concurrent requests**
- **200ms delays**
- **3 retries**
- **Maximum speed**
- **Use with caution**

#### 4. ⚙️ Custom Mode
- **User-defined settings**
- **Flexible configuration**
- **Expert users**

### 🏗️ **Architecture Features**

#### 🔄 **High-Performance Queue System**
```typescript
- Intelligent job prioritization
- Brand-based load balancing
- Automatic retry with exponential backoff
- Memory management and garbage collection
- Real-time progress tracking
- Checkpoint system for crash recovery
```

#### 💾 **Dual Persistence**
```typescript
- Database: Automatic Prisma ORM integration
- Files: Timestamped JSON batch files
- Checkpoints: Resume from interruptions
- Statistics: Comprehensive performance metrics
```

#### 🛡️ **Error Handling & Recovery**
```typescript
- Graceful error handling
- Automatic retry logic
- Cooldown periods for API protection
- Failed job tracking
- Recovery checkpoints
```

## 🚀 Quick Start

### 1. **Start Production Scraper**
```bash
npm run scrape:production
```

### 2. **Choose Performance Mode**
```
📊 Performance Modes:
1. 🐌 Conservative: 3 concurrent, 2s delay, ultra-safe
2. ⚡ Production: 8 concurrent, 500ms delay, balanced
3. 🔥 Aggressive: 20 concurrent, 200ms delay, fast
4. ⚙️  Custom: Manual configuration
```

### 3. **Select Products**
```
🎯 Product Selection:
1. 📦 All sample products (24 products)
2. 🧪 Small test (6 products)
3. 🎯 Custom amount
4. 🔍 Brand specific
```

### 4. **Monitor Progress**
```
📊 Progress: 150/1000 (15.0%)
⚡ Rate: 12.5 products/min
⏱️  ETA: 68 seconds
🔄 In Progress: 8
❌ Failed: 2
```

## 📊 Performance Estimates

### **Conservative Mode**
- **Rate**: ~5 products/minute
- **1,000 products**: ~3.3 hours
- **10,000 products**: ~33 hours
- **Best for**: Sensitive APIs, overnight runs

### **Production Mode**
- **Rate**: ~12 products/minute  
- **1,000 products**: ~1.4 hours
- **10,000 products**: ~14 hours
- **Best for**: Most production scenarios

### **Aggressive Mode**
- **Rate**: ~25 products/minute
- **1,000 products**: ~40 minutes
- **10,000 products**: ~6.7 hours
- **Best for**: Development, testing, fast runs

## 🛠️ Advanced Configuration

### **Environment Variables**
```bash
export SCRAPER_MODE=production          # performance mode
export MAX_MEMORY_MB=1000               # memory limit
export CHECKPOINT_INTERVAL=300000       # checkpoint every 5 min
export LOG_LEVEL=info                   # logging level
```

### **Custom Performance Config**
```typescript
const customConfig = {
  maxConcurrentRequests: 15,
  requestDelay: 300,
  maxRetries: 7,
  batchSize: 75,
  memoryThreshold: 800,
  responseTimeoutMs: 20000
}
```

## 📈 Monitoring & Analytics

### **Real-time Metrics**
```
📊 System Stats:
   Memory: 245.7MB used
   Uptime: 15 minutes  
   CPU Load: 450ms
   
🔥 Queue Status:
   ✅ Completed: 450
   🔄 In Progress: 8
   ❌ Failed: 12
   📦 Remaining: 530
```

### **Performance Analytics**
```
💡 Performance Insights:
✅ Excellent performance! Consider scaling up.
⚡ Average Rate: 18.5 products/minute
🎯 Success Rate: 96.2%
🧠 Memory Efficiency: Optimal
```

## 🔧 Troubleshooting

### **Common Issues**

#### 1. **Low Performance**
```bash
# Solutions:
- Increase concurrent requests
- Reduce request delays  
- Check network connectivity
- Monitor API rate limits
```

#### 2. **High Memory Usage**
```bash
# Solutions:
- Reduce batch size
- Lower memory threshold
- Enable garbage collection
- Process smaller chunks
```

#### 3. **API Errors**
```bash
# Solutions:
- Switch to Conservative mode
- Increase retry delays
- Check API status
- Verify authentication
```

### **Recovery from Crashes**
```typescript
// Automatic checkpoint recovery
const checkpoint = productionScraper.getCheckpoint()
if (checkpoint) {
  console.log('🔄 Resuming from checkpoint...')
  scraper.resumeFromCheckpoint(checkpoint)
}
```

## 🎯 Production Scenarios

### **Scenario 1: Daily Product Sync (1,000 products)**
```bash
Mode: Production
Estimated Time: 1.4 hours
Best Schedule: Night runs (2-4 AM)
Configuration: Default production settings
```

### **Scenario 2: Full Catalog Scraping (50,000 products)**
```bash
Mode: Conservative  
Estimated Time: 7-10 days
Best Approach: Split into chunks
Configuration: Ultra-safe settings
```

### **Scenario 3: Quick Price Updates (500 products)**
```bash
Mode: Aggressive
Estimated Time: 20 minutes
Best Use: Real-time price monitoring
Configuration: Fast, minimal retries
```

## 🔗 Integration Examples

### **Cron Job Integration**
```bash
# Daily at 2 AM
0 2 * * * cd /path/to/scraper && npm run scrape:production
```

### **Docker Integration**
```dockerfile
FROM node:18-alpine
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "run", "scrape:production"]
```

### **API Integration**
```typescript
import { ProductionScraper } from './services'

const scraper = new ProductionScraper()
const results = await scraper.scrapeProducts({
  productIds: { zara: zaraIds, pullandbear: pbIds },
  config: PRODUCTION_CONFIG,
  saveToDatabase: true,
  enableMonitoring: true
})
```

## 🚀 Scaling Recommendations

### **For 1,000-10,000 products:**
- Use **Production mode**
- Single instance
- Database persistence
- Scheduled runs

### **For 10,000-100,000 products:**
- Use **Conservative mode**
- Multiple instances
- Chunk processing
- Distributed workload

### **For 100,000+ products:**
- Use **Custom configuration**
- Cluster deployment
- Queue systems (Redis)
- Load balancing

---

**🎉 Ready for production-scale scraping with intelligent performance management!**
