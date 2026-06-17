"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const BG_IMAGES = [
  "/bg_front.png",      // original dark blue digital circuit/web image
  "/hero_solar_1.png",  // solar farm golden hour
];

export default function HeroSection({ ready = false }: { ready?: boolean }) {
  const indexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [currentFront, setCurrentFront] = useState(BG_IMAGES[0]);
  const [currentGooey, setCurrentGooey] = useState(BG_IMAGES[1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---------------------------------------------------------------------------
  // Destroy SheryJS canvas + WebGL context (to prevent memory leaks)
  // ---------------------------------------------------------------------------
  const destroyShery = () => {
    const container = document.querySelector(".images") as HTMLElement | null;
    if (!container) return;
    container.querySelectorAll("canvas").forEach((canvas) => {
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
      if (gl) {
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }
      canvas.remove();
    });
    container.querySelectorAll("div[style*='position']").forEach((el) => el.remove());
  };

  // ---------------------------------------------------------------------------
  // Wait for BOTH images in .images to finish loading, then init SheryJS
  // ---------------------------------------------------------------------------
  const initShery = async () => {
    destroyShery();

    // @ts-ignore
    const Shery = (await import("sheryjs")).default;

    const imgs = document.querySelectorAll<HTMLImageElement>(".images img");
    if (imgs.length < 2) return;

    // Make sure both images are fully loaded before SheryJS reads their pixels
    await Promise.all(
      Array.from(imgs).map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
              resolve();
            } else {
              img.onload = () => resolve();
              img.onerror = () => resolve(); // continue even on error
            }
          })
      )
    );

    Shery.imageEffect(".images", {
      style: 6,
      debug: false,
      gooey: true,
    });
  };

  // ---------------------------------------------------------------------------
  // When ready flips true (intro done): show bg, then init SheryJS
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!ready) return;
    setBgVisible(true); // render the .images div into DOM
    return () => {
      destroyShery();
    };
  }, [ready]);

  // ---------------------------------------------------------------------------
  // Once bgVisible = true, images mount → init SheryJS after a short frame tick
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!bgVisible) return;
    // 300ms gives images time to render and be readable by SheryJS
    const timer = setTimeout(() => {
      initShery();
    }, 300);
    return () => clearTimeout(timer);
  }, [bgVisible]);

  // ---------------------------------------------------------------------------
  // Click handler — cycle background with gooey transition
  // ---------------------------------------------------------------------------
  const handleClick = async () => {
    if (!bgVisible || isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const nextIndex = (indexRef.current + 1) % BG_IMAGES.length;
    const nextGooey = BG_IMAGES[(nextIndex + 1) % BG_IMAGES.length];

    indexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
    setCurrentFront(BG_IMAGES[nextIndex]);
    setCurrentGooey(nextGooey);

    // Give React one frame to update src, then re-init SheryJS
    setTimeout(async () => {
      await initShery();
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 800);
    }, 60);
  };

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
      className="relative w-full min-h-screen flex items-center justify-start pt-24 px-6 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >

      {/* ------------------------------------------------------------------ */}
      {/* SheryJS background — only mounted in DOM after intro completes      */}
      {/* ------------------------------------------------------------------ */}
      {bgVisible && (
        // Outer wrapper handles the smooth fade-in
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
        >
          {/* .images must be a plain div — motion styles on it break SheryJS WebGL */}
          <div
            className="images"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <img
              src={currentFront}
              alt="front_image"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <img
              src={currentGooey}
              alt="gooey_image"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </motion.div>
      )}

      {/* Click hint */}
      {bgVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md pointer-events-none"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-wider uppercase">
            Click to change scene
          </span>
        </motion.div>
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
            className="absolute right-[-2%] xl:right-[2%] top-[50%] w-[38%] max-w-[600px] z-10 pointer-events-none hidden lg:block drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
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
        <div className="flex flex-col items-start text-left gap-5 md:gap-6 max-w-3xl pointer-events-none mt-24 md:mt-0">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              The New Standard for Compliance
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.2] md:leading-[1.15] tracking-tight drop-shadow-2xl mt-2 md:mt-0">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className={`inline-block mr-[0.25em] ${
                  word === "electrical" || word === "compliance."
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
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-lg leading-relaxed font-light drop-shadow-lg mt-2 md:mt-0"
          >
            Create, manage, sign and share SANS-compliant Certificates of
            Compliance digitally. Save up to 60% of your admin time while
            improving accuracy on every site.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-4 mt-6"
          >
            <button
              className="w-full sm:w-auto justify-center px-8 py-3.5 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-[#e08419] transition-all duration-300 flex items-center gap-2 group transform hover:scale-[1.02] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="w-full sm:w-auto justify-center px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-[1.02] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <PlayCircle size={18} />
              Book Live Demo
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
