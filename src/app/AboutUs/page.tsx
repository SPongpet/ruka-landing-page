import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            เกี่ยวกับเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            About Ruka World
          </h2>
        </div>

        {/* Our Why Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#A6171C]/20 mb-16">
          <h3 className="text-3xl font-bold text-[#2d1a18] text-center mb-8">
            Our Why เหตุผลที่ Ruka เกิดมา?
          </h3>
          <div className="text-center mb-8">
            <p className="text-xl text-[#A6171C] font-semibold mb-6">
              &ldquo;ทำไมของขวัญแบรนด์ส่วนใหญ่ถึงกลายเป็นแค่ของกองบนโต๊ะทำงาน?&rdquo;
            </p>
            <p className="text-lg text-[#4a3631] mb-6">
              เราถามคำถามนี้ตั้งแต่วันแรก
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-[#4a3631] leading-relaxed mb-6">
              <strong>Ruka จึงเกิดขึ้นเพื่อพลิกนิยาม ของขวัญองค์กร</strong> จาก{" "}
              <span className="text-[#A6171C]">&ldquo;ของแถม&rdquo;</span> ไปสู่
            </p>
            <p className="text-2xl font-bold text-[#A6171C] mb-8">
              &ldquo;ประสบการณ์ที่สะท้อนตัวตนแบรนด์&rdquo;
            </p>
            <p className="text-lg text-[#4a3631] leading-relaxed">
              เลือก Ruka แล้วมาร่วมเปลี่ยนการ{" "}
              <span className="font-bold text-[#A6171C]">
                &ldquo;Give&rdquo;
              </span>{" "}
              ให้กลายเป็น{" "}
              <span className="font-bold text-[#A6171C]">
                &ldquo;Elevate&rdquo;
              </span>{" "}
              ไปด้วยกัน
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-[#A6171C]/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">Vision</h3>
              <p className="text-[#4a3631] leading-relaxed text-lg">
                ยกระดับการให้ของขวัญให้กลายเป็นสื่อคุณค่าที่แข็งแรงที่สุด
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
                Mission
              </h3>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
                S-H-I-N-E
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                    S – Story-First Design
                  </h4>
                  <p className="text-[#4a3631] text-sm">
                    ทุกชิ้นต้องเล่าเรื่องแบรนด์ได้ตั้งแต่แรกเห็น
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                    H – Hyper-Transparent Flow
                  </h4>
                  <p className="text-[#4a3631] text-sm">
                    เห็นสถานะงานเรียลไทม์ ไม่ต้องทวง ไม่ต้องเดา
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                    I – Impact Over Quantity
                  </h4>
                  <p className="text-[#4a3631] text-sm">
                    เน้นคุณค่าจริง ใช้ประโยชน์ได้ ไม่ผลิตของเก็บฝุ่น
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                    N – Next-Gen Innovation
                  </h4>
                  <p className="text-[#4a3631] text-sm">
                    ทดลองวัสดุ–เทคโนโลยีใหม่เสมอ เพื่อให้ชิ้นงานล้ำตลาด
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#A6171C] mb-2">
                    E – Elevate Every Touch
                  </h4>
                  <p className="text-[#4a3631] text-sm">
                    ยกระดับตั้งแต่แพ็กเกจ → Unbox → After-Sales Experience
                  </p>
                </div>
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
        {/* <div className="grid md:grid-cols-4 gap-8 mb-16">
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
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsPage;
