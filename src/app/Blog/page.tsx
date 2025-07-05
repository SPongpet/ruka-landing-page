import React from "react";
import Link from "next/link";
// import { FiCalendar, FiUser, FiArrowRight, FiTrendingUp } from "react-icons/fi";

const BlogPage: React.FC = () => {
  // const featuredPost = {
  //   id: 1,
  //   title: "เทรนด์ของชำร่วยที่ได้รับความนิยมในปี 2024",
  //   excerpt:
  //     "ค้นพบเทรนด์ใหม่ของสินค้าของชำร่วยที่กำลังได้รับความนิยม และคาดการณ์แนวโน้มในอนาคต",
  //   author: "ทีม Ruka World",
  //   date: "15 มกราคม 2024",
  //   image: "/images/gifts.png",
  //   category: "เทรนด์",
  //   readTime: "5 นาที",
  // };

  // const blogPosts = [
  //   {
  //     id: 2,
  //     title: "วิธีเลือกของชำร่วยที่เหมาะสมสำหรับงานแต่งงาน",
  //     excerpt:
  //       "คำแนะนำในการเลือกของชำร่วยที่จะทำให้แขกได้รับความประทับใจและจดจำงานของคุณ",
  //     author: "น.ส. สมหญิง ใจดี",
  //     date: "12 มกราคม 2024",
  //     category: "คำแนะนำ",
  //     readTime: "7 นาที",
  //   },
  //   {
  //     id: 3,
  //     title: "ของชำร่วยองค์กร: การสร้างแบรนด์ผ่านของขวัญ",
  //     excerpt:
  //       "เรียนรู้วิธีการใช้ของชำร่วยเป็นเครื่องมือในการสร้างความจำและเสริมแบรนด์องค์กร",
  //     author: "คุณ ธุรกิจ เก่ง",
  //     date: "10 มกราคม 2024",
  //     category: "ธุรกิจ",
  //     readTime: "6 นาที",
  //   },
  //   {
  //     id: 4,
  //     title: "DIY: ไอเดียการตกแต่งของชำร่วยให้ดูพิเศษ",
  //     excerpt:
  //       "เทคนิคง่ายๆ ในการตกแต่งและปรับแต่งของชำร่วยให้ดูสวยงามและเป็นเอกลักษณ์",
  //     author: "คุณ สร้างสรรค์ ศิลป์",
  //     date: "8 มกราคม 2024",
  //     category: "DIY",
  //     readTime: "4 นาที",
  //   },
  //   {
  //     id: 5,
  //     title: "งบประมาณของชำร่วย: วางแผนให้คุ้มค่าที่สุด",
  //     excerpt:
  //       "วิธีการวางแผนงบประมาณสำหรับของชำร่วยให้ได้ผลลัพธ์ที่ดีที่สุดในราคาที่เหมาะสม",
  //     author: "คุณ ประหยัด เงิน",
  //     date: "5 มกราคม 2024",
  //     category: "การเงิน",
  //     readTime: "5 นาที",
  //   },
  //   {
  //     id: 6,
  //     title: "ของชำร่วยเพื่อสิ่งแวดล้อม: Eco-Friendly Gifts",
  //     excerpt: "แนะนำสินค้าของชำร่วยที่เป็นมิตรกับสิ่งแวดล้อมและยั่งยืน",
  //     author: "คุณ รักษ์โลก",
  //     date: "3 มกราคม 2024",
  //     category: "สิ่งแวดล้อม",
  //     readTime: "6 นาที",
  //   },
  // ];

  // const categories = [
  //   { name: "ทั้งหมด", count: 15 },
  //   { name: "เทรนด์", count: 5 },
  //   { name: "คำแนะนำ", count: 7 },
  //   { name: "ธุรกิจ", count: 3 },
  //   { name: "DIY", count: 4 },
  //   { name: "การเงิน", count: 2 },
  //   { name: "สิ่งแวดล้อม", count: 3 },
  // ];

  // const getCategoryColor = (category: string) => {
  //   const colors: { [key: string]: string } = {
  //     เทรนด์: "bg-ruby text-white",
  //     คำแนะนำ: "bg-sunny text-ruby",
  //     ธุรกิจ: "bg-blue-500 text-white",
  //     DIY: "bg-green-500 text-white",
  //     การเงิน: "bg-purple-500 text-white",
  //     สิ่งแวดล้อม: "bg-emerald-500 text-white",
  //   };
  //   return colors[category] || "bg-gray-500 text-white";
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            บล็อก
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            Blog & News
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed">
            อัปเดตข่าวสาร เทรนด์ และความรู้เกี่ยวกับสินค้าของชำร่วย
            รวมถึงเคล็ดลับในการเลือกของชำร่วยที่เหมาะสม
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-[#A6171C]/20 mb-8">
              <div className="h-64 bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] flex items-center justify-center">
                <span className="text-6xl opacity-60">📝</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-[#4a3631] text-sm">
                    15 ธันวาคม 2024
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                  เทรนด์ของชำร่วยปี 2024: สิ่งที่ควรรู้
                </h3>
                <p className="text-[#4a3631] leading-relaxed mb-6">
                  ในปี 2024
                  เทรนด์ของชำร่วยเน้นไปที่ความยั่งยืนและการปรับแต่งเฉพาะบุคคล
                  สินค้าที่เป็นมิตรต่อสิ่งแวดล้อมและมีประโยชน์ใช้สอยจริงได้รับความนิยมเพิ่มขึ้น...
                </p>
                <Link
                  href="/blog/trend-2024"
                  className="text-[#A6171C] hover:text-[#8a1419] font-semibold transition-colors"
                >
                  อ่านต่อ →
                </Link>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "วิธีเลือกของชำร่วยที่เหมาะสมกับงบประมาณ",
                  excerpt:
                    "การเลือกของชำร่วยไม่ใช่เรื่องง่าย เราจะแนะนำวิธีการเลือกที่เหมาะสมกับงบประมาณและเป้าหมาย...",
                  date: "10 ธันวาคม 2024",
                  category: "คำแนะนำ",
                },
                {
                  title: "5 ไอเดียของชำร่วยสำหรับงานแต่งงาน",
                  excerpt:
                    "ของชำร่วยงานแต่งงานที่จะทำให้แขกผู้มาร่วมงานประทับใจและจดจำได้นานๆ...",
                  date: "8 ธันวาคม 2024",
                  category: "ไอเดีย",
                },
                {
                  title: "การดูแลรักษาสินค้าของชำร่วยให้ใช้งานได้นาน",
                  excerpt:
                    "เคล็ดลับการดูแลรักษาสินค้าของชำร่วยต่างๆ เพื่อให้สามารถใช้งานได้นานและคงคุณภาพ...",
                  date: "5 ธันวาคม 2024",
                  category: "การดูแล",
                },
                {
                  title: "ประวัติและวิวัฒนาการของสินค้าของชำร่วย",
                  excerpt:
                    "ย้อนรอยประวัติศาสตร์ของสินค้าของชำร่วยตั้งแต่อดีตจนถึงปัจจุบัน และแนวโน้มในอนาคต...",
                  date: "3 ธันวาคม 2024",
                  category: "ประวัติ",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-[#A6171C]/20 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] flex items-center justify-center">
                    <span className="text-4xl opacity-60">📄</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-[#F1C045] text-[#A6171C] px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-[#4a3631] text-xs">
                        {post.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#2d1a18] mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-[#4a3631] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="text-[#A6171C] hover:text-[#8a1419] font-semibold text-sm transition-colors"
                    >
                      อ่านเพิ่มเติม →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                หมวดหมู่
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "คำแนะนำ", count: 12 },
                  { name: "ไอเดีย", count: 8 },
                  { name: "เทรนด์", count: 6 },
                  { name: "การดูแล", count: 4 },
                  { name: "ประวัติ", count: 3 },
                ].map((category, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex justify-between items-center text-[#4a3631] hover:text-[#A6171C] transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-[#A6171C]/10 text-[#A6171C] px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                บทความล่าสุด
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "เคล็ดลับการเลือกสีของชำร่วย",
                    date: "2 ธันวาคม 2024",
                  },
                  {
                    title: "ของชำร่วยเพื่อสิ่งแวดล้อม",
                    date: "30 พฤศจิกายน 2024",
                  },
                  {
                    title: "การจัดเก็บของชำร่วยอย่างถูกวิธี",
                    date: "28 พฤศจิกายน 2024",
                  },
                ].map((post, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-[#A6171C]/10 last:border-b-0"
                  >
                    <Link
                      href="#"
                      className="block text-[#2d1a18] hover:text-[#A6171C] font-semibold text-sm mb-1 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <span className="text-[#4a3631] text-xs">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                รับข่าวสาร
              </h3>
              <p className="text-[#4a3631] text-sm mb-4">
                สมัครรับข่าวสารและบทความใหม่ๆ ส่งตรงถึงอีเมลของคุณ
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                />
                <button className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200">
                  สมัครรับข่าวสาร
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
