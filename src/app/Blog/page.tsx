"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  blogPosts,
  categories,
  getFeaturedPosts,
  getBlogPostsByCategory,
} from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

const BlogPage: React.FC = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>("ทั้งหมด");
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันสำหรับกรองบทความตามหมวดหมู่
  const filterPostsByCategory = (category: string) => {
    setSelectedCategory(category);
    const filtered = getBlogPostsByCategory(category);
    setFilteredPosts(filtered);
  };

  // โหลดข้อมูลเมื่อ component mount
  useEffect(() => {
    setLoading(true);
    // ตั้งค่าบทความเด่น
    const featured = getFeaturedPosts();
    setFeaturedPost(featured[0] || blogPosts[0]);

    // ตั้งค่าบทความที่จะแสดง
    setFilteredPosts(blogPosts);

    setLoading(false);
  }, []);

  // ฟังก์ชันจัดรูปแบบวันที่
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#A6171C] mx-auto mb-4"></div>
          <p className="text-[#A6171C] text-lg font-semibold">
            กำลังโหลดบทความใหม่...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-b from-[#7b1a1b] to-[#de2a29]  pt-24 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto py-16">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-none">
                <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Blog & Insights
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-[#F1C045] font-bold">
                  for RUKA
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl text-[#F1C045] font-bold mb-4 drop-shadow-lg">
                ไอเดีย เทรนด์ และเคล็ดลับของขวัญองค์กร
              </h2>
              <p className="text-white/90 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                อัปเดตไอเดีย & เทรนด์ของขวัญองค์กร พร้อมเคล็ดลับสร้าง โมเมนต์
                ให้แบรนด์คุณ
              </p>
            </div>

            {/* Status Info */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                <span className="text-white/90 text-sm font-medium">
                  บทความทั้งหมด: {blogPosts.length} บทความ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Light Background */}
      <div className="bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Enhanced Featured Post */}
              {featuredPost && (
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#A6171C]/10 mb-12 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-gradient-to-r from-[#A6171C] to-[#8a1419] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F1C045] rounded-full animate-pulse"></span>
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Hero Image Section */}
                  <div className="relative h-80 bg-gradient-to-br from-[#A6171C] via-[#8a1419] to-[#A6171C] overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cG9seWdvbiBwb2ludHM9IjIwIDAgMzAgMjAgMjAgNDAgMTAgMjAiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
                    </div>

                    {/* Gift Icon with Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="text-8xl text-white/90 transform group-hover:scale-110 transition-transform duration-500">
                          🎁
                        </div>
                        <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 text-[#4a3631] text-sm">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {formatDate(featuredPost.publishedAt)}
                      </div>
                      <div className="bg-gradient-to-r from-[#F1C045] to-[#e6a635] text-[#A6171C] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {featuredPost.category}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#2d1a18] mb-4 leading-tight group-hover:text-[#A6171C] transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#4a3631] leading-relaxed mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[#2d1a18] font-semibold text-sm">
                            {featuredPost.author}
                          </div>
                          <div className="text-[#4a3631] text-xs">
                            เวลาอ่าน {featuredPost.readTime} นาที
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/Blog/${featuredPost.id}`}
                        className="group/btn bg-gradient-to-r from-[#A6171C] to-[#8a1419] hover:from-[#8a1419] hover:to-[#A6171C] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                      >
                        อ่านต่อ
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post, index) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-[#A6171C]/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Article Image */}
                      <div className="relative h-52 bg-gradient-to-br from-[#A6171C] via-[#8a1419] to-[#A6171C] overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
                        </div>

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl text-white/90 transform group-hover:scale-110 transition-transform duration-500">
                            🎁
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#F1C045] text-[#A6171C] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {post.category}
                          </span>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta Info */}
                        <div className="flex items-center gap-2 mb-4">
                          <svg
                            className="w-4 h-4 text-[#4a3631]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[#4a3631] text-xs font-medium">
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-[#2d1a18] mb-3 leading-tight group-hover:text-[#A6171C] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-[#4a3631] text-sm leading-relaxed mb-5 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#A6171C]/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-full flex items-center justify-center text-white font-bold text-xs">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-[#4a3631] text-xs font-medium">
                              เวลาอ่าน {post.readTime} นาที
                            </span>
                          </div>

                          <Link
                            href={`/Blog/${post.id}`}
                            className="group/btn bg-gradient-to-r from-[#A6171C] to-[#8a1419] hover:from-[#8a1419] hover:to-[#A6171C] text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                          >
                            อ่านเพิ่มเติม
                            <svg
                              className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>

              {/* No posts message */}
              {filteredPosts.filter((post) => !post.featured).length === 0 && (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">📚</span>
                  <h3 className="text-xl font-bold text-[#2d1a18] mb-2">
                    ไม่พบบทความในหมวดหมู่นี้
                  </h3>
                  <p className="text-[#4a3631]">
                    ลองเลือกหมวดหมู่อื่น หรือรอบทความใหม่ๆ จากเรา
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              {/* <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
                <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                  หมวดหมู่บทความ
                </h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => filterPostsByCategory(category.name)}
                        className={`w-full flex justify-between items-center p-2 rounded-lg transition-colors ${
                          selectedCategory === category.name
                            ? "bg-[#A6171C] text-white"
                            : "text-[#4a3631] hover:text-[#A6171C] hover:bg-[#A6171C]/10"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            selectedCategory === category.name
                              ? "bg-white/20 text-white"
                              : "bg-[#A6171C]/10 text-[#A6171C]"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Enhanced Popular Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#A6171C]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🔥</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2d1a18]">
                    บทความยอดนิยม
                  </h3>
                </div>

                <div className="space-y-5">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <div key={index} className="group relative">
                      <Link
                        href={`/Blog/${post.id}`}
                        className="block w-full text-left p-4 rounded-xl border border-[#A6171C]/10 hover:border-[#A6171C]/30 hover:bg-gradient-to-r hover:from-[#A6171C]/5 hover:to-transparent transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#F1C045] to-[#e6a635] rounded-full flex items-center justify-center text-[#A6171C] font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-[#2d1a18] group-hover:text-[#A6171C] transition-colors duration-300 line-clamp-2 mb-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-[#4a3631]">
                              <span className="bg-[#F1C045]/20 text-[#A6171C] px-2 py-1 rounded-full font-medium">
                                {post.category}
                              </span>
                              <span>•</span>
                              <span>{post.readTime} นาที</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Newsletter */}
              <div className="relative bg-gradient-to-br from-[#A6171C] via-[#8a1419] to-[#A6171C] rounded-2xl p-6 shadow-2xl text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F1C045] rounded-full flex items-center justify-center text-[#A6171C] text-xl">
                      💌
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Ruka Insights</h3>
                      <p className="text-white/80 text-sm">Newsletter</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    รับไอเดียใหม่ๆ เทรนด์ล่าสุด
                    และเคล็ดลับพิเศษส่งตรงถึงอีเมลคุณทุกสัปดาห์
                  </p>

                  {/* Form */}
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="อีเมลของคุณ"
                        className="w-full px-4 py-3 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#F1C045] text-[#2d1a18] placeholder-gray-500 shadow-lg"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A6171C]">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>
                    </div>

                    <button className="group w-full bg-white text-[#A6171C] py-3 px-4 rounded-xl font-bold hover:bg-[#F1C045] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      <span>🚀 Subscribe Now</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#A6171C]/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F1C045] to-[#e6a635] rounded-full flex items-center justify-center text-[#A6171C] text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2d1a18]">
                      ต้องการคำปรึกษา?
                    </h3>
                    <p className="text-[#4a3631] text-sm">ปรึกษาฟรี 24/7</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4a3631] text-sm mb-6 leading-relaxed">
                  ทีม Ruka พร้อมให้คำปรึกษาเรื่องของขวัญองค์กรฟรี!
                  มืออาชีพด้วยประสบการณ์กว่า 10 ปี
                </p>

                {/* Contact Methods */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-[#A6171C]/5 rounded-xl">
                    <div className="w-8 h-8 bg-[#A6171C] rounded-full flex items-center justify-center text-white text-sm">
                      📞
                    </div>
                    <div>
                      <p className="text-[#2d1a18] font-semibold text-sm">
                        โทรสอบถาม
                      </p>
                      <p className="text-[#4a3631] text-xs">082-113-8914</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F1C045]/10 rounded-xl">
                    <div className="w-8 h-8 bg-[#F1C045] rounded-full flex items-center justify-center text-[#A6171C] text-sm">
                      💻
                    </div>
                    <div>
                      <p className="text-[#2d1a18] font-semibold text-sm">
                        แชทออนไลน์
                      </p>
                      <p className="text-[#4a3631] text-xs">พร้อมตอบ 24 ชม.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group block text-center bg-gradient-to-r from-[#A6171C] to-[#8a1419] hover:from-[#8a1419] hover:to-[#A6171C] text-white py-4 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    ปรึกษาเลย
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
