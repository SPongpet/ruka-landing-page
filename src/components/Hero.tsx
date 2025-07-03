import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-4xl mx-auto">
          {heroDetails.heading}
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-ruby italic">
          {heroDetails.subheading}
        </h2>
        <p className="mt-6 text-foreground-accent max-w-2xl mx-auto text-lg">
          {heroDetails.description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-ruby hover:bg-ruby/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            เริ่มสำรวจสินค้า
          </button>
          <button className="bg-sunny hover:bg-sunny/90 text-ruby px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            ปรึกษาฟรี
          </button>
        </div>
        <div className="relative mt-12 md:mt-16 mx-auto z-10 w-96 h-80"></div>
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
