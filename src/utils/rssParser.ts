// RSS Parser และ API utilities สำหรับดึงข้อมูลบล็อกภายนอก

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author?: string;
  categories?: string[];
}

interface RSSSource {
  name: string;
  url: string;
  category: string;
  language?: string;
}

interface RSS2JSONItem {
  title: string;
  description?: string;
  content?: string;
  link: string;
  pubDate: string;
  author?: string;
  categories?: string[];
}

interface NewsAPIArticle {
  title: string;
  description?: string;
  url: string;
  publishedAt: string;
  author?: string;
  source?: {
    name: string;
  };
}

// แหล่งข้อมูล RSS ฟรีที่แนะนำ
export const RSS_SOURCES: RSSSource[] = [
  // Business & Marketing
  {
    name: 'Harvard Business Review',
    url: 'https://feeds.hbr.org/harvardbusiness',
    category: 'กลยุทธ์',
    language: 'en'
  },
  {
    name: 'Entrepreneur Magazine',
    url: 'https://www.entrepreneur.com/latest.rss',
    category: 'ธุรกิจ',
    language: 'en'
  },
  {
    name: 'Marketing Land',
    url: 'https://marketingland.com/feed',
    category: 'การตลาด',
    language: 'en'
  },
  
  // Medium feeds (เนื้อหาเกี่ยวกับธุรกิจ)
  {
    name: 'Medium Business',
    url: 'https://medium.com/feed/tag/business',
    category: 'ธุรกิจ',
    language: 'en'
  },
  {
    name: 'Medium Marketing',
    url: 'https://medium.com/feed/tag/marketing',
    category: 'การตลาด',
    language: 'en'
  },
  
  // Reddit feeds
  {
    name: 'Reddit Marketing',
    url: 'https://www.reddit.com/r/marketing/.rss',
    category: 'การตลาด',
    language: 'en'
  },
  {
    name: 'Reddit Entrepreneur',
    url: 'https://www.reddit.com/r/entrepreneur/.rss',
    category: 'ธุรกิจ',
    language: 'en'
  },

  // ไทย - สำหรับเนื้อหาภาษาไทย
  {
    name: 'Thailand Business News',
    url: 'https://www.nationthailand.com/business/rss.xml',
    category: 'ข่าวธุรกิจ',
    language: 'th'
  }
];

// ฟังก์ชัน parse XML/RSS
export async function parseRSSFeed(url: string): Promise<RSSItem[]> {
  try {
    // ใช้ RSS2JSON API ฟรีสำหรับ parse RSS
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
    
    const response = await fetch(proxyUrl);
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(`RSS parsing failed: ${data.message}`);
    }
    
    return data.items.map((item: RSS2JSONItem) => ({
      title: item.title || '',
      description: item.description || item.content || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      author: item.author || '',
      categories: item.categories || []
    }));
    
  } catch (error) {
    console.error(`Error parsing RSS feed ${url}:`, error);
    return [];
  }
}

// ฟังก์ชันดึงข้อมูลจาก NewsAPI
export async function fetchNewsAPI(query: string, apiKey: string): Promise<RSSItem[]> {
  try {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(`NewsAPI error: ${data.message}`);
    }
    
    return data.articles.map((article: NewsAPIArticle) => ({
      title: article.title || '',
      description: article.description || '',
      link: article.url || '',
      pubDate: article.publishedAt || '',
      author: article.author || article.source?.name || '',
      categories: ['News']
    }));
    
  } catch (error) {
    console.error('Error fetching from NewsAPI:', error);
    return [];
  }
}

// ฟังก์ชันดึงข้อมูลจากหลายแหล่ง
export async function fetchAllExternalContent(): Promise<{
  source: string;
  category: string;
  items: RSSItem[];
}[]> {
  const results = [];
  
  // ดึงจาก RSS feeds
  for (const source of RSS_SOURCES) {
    try {
      const items = await parseRSSFeed(source.url);
      if (items.length > 0) {
        results.push({
          source: source.name,
          category: source.category,
          items: items.slice(0, 5) // จำกัด 5 บทความต่อแหล่ง
        });
      }
    } catch (error) {
      console.error(`Failed to fetch from ${source.name}:`, error);
    }
  }
  
  return results;
}

// ฟังก์ชันแปลงเป็น BlogPost format
export function convertToBlogPost(
  item: RSSItem, 
  source: string, 
  category: string, 
  id: string
) {
  // สร้าง excerpt จาก description
  const excerpt = item.description
    .replace(/<[^>]*>/g, '') // ลบ HTML tags
    .substring(0, 200) + '...';
  
  return {
    id,
    title: item.title,
    excerpt,
    content: item.description,
    author: item.author || 'External Source',
    publishedAt: item.pubDate || new Date().toISOString(),
    category,
    tags: item.categories || [],
    imageUrl: '/images/gifts.png', // default image
    sourceUrl: item.link,
    sourceName: source,
    featured: false
  };
}

// ฟังก์ชันกรองเนื้อหาที่เกี่ยวข้องกับของขวัญ/ธุรกิจ
export function filterRelevantContent(items: RSSItem[]): RSSItem[] {
  const relevantKeywords = [
    'gift', 'corporate', 'business', 'marketing', 'promotion', 'brand',
    'employee', 'customer', 'engagement', 'relationship', 'strategy',
    'trend', 'innovation', 'experience', 'loyalty', 'partnership'
  ];
  
  return items.filter(item => {
    const content = (item.title + ' ' + item.description).toLowerCase();
    return relevantKeywords.some(keyword => content.includes(keyword));
  });
}

// การใช้งาน Environment Variables สำหรับ API Keys
export const API_CONFIG = {
  newsApiKey: process.env.NEWS_API_KEY || '',
  // เพิ่ม API keys อื่นๆ ได้ที่นี่
};

// ตัวอย่างการใช้งาน
export async function getLatestBusinessContent() {
  try {
    // ดึงจาก RSS
    const rssContent = await fetchAllExternalContent();
    
    // ดึงจาก NewsAPI (ถ้ามี API key)
    let newsContent: RSSItem[] = [];
    if (API_CONFIG.newsApiKey) {
      newsContent = await fetchNewsAPI(
        'corporate gifts OR business marketing OR employee engagement',
        API_CONFIG.newsApiKey
      );
    }
    
    // รวมและกรองเนื้อหา
    const allContent = [
      ...rssContent.flatMap(source => 
        source.items.map(item => ({ ...item, source: source.source, category: source.category }))
      ),
      ...newsContent.map(item => ({ ...item, source: 'NewsAPI', category: 'ข่าวสาร' }))
    ];
    
    // กรองเฉพาะเนื้อหาที่เกี่ยวข้อง
    return filterRelevantContent(allContent);
    
  } catch (error) {
    console.error('Error fetching external content:', error);
    return [];
  }
} 