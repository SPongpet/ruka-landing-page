"use client";

import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiDownload,
  FiPackage,
  FiShoppingCart,
} from "react-icons/fi";
import { productCategories } from "@/data/products";
import { productDetails } from "@/data/productDetails";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    category: "",
    product: "",
    quantity: 1,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      // Reset product when category changes
      ...(name === "category" ? { product: "" } : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด");
  };

  // Get products for selected category
  const selectedCategoryProducts = form.category
    ? productDetails[form.category] || []
    : [];

  // Get selected category and product info for display
  const selectedCategory = productCategories.find(
    (cat) => cat.id === form.category
  );
  const selectedProduct = selectedCategoryProducts.find(
    (prod) => prod.id === form.product
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            ติดต่อเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            Contact Us
          </h2>
          <p className="text-[#4a3631] max-w-2xl mx-auto text-lg leading-relaxed">
            พร้อมให้คำปรึกษาและบริการคุณด้วยความเป็นมืออาชีพ
            ติดต่อเราได้ทุกช่องทางตลอด 24 ชั่วโมง
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A6171C]/20">
            <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
              ส่งข้อความถึงเรา
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2d1a18] font-semibold mb-2">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                    placeholder="กรุณากรอกชื่อ"
                  />
                </div>
                <div>
                  <label className="block text-[#2d1a18] font-semibold mb-2">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    name="surname"
                    className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                    placeholder="กรุณากรอกนามสกุล"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                  placeholder="กรุณากรอกอีเมล"
                />
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  บริษัท/องค์กร
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                  placeholder="ชื่อบริษัทหรือองค์กร"
                />
              </div>

              {/* Product Selection Section */}
              <div className="border-t border-[#A6171C]/20 pt-6">
                <h4 className="text-lg font-semibold text-[#2d1a18] mb-4 flex items-center gap-2">
                  <FiPackage className="text-[#A6171C]" />
                  ข้อมูลสินค้าที่สนใจ (ไม่บังคับ)
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2d1a18] font-semibold mb-2">
                      หมวดหมู่สินค้า
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                    >
                      <option value="">เลือกหมวดหมู่สินค้า</option>
                      {productCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#2d1a18] font-semibold mb-2">
                      สินค้า
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleInputChange}
                      disabled={!form.category}
                      className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90 disabled:bg-gray-100 disabled:text-gray-500"
                    >
                      <option value="">เลือกสินค้า</option>
                      {selectedCategoryProducts.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-[#2d1a18] font-semibold mb-2">
                    จำนวนที่ต้องการ (ชิ้น)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleInputChange}
                      min="1"
                      max="10000"
                      className="w-32 px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                      placeholder="1"
                    />
                    {selectedProduct && (
                      <div className="text-sm text-[#4a3631]">
                        ขั้นต่ำ: {selectedProduct.minOrder} ชิ้น
                        <br />
                        ราคา: {selectedProduct.price}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Preview */}
                {selectedCategory && selectedProduct && (
                  <div className="mt-6 p-4 bg-[#f0e0d8]/50 rounded-xl border border-[#A6171C]/20">
                    <h5 className="font-semibold text-[#2d1a18] mb-2 flex items-center gap-2">
                      <FiShoppingCart className="text-[#A6171C]" />
                      สินค้าที่เลือก
                    </h5>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{selectedCategory.icon}</div>
                      <div>
                        <div className="font-semibold text-[#2d1a18]">
                          {selectedProduct.name}
                        </div>
                        <div className="text-sm text-[#4a3631]">
                          {selectedProduct.description}
                        </div>
                        <div className="text-sm text-[#A6171C] font-semibold">
                          จำนวน: {form.quantity} ชิ้น | ราคา:{" "}
                          {selectedProduct.price}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[#2d1a18] font-semibold mb-2">
                  ข้อความ
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                  placeholder="กรุณาระบุรายละเอียดความต้องการ"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-4 px-8 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A6171C]/20">
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
                ช่องทางการติดต่อ
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">โทรศัพท์</h4>
                    <p className="text-[#4a3631]">02-123-4567</p>
                    <p className="text-[#4a3631] text-sm">
                      จันทร์-ศุกร์ 8:00-18:00 น.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">อีเมล</h4>
                    <p className="text-[#4a3631]">info@rukaworld.com</p>
                    <p className="text-[#4a3631] text-sm">
                      ตอบกลับภายใน 24 ชั่วโมง
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">ที่อยู่</h4>
                    <p className="text-[#4a3631]">
                      123 ถนนสุขุมวิท แขวงคลองตัน
                    </p>
                    <p className="text-[#4a3631]">เขตวัฒนา กรุงเทพฯ 10110</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">เวลาทำการ</h4>
                    <p className="text-[#4a3631]">
                      จันทร์-ศุกร์: 8:00-18:00 น.
                    </p>
                    <p className="text-[#4a3631]">เสาร์: 9:00-16:00 น.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A6171C]/20">
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6 text-center">
                แผนที่
              </h3>
              <div className="bg-[#D6D0C5] rounded-2xl h-96 flex items-center justify-center">
                <p className="text-[#4a3631] text-lg">
                  แผนที่ Google Maps จะแสดงที่นี่
                </p>
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A6171C]/20">
              <h3 className="text-2xl font-bold text-[#2d1a18] mb-6">
                บริการด่วน
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-3 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiPhone size={20} />
                  โทรเลย 02-123-4567
                </button>
                <button className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiMessageSquare size={20} />
                  แชทไลน์ @rukaworld
                </button>
                <button className="w-full border-2 border-[#A6171C] text-[#A6171C] hover:bg-[#A6171C] hover:text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <FiDownload size={20} />
                  ดาวน์โหลดแคตตาล็อก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
