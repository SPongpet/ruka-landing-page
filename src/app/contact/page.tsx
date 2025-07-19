"use client";

import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiDownload,
  FiPackage,
  FiShoppingCart,
  FiLoader,
} from "react-icons/fi";
import { productCategories } from "@/data/products";
import { productDetails } from "@/data/productDetails";
import axios from "axios";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    company: "",
    hasCompany: false,
    taxId: "",
    address: "",
    message: "",
    category: "",
    product: "",
    quantity: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      // Reset product when category changes
      ...(name === "category" ? { product: "" } : {}),
      // Clear TAX ID and address when hasCompany becomes false
      ...(name === "hasCompany" && !checked ? { taxId: "", address: "" } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const selectedCategory = productCategories.find(
        (cat) => cat.id === form.category
      );
      const selectedCategoryProducts = form.category
        ? productDetails[form.category] || []
        : [];
      const selectedProduct = selectedCategoryProducts.find(
        (prod) => prod.id === form.product
      );

      const submitData = {
        timestamp: new Date().toLocaleString("th-TH", {
          timeZone: "Asia/Bangkok",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        name: form.name,
        surname: form.surname,
        email: form.email,
        phone: form.phone,
        company: form.company,
        hasCompany: form.hasCompany ? "มี" : "ไม่มี",
        taxId: form.taxId,
        address: form.address,
        categoryName: selectedCategory?.name || "",
        categoryIcon: selectedCategory?.icon || "",
        productName: selectedProduct?.name || "",
        productPrice: selectedProduct?.price || "",
        quantity: form.quantity,
        message: form.message,
      };

      // Send to Next.js API route (จะ proxy ไปยัง Google Apps Script)
      const API_URL = "/api/submit-contact";

      // ใช้ axios ส่งไปยัง Next.js API route (ไม่มีปัญหา CORS)
      try {
        const response = await axios.post(API_URL, submitData, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 30000, // 30 seconds timeout
        });

        if (response.data && response.data.success) {
          alert("ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด");

          // Reset form
          setForm({
            name: "",
            surname: "",
            email: "",
            phone: "",
            company: "",
            hasCompany: false,
            taxId: "",
            address: "",
            message: "",
            category: "",
            product: "",
            quantity: 1,
          });

          return;
        } else {
          throw new Error(
            response.data?.message || "เกิดข้อผิดพลาดในการส่งข้อมูล"
          );
        }
      } catch (axiosError: unknown) {
        console.error("Failed to submit form:", axiosError);

        // แสดง error message ที่เป็นประโยชน์มากขึ้น
        let errorMessage = "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง";

        if (axios.isAxiosError(axiosError)) {
          if (axiosError.response) {
            // Server responded with error status
            console.error("Response error:", axiosError.response.data);
            errorMessage = `เกิดข้อผิดพลาด: ${axiosError.response.status}`;
          } else if (axiosError.request) {
            // Request was made but no response received
            console.error("Request error:", axiosError.request);
            errorMessage = "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้";
          } else {
            // Something else happened
            console.error("Error:", axiosError.message);
          }
        }

        alert(errorMessage + " หรือติดต่อเราทางโทรศัพท์");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทางโทรศัพท์"
      );
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="container mx-auto px-4 mt-10">
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
          </p>
          <p className="text-[#4a3631] max-w-2xl mx-auto text-lg leading-relaxed">
            ติดต่อเราได้ทุกช่องทางตลอด 24 ชั่วโมง
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A6171C]/20">
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
                    value={form.surname}
                    onChange={handleInputChange}
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

              {/* Company Information Checkbox */}
              <div className="border-t border-[#A6171C]/20 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    name="hasCompany"
                    checked={form.hasCompany}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#A6171C] border-[#A6171C]/30 rounded focus:ring-[#A6171C] focus:ring-2"
                  />
                  <label className="text-[#2d1a18] font-semibold">
                    มีข้อมูลบริษัท (TAX ID และที่อยู่)
                  </label>
                </div>

                {/* Conditional Company Fields */}
                {form.hasCompany && (
                  <div className="space-y-4 ml-8">
                    <div>
                      <label className="block text-[#2d1a18] font-semibold mb-2">
                        TAX ID
                      </label>
                      <input
                        type="text"
                        name="taxId"
                        value={form.taxId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                        placeholder="เลขประจำตัวผู้เสียภาษี"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2d1a18] font-semibold mb-2">
                        ที่อยู่บริษัท
                      </label>
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-[#A6171C]/30 focus:border-[#A6171C] focus:outline-none transition-colors bg-white/90"
                        placeholder="ที่อยู่บริษัทสำหรับออกใบเสร็จ"
                      ></textarea>
                    </div>
                  </div>
                )}
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
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <FiLoader className="animate-spin" />
                    ส่งข้อความ...
                  </div>
                ) : (
                  "ส่งข้อความ"
                )}
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
                    <p className="text-[#4a3631]">📞 082 113 8914</p>
                    <p className="text-[#4a3631] text-sm">
                      จันทร์-ศุกร์ 8:00-18:00 น.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiMessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">Line</h4>
                    <a
                      href="https://lin.ee/Eoc4mUN"
                      className="text-[#A6171C] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://lin.ee/Eoc4mUN
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">Facebook</h4>
                    <a
                      href="https://www.facebook.com/share/1G3NH5PCTG/"
                      className="text-[#A6171C] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/ruka
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#A6171C] text-white p-3 rounded-xl">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1a18]">Instagram</h4>
                    <a
                      href="https://www.instagram.com/ruka.ruka.world?igsh=MXZna2J1MHpzbnZscg=="
                      className="text-[#A6171C] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ruka.ruka.world
                    </a>
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
                <a
                  href="tel:082-113-8914"
                  className="w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-3 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FiPhone size={20} />
                  โทรหา Ruka เดี๋ยวนี้
                </a>
                <a
                  href="https://lin.ee/Eoc4mUN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FiMessageSquare size={20} />
                  แชทไลน์ @ruka
                </a>
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
