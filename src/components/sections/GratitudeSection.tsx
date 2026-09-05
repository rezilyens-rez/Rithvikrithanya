"use client";

import React from "react";
import { Heart } from "lucide-react";

export const GratitudeSection: React.FC = () => {
  return (
    <section
      id="gratitude"
      className="scroll-mt-24 py-14 sm:py-24 px-3.5 sm:px-6 lg:px-12 max-w-5xl mx-auto relative text-center"
    >
      {/* Background Subtle Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f5ede0] border border-[#c5a059]/40 shadow-xl p-6 xs:p-8 sm:p-14 lg:p-16 overflow-hidden">
        {/* Ornate Gold Inset Border */}
        <div className="absolute inset-2 sm:inset-3.5 rounded-xl sm:rounded-2xl border border-[#c5a059]/25 pointer-events-none" />

        {/* Corner Flourish Accents */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#b38e5d]/50 pointer-events-none" />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#b38e5d]/50 pointer-events-none" />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#b38e5d]/50 pointer-events-none" />
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#b38e5d]/50 pointer-events-none" />

        {/* Heart / Lotus Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/40 flex items-center justify-center text-[#b38e5d]">
          <Heart size={20} className="fill-[#b38e5d]/20 text-[#b38e5d] sm:w-[22px] sm:h-[22px]" />
        </div>

        {/* Uppercase Tag */}
        <span className="text-[11px] sm:text-sm font-mono tracking-[0.25em] sm:tracking-[0.28em] text-[#b38e5d] uppercase font-semibold">
          WITH PROFOUND LOVE &amp; GRATITUDE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif text-[#4a0e17] tracking-tight font-normal mt-1.5 sm:mt-2 mb-2 sm:mb-3">
          Thank You
        </h2>

        {/* Lotus Divider */}
        <div className="flex items-center justify-center gap-3 w-36 mx-auto my-2 sm:my-3 opacity-80">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b38e5d]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
            <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
        </div>

        {/* Heartfelt Thank You Message */}
        <p className="font-serif text-[#3e1f14] text-sm xs:text-base sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed sm:leading-relaxed my-4 sm:my-6 font-normal">
          &ldquo;Thank you to each and every one of you for being a part of our sacred celebrations, showering your blessings, love, and making these moments truly unforgettable.&rdquo;
        </p>
      </div>
    </section>
  );
};
