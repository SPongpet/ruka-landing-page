import React from "react";
import Link from "next/link";
import {
  FiPackage,
  FiEdit,
  FiTruck,
  FiHeadphones,
  FiGift,
  FiUsers,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: <FiGift className="text-ruby" size={40} />,
      title: "สินค้าของชำร่วยคุณภาพ",
      description:
        "คัดสรรสินค้าคุณภาพพรีเมี่ยมจากทั่วโลก เหมาะสำหรับองค์กรทุกขนาด",
      features: ["สินค้านำเข้าคุณภาพสูง", "หลากหลายหมวดหมู่", "ราคาที่เหมาะสม"],
      cta: "ดูสินค้า",
      link: "/products",
    },
    {
      icon: <FiEdit className="text-sunny" size={40} />,
      title: "การออกแบบและปรับแต่ง",
      description:
        "ออกแบบและปรับแต่งสินค้าตามความต้องการ พร้อมโลโก้และข้อความพิเศษ",
      features: ["ออกแบบโลโก้", "ปรับแต่งสี", "เพิ่มข้อความพิเศษ"],
      cta: "ปรึกษาดีไซน์",
      link: "/contact",
    },
    {
      icon: <FiTruck className="text-ruby" size={40} />,
      title: "บริการจัดส่งทั่วประเทศ",
      description: "ระบบจัดส่งที่เชื่อถือได้ ส่งถึงที่หมายปลอดภัยและรวดเร็ว",
      features: ["จัดส่งทั่วประเทศ", "บรรจุภัณฑ์ปลอดภัย", "ติดตามสถานะได้"],
      cta: "ดูรายละเอียด",
      link: "/contact",
    },
    {
      icon: <FiHeadphones className="text-sunny" size={40} />,
      title: "คำปรึกษาจากผู้เชี่ยวชาญ",
      description:
        "ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาและแนะนำสินค้าที่เหมาะสมที่สุด",
      features: ["ปรึกษาฟรี", "แนะนำสินค้า", "วางแผนงบประมาณ"],
      cta: "ปรึกษาเลย",
      link: "/contact",
    },
  ];

  const additionalServices = [
    {
      icon: <FiUsers className="text-ruby" size={24} />,
      title: "บริการสำหรับองค์กร",
      description: "แพ็คเกจพิเศษสำหรับองค์กรขนาดใหญ่",
    },
    {
      icon: <FiDollarSign className="text-sunny" size={24} />,
      title: "ราคาพิเศษสำหรับสั่งจำนวนมาก",
      description: "ส่วนลดพิเศษเมื่อสั่งซื้อในปริมาณมาก",
    },
    {
      icon: <FiClock className="text-ruby" size={24} />,
      title: "บริการด่วนพิเศษ",
      description: "รับงานด่วนภายใน 48 ชั่วโมง",
    },
    {
      icon: <FiPackage className="text-sunny" size={24} />,
      title: "บรรจุภัณฑ์พิเศษ",
      description: "กล่องและบรรจุภัณฑ์สวยงามตามโอกาส",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "ปรึกษาและวางแผน",
      description: "พูดคุยเกี่ยวกับความต้องการและงบประมาณ",
    },
    {
      step: "02",
      title: "เลือกสินค้า",
      description: "แนะนำและเลือกสินค้าที่เหมาะสมที่สุด",
    },
    {
      step: "03",
      title: "ออกแบบและปรับแต่ง",
      description: "ออกแบบโลโก้และปรับแต่งตามความต้องการ",
    },
    {
      step: "04",
      title: "ผลิตและจัดส่ง",
      description: "ผลิตสินค้าและจัดส่งถึงที่หมายปลอดภัย",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            บริการของเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            Our Services
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed">
            เราให้บริการครบวงจรตั้งแต่การออกแบบไปจนถึงการผลิตและจัดส่ง
            ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรม
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="text-6xl text-[#A6171C] mb-6">🎨</div>
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
              ออกแบบและปรับแต่ง
            </h3>
            <p className="text-[#4a3631] leading-relaxed mb-6">
              ทีมดีไซเนอร์มืออาชีพจะช่วยออกแบบสินค้าที่สะท้อนอัตลักษณ์ของแบรนด์คุณ
              พร้อมปรับแต่งตามความต้องการเฉพาะ
            </p>
            <ul className="space-y-2 text-[#4a3631]">
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>ออกแบบโลโก้และกราฟิก</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>เลือกสีและวัสดุ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>สร้างแบบ 3D และตัวอย่าง</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="text-6xl text-[#A6171C] mb-6">🏭</div>
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
              ผลิตและควบคุมคุณภาพ
            </h3>
            <p className="text-[#4a3631] leading-relaxed mb-6">
              โรงงานผลิตที่ได้มาตรฐานสากล พร้อมระบบควบคุมคุณภาพอย่างเข้มงวด
              เพื่อให้แน่ใจว่าสินค้าทุกชิ้นมีคุณภาพสูงสุด
            </p>
            <ul className="space-y-2 text-[#4a3631]">
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>โรงงานมาตรฐาน ISO 9001</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>ระบบ QC ทุกขั้นตอน</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>ทดสอบความทนทานและความปลอดภัย</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="text-6xl text-[#A6171C] mb-6">📦</div>
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
              บรรจุภัณฑ์และจัดส่ง
            </h3>
            <p className="text-[#4a3631] leading-relaxed mb-6">
              บริการบรรจุภัณฑ์ที่สวยงามและปลอดภัย พร้อมระบบจัดส่งที่เชื่อถือได้
              ทั่วประเทศและต่างประเทศ
            </p>
            <ul className="space-y-2 text-[#4a3631]">
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>บรรจุภัณฑ์พรีเมี่ยม</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>จัดส่งปลอดภัยทั่วไทย</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>ติดตามพัสดุแบบ Real-time</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <div className="text-6xl text-[#A6171C] mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
              ปรึกษาและวางแผน
            </h3>
            <p className="text-[#4a3631] leading-relaxed mb-6">
              ที่ปรึกษาผู้เชี่ยวชาญพร้อมช่วยวิเคราะห์ความต้องการ
              และแนะนำสินค้าที่เหมาะสมกับงบประมาณและเป้าหมายของคุณ
            </p>
            <ul className="space-y-2 text-[#4a3631]">
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>วิเคราะห์ความต้องการ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>แนะนำสินค้าที่เหมาะสม</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A6171C] mt-1">•</span>
                <span>วางแผนงบประมาณ</span>
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
              รับผลิตด่วนสำหรับงานเร่งด่วน ภายใน 7-14 วัน
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
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20 text-center">
            <div className="text-4xl text-[#A6171C] mb-4">🔄</div>
            <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
              บริการหลังการขาย
            </h4>
            <p className="text-[#4a3631] text-sm">
              รับประกันคุณภาพ 1 ปี พร้อมบริการซ่อมแซมและแทนที่
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
            พร้อมเริ่มโครงการของคุณแล้วหรือยัง?
          </h3>
          <p className="text-[#4a3631] mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรีและใบเสนอราคาโดยไม่มีค่าใช้จ่าย
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              ปรึกษาโครงการ
            </Link>
            <Link
              href="tel:02-123-4567"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              โทรปรึกษาทันที
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
