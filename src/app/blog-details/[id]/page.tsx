"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { blogData } from "@/data/blogData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const post = blogData.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f5f8fb] min-h-screen flex flex-col font-sans text-[#263238] selection:bg-[#F7931E] selection:text-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0B3C5D08_1px,transparent_1px),linear-gradient(to_bottom,#0B3C5D08_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      {/* Top Mini-Nav for Blog */}
      <div className="w-full bg-[#0B3C5D] px-6 py-4 flex justify-start items-center z-50 relative">
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-[11px] tracking-wide uppercase">Back to Home</span>
        </Link>
      </div>

      {/* Main Hero Header */}
      <header className="relative z-10 w-full pt-4 pb-16 md:pt-6 md:pb-24 px-6 text-center bg-gradient-to-b from-[#0B3C5D] to-[#062033] border-b-4 border-[#F7931E]">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <img 
            src="/energy-warehouse-logo.svg" 
            alt="Energy Warehouse Logo" 
            className="h-10 md:h-12 w-auto mb-6 drop-shadow-lg"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] tracking-tight max-w-4xl mx-auto mb-3 drop-shadow-lg">
            {post.title}
          </h1>
          <p className="text-sm md:text-base text-[#89a8c2] max-w-2xl mx-auto font-medium leading-relaxed">
            {post.subtitle}
          </p>
        </div>
      </header>

      {/* Page Layout: Article + Side Card */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 -mt-8 md:-mt-12 relative z-20 mb-20 flex-grow">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Article Content */}
          <article className="flex-1 bg-white rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(11,60,93,0.12)] border border-gray-100 flex flex-col">
            
            {/* Featured Image Inside Article */}
            <div className="w-full h-[200px] md:h-[350px] relative">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <div 
                className="prose prose-base md:prose-lg max-w-none prose-headings:text-[#0B3C5D] prose-a:text-[#F7931E] hover:prose-a:text-[#d67b14] prose-strong:text-[#0B3C5D]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Sticky Side Card */}
          <aside className="w-full lg:w-[320px] lg:sticky lg:top-10 bg-[#0B3C5D] text-white rounded-3xl p-8 shadow-[0_12px_35px_rgba(11,60,93,0.16)] shrink-0 flex flex-col items-start border border-white/10">
            <a 
              href="https://nearbyelectrician.co.za/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full h-40 bg-white/5 rounded-2xl mb-6 flex items-center justify-center p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <img src="/nearby-electrician.svg" alt="Nearby Electrician" className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
            </a>
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
              Compliance done right
            </h2>
            <p className="text-white/90 text-base leading-relaxed mb-6">
              Use this blog to educate homeowners, landlords, and businesses on why valid electrical compliance protects people and property.
            </p>
            <div className="border-t-4 border-[#F7931E] w-full pt-5 mt-auto">
              <p className="font-bold text-lg text-[#F7931E]">Need a COC inspection?</p>
              <p className="text-white/80 text-sm mt-1">Work with qualified, registered professionals.</p>
            </div>
          </aside>

        </div>
      </div>

      {/* Custom Amazing Footer */}
      <footer className="relative w-full bg-[#041622] pt-10 pb-6 px-6 overflow-hidden mt-auto border-t border-white/10">
        {/* Subtle Glow Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-[#F7931E]/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col items-center w-full mb-6 group">
            <img 
              src="/logo.svg" 
              alt="Energy Warehouse" 
              className="w-full max-w-[140px] md:max-w-[160px] h-auto drop-shadow-md mb-4 transform group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
            <p className="text-xs md:text-sm font-medium tracking-wide text-[#89a8c2]">
              Digital Compliance, Done Right
            </p>
          </div>
          
          <div className="text-white/40 text-[10px] md:text-xs font-medium tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Energy Warehouse. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}
