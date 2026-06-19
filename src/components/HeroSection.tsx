"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, ArrowUpRight, ChevronDown, Download } from "lucide-react";

const BG_IMAGES = [
  "/bg_front.png",      // original dark blue digital circuit/web image
  "/hero_solar_1.png",  // solar farm golden hour
];

export default function HeroSection({ ready = false }: { ready?: boolean }) {
  const indexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---------------------------------------------------------------------------
  // When ready flips true (intro done): show bg
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (ready) {
      setBgVisible(true);
    }
  }, [ready]);

  // ---------------------------------------------------------------------------
  // Auto-cycle background smoothly
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!bgVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000); // Change scene every 5 seconds
    return () => clearInterval(interval);
  }, [bgVisible]);

  // ---------------------------------------------------------------------------
  // Framer Motion variants — only animate when ready
  // ---------------------------------------------------------------------------
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const title = "Stop wasting hours on electrical compliance.";
  const titleWords = title.split(" ");

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-start pt-20 md:pt-24 px-6 overflow-hidden"
    >

      {/* ------------------------------------------------------------------ */}
      {/* Background Images Crossfade                                         */}
      {/* ------------------------------------------------------------------ */}
      {bgVisible && (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={BG_IMAGES[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </AnimatePresence>
        </div>
      )}



      {/* ------------------------------------------------------------------ */}
      {/* Floating Device Overlays                                            */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {bgVisible && ready && currentIndex === 0 && (
          <motion.div
            key="desktop"
            initial={{ opacity: 0, x: 100, y: "-45%", scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              y: ["-50%", "-52%", "-50%"],
              scale: 1
            }}
            exit={{ opacity: 0, x: 100, y: "-45%", scale: 0.9 }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.8 }
            }}
            className="absolute right-[1%] xl:right-[3%] top-[60%] w-[44%] max-w-[700px] z-10 pointer-events-none hidden lg:block drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/desktopSvg.svg"
              alt="Desktop Dashboard"
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {bgVisible && ready && currentIndex === 1 && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, x: 100, y: "-45%", scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              y: ["-50%", "-52%", "-50%"],
              scale: 1
            }}
            exit={{ opacity: 0, x: 100, y: "-45%", scale: 0.9 }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8, ease: "easeOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              scale: { duration: 0.8 }
            }}
            className="absolute right-[2%] xl:right-[5%] top-[58%] w-[25%] max-w-[400px] z-10 pointer-events-none hidden lg:block drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/mobileSvg.svg"
              alt="Mobile App"
              className="w-full h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------------ */}
      {/* Text content — only animates in after intro                         */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl w-full mx-auto pointer-events-none"
      >
        <div className="flex flex-col items-start text-left gap-4 md:gap-6 max-w-3xl pointer-events-none mt-8 md:mt-0">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                The New Standard for Compliance
              </span>
            </div>
            
            {/* Affiliation Badge based on PDF */}
            <a 
              href="https://nearbyelectrician.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all pointer-events-auto cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide flex items-center gap-2">
                Affiliated with <img src="/nearby-electrician.svg" alt="Nearby Electrician" className="h-5 sm:h-6 w-auto" />
              </span>
              <ArrowUpRight size={16} className="text-white/90" />
            </a>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.15] md:leading-[1.05] tracking-tight drop-shadow-2xl mt-0 md:mt-2">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className={`inline-block mr-[0.25em] ${word === "electrical" || word === "compliance."
                  ? "text-[var(--color-accent)]"
                  : ""
                  }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light drop-shadow-lg mt-3 md:mt-6"
          >
            Create, manage, sign and share SANS 10142-1 compliant Certificates of
            Compliance digitally. Save up to 60% of your admin time while
            improving accuracy on every site.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center w-full gap-4 mt-6"
          >
            <a
              href="https://calendly.com/karel-ew/30-min-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-8 py-3.5 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-[#e08419] transition-all duration-300 flex items-center gap-2 group transform hover:scale-[1.02] pointer-events-auto shadow-lg shadow-[#F7931E]/20"
              onClick={(e) => e.stopPropagation()}
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              className="w-full sm:w-auto justify-center px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.02] pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <PlayCircle size={18} />
              Watch 2-Min Demo
            </button>

            <a
              href="/energy-warehouse-coc-blog-html.zip"
              download
              className="w-full sm:w-auto justify-center px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.02] pointer-events-auto shadow-lg shadow-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={18} />
              Free Download
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Absolute Positioned Scroll Down Indicator */}
      <AnimatePresence>
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer z-50 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={28} className="text-[var(--color-accent)] opacity-90" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
