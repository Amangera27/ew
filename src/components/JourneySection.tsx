"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  UserCheck, UserCog, Briefcase, FilePlus2,
  ClipboardCheck, BadgeCheck, Coins, Lock, Share2,
} from "lucide-react";

// ─── Step data ─────────────────────────────────────────────────────────────
const steps = [
  { id: 1, icon: UserCheck, title: "Register", subtitle: "Get access", description: "Create your account in under 60 seconds." },
  { id: 2, icon: UserCog, title: "Build Profile", subtitle: "Make it yours", description: "Upload wireman licence and branding." },
  { id: 3, icon: Briefcase, title: "Add a Job", subtitle: "Capture details", description: "Enter site info and client details." },
  { id: 4, icon: FilePlus2, title: "Create Doc", subtitle: "Select type", description: "Select CoC, solar, or inspection." },
  { id: 5, icon: ClipboardCheck, title: "Complete It", subtitle: "On-site", description: "Fill in readings & attach photos." },
  { id: 6, icon: BadgeCheck, title: "Team Review", subtitle: "Sign-off", description: "Team validation ensures zero errors." },
  { id: 7, icon: Coins, title: "Use a Token", subtitle: "Unlock", description: "Purchase or use monthly allowance." },
  { id: 8, icon: Lock, title: "Lock & Sign", subtitle: "Secure", description: "Apply a cryptographic digital seal." },
  { id: 9, icon: Share2, title: "Share PDF", subtitle: "Deliver", description: "A professional PDF emailed instantly." },
];

// ─── Amazing Constellation Particle Background ──────────────────────────────
function AnimatedConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.8 ? "rgba(247, 147, 30, " : "rgba(137, 168, 194, ";
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + "0.6)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      if (!canvas) return;
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 120);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      grad.addColorStop(0, "#0B3C5D");
      grad.addColorStop(1, "#07263c");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(247, 147, 30, ${opacity * 0.25})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ display: "block" }}
    />
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────
export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 2500); // 2.5 seconds per step

      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const targetElement = stepRefs.current[activeStep];

    if (container && targetElement) {
      const containerWidth = container.offsetWidth;
      const elementOffset = targetElement.offsetLeft;
      const elementWidth = targetElement.offsetWidth;

      const scrollPosition = elementOffset - (containerWidth / 2) + (elementWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  return (
    <section
      ref={containerRef}
      className="relative z-20 text-white overflow-hidden py-12 bg-[#0B3C5D]"
    >
      <AnimatedConstellationBackground />

      <div className="relative z-10 w-full flex flex-col">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-center mb-16 w-full px-6 max-w-7xl mx-auto"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#F7931E]">
              The Process
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            From sign-up to <span className="text-[#F7931E]">signed CoC</span>
          </h2>
          <p className="text-[#89a8c2] text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Swipe through the nine precise steps that transform complex compliance into a seamless, highly professional workflow.
          </p>
        </motion.div>

        {/* ── SINGLE ROW FLEX (Horizontal Scroll) ── */}
        {/* The container allows horizontal scrolling, hiding the scrollbar for aesthetics */}
        <div
          ref={scrollContainerRef}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}</style>

          <motion.div
            className="flex flex-col md:flex-row items-start md:min-w-max gap-0"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex flex-row md:flex-col w-full md:w-[280px] shrink-0 md:snap-start group"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                >
                  {/* Icon & Connecting Line */}
                  <div className="flex flex-col md:flex-row items-center md:w-full mr-6 md:mr-0 shrink-0">
                    {/* Icon Node */}
                    <div className={`w-16 h-16 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 backdrop-blur-sm relative shadow-lg ${index <= activeStep
                        ? "border-[#F7931E] bg-[#0B3C5D] text-[#F7931E] shadow-[0_0_20px_rgba(247,147,30,0.5)] -translate-y-1"
                        : "border-white/20 bg-[#0B3C5D] text-[#89a8c2] group-hover:border-[#F7931E]/60 group-hover:text-[#F7931E] group-hover:-translate-y-1"
                      }`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Connecting Line to next item */}
                    {!isLast && (
                      <>
                        {/* Mobile Vertical Line */}
                        <div className="w-[2px] h-20 bg-white/10 my-2 relative overflow-hidden rounded-full md:hidden">
                          <motion.div
                            className="absolute top-0 left-0 w-full bg-[#F7931E]"
                            initial={{ height: "0%" }}
                            animate={{
                              height: index < activeStep ? "100%" : index === activeStep ? "100%" : "0%"
                            }}
                            transition={{
                              duration: index === activeStep ? 2.5 : 0.3,
                              ease: "linear"
                            }}
                          />
                        </div>

                        {/* Desktop Horizontal Line */}
                        <div className="flex-1 h-[2px] bg-white/10 mx-4 relative overflow-hidden rounded-full hidden md:block">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-[#F7931E]"
                            initial={{ width: "0%" }}
                            animate={{
                              width: index < activeStep ? "100%" : index === activeStep ? "100%" : "0%"
                            }}
                            transition={{
                              duration: index === activeStep ? 2.5 : 0.3,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 mt-2 md:mt-8 pb-10 md:pb-0 pr-0 md:pr-8">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F7931E] mb-2 opacity-90 transition-opacity">
                      Step {String(step.id).padStart(2, "0")} — {step.subtitle}
                    </p>
                    <h3 className={`text-xl font-bold mb-2 tracking-tight transition-colors duration-500 ${index <= activeStep ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" : "text-white/50 group-hover:text-white/90"
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#89a8c2] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
