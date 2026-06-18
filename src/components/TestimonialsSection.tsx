"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Zap, Wrench, Sun, ClipboardCheck, Lightbulb } from "lucide-react";

// --- DUMMY DATA ---
const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Chief Compliance Officer",
    company: "Apex Energy Solutions",
    content: "This platform completely revolutionized how we handle our Certificates of Compliance. What used to take days of back-and-forth now takes minutes. The security is unmatched.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Inspector",
    company: "GridTech Renewables",
    content: "The mobile interface for on-site readings is flawless. My team can capture GPS-stamped photos and biometric signatures without ever opening a laptop. Truly game-changing.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Operations Director",
    company: "SunPeak Solar",
    content: "We were looking for a way to eradicate forged documents. The cryptographic seals and tokenized workflow gave us exactly what we needed to guarantee absolute authenticity.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Nkosi",
    role: "Master Electrician",
    company: "Volt Masters Inc.",
    content: "I've used every compliance software on the market, and this is by far the most intuitive. The 'Pay as you go' token system is perfect for our fluctuating workflow.",
    avatar: "DN"
  },
  {
    id: 5,
    name: "Rebecca Alistair",
    role: "QA Manager",
    company: "NextGen Power",
    content: "The automated team validation steps mean zero errors slip through the cracks. It's like having a dedicated compliance auditor checking every single submission.",
    avatar: "RA"
  },
  {
    id: 6,
    name: "Jameson Ford",
    role: "VP of Engineering",
    company: "Horizon Infra",
    content: "The transition from our legacy paper systems to this digital ledger was seamless. The level of traceability it provides is essential for our large-scale government contracts.",
    avatar: "JF"
  }
];

// Duplicate the array to create a seamless infinite loop
const row1 = [...testimonials, ...testimonials];

const trustedRoles = [
  { name: "Electricians", icon: Zap },
  { name: "Contractors", icon: Wrench },
  { name: "Solar Installers", icon: Sun },
  { name: "Inspectors", icon: ClipboardCheck },
  { name: "Electrical Consultants", icon: Lightbulb },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-20 w-full bg-[#0B3C5D] text-white py-12 overflow-hidden border-t border-white/5">

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0B3C5D]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F7931E]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F7931E]">
              Client Success
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Trusted by <span className="text-[#F7931E]">industry leaders</span>
          </h2>
          <p className="text-[#89a8c2] text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            See how forward-thinking companies are using our platform to secure their compliance workflows and accelerate their operations.
          </p>

          {/* Trusted Roles Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 w-full max-w-4xl"
          >
            {trustedRoles.map((role, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <role.icon className="w-4 h-4 text-[#F7931E] group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm font-medium tracking-wide">{role.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-8 overflow-hidden z-10">

        {/* Fading Edges for the marquee */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#0B3C5D] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#0B3C5D] to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Moving Left */}
        <div className="flex w-full overflow-hidden py-8">
          <motion.div
            className="flex items-center gap-8 shrink-0 px-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {row1.map((item, index) => (
              <TestimonialCard key={`r1-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="relative w-[85vw] sm:w-[340px] md:w-[400px] max-w-[400px] shrink-0 rounded-2xl bg-transparent border border-white/40 p-5 flex flex-col gap-3 md:gap-4 shadow-2xl transition-transform duration-300 hover:-translate-y-2 group backdrop-blur-sm">
      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <Quote className="w-6 h-6 text-[#F7931E]/30 mb-1" />

      <p className="text-slate-300 text-xs md:text-sm leading-relaxed flex-grow">
        "{item.content}"
      </p>

      <div className="flex items-center gap-3 mt-2 pt-4 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7931E] to-[#FFB75E] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(247,147,30,0.3)]">
          {item.avatar}
        </div>
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-xs">{item.name}</h4>
          <p className="text-[#89a8c2] text-[10px] mt-0.5">{item.role}</p>
          <p className="text-[#89a8c2]/60 text-[9px] mt-0.5 uppercase tracking-wider">{item.company}</p>
        </div>
      </div>
    </div>
  );
}
