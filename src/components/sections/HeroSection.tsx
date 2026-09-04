"use client";

import React from "react";
import Image from "next/image";
import { siteImages, resolveImageUrl } from "@/config/images";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-start overflow-hidden bg-[#d6a978]">
      {/* 1. Background Image (Bright & Vibrant) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={resolveImageUrl(siteImages.hero.backgroundImage)}
          alt="Upanayana Ceremony & Sangeetha Samarpanam"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-105 contrast-[1.02]"
        />
        {/* Very subtle soft top-only scrim to ensure white text pops without dimming the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Hero Content / Typography placed in the upper portion */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-14 sm:pt-18 md:pt-22 lg:pt-24 px-4 text-center max-w-3xl mx-auto">
        {/* Headline in White */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15] sm:leading-[1.18] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-normal">
          Two Beginnings.
          <br />
          One Family.
        </h1>

        {/* Flourish Divider */}
        <div className="flex items-center justify-center gap-2.5 my-2.5 sm:my-3.5">
          <div className="w-10 sm:w-16 h-[1px] bg-[#f6d788]/80" />
          <svg
            viewBox="0 0 24 16"
            className="w-5 h-3.5 text-[#f6d788] fill-none stroke-current stroke-[1.4] drop-shadow-sm"
          >
            <circle cx="12" cy="8" r="2" fill="currentColor" />
            <path d="M12 4C10 6 10 10 12 12C14 10 14 6 12 4Z" />
            <path d="M5 8C5 8 8 5 11 8C8 11 5 8 5 8Z" />
            <path d="M19 8C19 8 16 5 13 8C16 11 19 8 19 8Z" />
          </svg>
          <div className="w-10 sm:w-16 h-[1px] bg-[#f6d788]/80" />
        </div>

        {/* Subtext Paragraph in White */}
        <div className="max-w-lg mx-auto space-y-0.5 text-xs sm:text-sm md:text-[15px] font-serif text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <p>An evening of music. A morning of tradition.</p>
          <p>A weekend filled with blessings, love and memories</p>
          <p>to cherish for a lifetime.</p>
        </div>
      </div>

      {/* Subtle Bottom Fog / Blend into Weekend Section using matching #d6a978 tone */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#d6a978] via-[#d6a978]/60 to-transparent pointer-events-none" />
    </section>
  );
};
