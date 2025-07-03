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
    <div className="min-h-screen bg-gradient-to-b from-natural/10 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link
            href="/products"
            className="text-ruby hover:text-ruby/80 transition-colors"
          >
            สินค้า
          </Link>
          <span className="text-foreground-accent">{">"}</span>
          <Link
            href={`/products/${categoryId}`}
            className="text-ruby hover:text-ruby/80 transition-colors"
          >
            {category.name}
          </Link>
          <span className="text-foreground-accent">{">"}</span>
          <span className="text-foreground-accent">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-natural/20 to-natural/40 rounded-3xl flex items-center justify-center">
              <div className="text-9xl opacity-60">{category.icon}</div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-natural/20 to-natural/30 rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl opacity-60">{category.icon}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-foreground-accent text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price and Order Info */}
            <div className="bg-sunny/10 rounded-2xl p-6 border border-sunny/30">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-ruby">
                    {product.price}
                  </span>
                  <span className="text-sm text-foreground-accent ml-2">
                    ต่อชิ้น
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground-accent">
                    สั่งขั้นต่ำ
                  </div>
                  <div className="text-xl font-semibold text-foreground">
                    {product.minOrder} ชิ้น
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-ruby hover:bg-ruby/90 text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiShoppingCart size={20} />
                  สอบถามราคา
                </button>
                <button className="bg-sunny hover:bg-sunny/90 text-ruby px-6 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiPhone size={20} />
                  โทรสอบถาม
                </button>
              </div>
            </div>

            {/* Customization Options */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                ตัวเลือกการปรับแต่ง
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.customization.map((option, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-white border border-natural/30 rounded-xl text-center hover:border-ruby hover:bg-ruby/5 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-foreground">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-ruby hover:bg-ruby/10 rounded-lg transition-colors">
                <FiHeart size={16} />
                เพิ่มในรายการโปรด
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-ruby hover:bg-ruby/10 rounded-lg transition-colors">
                <FiShare2 size={16} />
                แชร์สินค้า
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-ruby hover:bg-ruby/10 rounded-lg transition-colors">
                <FiDownload size={16} />
                ดาวน์โหลดข้อมูล
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-3xl shadow-lg border border-natural/20 overflow-hidden mb-16">
          <div className="grid md:grid-cols-3">
            {/* Features */}
            <div className="p-8 border-r border-natural/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-ruby">✨</span>
                คุณสมบัติเด่น
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-ruby mt-1 text-sm">•</span>
                    <span className="text-foreground-accent">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="p-8 border-r border-natural/20">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-ruby">🔧</span>
                วัสดุและคุณภาพ
              </h3>
              <ul className="space-y-3">
                {product.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-ruby mt-1 text-sm">•</span>
                    <span className="text-foreground-accent">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Info */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-ruby">🛡️</span>
                บริการ & การรับประกัน
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-ruby mt-1 text-sm">•</span>
                  <span className="text-foreground-accent">
                    รับประกันคุณภาพ 1 ปี
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ruby mt-1 text-sm">•</span>
                  <span className="text-foreground-accent">
                    จัดส่งฟรีในเขต กทม.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ruby mt-1 text-sm">•</span>
                  <span className="text-foreground-accent">
                    ตัวอย่างสินค้าก่อนผลิต
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ruby mt-1 text-sm">•</span>
                  <span className="text-foreground-accent">
                    บริการหลังการขาย 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-ruby to-ruby/90 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">สนใจสินค้าชิ้นนี้?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อขอใบเสนอราคาและคำปรึกษาฟรี
            เราพร้อมช่วยคุณสร้างของชำร่วยที่สมบูรณ์แบบ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sunny hover:bg-sunny/90 text-ruby px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <FiPhone size={20} />
              โทร 02-XXX-XXXX
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <FiMail size={20} />
              ส่งอีเมลสอบถาม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
