import React from "react";

const OneStopExperience: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "Co-Create Design",
      subtitle: "ดีไซน์ไปด้วยกัน\nตั้งแต่ไอเดียจนเป็นจริง",
    },
    {
      icon: "📦",
      title: "Track & Chill",
      subtitle: "เช็กสถานะเรียลไทม์\nสบายใจไม่ต้องลุ้น",
    },
    {
      icon: "⚡",
      title: "Fast & Flex MOQ",
      subtitle: "ขั้นต่ำยืดหยุ่น\nผลิตเร็วจัดส่งไว",
    },
    {
      icon: "🤝",
      title: "After-Sales Buddy",
      subtitle: "ดูแลหลังขายเหมือนเพื่อนซี้\nคอยซัพพอร์ตตลอด",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One-Stop Brand Experience
          </h2>
          <p className="text-lg md:text-xl text-[#F1C045] max-w-4xl mx-auto leading-relaxed">
            ประสบการณ์แบรนด์ครบครันในที่เดียว ตั้งแต่ไอเดียจนถึงการส่งมอบ
          </p>
        </div>

        {/* Cards container with shadow effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Shadow background */}
          <div className="absolute inset-6 bg-black/30 rounded-[3rem] blur-sm"></div>

          {/* Main container */}
          <div className="relative bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-[3rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#dbba99]"
                >
                  {/* ส่วนบน */}
                  <div className="bg-[#B8734A] flex flex-col items-center py-6 z-10 rad rounded-b-[3rem]">
                    <div className="bg-[#D9A679] rounded-full p-4 mb-3 w-16 h-16 flex items-center justify-center text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg md:text-xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* ส่วนล่าง */}
                  <div className="bg-[#dbba99] py-4 px-3 text-center">
                    <p className="text-[#5E2A0F] font-bold text-sm md:text-base leading-tight whitespace-pre-line">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStopExperience;
