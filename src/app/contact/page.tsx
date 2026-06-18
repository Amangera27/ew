"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="bg-[#f8fafc] min-h-screen flex flex-col">
      {/* Dark blue header block */}
      <div className="absolute top-0 left-0 right-0 h-[380px] bg-[#0B3C5D] rounded-b-[3rem] z-0" />
      <Navbar disableAnimation={true} />

      <div className="flex-grow w-full max-w-3xl mx-auto px-6 pt-36 md:pt-44 pb-16 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center">
                  <h1 className="text-4xl md:text-5xl font-black text-[#0B3C5D] mb-4 tracking-tight">Get in Touch</h1>
                  <p className="text-gray-500 text-lg">Have a question or need support? Our team is here to help.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none text-gray-900 placeholder:text-gray-400" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input required type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none text-gray-900 placeholder:text-gray-400" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Issue Type</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none text-gray-900 cursor-pointer">
                      <option>Technical Support</option>
                      <option>Billing Inquiry</option>
                      <option>Sales Inquiry</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea required rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none text-gray-900 placeholder:text-gray-400 resize-none" placeholder="How can we help you today?" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 mt-4 bg-[var(--color-accent)] text-white rounded-xl font-bold text-lg hover:bg-[#e08419] transition-colors flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-[#F7931E]/20"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-black text-[#0B3C5D] mb-4">Message Sent Successfully!</h2>
                <p className="text-gray-500 text-lg mb-10 max-w-md">
                  Thank you for reaching out. Our support team has received your message and will get back to you within 24 hours.
                </p>
                <Link href="/" className="px-8 py-4 bg-[#0B3C5D] text-white rounded-full font-bold hover:bg-[#0A2540] transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                  <ArrowLeft className="w-5 h-5" />
                  Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <FooterSection />
    </main>
  );
}
