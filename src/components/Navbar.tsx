"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar({ disableAnimation = false }: { disableAnimation?: boolean }) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2); // remove "/#"
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled past 90% of the viewport height, we are over the white section
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/#faq" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth, sophisticated ease
        delayChildren: 1.0, 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6">
      <motion.nav 
        variants={containerVariants}
        initial={disableAnimation ? false : "hidden"}
        animate="visible"
        className={`w-full max-w-5xl px-8 py-4 flex items-center justify-between backdrop-blur-xl rounded-full border transition-colors duration-500 ${
          isScrolled 
            ? "bg-white/90 border-gray-200 text-gray-900 shadow-sm" 
            : "bg-white/5 border-white/10 text-white"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center cursor-pointer z-10 transition-opacity hover:opacity-80">
          <div className={`transition-all duration-500 rounded-xl flex items-center justify-center ${isScrolled ? 'bg-[#0B3C5D] px-4 py-1.5 shadow-md' : ''}`}>
            <Image 
              src="/logo.svg" 
              alt="Brand Logo" 
              width={120} 
              height={40} 
              className="w-auto h-7 md:h-8 object-contain"
              priority 
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
          {navLinks.map((link) => {
            const isHovered = hoveredLink === link.name;
            return (
              <Link 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-6 py-2.5 text-[14px] font-medium transition-colors duration-300 rounded-full ${
                  isScrolled 
                    ? "text-gray-600 hover:text-gray-900" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="active-nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`absolute inset-0 rounded-full ${isScrolled ? 'bg-gray-100' : 'bg-white/10'}`}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="hidden md:flex items-center gap-2 z-10">
          <a 
            href="https://app.ew.energy/login" 
            className={`px-5 py-2.5 text-[14px] font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-[var(--color-accent)]' : 'text-white/90 hover:text-white'
            }`}
          >
            Login
          </a>
          <a 
            href="https://app.ew.energy/signup" 
            className="px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-full text-[14px] font-semibold hover:bg-[#e08419] transition-colors duration-300 shadow-lg shadow-[#F7931E]/20"
          >
            Sign Up
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div variants={itemVariants} className="md:hidden flex items-center z-20">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-28 md:top-32 left-6 right-6 p-6 rounded-3xl flex flex-col gap-4 shadow-2xl border backdrop-blur-2xl ${
              isScrolled 
                ? 'bg-white/95 border-gray-200 text-gray-900' 
                : 'bg-[#0B3C5D]/95 border-white/10 text-white'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavLinkClick(e, link.href);
                  }}
                  className={`font-medium px-4 py-3 rounded-xl transition-colors ${
                    isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <a 
                href="https://app.ew.energy/login" 
                className={`w-full text-center px-7 py-3 rounded-full text-[15px] font-semibold border transition-colors duration-300 ${
                  isScrolled 
                    ? 'border-gray-200 text-gray-700 hover:bg-gray-50' 
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Login
              </a>
              <a 
                href="https://app.ew.energy/signup" 
                className="w-full text-center px-7 py-3 bg-[var(--color-accent)] text-white rounded-full text-[15px] font-semibold hover:bg-[#e08419] transition-colors duration-300 shadow-lg shadow-[#F7931E]/20"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
