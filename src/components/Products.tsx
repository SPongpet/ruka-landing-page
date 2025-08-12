import React from "react";
import { productCategories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d1a18] mb-4">
            สินค้าขายดี
          </h2>
          <h3 className="text-xl md:text-2xl text-[#A6171C] font-semibold mb-6">
            Products
          </h3>
          <p className="text-[#4a3631] max-w-3xl mx-auto leading-relaxed">
            เลือกสรรสินค้าของชำร่วยคุณภาพพรีเมี่ยมที่หลากหลาย
            เพื่อสร้างความประทับใจให้กับลูกค้าและพันธมิตรของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.slice(0, 9).map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-bold">
                  🔥 ยอดนิยม
                </div>
              )}

              <div className="text-center">
                <div className="h-20 flex justify-center items-center mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#2d1a18] mb-2 group-hover:text-[#A6171C] transition-colors">
                  {category.name}
                </h4>
                <p className="text-[#4a3631] mb-4 leading-relaxed text-sm">
                  {category.description}
                </p>
                <Link
                  href={`/products/${category.id}`}
                  className="inline-block bg-[#F1C045] group-hover:bg-[#A6171C] text-[#A6171C] group-hover:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 shadow-md"
                >
                  เลือกดู
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
