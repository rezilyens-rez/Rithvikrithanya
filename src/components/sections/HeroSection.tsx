"use client";

import React from "react";
import Image from "next/image";
import { siteImages, resolveImageUrl } from "@/config/images";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[92svh] min-h-[540px] sm:min-h-[640px] md:min-h-[700px] max-h-[960px] flex flex-col items-center justify-start overflow-hidden bg-[#d6a978]">
      {/* 1. Background Image (Bright & Vibrant) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={resolveImageUrl(siteImages.hero.backgroundImage)}
          alt="Upanayana Ceremony & Sangeetha Samarpanam"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_15%] sm:object-center brightness-105 contrast-[1.02]"
        />
        {/* Subtle top shade for top nav bar clarity on mobile */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#d6a978]/40 to-transparent pointer-events-none sm:hidden" />
      </div>

      {/* 2. Hero Content / Typography placed in the plain upper area */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-16 xs:pt-18 sm:pt-20 md:pt-24 px-4 text-center max-w-4xl mx-auto">
        {/* Headline in Deep Royal Crimson & Burgundy */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif text-[#4a0e17] tracking-tight leading-tight font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
          Two Beginnings. One Family.
        </h1>

        {/* Flourish Divider in Warm Radiant Gold */}
        <div className="flex items-center justify-center gap-2.5 my-1.5 xs:my-2 sm:my-2.5">
          <div className="w-8 xs:w-10 sm:w-16 h-[1.5px] bg-[#b38e5d]" />
          <svg
            viewBox="0 0 24 16"
            className="w-3.5 h-2.5 xs:w-4 xs:h-3 sm:w-5 sm:h-3.5 text-[#b38e5d] fill-none stroke-current stroke-[1.5] drop-shadow-xs"
          >
            <circle cx="12" cy="8" r="2" fill="currentColor" />
            <path d="M12 4C10 6 10 10 12 12C14 10 14 6 12 4Z" />
            <path d="M5 8C5 8 8 5 11 8C8 11 5 8 5 8Z" />
            <path d="M19 8C19 8 16 5 13 8C16 11 19 8 19 8Z" />
          </svg>
          <div className="w-8 xs:w-10 sm:w-16 h-[1.5px] bg-[#b38e5d]" />
        </div>

        {/* Subtext in Rich Warm Umber / Mahogany for clear, crisp contrast */}
        <p className="max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-xs sm:text-[13.5px] md:text-[15px] lg:text-base font-serif text-[#3e1f14] leading-relaxed font-normal drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
          An evening of music. A morning of tradition. A weekend filled with blessings, love and memories to cherish for a lifetime.
        </p>
      </div>

      {/* Subtle Bottom Fog / Blend into Weekend Section using matching #d6a978 tone */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-[#d6a978] via-[#d6a978]/60 to-transparent pointer-events-none" />
    </section>
  );
};
