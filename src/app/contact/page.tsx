/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { productCategories } from "@/data/products";
import { productDetails } from "@/data/productDetails";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  product: string;
  quantity: number;
  message: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    product: "",
    quantity: 50,
    message: "",
  });

  const [availableProducts, setAvailableProducts] = useState<any[]>([]);

  // Update available products when category changes
  useEffect(() => {
    if (form.category) {
      const products = productDetails[form.category] || [];
      setAvailableProducts(products);
      setForm((prev) => ({ ...prev, product: "" })); // Reset product selection
    } else {
      setAvailableProducts([]);
    }
  }, [form.category]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", form);
    alert("ขอบคุณสำหรับการติดต่อ! เราจะติดต่อกลับภายใน 24 ชั่วโมง");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-natural/10 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            ติดต่อเรา
          </h1>
          <h2 className="text-2xl md:text-3xl text-ruby font-semibold italic mb-8">
            Contact Us
          </h2>
          <p className="text-foreground-accent max-w-3xl mx-auto text-lg leading-relaxed">
            พร้อมให้คำปรึกษาและช่วยคุณเลือกสินค้าของชำร่วยที่เหมาะสมกับความต้องการ
            กรุณากรอกข้อมูลด้านล่าง เราจะติดต่อกลับทันที
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-natural/20 h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                ข้อมูลการติดต่อ
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-ruby/10 p-3 rounded-2xl">
                    <FiPhone className="text-ruby" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      โทรศัพท์
                    </h4>
                    <p className="text-foreground-accent">02-XXX-XXXX</p>
                    <p className="text-foreground-accent">08X-XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ruby/10 p-3 rounded-2xl">
                    <FiMail className="text-ruby" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      อีเมล
                    </h4>
                    <p className="text-foreground-accent">
                      contact@rukaworld.com
                    </p>
                    <p className="text-foreground-accent">info@rukaworld.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-ruby/10 p-3 rounded-2xl">
                    <FiMapPin className="text-ruby" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      ที่อยู่
                    </h4>
                    <p className="text-foreground-accent">
                      123 ถนนสุขุมวิท แขวงคลองเตย
                      <br />
                      เขตคลองเตย กรุงเทพฯ 10110
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-natural/20">
                <h4 className="font-semibold text-foreground mb-4">
                  เวลาทำการ
                </h4>
                <div className="space-y-2 text-foreground-accent">
                  <p>จันทร์ - ศุกร์: 8:30 - 17:30</p>
                  <p>เสาร์: 9:00 - 16:00</p>
                  <p>อาทิตย์: ปิด</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-natural/20">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                ฟอร์มสอบถาม
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                      placeholder="กรอกชื่อ-นามสกุล"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      เบอร์โทรศัพท์ *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      ชื่อบริษัท
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                      placeholder="ชื่อบริษัท/องค์กร"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      หมวดหมู่สินค้าที่สนใจ *
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                    >
                      <option value="">เลือกหมวดหมู่</option>
                      {productCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} - {category.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      สินค้าที่สนใจ
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleInputChange}
                      disabled={!form.category}
                      className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors disabled:bg-natural/10 disabled:text-foreground-accent"
                    >
                      <option value="">เลือกสินค้า</option>
                      {availableProducts.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    จำนวนที่ต้องการ (ชิ้น) *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors"
                    placeholder="จำนวน"
                  />
                  <p className="text-sm text-foreground-accent mt-2">
                    * จำนวนขั้นต่ำอาจแตกต่างกันตามประเภทสินค้า
                  </p>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    ข้อความ / รายละเอียดเพิ่มเติม
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-natural/30 rounded-xl focus:outline-none focus:border-ruby transition-colors resize-none"
                    placeholder="กรุณาระบุรายละเอียดเพิ่มเติม เช่น การปรับแต่งโลโก้, สี, ขนาด หรือความต้องการพิเศษอื่นๆ"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ruby hover:bg-ruby/90 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <FiSend size={20} />
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-natural/20 text-center">
            <div className="bg-sunny/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiPhone className="text-ruby" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              โทรสอบถาม
            </h3>
            <p className="text-foreground-accent mb-6">
              พูดคุยกับทีมผู้เชี่ยวชาญโดยตรง
            </p>
            <button className="bg-sunny hover:bg-sunny/90 text-ruby px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              02-XXX-XXXX
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-natural/20 text-center">
            <div className="bg-sunny/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMail className="text-ruby" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">ส่งอีเมล</h3>
            <p className="text-foreground-accent mb-6">
              ส่งข้อมูลรายละเอียดให้เรา
            </p>
            <button className="bg-sunny hover:bg-sunny/90 text-ruby px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              contact@rukaworld.com
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-natural/20 text-center">
            <div className="bg-sunny/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMessageCircle className="text-ruby" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              แชทออนไลน์
            </h3>
            <p className="text-foreground-accent mb-6">
              พูดคุยผ่าน Line หรือ Facebook
            </p>
            <button className="bg-sunny hover:bg-sunny/90 text-ruby px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              แชทเลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
