"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "Are the COCs generated compliant with the latest regulations?",
    answer: "Yes, all Certificates of Compliance generated through Energy Warehouse are 100% compliant with SANS 10142-1 and all current South African electrical regulations."
  },
  {
    id: "02",
    question: "Are the EW documents proprietary designs?",
    answer: "Yes, our document layouts, smart templates, and reporting structures are proprietary to Energy Warehouse, specifically engineered to provide maximum clarity, security, and professionalism."
  },
  {
    id: "03",
    question: "Do my clients need the app?",
    answer: "No, your clients do not need to download the app. They can view, review, and digitally sign-off on documents via a secure web link that is sent directly to their email or phone."
  },
  {
    id: "04",
    question: "Are documents stored forever?",
    answer: "Yes! All your finalized COCs, annexures, and job history are securely archived in the cloud indefinitely. You can search, retrieve, or resend historical documents at any time."
  },
  {
    id: "05",
    question: "Can more than one person work on a job?",
    answer: "Absolutely. Our platform is built for team collaboration. You can invite other technicians or inspectors to capture data, add photos, or fill out specific sections of the same job before final sign-off."
  },
  {
    id: "06",
    question: "How does billing work?",
    answer: "We operate on a simple, transparent 'Pay as you go' token system. You purchase tokens in bulk, and each final official document generation consumes a token. There are no hidden monthly subscription fees."
  },
  {
    id: "07",
    question: "Do tokens expire?",
    answer: "No, purchased tokens do not expire. They remain securely in your account balance indefinitely until you use them to generate an official document."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="relative z-20 w-full bg-white py-12 px-6 lg:px-16 overflow-hidden">

      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#0B3C5D]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Sticky Column */}
        <div className="lg:w-1/3 flex flex-col justify-start">
          <div className="sticky top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#0B3C5D]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B3C5D]">Insights</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black tracking-tighter text-[#0B3C5D] mb-6 leading-none"
            >
              Any <br /> Questions<span className="text-[var(--color-accent)]">?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-slate-500 font-medium leading-relaxed max-w-sm"
            >
              We've compiled the most common inquiries to help you understand our platform's capabilities, security, and seamless integration process.
            </motion.p>

            {/* Decorative rotating element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mt-16 w-32 h-32 hidden lg:flex items-center justify-center opacity-10 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#0B3C5D] fill-current">
                <path d="M50 0 L55 40 L95 45 L55 50 L50 90 L45 50 L5 45 L45 40 Z" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="border-t-2 border-[#0B3C5D]/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="group border-b-2 border-[#0B3C5D]/10 relative overflow-hidden"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-[#0B3C5D]/[0.02] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-start justify-between py-5 md:py-6 pr-4 md:pr-6 text-left focus:outline-none relative z-10"
                  >
                    <div className="flex gap-4 md:gap-6 w-full">
                      <span className={`text-sm font-bold font-mono transition-colors duration-500 pt-1 ${isOpen ? 'text-[var(--color-accent)]' : 'text-slate-400'}`}>
                        {faq.id}
                      </span>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-snug transition-colors duration-500 w-full pr-4 md:pr-6 ${isOpen ? 'text-[#0B3C5D]' : 'text-slate-800'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Custom animated plus/minus icon */}
                    <div className="relative flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mt-0.5">
                      <div className={`absolute w-full h-[2px] rounded-full transition-all duration-500 ${isOpen ? 'bg-[var(--color-accent)] rotate-180' : 'bg-slate-300'}`} />
                      <div className={`absolute w-full h-[2px] rounded-full transition-all duration-500 ${isOpen ? 'bg-[var(--color-accent)] rotate-0 opacity-0' : 'bg-slate-300 rotate-90 opacity-100'}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                      >
                        {/* The padding-left here matches the gap created by the ID and space */}
                        <div className="pl-[2.5rem] md:pl-[3rem] pb-6 md:pb-8 pr-4 md:pr-16 text-base md:text-lg text-slate-500 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
