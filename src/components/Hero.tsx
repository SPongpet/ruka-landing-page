import React from "react";

import { heroDetails } from "@/data/hero";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-12 md:py-20 px-4 md:px-8 min-h-screen"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#A6171C] via-[#8B0000] to-[#6B0000]">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-70"></div>
      </div>

      <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
        <div className="text-center md:text-left relative z-20  w-8/12">
          <h1 className=" text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-8 leading-tight">
            {heroDetails.heading1}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-8 leading-tight">
            {heroDetails.heading2}
          </h2>

          {/* Ruka Logo */}
          <div className="mb-4 text-center">
            <div className="px-4 md:px-6 py-2 md:py-3 inline-block">
              <Image
                src="/icons/logo.png"
                alt="Rukå"
                width={100}
                height={100}
                className="w-64 h-36"
              />
            </div>
          </div>

          <div className="mb-6 md:mb-8 text-center">
            <p className="charmonman-font text-base sm:text-lg md:text-3xl text-[#FFFFFF] font-light italic">
              Elevate Your Corporate Gifting
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              href="/products"
              className="group bg-[#F1C045] hover:bg-[#e5b63e] text-[#8B4513] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              <span>สำรวจสินค้าของเรา</span>
            </Link>
          </div>
        </div>
        <div className="w-4/12 hidden md:block" />
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-20 w-full bg-gradient-to-br from-[#fdda59] via-[#fab553] to-[#f8924d]">
        {/* <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-[#fdf8f6]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg> */}
      </div>
    </section>
  );
};

export default Hero;
