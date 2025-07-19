# 📚 คู่มือการใช้งาน APIs สำหรับดึงข้อมูลบล็อก

## 🆓 **APIs ฟรีที่แนะนำ**

### 1. **RSS2JSON API** (ฟรี)

- **URL**: `https://api.rss2json.com/v1/api.json`
- **จำกัด**: 10,000 requests/วัน
- **ไม่ต้องสมัคร API key**
- **ใช้สำหรับ**: Parse RSS feeds ให้เป็น JSON

```javascript
const rssUrl = "https://feeds.hbr.org/harvardbusiness";
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  rssUrl
)}`;
```

### 2. **NewsAPI** (ฟรี 1,000 requests/วัน)

- **Website**: https://newsapi.org/
- **ต้องสมัคร**: ใช่ (ฟรี)
- **ข้อจำกัด**: Development only (ไม่สามารถใช้ production)

```javascript
const apiKey = "YOUR_API_KEY";
const url = `https://newsapi.org/v2/everything?q=corporate+gifts&apiKey=${apiKey}`;
```

### 3. **Reddit RSS** (ฟรี)

- **ไม่ต้อง API key**
- **Format**: `https://www.reddit.com/r/{subreddit}/.rss`

```javascript
const redditFeeds = [
  "https://www.reddit.com/r/marketing/.rss",
  "https://www.reddit.com/r/entrepreneur/.rss",
  "https://www.reddit.com/r/business/.rss",
];
```

### 4. **Medium RSS** (ฟรี)

- **ไม่ต้อง API key**
- **Format**: `https://medium.com/feed/tag/{tag}`

```javascript
const mediumFeeds = [
  "https://medium.com/feed/tag/business",
  "https://medium.com/feed/tag/marketing",
  "https://medium.com/feed/tag/corporate-gifts",
];
```

## 📝 **RSS Feeds ที่แนะนำ**

### **Business & Marketing**

```javascript
const businessFeeds = [
  {
    name: "Harvard Business Review",
    url: "https://feeds.hbr.org/harvardbusiness",
    language: "en",
  },
  {
    name: "Entrepreneur Magazine",
    url: "https://www.entrepreneur.com/latest.rss",
    language: "en",
  },
  {
    name: "Marketing Land",
    url: "https://marketingland.com/feed",
    language: "en",
  },
  {
    name: "Inc.com",
    url: "https://www.inc.com/rss.xml",
    language: "en",
  },
];
```

### **Thai Business News**

```javascript
const thaiFeeds = [
  {
    name: "Nation Thailand Business",
    url: "https://www.nationthailand.com/business/rss.xml",
    language: "th",
  },
  {
    name: "Bangkok Post Business",
    url: "https://www.bangkokpost.com/rss/data/business.xml",
    language: "th",
  },
];
```

### **Gift & Retail Industry**

```javascript
const giftIndustryFeeds = [
  {
    name: "Gift & Home",
    url: "https://www.gifthome.com/feed/",
    language: "en",
  },
  {
    name: "Retail TouchPoints",
    url: "https://www.retailtouchpoints.com/feed/",
    language: "en",
  },
];
```

## ⚙️ **การตั้งค่า Environment Variables**

สร้างไฟล์ `.env.local` (ไม่ commit ขึ้น git):

```bash
# NewsAPI
NEWS_API_KEY=your_news_api_key_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# อื่นๆ (ถ้ามี)
CONTENTFUL_ACCESS_TOKEN=your_token
WORDPRESS_API_URL=https://your-site.com/wp-json/wp/v2
```

## 🚀 **วิธีการใช้งาน**

### 1. **เพิ่ม RSS Feed ใหม่**

แก้ไขไฟล์ `src/utils/rssParser.ts`:

```typescript
export const RSS_SOURCES: RSSSource[] = [
  // เพิ่ม RSS feed ใหม่ที่นี่
  {
    name: "ชื่อแหล่งข้อมูล",
    url: "https://example.com/feed.xml",
    category: "หมวดหมู่",
    language: "th", // หรือ 'en'
  },
];
```

### 2. **ใช้ NewsAPI**

1. สมัครที่ https://newsapi.org/
2. เพิ่ม API key ในไฟล์ `.env.local`
3. ระบบจะดึงข้อมูลอัตโนมัติ

### 3. **กรอง Keywords**

แก้ไขไฟล์ `src/utils/rssParser.ts` ในส่วน `filterRelevantContent`:

```typescript
const relevantKeywords = [
  "gift",
  "corporate",
  "business",
  "marketing",
  // เพิ่ม keywords ใหม่ที่นี่
  "ของขวัญ",
  "ของฝาก",
  "โปรโมชั่น",
];
```

## 🛠️ **APIs เพิ่มเติม (มีค่าใช้จ่าย)**

### **Contentful CMS API**

- **เหมาะสำหรับ**: จัดการเนื้อหาเฉพาะ
- **ราคา**: ฟรี 25,000 requests/เดือน

### **WordPress REST API**

- **เหมาะสำหรับ**: เว็บไซต์ WordPress
- **ราคา**: ฟรี (ถ้าเป็นเว็บของคุณเอง)

### **Ghost Content API**

- **เหมาะสำหรับ**: บล็อกแพลตฟอร์ม
- **ราคา**: ฟรี (ถ้าใช้ Ghost เอง)

## 🔧 **การ Debug**

### ตรวจสอบ RSS Feed ใช้ได้หรือไม่:

```bash
curl "https://api.rss2json.com/v1/api.json?rss_url=FEED_URL"
```

### ดู Console Logs:

เปิด Developer Tools -> Console เพื่อดู error messages

### Test API:

```bash
# Test local API
curl "http://localhost:3000/api/blog-posts"

# Test with category filter
curl "http://localhost:3000/api/blog-posts?category=การตลาด"
```

## 📊 **Performance Tips**

1. **Cache ข้อมูล**: ระบบ auto-refresh ทุก 5 นาที
2. **จำกัดจำนวน**: แต่ละ RSS feed จำกัดที่ 5 บทความ
3. **Error Handling**: มี fallback data เมื่อ API ล้มเหลว
4. **Rate Limiting**: ใช้ APIs อย่างประหยัด

## 🚨 **ข้อควรระวัง**

1. **CORS Issues**: บาง RSS feeds อาจบล็อก direct access
2. **Rate Limits**: อย่าเรียก API บ่อยเกินไป
3. **API Keys**: เก็บ API keys ใน environment variables
4. **Content Filtering**: ตรวจสอบเนื้อหาก่อนแสดงผล

---

💡 **คำแนะนำ**: เริ่มต้นด้วย RSS feeds ฟรีก่อน จากนั้นค่อยเพิ่ม APIs ที่ต้องจ่ายเงินตามความต้องการ
