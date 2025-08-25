const AboutRuka = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#a01e22] to-[#d91b24] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)] font-georgia">
      <div className="text-center mb-8 md:mb-16 max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* ชั้นหลัง */}
        <div className="absolute bg-gradient-to-b from-[#7a1618] to-[#a01e22] m-4 top-4 -left-12 w-full h-full rounded-[20px] md:rounded-[40px] shadow-2xl"></div>

        {/* ชั้นหน้า */}
        <div className="relative bg-gradient-to-b from-[#b52226] to-[#d91b24] rounded-[20px] md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            About RUKA WORLD
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-10 text-white leading-tight">
            Our Why เหตุผลที่ <span className="text-[#F1C045]">Ruka</span>{" "}
            เกิดมา ?
          </h3>

          <div className="bg-gradient-to-br from-[#C28C60] to-[#C28C60] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden w-11/12 max-w-4xl">
            {/* ชั้นหลังของกล่องข้อความ */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/30 rounded-2xl md:rounded-3xl -z-10"></div>

            <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-center font-medium">
              เราถามคำถามนี้ตั้งแต่วันแรก
              <br />
              <br />
              Ruka จึงเกิดขึ้นเพื่อพลิกนิยาม ของขวัญองค์กร จาก{" "}
              <span className="text-[#F1C045] font-bold">ของแถม</span> ไปสู่
              <br />
              <span className="text-[#D91B24] font-bold">
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
