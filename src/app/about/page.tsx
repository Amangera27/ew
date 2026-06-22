"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen flex flex-col overflow-hidden relative">
      {/* Dark blue header block to provide contrast for the fixed Navbar */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[#0B3C5D] rounded-b-[3rem] z-0 overflow-hidden">
        {/* Decorative background blur shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F7931E]/20 rounded-full blur-[100px]" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-[#00B4D8]/20 rounded-full blur-[80px]" />
      </div>

      <Navbar disableAnimation={true} />

      <div className="flex-grow w-full max-w-5xl mx-auto px-6 pt-36 md:pt-44 pb-20 relative z-10">
        {/* Header Hero Title */}
        <div className="text-center mb-12 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-[#F7931E] mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#89a8c2] text-lg max-w-xl mx-auto"
          >
            Empowering the electrical industry through innovative digital compliance and operations.
          </motion.p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(11,60,93,0.06)] border border-gray-100/80 mb-12 relative overflow-hidden group hover:border-[#F7931E]/20 transition-all duration-300"
        >
          {/* Top-Right Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F7931E]/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/10 flex items-center justify-center text-[#0B3C5D] shrink-0 group-hover:bg-[#0B3C5D] group-hover:text-white transition-all duration-300">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F7931E] block mb-2">Company Story</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B3C5D] mb-4 tracking-tight">Our Journey</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                EW was founded in 2020. The founders realised that there was a need to assist the electrical industry with a system to minimise risk.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(11,60,93,0.06)] border border-gray-100/80 flex flex-col justify-between group hover:border-[#F7931E]/20 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7931E]/10 flex items-center justify-center text-[#F7931E] mb-6 group-hover:bg-[#F7931E] group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0B3C5D] mb-4 tracking-tight">Mission Statement</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                Our mission is to simplify electrical compliance by providing electricians and contractors with digital tools that save time, improve accuracy, and streamline reporting.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(11,60,93,0.06)] border border-gray-100/80 flex flex-col justify-between group hover:border-[#0B3C5D]/10 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] mb-6 group-hover:bg-[#00B4D8] group-hover:text-white transition-all duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#0B3C5D] mb-4 tracking-tight">Vision Statement</h3>
              <div className="space-y-4 text-gray-600 text-base md:text-[15px] lg:text-base leading-relaxed font-medium">
                <p>
                  To become South Africa's leading digital compliance platform for the electrical industry, empowering electricians and contractors to complete, manage, and certify work faster, smarter, and more accurately through innovative digital solutions.
                </p>
                <p>
                  To eliminate paper-based compliance in the electrical industry by creating the most trusted digital ecosystem for certification, inspections, reporting, and electrical asset management.
                </p>
                <p>
                  To help every electrician save time, reduce administration, and grow their business through simple digital compliance and reporting tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
