"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  featured: boolean;
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [newPostsCount, setNewPostsCount] = useState(0);

  // ฟังก์ชันสำหรับดึงข้อมูลบล็อก
  const fetchBlogPosts = useCallback(
    async (category?: string, silent = false) => {
      try {
        const params = new URLSearchParams();
        if (category && category !== "ทั้งหมด") {
          params.append("category", category);
        }

        const response = await fetch(`/api/blog-posts?${params.toString()}`);
        const data = await response.json();

        if (data.success) {
          // ตรวจสอบบทความใหม่ - ใช้ setState callback เพื่อหลีกเลี่ยง dependency
          if (!silent) {
            setBlogPosts((prevPosts) => {
              if (prevPosts.length > 0) {
                const newPosts = data.data.filter(
                  (newPost: BlogPost) =>
                    !prevPosts.some(
                      (existingPost) => existingPost.id === newPost.id
                    )
                );
                if (newPosts.length > 0) {
                  setNewPostsCount((prev) => prev + newPosts.length);
                }
              }
              return data.data;
            });
          } else {
            setBlogPosts(data.data);
          }

          setLastUpdated(data.lastUpdated);

          // หาบทความเด่น
          const featured = data.data.find((post: BlogPost) => post.featured);
          setFeaturedPost(featured || data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    },
    [] // เอา blogPosts ออกจาก dependency เพื่อหลีกเลี่ยง infinite loop
  );

  // ฟังก์ชันสำหรับรีเฟรชข้อมูล
  // const refreshData = async () => {
  //   setLoading(true);
  //   try {
  //     await fetch("/api/blog-posts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ action: "refresh" }),
  //     });

  //     await Promise.all([fetchBlogPosts(selectedCategory), fetchCategories()]);
  //   } catch (error) {
  //     console.error("Error refreshing data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // โหลดข้อมูลเมื่อ component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchBlogPosts();
      setLoading(false);
    };

    loadData();
  }, [fetchBlogPosts]);

  // Auto-refresh ทุกวัน
  useEffect(() => {
    const interval = setInterval(() => {
      fetchBlogPosts(undefined, true); // silent mode
    }, 24 * 60 * 60 * 1000); // 24 hours

    return () => clearInterval(interval);
  }, [fetchBlogPosts]);

  // ฟังก์ชันล้างการแจ้งเตือนบทความใหม่
  const clearNewPostsNotification = () => {
    setNewPostsCount(0);
  };

  // ฟังก์ชันจัดรูปแบบวันที่
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ฟังก์ชันสำหรับเปิดลิงก์ภายนอก
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
      <div className="container mx-auto px-4 mt-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2d1a18] mb-6 drop-shadow-lg">
            Blog & Insights for Ruka
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#A6171C] font-semibold italic mb-8 drop-shadow-md">
            ไอเดีย เทรนด์ และเคล็ดลับของขวัญองค์กร
          </h2>
          <p className="text-[#4a3631] max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            อัปเดตไอเดีย & เทรนด์ของขวัญองค์กร พร้อมเคล็ดลับสร้าง โมเมนต์
            ให้แบรนด์คุณ
          </p>

          {/* Refresh Button & Controls */}
          <div className="flex flex-col items-center gap-4 mb-4">
            {/* <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => {
                  refreshData();
                  clearNewPostsNotification();
                }}
                className="bg-[#A6171C] hover:bg-[#8a1419] text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 relative"
              >
                🔄 รีเฟรชข้อมูลใหม่
                {newPostsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F1C045] text-[#A6171C] text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {newPostsCount}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[#4a3631] text-sm">Auto-refresh:</span>
                <button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoRefresh ? "bg-[#A6171C]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoRefresh ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div> */}

            {lastUpdated && (
              <span className="text-[#4a3631] text-sm">
                อัปเดตล่าสุด: {formatDate(lastUpdated)}
                {/* {autoRefresh && (
                  <span className="ml-2 text-xs">
                    (Auto-refresh ทุก 5 นาที)
                  </span>
                )} */}
              </span>
            )}

            {/* New Posts Notification */}
            {newPostsCount > 0 && (
              <div className="bg-[#F1C045] text-[#A6171C] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                🎉 มีบทความใหม่ {newPostsCount} บทความ!
                <button
                  onClick={clearNewPostsNotification}
                  className="text-[#A6171C] hover:text-[#8a1419] ml-2"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-[#A6171C]/20 mb-8">
                <div className="h-64 bg-gradient-to-br from-[#A6171C] to-[#8a1419] flex items-center justify-center">
                  <span className="text-6xl text-white opacity-80">🎁</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#A6171C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-[#4a3631] text-sm">
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                    <span className="bg-[#F1C045] text-[#A6171C] px-2 py-1 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-[#4a3631] leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#4a3631] text-sm">
                      โดย {featuredPost.author} | จาก {featuredPost.sourceName}
                    </span>
                    <button
                      onClick={() => openExternalLink(featuredPost.sourceUrl)}
                      className="text-[#A6171C] hover:text-[#8a1419] font-semibold transition-colors flex items-center gap-1"
                    >
                      อ่านต่อ →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-[#A6171C]/20 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-[#A6171C] to-[#8a1419] flex items-center justify-center">
                      <span className="text-6xl text-white opacity-80">🎁</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-[#F1C045] text-[#A6171C] px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="text-[#4a3631] text-xs">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#2d1a18] mb-3 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-[#4a3631] text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4a3631] text-xs">
                          จาก {post.sourceName}
                        </span>
                        <button
                          onClick={() => openExternalLink(post.sourceUrl)}
                          className="text-[#A6171C] hover:text-[#8a1419] font-semibold text-sm transition-colors flex items-center gap-1"
                        >
                          อ่านเพิ่มเติม →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* No posts message */}
            {blogPosts.length === 0 && (
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
                      onClick={() => setSelectedCategory(category.name)}
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

            {/* Popular Topics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-6">
                บทความยอดนิยม
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-[#A6171C]/10 last:border-b-0"
                  >
                    <button
                      onClick={() => openExternalLink(post.sourceUrl)}
                      className="block text-left text-[#2d1a18] hover:text-[#A6171C] font-semibold text-sm mb-1 transition-colors"
                    >
                      {post.title}
                    </button>
                    <span className="text-[#4a3631] text-xs">
                      🏷️ {post.category} | จาก {post.sourceName}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruka Insights */}
            <div className="bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">
                💌 Ruka Insights Newsletter
              </h3>
              <p className="text-white/90 text-sm mb-4">
                รับไอเดียใหม่ๆ เทรนด์ล่าสุด
                และเคล็ดลับพิเศษส่งตรงถึงอีเมลคุณทุกสัปดาห์
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="w-full px-4 py-3 rounded-xl border-none focus:outline-none text-[#2d1a18]"
                />
                <button className="w-full bg-white text-[#A6171C] py-3 px-4 rounded-xl font-semibold hover:bg-[#F1C045] transition-colors duration-200">
                  🚀 Subscribe Now
                </button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#A6171C]/20">
              <h3 className="text-xl font-bold text-[#2d1a18] mb-4">
                💬 ต้องการคำปรึกษา?
              </h3>
              <p className="text-[#4a3631] text-sm mb-4">
                ทีม Ruka พร้อมให้คำปรึกษาเรื่องของขวัญองค์กรฟรี!
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#A6171C] hover:bg-[#8a1419] text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200"
              >
                ปรึกษาเลย
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
