import React from "react";

const OneStopExperience: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "Co-Create Design",
      subtitle: "ดีไซน์ไปด้วยกัน ตั้งแต่คอนเซ็ปต์จนจบ",
    },
    {
      icon: "📦",
      title: "Track & Chill",
      subtitle: "เช็กสถานะเรียลไทม์ สบายใจไม่ต้องลุ้น",
    },
    {
      icon: "⚡",
      title: "Fast & Flex MOQ",
      subtitle: "ขั้นต่ำยืดหยุ่น ผลิตเร็วจัดส่งไว",
    },
    {
      icon: "🤝",
      title: "After-Sales Buddy",
      subtitle: "ดูแลหลังขายเหมือนเพื่อนซี้ คอยซัพพอร์ตตลอด",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a18] mb-6">
            One-Stop Brand Experience
          </h2>
          <p className="text-lg text-[#4a3631] max-w-3xl mx-auto">
            ประสบการณ์แบรนด์ครบครันในที่เดียว ตั้งแต่ไอเดียจนถึงการส่งมอบ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#A6171C] mb-3">
                {service.title}
              </h3>
              <p className="text-[#4a3631] leading-relaxed text-sm">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneStopExperience;
