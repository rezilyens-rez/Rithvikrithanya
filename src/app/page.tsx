import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-stone-900">
      {/* 3D Parallax Hero Section */}
      <HeroSection />

      {/* Content Area to allow smooth scrolling and transition from hero */}
      <div className="relative z-40 max-w-5xl mx-auto px-6 py-28 text-center">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/30 flex items-center justify-center text-[#b38e5d] font-serif text-xl">
          ॐ
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-stone-800 tracking-wide mb-4">
          Sacred Brahmopadesham
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          The sacred thread ceremony marks the spiritual initiation and journey towards knowledge, discipline, and dharma.
        </p>
      </div>
    </main>
  );
}
