import React from "react";
import Link from "next/link";
import { productCategories } from "@/data/products";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Red Background */}
      <div className="bg-gradient-to-b from-[#7b1a1b] to-[#de2a29]  pt-24 pb-16">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              สินค้าทั้งหมด
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#F1C045] font-bold mb-8">
              All Products
            </h2>
            <p className="text-white max-w-5xl mx-auto text-lg md:text-xl leading-relaxed">
              สำรวจคอลเลกชันสินค้าคุณภาพพรีเมี่ยมที่หลากหลาย
              เพื่อสร้างความประทับใจและเสริมสร้างภาพลักษณ์ที่ดีให้กับแบรนด์ของคุณ
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
        <div className="container mx-auto px-4">
          {/* Categories Grid - 9 Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.slice(0, 9).map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {category.popular && (
                    <div className="absolute top-4 right-4 bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      🔥 ยอดนิยม
                    </div>
                  )}

                  <div className="text-center">
                    <div className="h-24 flex items-center justify-center mb-4">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={80}
                        height={80}
                        className="transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2d1a18] mb-3 group-hover:text-[#A6171C] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[#4a3631] mb-6 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <div className="bg-[#F1C045] group-hover:bg-[#A6171C] text-[#A6171C] group-hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 shadow-md">
                      เลือกดู
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mb-16">
            <Link
              href="/products"
              className="inline-block bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ดูสินค้าทั้งหมด
            </Link>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-b from-[#7b1a1b] to-[#de2a29]  rounded-3xl p-8 md:p-12 text-center text-white mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              ทำไมต้องเลือกเรา?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F1C045] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h4 className="text-xl font-bold mb-3">คุณภาพพรีเมี่ยม</h4>
                <p className="text-sm leading-relaxed opacity-90">
                  คัดสรรวัสดุคุณภาพสูง
                  <br />
                  ผ่านการควบคุมคุณภาพอย่างเข้มงวด
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F1C045] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h4 className="text-xl font-bold mb-3">ปรับแต่งได้</h4>
                <p className="text-sm leading-relaxed opacity-90">
                  ออกแบบและปรับแต่งโลโก้, สี,
                  <br />
                  ขนาดตามความต้องการของคุณ
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F1C045] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚚</span>
                </div>
                <h4 className="text-xl font-bold mb-3">จัดส่งตรงเวลา</h4>
                <p className="text-sm leading-relaxed opacity-90">
                  ระบบจัดส่งที่เชื่อถือได้
                  <br />
                  และบริการหลังการขายครบวงจร
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#2d1a18] mb-6">
              ต้องการคำปรึกษาเพิ่มเติม?
            </h3>
            <p className="text-[#4a3631] mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
              ทีมผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำเพื่อเลือกสินค้าที่เหมาะสมที่สุดกับแบรนด์และงบประมาณของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ติดต่อปรึกษา
              </Link>
              <Link
                href="tel:082-113-8914"
                className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                โทร 082-113-8914
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
