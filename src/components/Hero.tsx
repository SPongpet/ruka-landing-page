"use client";

import React, { useState, useEffect, useCallback } from "react";
import { heroDetails } from "@/data/hero";
import { productCategories } from "@/data/products";
import { getLatestPosts } from "@/data/blogPosts";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = 3;

  // Get featured products (popular ones)
  const featuredProducts = productCategories.filter((p) => p.popular);

  // Get latest blog post
  const latestBlog = getLatestPosts(1)[0];

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        console.log("Auto-sliding from", prev, "to", next);
        return next;
      });
    }, 40000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    console.log("Going to slide", index);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % totalSlides;
    console.log("Next slide clicked:", next);
    goToSlide(next);
  }, [currentSlide, goToSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    console.log("Previous slide clicked:", prev);
    goToSlide(prev);
  }, [currentSlide, goToSlide, totalSlides]);

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen w-full"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out min-h-screen"
        style={{
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {/* Banner 1: Original Hero */}
        <div
          className="relative flex items-center justify-center py-12 md:py-20 px-4 md:px-8 min-h-screen"
          style={{ width: `${100 / totalSlides}%`, flexShrink: 0 }}
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#A6171C] via-[#8B0000] to-[#6B0000]">
            <div className="absolute inset-0 bg-[url('/background/bg-3.jpg')] bg-cover bg-center bg-no-repeat opacity-70"></div>
          </div>

          <div className="flex items-center justify-center w-full">
            <div className="flex-1 items-center justify-center w-full max-w-7xl mx-auto">
              <div className="text-center md:text-left relative z-20 w-full">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-8 leading-tight md:pl-20">
                  {heroDetails.heading1}
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-8 leading-tight md:pl-20">
                  {heroDetails.heading2}
                </h2>

                {/* Ruka Logo */}
                <div className="flex flex-col items-center justify-center">
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
              </div>
              <div className="w-4/12 hidden md:block" />
            </div>
            <div className="flex-1 hidden md:block" />
          </div>
        </div>

        {/* Banner 2: Featured Products */}
        <div
          className="relative flex items-center justify-center py-12 md:py-20 px-4 md:px-8 min-h-screen"
          style={{ width: `${100 / totalSlides}%`, flexShrink: 0 }}
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-[#7b1a1b] to-[#de2a29]">
            <div className="absolute inset-0 bg-[url('/background/bg-4.png')] bg-cover bg-center bg-no-repeat opacity-40"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                สินค้ายอดนิยม
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#F1C045] font-bold">
                คัดสรรสินค้าคุณภาพเพื่อธุรกิจของคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#2d1a18] mb-2 group-hover:text-[#A6171C] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#4a3631]">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link
                href="/products"
                className="inline-block bg-white text-[#A6171C] hover:bg-[#F1C045] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ดูสินค้าทั้งหมด
              </Link>
            </div>
          </div>
        </div>

        {/* Banner 3: Latest Blog/News */}
        <div
          className="relative flex items-center justify-center py-12 md:py-20 px-4 md:px-8 min-h-screen"
          style={{ width: `${100 / totalSlides}%`, flexShrink: 0 }}
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-[#7b1a1b] to-[#de2a29]">
            <div className="absolute inset-0 bg-[url('/background/bg-5.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="w-full max-w-6xl mx-auto relative z-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                ข่าวสารและบทความล่าสุด
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#F1C045] font-bold">
                อัพเดทเทรนด์และไอเดียของขวัญองค์กร
              </p>
            </div>

            {latestBlog && (
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                      src={latestBlog.imageUrl}
                      alt={latestBlog.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F1C045] text-[#8B4513] px-4 py-2 rounded-full text-sm font-bold">
                        {latestBlog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-4 line-clamp-2">
                      {latestBlog.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm md:text-base">
                      {latestBlog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <span>
                        📅{" "}
                        {new Date(latestBlog.publishedAt).toLocaleDateString(
                          "th-TH"
                        )}
                      </span>
                      <span>⏱️ {latestBlog.readTime} นาที</span>
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={`/Blog/${latestBlog.id}`}
                        className="flex-1 bg-gradient-to-r from-[#A6171C] to-[#8a1419] hover:from-[#8a1419] hover:to-[#A6171C] text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        อ่านบทความ
                      </Link>
                      <Link
                        href="/Blog"
                        className="flex-1 bg-white text-[#A6171C] hover:bg-[#F1C045] hover:text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        บทความทั้งหมด
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-20 w-full bg-gradient-to-br from-[#fdda59] via-[#fab553] to-[#f8924d]"></div>
    </section>
  );
};

export default Hero;
