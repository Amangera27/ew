"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import JourneySection from "@/components/JourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Force the browser to start at the top on every reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    // 2.6s total: 2.2s animation + 0.4s hold
    const revealTimer = setTimeout(() => setIntroComplete(true), 2600);
    // Remove overlay from DOM after fade-out finishes (0.5s after intro)
    const removeTimer = setTimeout(() => setShowOverlay(false), 3200);
    
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    // White background so the dark-blue liquid sweep is clearly visible
    // After intro: bg transitions smoothly to dark (same color as hero bg)
    // Removed overflow-hidden from main so the page can scroll
    <main className={`relative transition-colors duration-700 ${introComplete ? 'bg-[#0B3C5D]' : 'bg-white'}`}>

      {/* Navbar always on top — above liquid overlay (z-50) */}
      <div className="relative z-[60] w-full">
        <Navbar />
      </div>

      {/* Page content — HeroSection gated by ready prop and pinned to background */}
      {/* sticky top-0 keeps it fixed while the next section scrolls over it */}
      <div className="sticky top-0 z-10 w-full h-screen overflow-hidden">
        <HeroSection ready={introComplete} />
      </div>

      {/* Features Section — scrolls over the sticky HeroSection */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Journey Snake Stepper Section */}
      <JourneySection />

      {/* Client Testimonials Marquee Section */}
      <TestimonialsSection />

      {/* Blog & Resources Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />

      {/* ------------------------------------------------------------------ */}
      {/* Liquid intro overlay — dark blue SVG sweeps DOWN over white bg      */}
      {/* Sits at z-50 so it covers absolutely everything                     */}
      {/* ------------------------------------------------------------------ */}
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          animate={{ opacity: introComplete ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* White background behind the SVG so it starts clean */}
          <div className="absolute inset-0 bg-white" />

          {/* Dark blue liquid that fills from top */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#0B3C5D"
              initial={{ d: "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z" }}
              animate={{
                d: [
                  "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z",
                  "M 0 0 L 100 0 L 100 30 Q 50 200 0 30 Z",
                  "M 0 0 L 100 0 L 100 100 Q 50 65 0 100 Z",
                  "M 0 0 L 100 0 L 100 100 Q 50 118 0 100 Z",
                  "M 0 0 L 100 0 L 100 100 Q 50 95 0 100 Z",
                  "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z",
                ],
              }}
              transition={{
                duration: 2.2,
                times: [0, 0.35, 0.6, 0.75, 0.88, 1],
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      )}

    </main>
  );
}
