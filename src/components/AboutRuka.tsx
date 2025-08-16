const AboutRuka = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="text-center mb-8 md:mb-16 max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">
          About RUKA WORLD
        </h1>

        <div className="bg-ruka-mid-red rounded-[20px] md:rounded-[40px] p-4 sm:p-6 md:p-10 shadow-2xl w-full">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-white leading-tight">
            Our Why เหตุผลที่ <span className="text-[#F1C045]">Ruka</span>{" "}
            เกิดมา ?
          </h3>
          <div className="bg-gradient-to-br from-[#CD853F] to-[#A0522D] rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative shadow element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-black/20 rounded-2xl md:rounded-3xl -z-10"></div>

            <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-center">
              เราถามคำถามนี้ตั้งแต่วันแรก
              <br />
              <br />
              Ruka จึงเกิดขึ้นเพื่อพลิกนิยาม ของขวัญองค์กร จาก{" "}
              <span className="text-[#F1C045] font-bold">ของแถม</span> ไปสู่
              <br />
              <span className="text-red-600 font-bold text-base md:text-lg lg:text-xl">
                ประสบการณ์ที่สะท้อนตัวตนแบรนด์
              </span>
              <br />
              <br />
              เลือก Ruka แล้วมาร่วมเปลี่ยนการ{" "}
              <span className="font-bold text-[#F1C045]">
                Give
              </span> ให้กลายเป็น{" "}
              <span className="font-bold text-[#F1C045]">Elevate</span>{" "}
              ไปด้วยกัน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRuka;
