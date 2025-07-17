import React from "react";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            บริการของเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            Our Services
          </h2>
          <p className="text-[#4a3631] max-w-4xl mx-auto text-lg leading-relaxed">
            ครบวงจร ตั้งแต่ไอเดียในหัว ไปจนถึงของขวัญพรีเมียมถึงมือผู้รับ
            ยกระดับประสบการณ์ให้{" "}
            <span className="text-[#A6171C] font-bold">“ง่ายแค่ปลายนิ้ว”</span>
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Co-Create Design */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="flex items-center gap-4">
              <div className="text-6xl text-[#A6171C] mb-6">🎨</div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                Co-Create Design
              </h3>
            </div>
            <ul className="space-y-3 text-[#4a3631] mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Free Logo & Graphic Design</strong>
                  <br />
                  <span className="text-sm">ออกแบบโลโก้ +งานกราฟิคฟรี</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Authentic Pantone Color Selection</strong>
                  <br />
                  <span className="text-sm">เลือกสีโลโก้จริงจาก Pantone</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Realistic Pre-Production Preview</strong>
                  <br />
                  <span className="text-sm">ดูตัวอย่างจริงก่อนสั่ง</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Production & Quality Elevation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="flex items-center gap-4">
              <div className="text-6xl text-[#A6171C] mb-6">🏭</div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                Production & Quality Elevation
              </h3>
            </div>
            <ul className="space-y-3 text-[#4a3631] mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>End-to-End QC Process</strong>
                  <br />
                  <span className="text-sm">ระบบ QC ทุกขั้นตอน</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Drop Testing & Safety Checks</strong>
                  <br />
                  <span className="text-sm">ทดสอบความทนทานและความปลอดภัย</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Global Manufacturing Partnerships</strong>
                  <br />
                  <span className="text-sm">พันธมิตรโรงงานสากล</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Pack & Ship */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="flex items-center gap-4">
              <div className="text-6xl text-[#A6171C] mb-6">📦</div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                Pack & Ship
              </h3>
            </div>
            <ul className="space-y-3 text-[#4a3631] mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Premium Unboxing Experience</strong>
                  <br />
                  <span className="text-sm">
                    กล่องดีไซน์เกรดพรีเมียม ทนทาน แต่ใช้ง่าย
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Fast Nationwide Delivery</strong>
                  <br />
                  <span className="text-sm">
                    จัดส่งรวดเร็ว ครอบคลุมทุกจังหวัด
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Real-Time Tracking</strong>
                  <br />
                  <span className="text-sm">
                    ดูสถานะพัสดุได้ 24/7 ผ่าน Dashboard
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Consult & Plan */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="flex items-center gap-4">
              <div className="text-6xl text-[#A6171C] mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                Consult & Plan
              </h3>
            </div>
            <ul className="space-y-3 text-[#4a3631] mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Brand Discovery Lab</strong>
                  <br />
                  <span className="text-sm">
                    เจาะลึก Pain Point ลูกค้า เพื่อกำหนดคอนเซ็ปต์ของขวัญที่
                    &quot;ใช่&quot;
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Curated Gift Strategy</strong>
                  <br />
                  <span className="text-sm">
                    Match ไอเดียสินค้า ให้ตรงโจทย์ ทั้งดีไซน์ ฟังก์ชัน และ Mood
                    & Tone
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6171C] mt-1">•</span>
                <div>
                  <strong>Smart Budget Blueprint</strong>
                  <br />
                  <span className="text-sm">
                    วางแผนงบประมาณแบบ คาดการณ์ Impact พร้อมปรับจูนให้คุ้ม
                    ค่าที่สุด
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#A6171C]/20 mb-16">
          <h3 className="text-3xl font-bold text-[#2d1a18] text-center mb-12">
            ขั้นตอนการทำงาน
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
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

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20 text-center">
            <div className="text-4xl text-[#A6171C] mb-4">⚡</div>
            <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
              บริการด่วนพิเศษ
            </h4>
            <p className="text-[#4a3631] text-sm">
              รับผลิตด่วน 15-20วัน สำหรับสินค้าบางประเภท
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20 text-center">
            <div className="text-4xl text-[#A6171C] mb-4">💡</div>
            <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
              พัฒนาสินค้าใหม่
            </h4>
            <p className="text-[#4a3631] text-sm">
              ร่วมพัฒนาสินค้าใหม่ตามแนวคิดและความต้องการเฉพาะ
            </p>
          </div>
          {/* <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20 text-center">
            <div className="text-4xl text-[#A6171C] mb-4">🛡️</div>
            <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
              รับประกันสินค้า
            </h4>
            <p className="text-[#4a3631] text-sm">** ตามเงื่อนไขที่กำหนด</p>
          </div> */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20 text-center">
            <div className="text-4xl text-[#A6171C] mb-4">🤝</div>
            <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
              บริการหลังการขาย
            </h4>
            <p className="text-[#4a3631] text-sm">
              รับประกันสินค้า** ตามเงื่อนไขที่กำหนด
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
            พร้อมเริ่มโครงการของคุณแล้วหรือยัง?
          </h3>
          <p className="text-[#4a3631] mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและข้อเสนอพิเศษ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              💡 เริ่มโปรเจกต์กับเรา
            </Link>
            <Link
              href="tel:082-113-8914"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              📞 โทรหา Ruka เดี๋ยวนี้
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
