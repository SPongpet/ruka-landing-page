import { NextResponse } from 'next/server';

interface BlogCategory {
  name: string;
  count: number;
  icon: string;
}

interface BlogPost {
  category: string;
}

export async function GET() {
  try {
    // ดึงข้อมูลหมวดหมู่จาก API blog-posts และนับจำนวน
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const blogsResponse = await fetch(`${baseUrl}/api/blog-posts`);
    const blogsData = await blogsResponse.json();

    if (!blogsData.success) {
      throw new Error('Failed to fetch blog posts');
    }

    // นับจำนวนบทความในแต่ละหมวดหมู่
    const categoryCount: { [key: string]: number } = {};
    blogsData.data.forEach((blog: BlogPost) => {
      categoryCount[blog.category] = (categoryCount[blog.category] || 0) + 1;
    });

    // สร้างรายการหมวดหมู่พร้อมไอคอน
    const categories: BlogCategory[] = [
      { name: 'ทั้งหมด', count: blogsData.data.length, icon: '📚' },
      { name: 'เทรนด์', count: categoryCount['เทรนด์'] || 0, icon: '📈' },
      { name: 'ไอเดีย', count: categoryCount['ไอเดีย'] || 0, icon: '💡' },
      { name: 'กลยุทธ์', count: categoryCount['กลยุทธ์'] || 0, icon: '🎯' },
      { name: 'HR', count: categoryCount['HR'] || 0, icon: '👥' },
      { name: 'ดีไซน์', count: categoryCount['ดีไซน์'] || 0, icon: '🎨' },
      { name: 'เทคโนโลยี', count: categoryCount['เทคโนโลยี'] || 0, icon: '💻' },
    ];

    return NextResponse.json({
      success: true,
      data: categories,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching blog categories:', error);
    
    // Fallback data ในกรณีที่ไม่สามารถดึงข้อมูลได้
    const fallbackCategories: BlogCategory[] = [
      { name: 'ทั้งหมด', count: 0, icon: '📚' },
      { name: 'เทรนด์', count: 0, icon: '📈' },
      { name: 'ไอเดีย', count: 0, icon: '💡' },
      { name: 'กลยุทธ์', count: 0, icon: '🎯' },
      { name: 'HR', count: 0, icon: '👥' },
      { name: 'ดีไซน์', count: 0, icon: '🎨' },
      { name: 'เทคโนโลยี', count: 0, icon: '💻' },
    ];

    return NextResponse.json({
      success: true,
      data: fallbackCategories,
      lastUpdated: new Date().toISOString()
    });
  }
} 