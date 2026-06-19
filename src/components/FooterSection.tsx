"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, Shield, FileText, Sun, Smartphone, 
  CheckCircle, CreditCard, MessageCircle, Mail, ArrowUpRight, Users 
} from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function FooterSection() {
  return (
    <footer className="relative z-20 w-full bg-white text-white pt-6 px-4 md:px-8 pb-4 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#0B3C5D]/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[50%] h-[300px] bg-[#F7931E]/20 blur-[150px] rounded-full pointer-events-none" />
      
      {/* The floating massive rounded glass card representing the footer content */}
      <div className="max-w-[1500px] mx-auto bg-[#0B3C5D] border border-white/10 rounded-3xl p-6 md:p-8 relative z-10 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Subtle texture inside the card */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

        {/* TOP SECTION: Massive typography and Call to Action */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8 relative z-10">
          
          {/* Left Column - Branding & Tagline */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 p-2 pr-6 rounded-full w-fit">
              <div className="w-10 h-10 rounded-full bg-[#F7931E] flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-white/90">Energy Warehouse</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4">
              Digitising the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#FFB75E]">
                South African
              </span><br />
              electrician industry.
            </h2>
            
            <p className="text-[#89a8c2] text-sm md:text-base font-medium max-w-md leading-relaxed mb-6">
              Join thousands of professionals streamlining their compliance and operations with our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* App Store Button */}
              <a href="https://apps.apple.com/in/app/ew-comply/id6443489832" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-black/40 border border-white/10 hover:bg-black/60 px-5 py-2 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-white/80 leading-none tracking-wide">Download on the</span>
                  <span className="text-sm font-semibold leading-none mt-1">App Store</span>
                </div>
              </a>
              {/* Google Play Button */}
              <a href="https://play.google.com/store/apps/details?id=com.energy.warehouse.dev&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-black/40 border border-white/10 hover:bg-black/60 px-5 py-2 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-white/80 leading-none tracking-wide">GET IT ON</span>
                  <span className="text-sm font-semibold leading-none mt-1">Google Play</span>
                </div>
              </a>
            </div>


          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7931E] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" /> Quick Links
                </h4>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                  {[
                    { name: "Home", icon: Zap, href: "/" },
                    { name: "Features", icon: Smartphone, href: "/#features" },
                    { name: "Pricing", icon: CreditCard, href: "/#pricing" },
                    { name: "FAQ", icon: MessageCircle, href: "/#faq" },
                    { name: "Blog", icon: FileText, href: "/#blog" },
                    { name: "Contact", icon: Mail, href: "/contact" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="group flex items-center gap-2 text-[#89a8c2] hover:text-white transition-colors">
                        <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-[#F7931E] group-hover:text-white transition-all">
                          <item.icon className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Contact & Socials */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7931E] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" /> Reach Out
                </h4>
                <div className="flex flex-col gap-2">
                  <a href="https://wa.me/27783232396" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="w-6 h-6 text-[#89a8c2] group-hover:text-[#25D366] transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[#89a8c2]/70 font-bold">WhatsApp</span>
                        <span className="text-white font-semibold">+27 78 323 2396</span>
                      </div>
                    </div>
                  </a>

                  <a href="tel:+27834173121" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F7931E]/50 hover:bg-[#F7931E]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <Smartphone className="w-6 h-6 text-[#89a8c2] group-hover:text-[#F7931E] transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[#89a8c2]/70 font-bold">Mobile</span>
                        <span className="text-white font-semibold">+27 83 417 3121</span>
                      </div>
                    </div>
                  </a>
                  
                  <a href="mailto:support@ew.energy" className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B4D8]/50 hover:bg-[#00B4D8]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-[#89a8c2] group-hover:text-[#00B4D8] transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-[#89a8c2]/70 font-bold">Email Us</span>
                        <span className="text-white font-semibold">support@ew.energy</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4">
                {[
                  { icon: LinkedinIcon, link: "#" },
                  { icon: FacebookIcon, link: "#" },
                  { icon: InstagramIcon, link: "#" },
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.link} 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#89a8c2] hover:text-white hover:bg-[#F7931E] hover:border-[#F7931E] hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            </div>

            {/* Affiliations Text Block (Moved to Right Side) */}
            <div className="mt-auto pt-6 border-t border-white/10 w-full">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7931E] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7931E]" /> Affiliations
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[#89a8c2] text-sm leading-relaxed">
                  Institutions that are affiliated with Energy Warehouse.
                </p>
                <a 
                  href="https://nearbyelectrician.co.za/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-[#F7931E] transition-colors shrink-0 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-[#F7931E]/30"
                >
                  <img src="/nearby-electrician.svg" alt="Nearby Electrician" className="h-8 sm:h-10 w-auto" />
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM MASSIVE WATERMARK */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center justify-center z-10 w-full">
          <h1 className="text-[8vw] md:text-[6vw] font-black leading-none tracking-tighter text-white/[0.04] select-none text-center w-full pointer-events-none mb-4">
            ENERGY WAREHOUSE
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 lg:gap-4 text-center md:text-left">
            <p className="text-[#89a8c2]/60 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              &copy; {new Date().getFullYear()} Energy Warehouse.
            </p>

            {/* Paystack Placeholder */}
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
               <span className="text-[#89a8c2] text-[9px] font-bold uppercase tracking-widest">Secured By</span>
               <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded">
                  <div className="w-2.5 h-2.5 bg-[#092E46] rounded-sm"></div>
                  <span className="text-[#092E46] text-xs font-black tracking-tighter leading-none">paystack</span>
               </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <a href="/privacy" className="text-[#89a8c2]/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-[#89a8c2]/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">T's & C's</a>
              <a href="/popia" className="text-[#89a8c2]/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">POPIA</a>
              <a href="/cookie" className="text-[#89a8c2]/60 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
