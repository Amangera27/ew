"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Smartphone, FolderOpen, FileText, Fingerprint, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Effortless Data Capture",
    description:
      "Electricians can quickly and easily capture essential data on-site using their mobile devices. Say goodbye to clipboards and stacks of paperwork. Our user-friendly interface ensures a seamless process.",
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "COC Management",
    description:
      "Effortlessly create, store, and access all Certificate of Compliance documents in one centralised location. No more searching through piles of documents – everything you need is just a tap away.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "PDF Generation",
    description:
      "Once data is captured and the COC is complete, generate PDF documents using official templates. Instantly share these documents with clients, contractors, or authorities directly from the app.",
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Biometrics & Protection",
    description:
      "Once documents are approved, they are securely locked. Each change is recorded, and the app uses biometrics to verify user identity, ensuring data remains trustworthy and protected.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "GPS Auto-fill",
    description:
      "EW COC uses GPS technology to auto-fill location data, eliminating the need for manual input and making the entire data collection process quicker and more accurate.",
  },
  {
    icon: <Users className="w-8 h-8 text-[var(--color-accent)]" />,
    title: "Collaboration & Sharing",
    description:
      "Facilitate collaboration between team members and share project data and COC documents easily. Work together with colleagues to deliver exceptional service to your clients.",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturesSection() {
  return (
    <section className="relative z-20 w-full bg-[#f8fafc] text-gray-900 py-12 px-6 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mb-20"
        >
          <motion.div variants={itemReveal} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 mb-6 font-semibold text-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Core Features
          </motion.div>
          <motion.h2 variants={itemReveal} className="text-4xl font-bold tracking-tight mb-2">
            Everything you need to <span className="text-[var(--color-accent)]">work smarter.</span>
          </motion.h2>
          <motion.p variants={itemReveal} className="text-lg text-gray-600">
            A comprehensive suite of tools designed specifically for electricians to streamline compliance,
            improve accuracy, and save valuable time on site.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group h-full"
            >
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-orange-200 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
