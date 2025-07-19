import React from "react";

import { heroDetails } from "@/data/hero";
import Link from "next/link";
// import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-64 px-5"
    >
      <div className="opacity-95 absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#D42C2D] via-[#A6171C] to-[#8B0000] bg-[linear-gradient(to_right,#a6171c_1px,transparent_1px),linear-gradient(to_bottom,#951519_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#DC143C,transparent)]"></div>
      </div>

      {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div> */}

      <div className="text-center relative z-20">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white max-w-lg md:max-w-4xl mx-auto drop-shadow-lg">
          {heroDetails.heading1}
        </h1>
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white max-w-lg md:max-w-4xl mx-auto drop-shadow-lg">
          {heroDetails.heading2}
        </h1>

        <div className="mt-24" />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="bg-[#8a1419] hover:bg-[#8a1419] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            🔍 สำรวจสินค้าของเรา
          </Link>
          <Link
            href="/contact"
            className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            💬 ขอคำปรึกษาฟรี
          </Link>
        </div>

        <div className="relative  mx-auto z-10 w-96 h-52"></div>
      </div>
    </section>
  );
};

export default Hero;
