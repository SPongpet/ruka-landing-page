import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "@/data/products";
import { productDetails } from "@/data/productDetails";
import { FiArrowLeft, FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
import Image from "next/image";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const { categoryId } = params;

  // Find the category
  const category = productCategories.find((cat) => cat.id === categoryId);
  const products = productDetails[categoryId] || [];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#A6171C] hover:text-[#8a1419] transition-colors"
          >
            <FiArrowLeft size={20} />
            <span className="font-semibold">กลับไปหมวดหมู่สินค้า</span>
          </Link>
        </div>

        {/* Category Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6 flex justify-center items-center">
            <Image
              src={category.image}
              alt={category.name}
              width={180}
              height={180}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-4 drop-shadow-lg">
            {category.name}
          </h1>
          <p className="text-[#4a3631] max-w-2xl mx-auto text-lg leading-relaxed mb-8 drop-shadow-md">
            {category.description}
          </p>
          {category.popular && (
            <div className="inline-block bg-[#A6171C] text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              🔥 หมวดยอดนิยม
            </div>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-[#A6171C]/20"
              >
                {/* Product Image */}
                <div className="h-64 bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-fill transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {/* Product Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#2d1a18] group-hover:text-[#A6171C] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full hover:bg-[#f0e0d8] transition-colors">
                        <FiHeart size={16} />
                      </button>
                      <button className="p-2 rounded-full hover:bg-[#f0e0d8] transition-colors">
                        <FiShare2 size={16} />
                      </button>
                    </div>
                  </div>

                  <p className="text-[#4a3631] mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4 flex flex-row gap-2 items-center justify-between">
                    <span className="text-2xl font-bold text-[#A6171C]">
                      {product.id}
                    </span>
                    <span className="text-sm text-[#4a3631] ml-2">
                      (ขั้นต่ำ {product.minOrder} ชิ้น)
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2d1a18] mb-2">
                      จุดเด่น:
                    </h4>
                    <ul className="text-sm text-[#4a3631] space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#A6171C] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Customization Options */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2d1a18] mb-2">
                      ปรับแต่งได้:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.customization.map((option, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#F1C045]/20 text-[#A6171C] text-xs rounded-full"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 bg-[#A6171C] hover:bg-[#8a1419] text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FiShoppingCart size={16} />
                      สอบถามราคา
                    </Link>
                    <Link
                      href={`/products/${categoryId}/${product.id}`}
                      className="px-4 py-3 border border-[#A6171C] text-[#A6171C] hover:bg-[#A6171C] hover:text-white rounded-xl font-semibold transition-colors duration-200 text-center"
                    >
                      ดูรายละเอียด
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">{category.icon}</div>
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
              เร็วๆ นี้
            </h3>
            <p className="text-[#4a3631] mb-8">
              เรากำลังเพิ่มสินค้าในหมวดนี้ โปรดติดตามในเร็วๆ นี้
            </p>
            <button className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              แจ้งเตือนเมื่อมีสินค้า
            </button>
          </div>
        )}

        {/* Category Info Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A6171C]/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                ทำไมต้องเลือก {category.name}?
              </h3>
              <ul className="space-y-3 text-[#4a3631]">
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1">✓</span>
                  <span>คุณภาพพรีเมี่ยมที่ผ่านการคัดสรร</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1">✓</span>
                  <span>ปรับแต่งโลโก้และดีไซน์ได้ตามต้องการ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1">✓</span>
                  <span>ราคาย่อมเยาและมีการรับประกันคุณภาพ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1">✓</span>
                  <span>จัดส่งตรงเวลาและบริการหลังการขาย</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                ต้องการความช่วยเหลือ?
              </h3>
              <p className="text-[#4a3631] mb-6">
                ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาเพื่อหาสินค้าที่เหมาะสมกับแบรนด์และงบประมาณของคุณ
              </p>
              <div className="space-y-3">
                <button className="w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                  📞 ปรึกษาฟรี 24/7
                </button>
                <button className="w-full bg-transparent border border-[#A6171C] text-[#A6171C] hover:bg-[#A6171C] hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                  📧 ส่งอีเมลสอบถาม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
