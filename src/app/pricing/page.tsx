import React from "react";
import Link from "next/link";

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-[#2d1a18] mb-6">
              package
            </h1>
            <p className="text-lg md:text-xl text-[#4a3631] max-w-4xl mx-auto leading-relaxed">
              เลือกแพ็คเกจที่เหมาะสมกับความต้องการและงบประมาณของคุณ
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Ruka Lite */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-[#A6171C]/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d1a18] mb-4">
                  Ruka Lite
                </h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#A6171C]">
                    19,999
                  </span>
                </div>
                <div className="text-left mb-6">
                  <p className="text-sm text-[#4a3631] font-semibold mb-2">
                    FEATURES
                  </p>
                  <p className="text-sm text-[#4a3631] mb-4">
                    Everything in basic, plus...
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
                >
                  get started
                </Link>

                <div className="text-left space-y-4 text-sm text-[#4a3631]">
                  <p className="font-semibold">
                    100 ชิ้น สกรีนโลโก้ 1-2 สี 1 จุด
                    <br />
                    (**สีเดียวกันไม่นานเงื่อนไขกับประเทศกำหนด)
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">• จัดส่งฟรีแบบกรุงเทพฯ</p>
                      <p className="text-xs opacity-80">
                        (ต่างจังหวัดมีค่าส่งเพิ่มเติม)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">• ช่วยออกแบบเบื้องต้น</p>
                      <p className="text-xs opacity-80">(โลโก้/กล่องบาดะตรง)</p>
                    </div>

                    <p className="font-semibold">
                      • ถ่ายสินค้า สำหรับใช้ทำการตลาด ฟรี
                    </p>

                    <p className="font-semibold">
                      • ทีม QC ของ ตรวจสอบคุณภาพฟรี 100%
                    </p>

                    <p className="font-semibold">
                      • รับส่วนลด 5% เมื่อทำระเก็บจำนวนสั่งซ้ำ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ruka Plus */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#A6171C] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#A6171C] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d1a18] mb-4">
                  Ruka Plus
                </h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#A6171C]">
                    49,999
                  </span>
                </div>
                <div className="text-left mb-6">
                  <p className="text-sm text-[#4a3631] font-semibold mb-2">
                    FEATURES
                  </p>
                  <p className="text-sm text-[#4a3631] mb-4">
                    Everything in basic, plus...
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
                >
                  get started
                </Link>

                <div className="text-left space-y-4 text-sm text-[#4a3631]">
                  <p className="font-semibold">
                    300 ชิ้น สกรีนโลโก้ 3 สี / 2 ตำแหน่ง
                    <br />
                    (**สินค้าเป็นไปในงานเงื่อนไขกับประเทศกำหนด)
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">
                        • เลือก สองมิตสินค้า ในแพ็คเกจ
                      </p>
                      <p className="text-xs opacity-80">
                        (เสื้อ + ถุงผ้า+แก้ว +ริ้บ+ สมุดโน๊ต)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">• จัดส่งฟรีทั่วประเทศ</p>
                      <p className="text-xs opacity-80">
                        (พร้อมบริการ dropship รายย่อยตามต้องการ)
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        • ตัวอย่างงาน (virtual proof)
                      </p>
                      <p className="text-xs opacity-80">
                        (แก้ไขดีไซน์ฟรี 2 รอบ)
                      </p>
                    </div>

                    <p className="font-semibold">• แลกตาสวอกสินค้าฟรีอบไลค์</p>

                    <div>
                      <p className="font-semibold">• Pop-Up Shop ออนไลน์</p>
                      <p className="text-xs opacity-80">
                        (ให้ผู้รับเลือกไซส์/สี/ของตนเอง
                        <br />
                        พร้อมโค้ดส่วนลด)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ruka Corporate */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-[#A6171C]/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d1a18] mb-4">
                  Ruka Corporate
                </h3>
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-[#A6171C]">
                    ตามใบเสนอราคา
                  </span>
                </div>
                <div className="text-left mb-6">
                  <p className="text-sm text-[#4a3631] font-semibold mb-2">
                    FEATURES
                  </p>
                  <p className="text-sm text-[#4a3631] mb-4">
                    Everything in basic, plus...
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
                >
                  get started
                </Link>

                <div className="text-left space-y-4 text-sm text-[#4a3631]">
                  <p className="font-semibold">
                    500 ชิ้น ไปจ้างดีสำค่า
                    <br />
                    (สกรีนเต็มนิ้ว/ตายย่อตำแหน่งไปตั้งจำกัด)
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">
                        • จัดส่งฟรีทั่วประเทศ+ต่างประเทศ
                      </p>
                      <p className="text-xs opacity-80">
                        รองรับระบบ Fulfillment
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">• มีทีม creative services</p>
                      <p className="text-xs opacity-80">
                        ช่วยคิดคอนเซ็ปต์แบรนด์
                        <br />( กล่องพรีเมียม & เบอร์ระดับอีกโครต)
                      </p>
                    </div>

                    <p className="font-semibold">• ทีมรึกษาเฉพาะทาง 24/7</p>

                    <div>
                      <p className="font-semibold">
                        • Company Store ออนไลน์ใช้พนักงาน
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
