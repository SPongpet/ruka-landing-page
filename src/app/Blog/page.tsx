import React from "react";
import Link from "next/link";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            Blog & Insights for Ruka
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            ไอเดีย เทรนด์ และเคล็ดลับของขวัญองค์กร
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed">
            อัปเดตไอเดีย & เทรนด์ของขวัญองค์กร พร้อมเคล็ดลับสร้าง โมเมนต์
            ให้แบรนด์คุณ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-[#A6171C]/20 mb-8">
              <div className="h-64 bg-gradient-to-br from-[#A6171C] to-[#8a1419] flex items-center justify-center">
                <span className="text-6xl text-white opacity-80">🎁</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Trending
                  </span>
                  <span className="text-[#4a3631] text-sm">
                    15 ธันวาคม 2024
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                  5 เทรนด์ของขวัญองค์กรที่จะฮิตใน 5 ปีข้างหน้า
                </h3>
                <p className="text-[#4a3631] leading-relaxed mb-6">
                  จากการวิเคราะห์พฤติกรรมผู้บริโภคและแนวโน้มตลาด
                  เราพบว่าของขวัญองค์กรใน 5 ปีข้างหน้าจะเน้นไปที่ความยั่งยืน,
                  การปรับแต่งเฉพาะบุคคล และ Digital Integration
                  ที่จะสร้างประสบการณ์ที่แตกต่าง...
                </p>
                <Link
                  href="#"
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
                  title: "เคล็ดลับการเลือกของขวัญองค์กรที่สร้าง WOW Moment",
                  excerpt:
                    "การสร้างความประทับใจไม่ใช่แค่ของขวัญที่แพง แต่เป็นการเลือกสินค้าที่ตรงใจและสร้างความทรงจำที่ดี พร้อมเทคนิคการนำเสนอที่จะทำให้แบรนด์คุณน่าจดจำ...",
                  date: "12 ธันวาคม 2024",
                  category: "เคล็ดลับ",
                  icon: "💡",
                },
                {
                  title: "ไอเดียของขวัญองค์กรแยกตามประเภทธุรกิจ",
                  excerpt:
                    "แต่ละธุรกิจมีเอกลักษณ์และกลุ่มเป้าหมายที่แตกต่างกัน มาดูไอเดียของขวัญที่เหมาะสมกับ Tech, Finance, Healthcare, Education และอื่นๆ...",
                  date: "10 ธันวาคม 2024",
                  category: "ไอเดีย",
                  icon: "🎯",
                },
                {
                  title: "เกร็ดความรู้: ประวัติของการให้ของขวัญในวัฒนธรรมไทย",
                  excerpt:
                    "ย้อนรอยประเพณีการให้ของขวัญในวัฒนธรรมไทย ตั้งแต่สมัยสุโขทัยจนถึงปัจจุบัน และวิธีการนำภูมิปัญญาดั้งเดิมมาปรับใช้กับของขวัญองค์กรยุคใหม่...",
                  date: "8 ธันวาคม 2024",
                  category: "เกร็ดความรู้",
                  icon: "📚",
                },
                {
                  title:
                    "วิธีสร้างโมเมนต์พิเศษผ่านการแกะของขวัญ (Unboxing Experience)",
                  excerpt:
                    "การแกะของขวัญคือช่วงเวลาทองคำที่แบรนด์จะสร้างความประทับใจ เรียนรู้วิธีการออกแบบบรรจุภัณฑ์และการนำเสนอที่จะทำให้ทุกการแกะกล่องกลายเป็นประสบการณ์ที่น่าจดจำ...",
                  date: "6 ธันวาคม 2024",
                  category: "โมเมนต์",
                  icon: "📦",
                },
                {
                  title: "เทรนด์ของฝาก vs ของขวัญ: ความแตกต่างที่คุณต้องรู้",
                  excerpt:
                    "หลายคนมักสับสนระหว่างของฝากกับของขวัญ ทำความเข้าใจความแตกต่าง วัตถุประสงค์ การใช้งาน และการเลือกให้เหมาะสมกับแต่ละโอกาส...",
                  date: "4 ธันวาคม 2024",
                  category: "ความรู้",
                  icon: "🤔",
                },
                {
                  title: "การคำนวณ ROI ของการให้ของขวัญองค์กร",
                  excerpt:
                    "ของขวัญองค์กรไม่ใช่แค่ค่าใช้จ่าย แต่เป็นการลงทุนเพื่อสร้างความสัมพันธ์ มาเรียนรู้วิธีการวัดผลและคำนวณ ROI ที่แท้จริงของกลยุทธ์การให้ของขวัญ...",
                  date: "2 ธันวาคม 2024",
                  category: "กลยุทธ์",
                  icon: "📊",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-[#A6171C]/20 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] flex items-center justify-center">
                    <span className="text-4xl opacity-70">{post.icon}</span>
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
                หมวดหมู่บทความ
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "เคล็ดลับ", count: 15 },
                  { name: "ไอเดีย", count: 12 },
                  { name: "เทรนด์", count: 8 },
                  { name: "เกร็ดความรู้", count: 6 },
                  { name: "โมเมนต์", count: 5 },
                  { name: "กลยุทธ์", count: 4 },
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

            {/* Popular Topics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                หัวข้อยอดนิยม
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "ของขวัญ End of Year ที่โดนใจ",
                    views: "1.2k",
                  },
                  {
                    title: "Digital Gift Card vs Traditional Gift",
                    views: "980",
                  },
                  {
                    title: "Sustainable Corporate Gifts",
                    views: "756",
                  },
                  {
                    title: "Personalization ยุคใหม่",
                    views: "642",
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
                    <span className="text-[#4a3631] text-xs">
                      👁️ {post.views} views
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruka Insights */}
            <div className="bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">
                💌 Ruka Insights Newsletter
              </h3>
              <p className="text-white/90 text-sm mb-4">
                รับไอเดียใหม่ๆ เทรนด์ล่าสุด
                และเคล็ดลับพิเศษส่งตรงถึงอีเมลคุณทุกสัปดาห์
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="w-full px-4 py-3 rounded-xl border-none focus:outline-none text-[#2d1a18]"
                />
                <button className="w-full bg-white text-[#A6171C] py-3 px-4 rounded-xl font-semibold hover:bg-[#F1C045] transition-colors duration-200">
                  🚀 Subscribe Now
                </button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                💬 ต้องการคำปรึกษา?
              </h3>
              <p className="text-[#4a3631] text-sm mb-4">
                ทีม Ruka พร้อมให้คำปรึกษาเรื่องของขวัญองค์กรฟรี!
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200"
              >
                ปรึกษาเลย
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
