import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d1a18] text-center mb-4">
          ความคิดเห็นจากลูกค้า
        </h2>
        <p className="text-[#4a3631] text-center max-w-2xl mx-auto mb-12">
          รับฟังเสียงจากลูกค้าที่เลือกใช้บริการของเรา
        </p>

        <div className="grid gap-8 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A6171C]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full shadow-md border-2 border-[#F1C045]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#2d1a18]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#A6171C] text-sm font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex text-[#F1C045] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[#4a3631] italic leading-relaxed">
                &quot;{testimonial.message}&quot;
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
