"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import JourneySection from "@/components/JourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Eye, ArrowLeft, FileText, ShieldCheck, Download } from "lucide-react";
import { solarChecklistData, cocMistakesData } from "@/data/downloadDocs";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<"solar" | "coc" | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    // Force the browser to start at the top on every reload (unless a hash is present)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1); // remove "#"
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
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
        <HeroSection ready={introComplete} onFreeDownloadClick={() => setIsModalOpen(true)} />
      </div>

      {/* Features Section — scrolls over the sticky HeroSection */}
      <FeaturesSection />

      {/* 2-Min Walkthrough Video Section */}
      <VideoSection />

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

      {/* ------------------------------------------------------------------ */}
      {/* Document Download & Preview Modal                                  */}
      {/* ------------------------------------------------------------------ */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => {
                setIsModalOpen(false);
                setPreviewDoc(null);
              }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#092E46] border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col max-h-[90dvh] md:max-h-[85vh] overflow-hidden z-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setPreviewDoc(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {previewDoc === null ? (
                /* ------------------------------------------------------------------ */
                /* VIEW 1: Document Selection List                                     */
                /* ------------------------------------------------------------------ */
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Sticky Header */}
                  <div className="text-left mt-1 sm:mt-2 mb-3 sm:mb-4 shrink-0 pr-12 sm:pr-0">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-[#F7931E] mb-1 sm:mb-2 block">
                      Compliance Resources
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight mb-1 sm:mb-2">
                      Free Compliance Documents
                    </h2>
                    <p className="text-[#89a8c2] text-[11px] sm:text-xs md:text-sm font-light max-w-2xl leading-relaxed">
                      Preview these essential compliance tools for South African electricians directly in the reader, then download both together as a package.
                    </p>
                  </div>

                  {/* Scrollable Cards Body */}
                  <div className="flex-1 overflow-y-auto pr-1 no-scrollbar mb-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 py-1 sm:py-2">
                      {/* Doc 1: Solar checklist */}
                      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#F7931E]/40 transition-all duration-300 group">
                        <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F7931E]/10 flex items-center justify-center text-[#F7931E] md:mb-3 group-hover:bg-[#F7931E] group-hover:text-white transition-all duration-300 shrink-0">
                            <FileText size={20} className="md:w-[22px] md:h-[22px]" />
                          </div>
                          <div className="flex-1 min-w-0 pr-10 md:pr-12">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold group-hover:text-[#F7931E] transition-colors leading-snug">
                              Solar PV Compliance Checklist
                            </h3>
                            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mt-1 hidden sm:block">
                              South African Solar PV checklist complying with SANS 10142-1:2020. Includes labelling, roof mounting, DC/AC inspection points, and insurance audit requirements.
                            </p>
                          </div>
                        </div>

                        {/* Individual Download Icon */}
                        <a
                          href="/Solar Inspection checklist 14June26.docx"
                          download="Solar Inspection checklist 14June26.docx"
                          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#F7931E] hover:bg-[#F7931E]/10 hover:border-[#F7931E]/30 transition-all cursor-pointer z-10 flex items-center justify-center"
                          title="Download Solar Checklist"
                        >
                          <Download size={15} />
                        </a>

                        <div className="flex items-center gap-3 mt-3 md:mt-4">
                          <button
                            onClick={() => setPreviewDoc("solar")}
                            className="w-full py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Eye size={14} className="md:w-4 md:h-4" />
                            Preview Document
                          </button>
                        </div>
                      </div>

                      {/* Doc 2: COC Mistakes */}
                      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#00B4D8]/40 transition-all duration-300 group">
                        <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] md:mb-3 group-hover:bg-[#00B4D8] group-hover:text-white transition-all duration-300 shrink-0">
                            <ShieldCheck size={20} className="md:w-[22px] md:h-[22px]" />
                          </div>
                          <div className="flex-1 min-w-0 pr-10 md:pr-12">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold group-hover:text-[#00B4D8] transition-colors leading-snug">
                              Costly COC Mistakes & Guide
                            </h3>
                            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mt-1 hidden sm:block">
                              A guide on critical administrative, technical, and testing errors that can void your Electrical Certificate of Compliance and risk your registration.
                            </p>
                          </div>
                        </div>

                        {/* Individual Download Icon */}
                        <a
                          href="/COC Mistakes 14June26.docx"
                          download="COC Mistakes 14June26.docx"
                          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 hover:border-[#00B4D8]/30 transition-all cursor-pointer z-10 flex items-center justify-center"
                          title="Download COC Guide"
                        >
                          <Download size={15} />
                        </a>

                        <div className="flex items-center gap-3 mt-3 md:mt-4">
                          <button
                            onClick={() => setPreviewDoc("coc")}
                            className="w-full py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Eye size={14} className="md:w-4 md:h-4" />
                            Preview Document
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Footer Download Option */}
                  <div className="shrink-0 flex flex-col items-center mt-2 border-t border-white/10 pt-3 sm:pt-4 pb-1">
                    <a
                      href="/Energy_Warehouse_Compliance_Documents.zip"
                      download="Energy_Warehouse_Compliance_Documents.zip"
                      className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-3.5 bg-gradient-to-r from-[#F7931E] to-[#FFB75E] text-white rounded-xl font-bold text-xs sm:text-sm md:text-base hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#F7931E]/20 cursor-pointer"
                    >
                      <Download size={18} className="sm:w-5 sm:h-5" />
                      Download Compliance Pack (Both)
                    </a>
                    <span className="text-[9px] sm:text-[10px] text-white/50 mt-1.5 sm:mt-2 font-light text-center">
                      Downloads both SANS Checklist and COC Mistakes Guide in a single ZIP file.
                    </span>
                  </div>
                </div>
              ) : (
                /* ------------------------------------------------------------------ */
                /* VIEW 2: Document Reader / Previewer                                 */
                /* ------------------------------------------------------------------ */
                <div className="flex flex-col h-full overflow-hidden">
                  {/* Preview Navigation Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 sm:pb-4 mb-3 sm:mb-4 gap-3 pr-12 sm:pr-0">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <button
                        onClick={() => setPreviewDoc(null)}
                        className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                        title="Back to list"
                      >
                        <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                      <div className="min-w-0">
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#F7931E] block">
                          Document Preview
                        </span>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight truncate">
                          {previewDoc === "solar"
                            ? "Solar PV Compliance Checklist"
                            : "COC Mistakes & Legal Safety Guide"}
                        </h3>
                      </div>
                    </div>

                    <a
                      href="/Energy_Warehouse_Compliance_Documents.zip"
                      download="Energy_Warehouse_Compliance_Documents.zip"
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer text-white self-start sm:self-auto bg-[#F7931E] hover:bg-[#e08419] shadow-lg shadow-[#F7931E]/25 sm:mr-10 w-full sm:w-auto"
                    >
                      <Download size={14} className="sm:w-4 sm:h-4" />
                      Download Compliance Pack
                    </a>
                  </div>

                  {/* Scrollable Reader View */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar bg-black/25 rounded-2xl border border-white/5 p-3 md:p-6 mb-2">
                    {previewDoc === "solar" ? (
                      /* SOLAR CHECKLIST PREVIEW */
                      <div className="space-y-8 text-white/90">
                        <div className="border-b border-white/5 pb-4">
                          <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#F7931E]">
                            South African Solar PV Compliance Inspection Checklist
                          </h1>
                          <p className="text-xs text-[#89a8c2] mt-1 font-medium italic font-sans">
                            (SANS 10142-1:2020 + SANS 10142-1-2 + Electrical Installation Regulations)
                          </p>
                        </div>

                        {solarChecklistData.map((section, idx) => (
                          <div key={idx} className="space-y-3">
                            <h4 className="text-sm font-bold text-[#F7931E] uppercase tracking-wider flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" />
                              {section.title}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 font-sans">
                              {section.items.map((item, itemIdx) => (
                                <div
                                  key={itemIdx}
                                  className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl hover:bg-white/[0.04] transition-all"
                                >
                                  <div className="w-5 h-5 rounded-md border border-[#F7931E]/30 flex items-center justify-center shrink-0 mt-0.5 bg-[#092E46]">
                                    <div className="w-2.5 h-2.5 rounded-sm bg-[#F7931E] opacity-20 hover:opacity-100 transition-opacity cursor-pointer" />
                                  </div>
                                  <span className="text-xs md:text-sm text-white/80 font-light leading-snug">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* COC MISTAKES PREVIEW */
                      <div className="space-y-6 text-white/90">
                        {cocMistakesData.map((section, idx) => {
                          const isIntro = idx === 0;
                          return (
                            <div key={idx} className="space-y-3">
                              {isIntro ? (
                                <div className="border-b border-white/5 pb-4 mb-6">
                                  <h1 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00B4D8]">
                                    {section.title}
                                  </h1>
                                </div>
                              ) : (
                                <h4 className="text-base font-bold text-[#00B4D8] tracking-tight mt-4">
                                  {section.title}
                                </h4>
                              )}

                              <div className="space-y-3 text-xs md:text-sm leading-relaxed text-white/80 font-light pl-1 font-sans">
                                {section.content.map((paragraph, pIdx) => {
                                  // Special highlight boxes for key notes or callouts
                                  const isCallout = paragraph.includes("To avoid these pitfalls") || 
                                                    paragraph.includes("To protect yourself, establish") ||
                                                    paragraph.includes("The solution is meticulousness") ||
                                                    paragraph.includes("Preventive measures are key");
                                  if (isCallout) {
                                    return (
                                      <div key={pIdx} className="bg-white/5 border-l-2 border-[#00B4D8] p-4 rounded-r-xl my-4 text-xs italic text-[#89a8c2]">
                                        {paragraph}
                                      </div>
                                    );
                                  }
                                  return (
                                    <p key={pIdx} className="text-justify">
                                      {paragraph}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
