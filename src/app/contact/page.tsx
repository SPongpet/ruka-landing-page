"use client";

import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Red Background */}
      <div className="bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] pt-24 pb-16">
        <div className="container mx-auto px-4 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              ติดต่อเรา
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#F1C045] font-bold mb-8">
              Contact Us
            </h2>
            <div className="max-w-4xl mx-auto text-white">
              <p className="text-lg md:text-xl leading-relaxed mb-2">
                พร้อมให้คำปรึกษาและบริการคุณด้วยความเป็นมืออาชีพ
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                ติดต่อเราได้ทุกช่องทางตลอด 24 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                    placeholder="ชื่อบริษัทหรือองค์กร"
                  />
                </div>

                {/* Company Information Checkbox */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="checkbox"
                      name="hasCompany"
                      checked={form.hasCompany}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-[#A6171C] border-gray-300 rounded focus:ring-[#A6171C] focus:ring-2"
                    />
                    <label className="text-[#2d1a18] font-semibold">
                      มีข้อมูลบริษัท (TAX ID และที่อยู่)
                    </label>
                  </div>

                  {/* Conditional Company Fields */}
                  {form.hasCompany && (
                    <div className="space-y-4 ml-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#2d1a18] font-semibold mb-2">
                            หมวดหมู่สินค้า
                          </label>
                          <select
                            name="category"
                            value={form.category}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors disabled:bg-gray-100 disabled:text-gray-500"
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

                      <div>
                        <label className="block text-[#2d1a18] font-semibold mb-2">
                          จำนวนที่ต้องการ (ชิ้น)
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleInputChange}
                          min="1"
                          max="10000"
                          className="w-32 px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                          placeholder="1"
                        />
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
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#A6171C] focus:outline-none transition-colors"
                    placeholder="กรุณาระบุรายละเอียดความต้องการ"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                  ช่องทางการติดต่อ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                    <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d1a18] text-sm">
                        โทรศัพท์
                      </h4>
                      <p className="text-[#4a3631] text-sm">📞 082 113 8914</p>
                      <p className="text-[#4a3631] text-xs">
                        จันทร์-ศุกร์ 8:00-18:00 น.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                    <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                      💻
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d1a18] text-sm">
                        Line
                      </h4>
                      <a
                        href="https://lin.ee/Eoc4mUN"
                        className="text-[#A6171C] hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://lin.ee/Eoc4mUN
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                    <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d1a18] text-sm">
                        Facebook
                      </h4>
                      <a
                        href="https://www.facebook.com/share/1G3NH5PCTG/"
                        className="text-[#A6171C] hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        facebook.com/ruka
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                    <div className="w-10 h-10 bg-[#A6171C] rounded-full flex items-center justify-center text-white">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d1a18] text-sm">
                        Instagram
                      </h4>
                      <a
                        href="https://www.instagram.com/rukaworld_th?igsh=MWRqZXhuc2ExZnllcA=="
                        className="text-[#A6171C] hover:underline text-sm"
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
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-[#2d1a18] mb-4 text-center">
                  แผนที่
                </h3>
                <div className="rounded-2xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6404818959954!2d100.789271875089!3d13.679611786704772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6790081ef16f%3A0x2b442200e5a01fa3!2sSiri%20Place%20Bangna-Suvarnabhumi!5e0!3m2!1sen!2sth!4v1755010053037!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                  บริการด่วน
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:082-113-8914"
                    className="block w-full bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    📞 โทรหา Ruka เดี๋ยวนี้
                  </a>
                  <a
                    href="https://lin.ee/Eoc4mUN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    💻 แชทไลน์ @ruka
                  </a>
                  <button className="w-full border-2 border-[#A6171C] text-[#A6171C] hover:bg-[#A6171C] hover:text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 text-center">
                    📂 ดาวน์โหลดแคตตาล็อก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
