"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="demo-video" className="relative z-20 w-full bg-[#0A2540] text-white py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Cinematic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] md:h-[600px] bg-[var(--color-accent)]/10 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-white/90 text-[10px] md:text-sm font-semibold tracking-wide uppercase">
              See it in Action
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-[1.1]">
            Two minutes to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#FFB75E]">perfect compliance.</span>
          </h2>
          <p className="text-base md:text-xl text-blue-100/70 max-w-2xl mx-auto font-medium">
            Watch exactly how Energy Warehouse saves you hours of paperwork and frustration on every job site.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 80 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative group rounded-xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5 backdrop-blur-md p-1 md:p-3"
        >
          <div className="relative rounded-lg md:rounded-2xl overflow-hidden bg-[#0A2540] w-full border border-white/10">
            {/* Mac OS window styling top bar */}
            <div className="absolute top-0 left-0 right-0 h-6 md:h-10 bg-gradient-to-b from-white/10 to-transparent flex items-center px-3 md:px-4 z-20">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F56]/90 shadow-sm" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]/90 shadow-sm" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#27C93F]/90 shadow-sm" />
              </div>
            </div>

            <video
              ref={videoRef}
              src="/video.mp4"
              className="w-full h-auto object-cover cursor-pointer block rounded-b-lg md:rounded-b-2xl pt-6 md:pt-10"
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
            />

            {/* Custom Controls Overlay */}
            <div className="absolute inset-0 top-6 md:top-10 pointer-events-none flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
              <button
                onClick={togglePlay}
                className={`w-14 h-14 md:w-24 md:h-24 rounded-full bg-[var(--color-accent)]/90 backdrop-blur-md flex items-center justify-center text-white shadow-2xl transform transition-all duration-300 pointer-events-auto hover:scale-110 hover:bg-[#F7931E] border border-white/20 ${isPlaying ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100 group-hover:opacity-100'}`}
              >
                {isPlaying ? <Pause className="w-6 h-6 md:w-10 md:h-10 ml-0" /> : <Play className="w-6 h-6 md:w-10 md:h-10 ml-1 md:ml-2" />}
              </button>
            </div>

            {/* Bottom Control Bar */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between z-20 pointer-events-none">
              <div />
              <button 
                onClick={toggleMute}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-black/80 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
