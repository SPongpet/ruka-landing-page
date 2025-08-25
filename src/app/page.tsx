"use client";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Products from "@/components/Products";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import OneStopExperience from "@/components/OneStopExperience";
import RukaWorldSection from "@/components/AboutRuka";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import axios from "axios";
import ContactSection from "@/components/ContactSection";

const HomePage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/submit-contact", form);

      if (response.data && response.data.success) {
        alert("ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด");

        // Reset form
        setForm({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: "",
        });

        return;
      } else {
        throw new Error(
          response.data?.message || "เกิดข้อผิดพลาดในการส่งข้อมูล"
        );
      }
    } catch (axiosError: unknown) {
      console.error("Failed to submit form:", axiosError);

      let errorMessage = "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง";

      if (axios.isAxiosError(axiosError)) {
        if (axiosError.response) {
          console.error("Response error:", axiosError.response.data);
          errorMessage = `เกิดข้อผิดพลาด: ${axiosError.response.status}`;
        } else if (axiosError.request) {
          console.error("Request error:", axiosError.request);
          errorMessage = "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้";
        } else {
          console.error("Error:", axiosError.message);
        }
      }

      alert(errorMessage + " หรือติดต่อเราทางโทรศัพท์");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero />

      <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pb-16">
        <Container>
          {/* About RUKA WORLD Section */}
          <RukaWorldSection />

          <Products />

          <OneStopExperience />

          <Section
            id="pricing"
            title="package"
            description="เลือกแพ็คเกจที่เหมาะสมกับความต้องการและงบประมาณของคุณ"
          >
            <Pricing />
          </Section>

          {/* Testimonials Section */}
          <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  ลูกค้าพูดถึงเรา
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-[#F1C045] max-w-4xl mx-auto leading-relaxed">
                  ฟังเสียงจากลูกค้าที่เลือกใช้บริการของเรา
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="relative flex justify-center">
                    {/* ชั้นหลัง */}
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 w-full h-full bg-[#E5B78C] rounded-[1.5rem]"></div>

                    {/* ชั้นหน้า */}
                    <div className="relative bg-[#C89465] rounded-[1.5rem] p-4 md:p-6 w-full text-center shadow-lg">
                      {/* Avatar */}
                      <div className="flex justify-center mb-3" />
                      {/* <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div> */}

                      {/* Name */}
                      <h4 className="font-bold text-sm md:text-base text-white">
                        {testimonial.name}
                      </h4>

                      {/* Message */}
                      <p className="mt-2 text-xs md:text-sm text-white/90 leading-relaxed line-clamp-4">
                        &quot;{testimonial.message}&quot;
                      </p>
                    </div>
                  </div>
                ))}

                {/* ช่องว่างถ้าจำนวนไม่ครบ - แสดงเฉพาะใน desktop */}
                {Array.from(
                  { length: Math.max(0, 6 - testimonials.length) },
                  (_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="relative justify-center hidden lg:flex"
                    >
                      <div className="absolute top-3 left-3 w-full h-full bg-[#dbba99] rounded-[1.5rem]"></div>
                      <div className="relative bg-[#C89465] rounded-[1.5rem] w-full h-56"></div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          <FAQ />

          <CTA />
        </Container>
      </div>

      {/* Contact Section */}
      <ContactSection
        handleSubmit={handleSubmit}
        form={form}
        handleInputChange={handleInputChange}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default HomePage;
