import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Red Background */}
      <div className="bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] pt-24 pb-16">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              เกี่ยวกับเรา
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#F1C045] font-bold">
              About Ruka World
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Our Why Section */}
          <div className="relative mb-12">
            {/* Shadow element */}
            <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl"></div>

            {/* Main content */}
            <div className="relative bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Our Why เหตุผลที่ <span className="text-[#F1C045]">Ruka</span>{" "}
                เกิดมา?
              </h3>

              <div className="text-center space-y-4">
                <p className="text-lg leading-relaxed">
                  ทำไมของขวัญแบรนด์ส่วนใหญ่ถึงกลายเป็นแค่ของกองบนโต๊ะทำงาน?
                  เราถามคำถามนี้ตั้งแต่วันแรก
                </p>
                <p className="text-lg font-semibold">
                  Ruka จึงเกิดขึ้นเพื่อพลิกนิยาม ของขวัญองค์กร จาก{" "}
                  <span className="text-[#F1C045]">ของแถม</span> ไปสู่
                </p>
                <p className="text-xl font-bold text-red-600">
                  ประสบการณ์ที่สะท้อนตัวตนแบรนด์
                </p>
                <p className="text-lg">
                  เลือก Ruka แล้วมาร่วมเปลี่ยนการ{" "}
                  <span className="font-bold text-[#F1C045]">Give</span>{" "}
                  ให้กลายเป็น{" "}
                  <span className="font-bold text-[#F1C045]">Elevate</span>{" "}
                  ไปด้วยกัน
                </p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
            {/* Vision */}
            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl"></div>

              {/* Main content */}
              <div className="relative bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-8 text-white h-full">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F1C045] mb-6">
                    Vision
                  </h3>
                  <p className="text-lg font-semibold leading-relaxed">
                    ยกระดับ{" "}
                    <span className="text-[#763A20]">การให้ของขวัญ</span>
                    <br />
                    <span className="text-[#763A20]">
                      ให้กลายเป็นสื่อคุณค่าที่แข็งแรงที่สุด
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative">
              {/* Shadow element */}
              <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl"></div>

              {/* Main content */}
              <div className="relative bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F1C045] text-center mb-2">
                  Mission
                </h3>
                <h4 className="text-xl font-bold text-center mb-6">
                  S-H-I-N-E
                </h4>

                <div className="space-y-4 text-sm text-center">
                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      S – Story-First Design
                    </h5>
                    <p className="text-lg leading-relaxed text-[#763A20]">
                      ทุกชิ้นต้องเล่าเรื่องแบรนด์ได้ตั้งแต่แรกเห็น
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      H – Hyper-Transparent Flow
                    </h5>
                    <p className="text-lg leading-relaxed text-[#763A20] ">
                      เสถานะงานเรียลไทม์ ไม่ต้องทวง ไม่ต้องเดา
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      I – Impact Over Quantity
                    </h5>
                    <p className="text-lg leading-relaxed text-[#763A20]">
                      เน้นคุณค่า ใช้ประโยชน์ได้ ไม่ผลิตของเก็บฝุ่น
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      N – Next-Gen Innovation
                    </h5>
                    <p className="text-lg leading-relaxed text-[#763A20]">
                      ทดลองใส่มีไฟใหม่เสมอ เพื่อให้ชิ้นงานล้ำตลาด
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-1">
                      E – Elevate Every Touch
                    </h5>
                    <p className="text-lg leading-relaxed text-[#763A20]">
                      ยกระดับตั้งแต่แพ็กเกจ
                      <br />
                      Unbox → After-Sales Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values - 4 Icons */}
          <div className="relative">
            {/* Shadow element */}
            <div className="absolute top-4 left-4 w-full h-full bg-black/20 rounded-3xl"></div>

            {/* Main content */}
            <div className="relative bg-gradient-to-br from-[#dbba99] to-[#dbba99] rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* คุณภาพ */}
                <div className="text-center bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#dbba99] to-[#dbba99] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl md:text-3xl">🏆</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">
                    คุณภาพ
                  </h4>
                  <p className="text-xs md:text-sm text-[#763A20] leading-relaxed font-bold">
                    มุ่งมั่นผลิตสินค้า
                    <br />
                    ที่มีมาตรฐานสูงสุด
                  </p>
                </div>

                {/* ความไว้วางใจ */}
                <div className="text-center bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#dbba99] to-[#dbba99] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl md:text-3xl">🤝</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">
                    ความไว้วางใจ
                  </h4>
                  <p className="text-xs md:text-sm text-[#763A20] leading-relaxed font-bold">
                    สร้างความมั่นใจให้ลูกค้า
                    <br />
                    ด้วยความโปร่งใส
                  </p>
                </div>

                {/* นวัตกรรม */}
                <div className="text-center bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#dbba99] to-[#dbba99] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl md:text-3xl">⚡</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">
                    นวัตกรรม
                  </h4>
                  <p className="text-xs md:text-sm text-[#763A20] leading-relaxed font-bold">
                    พัฒนาผลิตภัณฑ์ใหม่
                    <br />
                    อย่างต่อเนื่อง
                  </p>
                </div>

                {/* ความรับผิดชอบ */}
                <div className="text-center bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-3xl p-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#dbba99] to-[#dbba99] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl md:text-3xl">🎯</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">
                    ความรับผิดชอบ
                  </h4>
                  <p className="text-xs md:text-sm text-[#763A20] leading-relaxed font-bold">
                    ตอบสนองความต้องการ
                    <br />
                    ลูกค้าอย่างเต็มที่
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
