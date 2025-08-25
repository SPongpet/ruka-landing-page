"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostById, blogPosts } from "@/data/blogPosts";
import Image from "next/image";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ params }) => {
  const blogPost = getBlogPostById(params.id);

  if (!blogPost) {
    notFound();
  }

  // ฟังก์ชันจัดรูปแบบวันที่
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // หาบทความที่เกี่ยวข้อง (บทความอื่นในหมวดหมู่เดียวกัน)
  const relatedPosts = blogPosts
    .filter(
      (post) => post.id !== blogPost.id && post.category === blogPost.category
    )
    .slice(0, 3);

  // แปลงเนื้อหาให้เป็น paragraphs
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((paragraph, index) => {
        if (paragraph.trim() === "") return null;

        // ถ้าเป็นหัวข้อ (ขึ้นต้นด้วย emoji และมี :)
        if (paragraph.includes("🎁") && paragraph.includes(":")) {
          return (
            <h2
              key={index}
              className="text-2xl md:text-3xl font-bold text-[#A6171C] mb-6 mt-8"
            >
              {paragraph.trim()}
            </h2>
          );
        }

        // ถ้าเป็นหัวข้อย่อย (ขึ้นต้นด้วย emoji อื่น ๆ)
        if (
          /^[🌱🧠🎨💡🔄🎯🏢💄💳🌿✈️🩺🎓🇹🇭📜🧧🛍️🌟🎀💌🪄🌸🎬🎉🔚📌💼✨🧮📊🔚💡].+/.test(
            paragraph
          )
        ) {
          return (
            <h3
              key={index}
              className="text-xl md:text-2xl font-bold text-[#2d1a18] mb-4 mt-6"
            >
              {paragraph.trim()}
            </h3>
          );
        }

        // ถ้าเป็นข้อความที่อยู่ในเครื่องหมายคำพูด
        if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
          return (
            <blockquote
              key={index}
              className="bg-[#F1C045]/10 border-l-4 border-[#F1C045] p-4 my-6 italic text-[#2d1a18] text-lg"
            >
              {paragraph.trim()}
            </blockquote>
          );
        }

        // ถ้าเป็นรายการ (ขึ้นต้นด้วย •)
        if (paragraph.startsWith("•")) {
          return (
            <li
              key={index}
              className="text-[#4a3631] leading-relaxed mb-3 ml-4"
            >
              {paragraph.substring(1).trim()}
            </li>
          );
        }

        // ถ้าเป็น Tips หรือ Notes (ขึ้นต้นด้วย ✅, ❌, 💡, 🎁, etc.)
        if (/^[✅❌💡🎁⏳🧠🎨📩📞💻🧩🌟🕊️💬🎓].+/.test(paragraph)) {
          return (
            <div
              key={index}
              className="bg-[#A6171C]/5 border border-[#A6171C]/20 rounded-lg p-4 my-4"
            >
              <p className="text-[#2d1a18] font-medium">{paragraph.trim()}</p>
            </div>
          );
        }

        // ถ้าเป็นข้อความปกติ
        return (
          <p
            key={index}
            className="text-[#4a3631] leading-relaxed mb-4 text-lg"
          >
            {paragraph.trim()}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5]">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                หน้าแรก
              </Link>
              <span>›</span>
              <Link href="/Blog" className="hover:text-white transition-colors">
                บล็อก
              </Link>
              <span>›</span>
              <span className="text-[#F1C045]">บทความ</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-[#F1C045] text-[#A6171C] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {blogPost.category}
              </span>
              {blogPost.featured && (
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg ml-3">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#F1C045] rounded-full flex items-center justify-center text-[#A6171C] font-bold text-sm">
                  {blogPost.author.charAt(0)}
                </div>
                <span className="text-sm font-medium">{blogPost.author}</span>
              </div>
              <span>•</span>
              <span className="text-sm">
                {formatDate(blogPost.publishedAt)}
              </span>
              <span>•</span>
              <span className="text-sm">เวลาอ่าน {blogPost.readTime} นาที</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="bg-white rounded-3xl shadow-2xl border border-[#A6171C]/10 overflow-hidden">
              {/* Article Image */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-[#A6171C] via-[#8a1419] to-[#A6171C] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cG9seWdvbiBwb2ludHM9IjIwIDAgMzAgMjAgMjAgNDAgMTAgMjAiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={blogPost.imageUrl}
                    alt={blogPost.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 md:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#A6171C]/10 text-[#A6171C] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div className="prose max-w-none">
                  {formatContent(blogPost.content)}
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gradient-to-r from-[#A6171C]/5 to-transparent rounded-2xl border border-[#A6171C]/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#A6171C] to-[#8a1419] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {blogPost.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#2d1a18] mb-2">
                        {blogPost.author}
                      </h4>
                      <p className="text-[#4a3631] leading-relaxed">
                        ทีมผู้เชี่ยวชาญด้านของขวัญองค์กรจาก Ruka
                        พร้อมให้คำปรึกษาและแนวทางในการเลือกของขวัญที่เหมาะสมกับแบรนด์และกลุ่มเป้าหมายของคุณ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-[#2d1a18] mb-8 text-center">
                  บทความที่เกี่ยวข้อง
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/Blog/${post.id}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#A6171C]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Article Image */}
                      <div className="relative h-40 bg-gradient-to-br from-[#A6171C] via-[#8a1419] to-[#A6171C] overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl text-white/90">🎁</div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#F1C045] text-[#A6171C] px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-[#2d1a18] mb-2 line-clamp-2 group-hover:text-[#A6171C] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-[#4a3631] text-sm line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#4a3631]">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>{post.readTime} นาที</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-[#A6171C] to-[#8a1419] rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ต้องการคำปรึกษาเรื่องของขวัญองค์กร?
              </h3>
              <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
                ทีม Ruka
                พร้อมให้คำปรึกษาและออกแบบของขวัญที่เหมาะสมกับแบรนด์ของคุณ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#A6171C] px-8 py-3 rounded-full font-bold hover:bg-[#F1C045] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ปรึกษาเลย
                </Link>
                <a
                  href="tel:0821138914"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📞 082-113-8914
                </a>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/Blog"
                className="inline-flex items-center gap-2 text-[#A6171C] hover:text-[#8a1419] font-semibold transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                กลับไปหน้าบล็อก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
