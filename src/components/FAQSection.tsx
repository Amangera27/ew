"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What is the primary benefit of moving beyond paper compliance?",
    answer:
      "Transitioning from paper to digital compliance significantly reduces human error, accelerates the approval process, and provides a secure, searchable archive of all your compliance documents. It empowers your team to focus on core tasks rather than administrative overhead."
  },
  {
    id: "02",
    question: "How secure are the biometric signatures?",
    answer:
      "Our biometric signatures utilize advanced cryptographic protocols ensuring that each signature is uniquely tied to the individual's biometric data. This provides a non-repudiable and highly secure method of authentication, exceeding industry standards."
  },
  {
    id: "03",
    question: "Can I integrate this system with my existing ERP?",
    answer:
      "Yes, our platform is designed with a robust API-first architecture, allowing seamless integration with most major ERP and CRM systems. This ensures data flows smoothly across your organization without creating isolated silos."
  },
  {
    id: "04",
    question: "What kind of support do you offer during the onboarding process?",
    answer:
      "We provide comprehensive white-glove onboarding, including dedicated account managers, customized training sessions for your team, and 24/7 technical support to ensure a smooth and efficient transition to our platform."
  },
  {
    id: "05",
    question: "Is the platform compliant with international data protection regulations?",
    answer:
      "Absolutely. We adhere to stringent global data protection regulations, including GDPR and CCPA. All data is encrypted both at rest and in transit, ensuring your sensitive information remains private and secure."
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
