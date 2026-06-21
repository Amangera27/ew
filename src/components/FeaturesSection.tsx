"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Smartphone, FolderOpen, FileText, Fingerprint, MapPin, Users,
  CheckCircle2, ScrollText, UsersRound, Camera, CheckSquare, Mic,
  Tags, Archive, WifiOff, Copy, PenTool, FilePlus
} from "lucide-react";

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

const valueAddFeatures = [
  {
    icon: <Camera className="w-5 h-5 text-[#F7931E]" />,
    title: "Images and Videos",
    description: "Capture photos and videos directly on-site."
  },
  {
    icon: <CheckSquare className="w-5 h-5 text-[#F7931E]" />,
    title: "Checks and Balances",
    description: "Built-in test parameters guide the user."
  },
  {
    icon: <Mic className="w-5 h-5 text-[#F7931E]" />,
    title: "Voice to text",
    description: "Hands-free note capturing."
  },
  {
    icon: <Tags className="w-5 h-5 text-[#F7931E]" />,
    title: "Job Labels",
    description: "Custom labels for Maintenance, Inspections, Quotes, etc."
  },
  {
    icon: <Archive className="w-5 h-5 text-[#F7931E]" />,
    title: "Archive",
    description: "Securely store historical job information."
  },
  {
    icon: <WifiOff className="w-5 h-5 text-[#F7931E]" />,
    title: "Work offline",
    description: "Built-in offline mode that syncs to the cloud later."
  },
  {
    icon: <Copy className="w-5 h-5 text-[#F7931E]" />,
    title: "Templates",
    description: "Mark frequently used documents as templates."
  },
  {
    icon: <PenTool className="w-5 h-5 text-[#F7931E]" />,
    title: "Sign-off",
    description: "Send a secure link to the client for digital signature."
  },
  {
    icon: <FilePlus className="w-5 h-5 text-[#F7931E]" />,
    title: "Annexure pages",
    description: "Pre-designed annexure pages for other circuits."
  }
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

// --- Animated Counter Component ---
function AnimatedCounter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = React.useState(from);
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const inView = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          inView.current = true;
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * (to - from) + from));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative z-20 w-full bg-[#f8fafc] text-gray-900 pt-16 pb-12 px-6 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Premium Dark Trust Statistics Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full relative z-30 max-w-5xl mb-12 md:mb-20 py-6 px-4 md:p-8 rounded-[2rem] bg-[#0A2540]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0V30' stroke='white' stroke-opacity='0.15' stroke-width='1'/%3E%3C/svg%3E")`
            }}
          />

          {/* Subtle glow effect behind the banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[var(--color-accent)]/10 blur-[100px] rounded-full pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Stat 1 */}
            <motion.div variants={itemReveal} className="flex flex-col items-center text-center group relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                <ScrollText className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-0.5 md:mb-1 tracking-tighter drop-shadow-sm">
                <AnimatedCounter from={0} to={50000} duration={2.5} />
              </h4>
              <p className="text-blue-200/70 font-bold text-[9px] md:text-xs uppercase tracking-[0.2em]">Documents Generated</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={itemReveal} className="flex flex-col items-center text-center group relative">
              {/* Divider lines for desktop - using subtle vertical gradients */}
              <div className="hidden md:block absolute left-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {/* Divider lines for mobile - using subtle horizontal gradients */}
              <div className="md:hidden absolute top-[-16px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="md:hidden absolute bottom-[-16px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#F7931E]/10 border border-[#F7931E]/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#F7931E]/20 group-hover:scale-110 transition-all duration-500">
                <UsersRound className="w-5 h-5 md:w-6 md:h-6 text-[#F7931E]" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#FFB75E] mb-0.5 md:mb-1 tracking-tighter drop-shadow-sm">
                <AnimatedCounter from={0} to={250} duration={2.5} />+
              </h4>
              <p className="text-[#F7931E]/70 font-bold text-[9px] md:text-xs uppercase tracking-[0.2em]">Active Users</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={itemReveal} className="flex flex-col items-center text-center group relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-500">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-0.5 md:mb-1 tracking-tighter drop-shadow-sm">
                <AnimatedCounter from={0} to={99} duration={2} />.9%
              </h4>
              <p className="text-emerald-400/70 font-bold text-[9px] md:text-xs uppercase tracking-[0.2em]">Uptime Guarantee</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mb-10 md:mb-20"
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
              <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_0_50px_rgba(247,147,30,0.25)] hover:border-[#F7931E]/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#F7931E]/10 group-hover:shadow-[0_0_20px_rgba(247,147,30,0.3)] group-hover:scale-110 transition-all duration-500">
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

        {/* Value Add Features Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mt-12 md:mt-24 mb-6 md:mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <motion.h3 variants={itemReveal} className="text-3xl font-bold tracking-tight text-center md:text-left mb-4 md:mb-0">
              Additional <span className="text-[var(--color-accent)]">Value-Add Features</span>
            </motion.h3>
            <motion.div variants={itemReveal} className="h-[1px] bg-gray-200 flex-grow ml-8 hidden md:block" />
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {valueAddFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemReveal}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#F7931E]/30 hover:shadow-[0_4px_20px_rgba(247,147,30,0.1)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F7931E]/10 transition-all">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
