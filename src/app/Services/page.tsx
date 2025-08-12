import React from "react";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Red Background */}
      <div className="bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] pt-24 pb-16">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              บริการของเรา
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#F1C045] font-bold mb-8">
              Our Services
            </h2>
            <p className="text-white max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
              ครบวงจร ตั้งแต่ไอเดียในหัว ไปจนถึงของขวัญพรีเมียมถึงมือผู้รับ
              ยกระดับประสบการณ์ให้{" "}
            </p>
            <p>
              <span className="text-[#F1C045] font-bold">
                &ldquo;ง่ายแค่ปลายนิ้ว&rdquo;
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
        <div className="container mx-auto px-4">
          {/* Main Services - 4 Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl" />
              {/* Co-Create Design */}
              <div className="relative bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#A6171C] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#F1C045] rounded-full ml-1"></div>
                    <div className="w-2 h-2 bg-[#CD853F] rounded-full ml-1"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Co-Create Design
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Free Logo & Graphic Design
                    </h4>
                    <p className="text-sm opacity-90">
                      ออกแบบโลโก้ +งานกราฟิคฟรี
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Authentic Pantone Color Selection
                    </h4>
                    <p className="text-sm opacity-90">
                      เลือกสีโลโก้จริงจาก Pantone
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Realistic Pre-Production Preview
                    </h4>
                    <p className="text-sm opacity-90">ดูตัวอย่างจริงก่อนสั่ง</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl" />
              {/* Production & Quality Elevation */}
              <div className="relative bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#A6171C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                      <path d="M19 11L19.5 13.5L22 14L19.5 14.5L19 17L18.5 14.5L16 14L18.5 13.5L19 11Z" />
                      <path d="M5 11L5.5 13.5L8 14L5.5 14.5L5 17L4.5 14.5L2 14L4.5 13.5L5 11Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Production & Quality Elevation
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • End-to-End QC Process
                    </h4>
                    <p className="text-sm opacity-90">ระบบ QC ทุกขั้นตอน</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Drop Testing & Safety Checks
                    </h4>
                    <p className="text-sm opacity-90">
                      ทดสอบความทนทานและความปลอดภัย
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Global Manufacturing Partnerships
                    </h4>
                    <p className="text-sm opacity-90">พันธมิตรโรงงานสากล</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl" />
              {/* Pack & Ship */}
              <div className="relative bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#A6171C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A3,3 0 0,1 15,5V7H20A1,1 0 0,1 21,8V19A1,1 0 0,1 20,20H4A1,1 0 0,1 3,19V8A1,1 0 0,1 4,7H9V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V7H13V5A1,1 0 0,0 12,4Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Pack & Ship
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Premium Unboxing Experience
                    </h4>
                    <p className="text-sm opacity-90">
                      กล่องดีไซน์เกรดพรีเมียม ทนทาน แต่ใช้ง่าย
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Fast Nationwide Delivery
                    </h4>
                    <p className="text-sm opacity-90">
                      จัดส่งรวดเร็ว ครอบคลุมทุกจังหวัด
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Real-Time Tracking
                    </h4>
                    <p className="text-sm opacity-90">
                      ดูสถานะพัสดุได้ 24/7 ผ่าน Dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl" />
              {/* Consult & Plan */}
              <div className="relative bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-3xl p-8 shadow-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#A6171C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Consult & Plan
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Brand Discovery Lab
                    </h4>
                    <p className="text-sm opacity-90">
                      เจาะลึก Pain Point ลูกค้า
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Curated Gift Strategy
                    </h4>
                    <p className="text-sm opacity-90">
                      Match ไอเดียสินค้า ให้ตรงโจทย์ ทั้งดีไซน์ ฟังก์ชัน และ
                      Mood & Tone
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      • Smart Budget Blueprint
                    </h4>
                    <p className="text-sm opacity-90">
                      วางแผนงบประมาณแบบ คาดการณ์ Impact
                      พร้อมปรับจูนให้คุ้มค่าที่สุด
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2d1a18] text-center mb-8">
              ขั้นตอนการทำงาน
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {[
                { step: "1", title: "ปรึกษา", desc: "รับฟังความต้องการ" },
                { step: "2", title: "ออกแบบ", desc: "สร้างแบบและตัวอย่าง" },
                { step: "3", title: "อนุมัติ", desc: "ตรวจสอบและแก้ไข" },
                { step: "4", title: "ผลิต", desc: "เริ่มกระบวนการผลิต" },
                { step: "5", title: "จัดส่ง", desc: "ตรวจสอบและส่งมอบ" },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#A6171C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#2d1a18] mb-2">
                    {process.title}
                  </h4>
                  <p className="text-[#4a3631] text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-b from-[#A6171C] to-[#de2a29] rounded-3xl p-8 md:p-12 text-center text-white">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* บริการด่วนพิเศษ */}
              <div className="bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-2xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-3">บริการด่วนพิเศษ</h4>
                <p className="text-sm">รับผลิตด่วน 15-20วัน</p>
                <p className="text-sm">สำหรับสินค้าบางประเภท</p>
              </div>

              {/* พัฒนาสินค้าใหม่ */}
              <div className="bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-2xl p-6">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl font-bold mb-3">พัฒนาสินค้าใหม่</h4>
                <p className="text-sm">ร่วมพัฒนาสินค้าใหม่ตามแนวคิด</p>
                <p className="text-sm">และความต้องการเฉพาะ</p>
              </div>

              {/* บริการหลังการขาย */}
              <div className="bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-2xl p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-3">บริการหลังการขาย</h4>
                <p className="text-sm">รับประกันสินค้า</p>
                <p className="text-sm">** ตามเงื่อนไขที่กำหนด</p>
              </div>
            </div>
          </div>

          {/* CTA Text */}
          <div className="m-10 justify-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              พร้อมเริ่มโครงการของคุณแล้วหรือยัง?
            </h3>
            <p className="text-lg md:text-xl opacity-90">
              ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและข้อเสนอพิเศษ
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="m-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#A6171C] hover:bg-[#A6171C] text-[#FFFFFF] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              เริ่มโปรเจกต์กับเรา
            </Link>
            <Link
              href="tel:082-113-8914"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              โทร 082-113-8914
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
