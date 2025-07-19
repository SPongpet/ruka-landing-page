import React from "react";
import { productCategories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1a18] mb-4">
            สินค้าขายดี
          </h2>
          <h3 className="text-xl md:text-2xl text-[#A6171C] font-semibold italic mb-6">
            Products
          </h3>
          <p className="text-[#4a3631] max-w-2xl mx-auto">
            เลือกสรรสินค้าของชำร่วยคุณภาพพรีเมี่ยมที่หลากหลาย
            เพื่อสร้างความประทับใจให้กับลูกค้าและพันธมิตรของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-[#A6171C]/20"
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ยอดนิยม
                </div>
              )}

              <div className="text-center">
                <div className="text-6xl mb-4 flex justify-center items-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={80}
                    height={80}
                  />
                </div>
                <h4 className="text-xl font-bold text-[#2d1a18] mb-2">
                  {category.name}
                </h4>
                <p className="text-[#4a3631] mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={`/products/${category.id}`}
                  className="group-hover:bg-[#A6171C] group-hover:text-white bg-[#F1C045] text-[#A6171C] px-6 py-2 rounded-lg font-semibold transition-colors duration-200 block text-center shadow-md hover:shadow-lg"
                >
                  ดูสินค้า
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
