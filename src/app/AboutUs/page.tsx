import React from "react";
import { FiAward, FiHeart, FiTrendingUp, FiUsers } from "react-icons/fi";

const AboutUsPage: React.FC = () => {
  const values = [
    {
      icon: <FiHeart className="text-ruby" size={28} />,
      title: "ใส่ใจคุณภาพ",
      description: "เลือกสรรวัสดุชั้นเยี่ยมและการผลิตที่มีมาตรฐานสูง",
    },
    {
      icon: <FiAward className="text-sunny" size={28} />,
      title: "ความเป็นเลิศ",
      description: "มุ่งมั่นสร้างสรรค์ผลงานที่โดดเด่นและน่าประทับใจ",
    },
    {
      icon: <FiUsers className="text-ruby" size={28} />,
      title: "ลูกค้าคือใจกลาง",
      description: "ให้บริการที่เข้าใจและตอบสนองความต้องการจริง",
    },
    {
      icon: <FiTrendingUp className="text-sunny" size={28} />,
      title: "นวัตกรรม",
      description: "ติดตามเทรนด์และพัฒนาผลิตภัณฑ์ใหม่ๆ อย่างต่อเนื่อง",
    },
  ];

  const stats = [
    { number: "5,000+", label: "ลูกค้าที่ไว้วางใจ" },
    { number: "10+", label: "ปีของประสบการณ์" },
    { number: "100,000+", label: "ชิ้นงานที่ส่งมอบ" },
    { number: "95%", label: "ลูกค้าพึงพอใจ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            เกี่ยวกับเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            About Ruka World
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed">
            มากกว่า 15 ปีแห่งประสบการณ์ในการผลิตและจำหน่ายสินค้าของชำร่วย
            เราคือผู้นำในการสร้างสรรค์ผลิตภัณฑ์คุณภาพที่สื่อสารคุณค่าแบรนด์ของคุณ
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
              ประวัติความเป็นมา
            </h3>
            <p className="text-[#4a3631] leading-relaxed mb-4">
              บริษัท Ruka World ก่อตั้งขึ้นในปี 2008
              ด้วยวิสัยทัศน์ในการสร้างสรรค์สินค้าของชำร่วย
              ที่มีคุณภาพและสะท้อนอัตลักษณ์ของแต่ละแบรนด์
            </p>
            <p className="text-[#4a3631] leading-relaxed mb-4">
              เริ่มต้นจากทีมงานเล็กๆ ที่มีประสบการณ์ในอุตสาหกรรมการผลิต
              เราได้พัฒนาตัวเองให้เป็นหนึ่งในผู้นำด้านการผลิตสินค้าของชำร่วยในประเทศไทย
            </p>
            <p className="text-[#4a3631] leading-relaxed">
              วันนี้เรามีลูกค้ามากกว่า 2,000 ราย ทั้งในประเทศและต่างประเทศ
              และยังคงมุ่งมั่นในการพัฒนาผลิตภัณฑ์ใหม่ๆ
              เพื่อตอบสนองความต้องการที่หลากหลาย
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
              วิสัยทัศน์และพันธกิจ
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                  วิสัยทัศน์
                </h4>
                <p className="text-[#4a3631] leading-relaxed">
                  เป็นผู้นำในการสร้างสรรค์สินค้าของชำร่วยที่มีคุณค่า
                  เพื่อยกระดับความสัมพันธ์ทางธุรกิจและสังคม
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                  พันธกิจ
                </h4>
                <ul className="space-y-2 text-[#4a3631]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A6171C] mt-1">•</span>
                    <span>
                      ผลิตสินค้าคุณภาพพรีเมี่ยมด้วยเทคโนโลยีที่ทันสมัย
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A6171C] mt-1">•</span>
                    <span>ให้บริการครบวงจรตั้งแต่ออกแบบไปจนถึงการผลิต</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A6171C] mt-1">•</span>
                    <span>สร้างคุณค่าร่วมกับลูกค้าและพันธมิตรทางธุรกิจ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#A6171C]/20 mb-16">
          <h3 className="text-3xl font-bold text-[#2d1a18] text-center mb-12">
            คุณค่าองค์กร
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-bold text-[#2d1a18] mb-3">คุณภาพ</h4>
              <p className="text-[#4a3631] text-sm">
                มุ่งมั่นผลิตสินค้าที่มีมาตรฐานสูงสุด
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
                ความไว้วางใจ
              </h4>
              <p className="text-[#4a3631] text-sm">
                สร้างความมั่นใจให้ลูกค้าด้วยความโปร่งใส
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
                นวัตกรรม
              </h4>
              <p className="text-[#4a3631] text-sm">
                พัฒนาผลิตภัณฑ์ใหม่อย่างต่อเนื่อง
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-bold text-[#2d1a18] mb-3">
                ความรับผิดชอบ
              </h4>
              <p className="text-[#4a3631] text-sm">
                ตอบสนองความต้องการลูกค้าอย่างเต็มที่
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "15+", label: "ปีประสบการณ์", desc: "ในอุตสาหกรรม" },
            { number: "2000+", label: "ลูกค้า", desc: "ทั่วประเทศ" },
            { number: "50+", label: "ประเภทสินค้า", desc: "หลากหลาย" },
            { number: "99%", label: "ความพึงพอใจ", desc: "ของลูกค้า" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#A6171C]/20"
            >
              <div className="text-3xl font-bold text-[#A6171C] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#2d1a18] mb-1">
                {stat.label}
              </div>
              <div className="text-[#4a3631] text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#A6171C]/20">
          <h3 className="text-3xl font-bold text-[#2d1a18] text-center mb-12">
            ทีมงานผู้เชี่ยวชาญ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "คุณสมชาย รักงาน",
                position: "CEO & Founder",
                experience: "20+ ปี ในอุตสาหกรรมการผลิต",
              },
              {
                name: "คุณปราณี สร้างสรรค์",
                position: "Head of Design",
                experience: "15+ ปี ในการออกแบบผลิตภัณฑ์",
              },
              {
                name: "คุณวิทยา คุณภาพ",
                position: "Quality Manager",
                experience: "12+ ปี ในการควบคุมคุณภาพ",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#A6171C] to-[#8a1419] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                  {member.name.charAt(2)}
                </div>
                <h4 className="text-lg font-bold text-[#2d1a18] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#A6171C] font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-[#4a3631] text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
