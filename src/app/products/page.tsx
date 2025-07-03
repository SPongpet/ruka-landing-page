import React from "react";
import Link from "next/link";
import { productCategories } from "@/data/products";

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-natural/10 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            หมวดหมู่สินค้า
          </h1>
          <h2 className="text-2xl md:text-3xl text-ruby font-semibold italic mb-8">
            Product Categories
          </h2>
          <p className="text-foreground-accent max-w-3xl mx-auto text-lg leading-relaxed">
            ค้นพบคอลเลคชั่นสินค้าของชำร่วยคุณภาพพรีเมี่ยมที่หลากหลาย
            ออกแบบมาเพื่อสร้างความประทับใจและเสริมสร้างความสัมพันธ์ทางธุรกิจของคุณ
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group block"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer border border-natural/20 h-full">
                {category.popular && (
                  <div className="absolute top-4 right-4 bg-ruby text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    ยอดนิยม
                  </div>
                )}

                <div className="text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-ruby transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-foreground-accent mb-6 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <button className="group-hover:bg-ruby group-hover:text-white bg-sunny text-ruby px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105">
                    ดูสินค้าในหมวด
                  </button>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-ruby/5 to-sunny/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-ruby to-ruby/90 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">ไม่พบสินค้าที่ต้องการ?</h3>
          <p className="text-xl mb-8 opacity-90">
            ทีมงานของเราพร้อมช่วยคุณหาสินค้าที่เหมาะสมหรือสร้างสินค้าคัสตอมตามความต้องการ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sunny hover:bg-sunny/90 text-ruby px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              ปรึกษาทีมผู้เชี่ยวชาญ
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
              ดาวน์โหลดแคตตาล็อก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
