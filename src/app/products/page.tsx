import React from "react";
import Link from "next/link";
import { productCategories } from "@/data/products";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            สินค้าทั้งหมด
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            All Products
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed">
            สำรวจคอลเลกชันสินค้าของชำร่วยคุณภาพพรีเมี่ยมที่หลากหลาย
            เพื่อสร้างความประทับใจและเสริมสร้างภาพลักษณ์ที่ดีให้กับแบรนด์ของคุณ
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#A6171C]/20 relative overflow-hidden">
                {category.popular && (
                  <div className="absolute top-4 right-4 bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    🔥 ยอดนิยม
                  </div>
                )}

                <div className="text-center">
                  <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center items-center">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d1a18] mb-4 group-hover:text-[#A6171C] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#4a3631] mb-6 leading-relaxed h-12">
                    {category.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-6 mb-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-[#A6171C]">50+</div>
                      <div className="text-[#4a3631]">รายการ</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[#A6171C]">฿199</div>
                      <div className="text-[#4a3631]">เริ่มต้น</div>
                    </div>
                  </div>

                  <div className="bg-[#F1C045] group-hover:bg-[#A6171C] text-[#A6171C] group-hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-md">
                    เลือกดูสินค้า
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-[#A6171C]/20 mb-16">
          <h3 className="text-3xl font-bold text-[#2d1a18] text-center mb-12">
            ทำไมต้องเลือกเรา?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-xl font-bold text-[#2d1a18] mb-3">
                คุณภาพพรีเมี่ยม
              </h4>
              <p className="text-[#4a3631]">
                คัดสรรวัสดุคุณภาพสูงและผ่านการควบคุมคุณภาพอย่างเข้มงวด
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-bold text-[#2d1a18] mb-3">
                ปรับแต่งได้
              </h4>
              <p className="text-[#4a3631]">
                ออกแบบและปรับแต่งโลโก้, สี, ขนาดตามความต้องการของคุณ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#A6171C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-bold text-[#2d1a18] mb-3">
                จัดส่งตรงเวลา
              </h4>
              <p className="text-[#4a3631]">
                ระบบจัดส่งที่เชื่อถือได้และบริการหลังการขายครบวงจร
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
            ต้องการคำปรึกษาเพิ่มเติม?
          </h3>
          <p className="text-[#4a3631] mb-8 max-w-2xl mx-auto">
            ทีมผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำเพื่อเลือกสินค้าที่เหมาะสมที่สุดกับแบรนด์และงบประมาณของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              ติดต่อปรึกษา
            </Link>
            <Link
              href="tel:02-123-4567"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              โทร 02-123-4567
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
