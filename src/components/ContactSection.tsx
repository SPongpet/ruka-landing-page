const ContactSection = ({
  handleSubmit,
  form,
  handleInputChange,
  isSubmitting,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  form: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}) => {
  return (
    <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a18] mb-4">
            ติดต่อเรา
          </h2>
          <h3 className="text-2xl md:text-3xl text-[#A6171C] font-bold mb-8">
            Contact Us
          </h3>
          <div className="max-w-4xl mx-auto text-[#4a3631]">
            <p className="text-lg md:text-xl leading-relaxed mb-2">
              พร้อมให้คำปรึกษาและบริการคุณด้วยความเป็นมืออาชีพ
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              ติดต่อเราได้ทุกช่องทางตลอด 24 ชั่วโมง
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
              ส่งข้อความถึงเรา
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2d1a18] font-semibold mb-2">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                    placeholder="กรุณากรอกชื่อ"
                  />
                </div>
                <div>
                  <label className="block text-[#2d1a18] font-semibold mb-2">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                    placeholder="กรุณากรอกนามสกุล"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                  placeholder="กรุณากรอกอีเมล"
                />
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  ข้อความ
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange({
                      target: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    } as React.ChangeEvent<HTMLInputElement>)
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors resize-none"
                  placeholder="กรุณากรอกข้อความหรือรายละเอียดที่ต้องการ"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                ช่องทางการติดต่อ
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                  <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18] text-sm">
                      โทรศัพท์
                    </h4>
                    <a
                      href="tel:082-113-8914"
                      className="text-[#A6171C] hover:underline text-sm"
                    >
                      082-113-8914
                    </a>
                    <p className="text-xs text-gray-500">เวลา 8:00-18:00 น.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                  <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                    💻
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18] text-sm">
                      Line
                    </h4>
                    <a
                      href="https://lin.ee/Eoc4mUN"
                      className="text-[#A6171C] hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://lin.ee/Eoc4mUN
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                  <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18] text-sm">
                      Facebook
                    </h4>
                    <a
                      href="https://www.facebook.com/share/1G3NH5PCTG/"
                      className="text-[#A6171C] hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/ruka
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                  <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18] text-sm">
                      Instagram
                    </h4>
                    <a
                      href="https://www.instagram.com/rukaworld_th?igsh=MWRqZXhuc2ExZnllcA=="
                      className="text-[#A6171C] hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ruka.ruka.world
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4 text-center">
                แผนที่
              </h3>
              <div className="rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6404818959954!2d100.789271875089!3d13.679611786704772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6790081ef16f%3A0x2b442200e5a01fa3!2sSiri%20Place%20Bangna-Suvarnabhumi!5e0!3m2!1sen!2sth!4v1755010053037!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                บริการด่วน
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:082-113-8914"
                  className="block w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  📞 โทรหา Ruka เดี๋ยวนี้
                </a>
                <a
                  href="https://lin.ee/Eoc4mUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  💻 แชทไลน์ @ruka
                </a>
                <button className="w-full border-2 border-[#A6171C] text-[#A6171C] hover:bg-[#A6171C] hover:text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 text-center">
                  📂 ดาวน์โหลดแคตตาล็อก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
