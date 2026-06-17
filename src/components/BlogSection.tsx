"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Moving Beyond Paper Compliance",
    category: "Insights",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
  },
  {
    id: 2,
    title: "Biometric Signatures Are Here",
    category: "Product",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80"
  },
  {
    id: 3,
    title: "Navigating SANS Regulations",
    category: "Industry",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
  },
  {
    id: 4,
    title: "Scaling Operations by 300%",
    category: "Case Study",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
  }
];

export default function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="blog"
      className="relative z-20 w-full min-h-[70vh] py-20 overflow-hidden bg-[#0B3C5D] border-t border-white/10"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F7931E]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">

        {/* Minimalist Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F7931E]">
                Latest News
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#FFB75E]">Insights</span>
            </h2>
          </div>
          <p className="text-[#89a8c2] text-sm md:text-base max-w-sm font-medium leading-relaxed">
            Stay updated with the latest trends, product updates, and deep dives into the digital compliance landscape.
          </p>
        </div>

        {/* Creative Expanding Accordion Gallery */}
        <div 
          className="flex flex-col lg:flex-row w-full h-auto lg:h-[600px] gap-4 mt-8 mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {posts.map((post, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative w-full h-[300px] lg:h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl ${isActive ? 'lg:flex-[3]' : 'lg:flex-1'}`}
              >
                {/* Image */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-110' : 'scale-100'}`}
                />
                
                {/* Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#041622] via-[#041622]/40 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-90' : 'opacity-80 lg:opacity-60'}`} />
                <div className={`absolute inset-0 bg-[#F7931E]/20 mix-blend-overlay transition-colors duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Inner Glowing Border on Hover */}
                <div className={`absolute inset-0 border-2 rounded-[2rem] transition-colors duration-700 pointer-events-none ${isActive ? 'border-[#F7931E]/50' : 'border-white/0'}`} />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start overflow-hidden">
                  
                  {/* Top Category Badge */}
                  <div className={`mb-auto bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 shadow-lg transform transition-all duration-500 delay-100 ${isActive ? 'translate-y-0 opacity-100' : 'lg:-translate-y-4 lg:opacity-0'}`}>
                    {post.category}
                  </div>

                  {/* Bottom Content Group */}
                  <div className="flex flex-col gap-2 w-full lg:w-[400px] min-w-[200px]">
                    
                    {/* Title */}
                    <h3 className={`text-white font-bold text-2xl md:text-3xl leading-tight drop-shadow-md transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'translate-y-0' : 'lg:translate-y-8'}`}>
                      {post.title}
                    </h3>

                    {/* Read Article Link */}
                    <div className={`flex items-center gap-2 text-[#F7931E] text-xs font-black uppercase tracking-widest transform transition-all duration-700 mt-2 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'lg:opacity-0 lg:translate-y-4'}`}>
                      Read Article <ArrowUpRight className={`w-4 h-4 transform transition-transform duration-300 ${isActive ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
