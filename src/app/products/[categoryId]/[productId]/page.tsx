import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "@/data/products";
import { productDetails } from "@/data/productDetails";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiPhone,
  FiMail,
  FiDownload,
} from "react-icons/fi";

interface ProductPageProps {
  params: {
    categoryId: string;
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { categoryId, productId } = params;

  // Find the category and product
  const category = productCategories.find((cat) => cat.id === categoryId);
  const categoryProducts = productDetails[categoryId] || [];
  const product = categoryProducts.find((prod) => prod.id === productId);

  if (!category || !product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link
            href="/products"
            className="text-[#A6171C] hover:text-[#8a1419] transition-colors"
          >
            สินค้า
          </Link>
          <span className="text-[#4a3631]">{">"}</span>
          <Link
            href={`/products/${categoryId}`}
            className="text-[#A6171C] hover:text-[#8a1419] transition-colors"
          >
            {category.name}
          </Link>
          <span className="text-[#4a3631]">{">"}</span>
          <span className="text-[#4a3631]">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] rounded-3xl flex items-center justify-center shadow-lg">
              <div className="text-9xl opacity-60">{category.icon}</div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl opacity-60">{category.icon}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2d1a18] mb-4 drop-shadow-lg">
                {product.name}
              </h1>
              <p className="text-[#4a3631] text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price and Order Info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#A6171C]/20 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-[#A6171C]">
                    {product.price}
                  </span>
                  <span className="text-sm text-[#4a3631] ml-2">ต่อชิ้น</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#4a3631]">สั่งขั้นต่ำ</div>
                  <div className="text-xl font-semibold text-[#2d1a18]">
                    {product.minOrder} ชิ้น
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiShoppingCart size={20} />
                  สอบถามราคา
                </button>
                <button className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiPhone size={20} />
                  โทรสอบถาม
                </button>
              </div>
            </div>

            {/* Customization Options */}
            <div>
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                ตัวเลือกการปรับแต่ง
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.customization.map((option, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-white/80 border border-[#A6171C]/20 rounded-xl text-center hover:border-[#A6171C] hover:bg-[#A6171C]/5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span className="font-semibold text-[#2d1a18]">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-[#A6171C] hover:bg-[#A6171C]/10 rounded-lg transition-colors">
                <FiHeart size={16} />
                เพิ่มในรายการโปรด
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[#A6171C] hover:bg-[#A6171C]/10 rounded-lg transition-colors">
                <FiShare2 size={16} />
                แชร์สินค้า
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[#A6171C] hover:bg-[#A6171C]/10 rounded-lg transition-colors">
                <FiDownload size={16} />
                ดาวน์โหลดข้อมูล
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-[#A6171C]/20 overflow-hidden mb-16">
          <div className="grid md:grid-cols-3">
            {/* Features */}
            <div className="p-8 border-r border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6 flex items-center gap-2">
                <span className="text-[#A6171C]">✨</span>
                คุณสมบัติเด่น
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#A6171C] mt-1 text-sm">•</span>
                    <span className="text-[#4a3631]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="p-8 border-r border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6 flex items-center gap-2">
                <span className="text-[#A6171C]">🔧</span>
                วัสดุและคุณภาพ
              </h3>
              <ul className="space-y-3">
                {product.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#A6171C] mt-1 text-sm">•</span>
                    <span className="text-[#4a3631]">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Info */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6 flex items-center gap-2">
                <span className="text-[#A6171C]">🛡️</span>
                บริการ & การรับประกัน
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1 text-sm">•</span>
                  <span className="text-[#4a3631]">รับประกันคุณภาพ 1 ปี</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1 text-sm">•</span>
                  <span className="text-[#4a3631]">
                    บริการหลังการขายครบวงจร
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1 text-sm">•</span>
                  <span className="text-[#4a3631]">จัดส่งฟรีทั่วไทย</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6171C] mt-1 text-sm">•</span>
                  <span className="text-[#4a3631]">ใบเสนอราคาฟรี</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-[#2d1a18] mb-8 text-center">
            สินค้าแนะนำในหมวดเดียวกัน
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryProducts
              .filter((p) => p.id !== productId)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${categoryId}/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#A6171C]/20">
                    <div className="h-40 bg-gradient-to-br from-[#f0e0d8] to-[#D6D0C5] rounded-xl flex items-center justify-center mb-4">
                      <div className="text-4xl opacity-60">{category.icon}</div>
                    </div>
                    <h4 className="font-bold text-[#2d1a18] mb-2 group-hover:text-[#A6171C] transition-colors">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-[#4a3631] text-sm mb-3">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A6171C] font-bold">
                        {relatedProduct.price}
                      </span>
                      <span className="text-xs text-[#4a3631]">
                        ขั้นต่ำ {relatedProduct.minOrder} ชิ้น
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg border border-[#A6171C]/20">
          <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
            ต้องการปรึกษาเพิ่มเติม?
          </h3>
          <p className="text-[#4a3631] mb-6 max-w-2xl mx-auto">
            ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำและปรับแต่งสินค้าให้ตรงกับความต้องการของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <FiPhone size={16} />
              โทรเลย 02-123-4567
            </button>
            <button className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <FiMail size={16} />
              ส่งอีเมลสอบถาม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
