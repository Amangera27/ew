"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen flex flex-col">
      {/* Dark blue header block to provide contrast for the fixed Navbar */}
      <div className="absolute top-0 left-0 right-0 h-[350px] bg-[#0B3C5D] rounded-b-[3rem] z-0" />
      <Navbar disableAnimation={true} />

      <div className="flex-grow w-full max-w-5xl mx-auto px-6 pt-36 md:pt-44 pb-16 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B3C5D] mb-8 tracking-tight">Cookie Policy</h1>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>This Cookie Policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use our website.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What are Cookies?</h2>
            <p>Dummy text for cookie policy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p>Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Managing Your Preferences</h2>
            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
            
            <div className="mt-12 p-4 bg-orange-50 text-orange-800 rounded-xl border border-orange-100">
              <p className="text-sm font-medium m-0"><em>Note: This is a placeholder static page to demonstrate the routing and design structure. The actual legal content should be provided by your legal team.</em></p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
