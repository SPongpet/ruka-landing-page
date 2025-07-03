import React from "react";
import { productCategories } from "@/data/products";
import Link from "next/link";

const Products: React.FC = () => {
  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-natural/20 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            หมวดหมู่สินค้า
          </h2>
          <h3 className="text-xl md:text-2xl text-ruby font-semibold italic mb-6">
            Products
          </h3>
          <p className="text-foreground-accent max-w-2xl mx-auto">
            เลือกสรรสินค้าของชำร่วยคุณภาพพรีเมี่ยมที่หลากหลาย
            เพื่อสร้างความประทับใจให้กับลูกค้าและพันธมิตรของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-natural/30"
            >
              {category.popular && (
                <div className="absolute top-4 right-4 bg-ruby text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ยอดนิยม
                </div>
              )}

              <div className="text-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {category.name}
                </h4>
                <p className="text-foreground-accent mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={`/products/${category.id}`}
                  className="group-hover:bg-ruby group-hover:text-white bg-sunny text-ruby px-6 py-2 rounded-lg font-semibold transition-colors duration-200 block text-center"
                >
                  ดูสินค้า
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-ruby/5 to-sunny/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-ruby hover:bg-ruby/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
