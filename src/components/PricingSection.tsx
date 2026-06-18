"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Cloud, Fingerprint, MapPin, FileText, Lock } from "lucide-react";

// ----------------------------------------------------------------------
// SPOTLIGHT CARD COMPONENT
// ----------------------------------------------------------------------
const SpotlightCard = ({
  children,
  isPopular = false,
  className = ""
}: {
  children: React.ReactNode;
  isPopular?: boolean;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative w-full h-full rounded-2xl overflow-hidden flex flex-col transition-transform duration-500 ease-out hover:-translate-y-1 ${isPopular ? "shadow-[0_20px_80px_-20px_rgba(11,60,93,0.4)]" : "shadow-2xl shadow-[#0b3c5d]/20"
        } ${className}`}
    >
      {/* Background layer for the standard border */}
      <div className={`absolute inset-0 border transition-colors duration-500 rounded-2xl bg-[#0b3c5d] ${isPopular ? "border-transparent shadow-xl" : "border-blue-900/50 shadow-sm hover:border-blue-700/50"
        }`} />

      {/* Decorative Creative Background Elements */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F7931E]/15 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4 pointer-events-none group-hover:bg-[#F7931E]/25 transition-colors duration-500" />

      {/* Top Glassmorphic highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Spinning Conic Gradient Border for Popular Card */}
      {isPopular && (
        <>
          <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F7931E_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-[1px] bg-[#0b3c5d] rounded-[calc(1rem-1px)] z-0" />
        </>
      )}

      {/* Spotlight Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.03), transparent 40%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-20 flex flex-col flex-grow">{children}</div>
    </div>
  );
};

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------
const includedFeatures = [
  { text: "Cloud Storage & Backup", icon: <Cloud className="w-4 h-4 text-blue-400" /> },
  { text: "Biometric Security", icon: <Fingerprint className="w-4 h-4 text-orange-400" /> },
  { text: "GPS Auto-fill", icon: <MapPin className="w-4 h-4 text-red-400" /> },
  { text: "COC templates", icon: <FileText className="w-4 h-4 text-green-400" /> },
  { text: "Unlimited locked", icon: <Lock className="w-4 h-4 text-purple-400" /> },
];

const FeatureItem = ({ text, subtext, isDark = false }: { text: React.ReactNode, subtext?: string, isDark?: boolean }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center border ${isDark ? 'bg-blue-900/50 border-blue-700' : 'bg-slate-100 border-slate-200'}`}>
      <Check className={`w-2.5 h-2.5 ${isDark ? 'text-blue-300' : 'text-slate-500'}`} strokeWidth={3} />
    </div>
    <div className="flex flex-col">
      <p className={`font-medium text-[13px] leading-snug ${isDark ? 'text-white' : 'text-slate-700'}`}>{text}</p>
      {subtext && <p className={`text-[11px] mt-0.5 leading-relaxed ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>{subtext}</p>}
    </div>
  </div>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export default function PricingSection() {
  return (
    <section id="pricing" className="relative z-20 w-full bg-white text-slate-900 py-12 px-6 overflow-hidden border-t border-slate-100">

      {/* Refined Glowing Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-50/50 blur-[100px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Our Pricing Plans
          </h2>
          <p className="text-base text-slate-500 font-light">
            Choose how you pay for compliance document locking.
          </p>
        </motion.div>

        {/* Included in all plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-12 flex flex-col items-center"
        >
          <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl">
            {includedFeatures.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-default"
              >
                {feat.icon}
                {feat.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* COMPACT 3-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl items-stretch">

          {/* ------------------------------------------------------------------
              TOKEN PLAN
          ------------------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <SpotlightCard className="p-4 md:p-5">
              <h3 className="text-xl font-bold text-white mb-1.5">Token Plan</h3>
              <p className="text-blue-100 text-[11px] mb-4">Pay as you go for occasional documents.</p>

              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-3xl font-black text-white leading-none">R 10</span>
                <span className="text-blue-200 font-medium text-[11px] mb-0.5">/ token</span>
              </div>

              <button className="w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl text-sm font-semibold hover:bg-white/25 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] transition-all duration-300 mb-4 backdrop-blur-sm">
                Start Free
              </button>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mb-4" />

              <div className="flex flex-col gap-2.5">
                <FeatureItem text={<>Access to <span className="text-white font-bold">all</span> templates</>} isDark />
                <FeatureItem text="1 team member" isDark />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ------------------------------------------------------------------
              SOLO PLAN (CENTER)
          ------------------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative z-20 h-full"
          >
            {/* FLOATING BADGE OUTSIDE THE CARD TO AVOID OVERFLOW CLIPPING */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F7931E] to-[#FFB75E] text-white px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-[0_5px_15px_rgba(247,147,30,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] whitespace-nowrap z-40">
              Most Popular
            </div>

            <SpotlightCard isPopular={true} className="p-4 md:p-5 pt-6 relative">
              <h3 className="text-2xl font-black text-white mb-1.5 mt-2">Solo Plan</h3>
              <p className="text-blue-100 text-[11px] mb-4">Everything a professional needs to streamline their workflow.</p>

              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-4xl font-black text-white leading-none">R 299</span>
                <span className="text-blue-200 font-medium text-[11px] mb-0.5">/ month</span>
              </div>

              <button className="w-full py-3.5 bg-gradient-to-r from-[#F7931E] to-[#FFB75E] text-white rounded-xl font-bold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_5px_20px_rgba(247,147,30,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] mb-4 hover:-translate-y-1">
                Get Started
              </button>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mb-4" />

              <div className="flex flex-col gap-2.5">
                <FeatureItem
                  text={<>Access to <span className="text-white font-bold">all</span> templates</>}
                  isDark
                />
                <FeatureItem text="Up to 5 team members" isDark />
                <FeatureItem text="Priority customer support" isDark />
                <FeatureItem text="Advanced analytics dashboard" isDark />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ------------------------------------------------------------------
              TEAM PLAN
          ------------------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <SpotlightCard className="p-4 md:p-5">
              <h3 className="text-xl font-bold text-white mb-1.5">Team Plan</h3>
              <p className="text-blue-100 text-[11px] mb-4">Uncapped productivity for companies.</p>

              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-3xl font-black text-white leading-none">R 999</span>
                <span className="text-blue-200 font-medium text-[11px] mb-0.5">/ month</span>
              </div>

              <button className="w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl text-sm font-semibold hover:bg-white/25 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] transition-all duration-300 mb-4 backdrop-blur-sm">
                Contact Sales
              </button>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mb-4" />

              <div className="flex flex-col gap-2.5">
                <FeatureItem text={<><span className="text-white font-bold">Unlimited</span> team members</>} isDark />
                <FeatureItem text="Custom document builder" isDark />
                <FeatureItem text={<>Access to <span className="text-[var(--color-accent)] font-bold">Connect</span></>} isDark />
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
