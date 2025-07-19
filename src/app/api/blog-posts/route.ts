import { NextRequest, NextResponse } from 'next/server';
import { 
  getLatestBusinessContent, 
  convertToBlogPost
} from '@/utils/rssParser';

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author?: string;
  categories?: string[];
  source?: string;
  category?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  featured: boolean;
}

// ฟังก์ชันสำหรับดึงข้อมูลจาก RSS feeds หรือ APIs ภายนอก
async function fetchExternalBlogs(): Promise<BlogPost[]> {
  try {
    // ดึงข้อมูลจาก RSS feeds จริง
    const externalContent = await getLatestBusinessContent();
    
    // แปลงเป็น BlogPost format
    const realBlogs = externalContent.map((item: RSSItem, index: number) => 
      convertToBlogPost(
        item, 
        item.source || 'External Source', 
        item.category || 'ทั่วไป', 
        `external-${index + 1}`
      )
    );
    
    // รวมกับ mock data (สำหรับข้อมูลภาษาไทยเฉพาะ)
    const mockBlogs: BlogPost[] = [
    {
      id: '1',
      title: 'เทรนด์ของขวัญองค์กร 2024: ความยั่งยืนคือกุญแจสำคัญ',
      excerpt: 'การให้ของขวัญองค์กรในปี 2024 เน้นไปที่ความยั่งยืนและการลดผลกระทบต่อสิ่งแวดล้อม พร้อมเทรนด์ใหม่ที่น่าสนใจ',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'Corporate Gift Expert',
      publishedAt: new Date().toISOString(),
      category: 'เทรนด์',
      tags: ['ความยั่งยืน', 'ของขวัญองค์กร', 'เทรนด์ 2024'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/sustainable-corporate-gifts-2024',
      sourceName: 'Gift Trends Today',
      featured: true
    },
    {
      id: '2',
      title: '10 ไอเดียของฝากที่จะทำให้คุณโดดเด่นในงาน Conference',
      excerpt: 'ของฝากที่ดีไม่ได้อยู่ที่ราคาแพง แต่อยู่ที่ความคิดสร้างสรรค์และประโยชน์ใช้สอย',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'Event Marketing Pro',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      category: 'ไอเดีย',
      tags: ['ของฝาก', 'conference', 'marketing'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/conference-giveaway-ideas',
      sourceName: 'Event Marketing Blog',
      featured: false
    },
    {
      id: '3',
      title: 'วิธีคำนวณ ROI ของการให้ของขวัญลูกค้า',
      excerpt: 'การให้ของขวัญลูกค้าเป็นกลยุทธ์การตลาดที่สำคัญ มาดูวิธีวัดผลและคำนวณผลตอบแทนกันดีกว่า',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'Marketing Analytics',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      category: 'กลยุทธ์',
      tags: ['ROI', 'การตลาด', 'ลูกค้าสัมพันธ์'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/customer-gift-roi-calculation',
      sourceName: 'Marketing Metrics',
      featured: false
    },
    {
      id: '4',
      title: 'ของขวัญปีใหม่สำหรับพนักงาน: สร้าง Engagement ที่แท้จริง',
      excerpt: 'ของขวัญปีใหม่ที่ดีสามารถเพิ่มความผูกพันของพนักงานต่อองค์กร เรียนรู้วิธีเลือกของขวัญที่ตรงใจ',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'HR Specialist',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      category: 'HR',
      tags: ['พนักงาน', 'ปีใหม่', 'engagement'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/new-year-employee-gifts',
      sourceName: 'HR Today',
      featured: false
    },
    {
      id: '5',
      title: 'เทคนิคการออกแบบบรรจุภัณฑ์ของขวัญให้น่าประทับใจ',
      excerpt: 'การออกแบบบรรจุภัณฑ์ที่ดีสามารถเพิ่มมูลค่าของขวัญได้หลายเท่าตัว พร้อมเคล็ดลับจากผู้เชี่ยวชาญ',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'Package Design Expert',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      category: 'ดีไซน์',
      tags: ['บรรจุภัณฑ์', 'ดีไซน์', 'unboxing'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/gift-packaging-design',
      sourceName: 'Design Weekly',
      featured: false
    },
    {
      id: '6',
      title: 'ดิจิทัลกิฟต์ vs ของขวัญแบบดั้งเดิม: อะไรดีกว่า?',
      excerpt: 'เปรียบเทียบข้อดี-ข้อเสียของดิจิทัลกิฟต์และของขวัญแบบดั้งเดิม เพื่อเลือกให้เหมาะกับธุรกิจคุณ',
      content: 'เนื้อหาบทความเต็ม...',
      author: 'Digital Marketing',
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      category: 'เทคโนโลยี',
      tags: ['ดิจิทัล', 'เทคโนโลยี', 'เปรียบเทียบ'],
      imageUrl: '/images/gifts.png',
      sourceUrl: 'https://example.com/blog/digital-vs-traditional-gifts',
      sourceName: 'Tech Gift Guide',
      featured: false
    }
  ];

    // รวมข้อมูลจากทั้งสองแหล่ง
    return [...realBlogs, ...mockBlogs];
    
  } catch (error) {
    console.error('Error fetching external blogs:', error);
    
    // Fallback ไปใช้ mock data เมื่อมีข้อผิดพลาด
    const fallbackBlogs: BlogPost[] = [
      {
        id: '1',
        title: 'เทรนด์ของขวัญองค์กร 2024: ความยั่งยืนคือกุญแจสำคัญ',
        excerpt: 'การให้ของขวัญองค์กรในปี 2024 เน้นไปที่ความยั่งยืนและการลดผลกระทบต่อสิ่งแวดล้อม พร้อมเทรนด์ใหม่ที่น่าสนใจ',
        content: 'เนื้อหาบทความเต็ม...',
        author: 'Corporate Gift Expert',
        publishedAt: new Date().toISOString(),
        category: 'เทรนด์',
        tags: ['ความยั่งยืน', 'ของขวัญองค์กร', 'เทรนด์ 2024'],
        imageUrl: '/images/gifts.png',
        sourceUrl: 'https://example.com/blog/sustainable-corporate-gifts-2024',
        sourceName: 'Ruka Insights',
        featured: true
      }
    ];
    
    return fallbackBlogs;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '10');

    let blogs = await fetchExternalBlogs();

    // กรองตามหมวดหมู่
    if (category && category !== 'all') {
      blogs = blogs.filter(blog => 
        blog.category.toLowerCase() === category.toLowerCase()
      );
    }

    // กรองเฉพาะบทความเด่น
    if (featured === 'true') {
      blogs = blogs.filter(blog => blog.featured);
    }

    // จำกัดจำนวน
    blogs = blogs.slice(0, limit);

    // เรียงลำดับตามวันที่เผยแพร่
    blogs.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return NextResponse.json({
      success: true,
      data: blogs,
      total: blogs.length,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blog posts',
        data: []
      },
      { status: 500 }
    );
  }
}

// ฟังก์ชันสำหรับรีเฟรชข้อมูลด้วยตนเอง (สำหรับ admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'refresh') {
      // Force refresh จากแหล่งภายนอก
      const blogs = await fetchExternalBlogs();
      
      return NextResponse.json({
        success: true,
        message: 'Blog data refreshed successfully',
        total: blogs.length,
        lastUpdated: new Date().toISOString()
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 