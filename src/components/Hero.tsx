import React from "react";

import { heroDetails } from "@/data/hero";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full bg-gradient-to-br from-[#f0e0d8] via-[#ffc8ca] to-[#ffc8ca]">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#A6171C12_1px,transparent_1px),linear-gradient(to_bottom,#A6171C12_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A6171C]/5 to-[#A6171C]/10"></div>
      </div>

      {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div> */}

      <div className="text-center relative z-20">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-[#2d1a18] max-w-lg md:max-w-4xl mx-auto drop-shadow-lg">
          {heroDetails.heading}
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#A6171C] italic drop-shadow-md">
          {heroDetails.subheading}
        </h2>
        <p className="mt-6 text-[#4a3631] max-w-2xl mx-auto text-lg drop-shadow-md">
          {heroDetails.description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            เริ่มสำรวจสินค้า
          </button>
          <button className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            ปรึกษาฟรี
          </button>
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={300}
          quality={100}
          sizes="(max-width: 680px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="Ruka corporate gifts showcase"
          className="relative  mx-auto z-10 drop-shadow-xl"
        />
        <div className="relative  mx-auto z-10 w-96 "></div>
        {/* <div className="relative  mx-auto z-10 w-96 h-20"></div> */}
        {/* <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="Ruka corporate gifts showcase"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
