"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[125vh] min-h-[950px] lg:h-[130vh] lg:min-h-[1050px] overflow-hidden bg-[#e8ded1]">
      {/* 1. Background Layer: Sky */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[10%] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.45}px, 0)`,
        }}
      >
        <Image
          src="/images/hero/sky.png"
          alt="Sky Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Hero Typography / Title Layer (Center-aligned in upper sky area) */}
      <div
        className="absolute inset-x-0 top-0 z-10 flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-32 lg:pt-36 px-4 text-center will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.6}px, 0)`,
          opacity: Math.max(0, 1 - offsetY / 500),
        }}
      >
        {/* Sacred Lotus Motif */}
        <div className="flex justify-center mb-2.5">
          <svg
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-7 sm:w-9 sm:h-8 text-[#b38e5d] drop-shadow-xs"
          >
            {/* Center petal */}
            <path
              d="M20 3C20 3 16.5 12 20 22C23.5 12 20 3 20 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner left petal */}
            <path
              d="M19 22C14 13 8 11.5 6 15.5C4 19.5 11 23 18.5 23"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner right petal */}
            <path
              d="M21 22C26 13 32 11.5 34 15.5C36 19.5 29 23 21.5 23"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Outer left petal */}
            <path
              d="M17 23.5C11 17.5 2 20 1 25.5C0 28.5 10 28 17 25"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Outer right petal */}
            <path
              d="M23 23.5C29 17.5 38 20 39 25.5C40 28.5 30 28 23 25"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom base curve */}
            <path
              d="M15 25C17.5 27 22.5 27 25 25"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Section Label */}
        <span className="text-xs sm:text-[13px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#b38e5d] font-semibold mb-2 drop-shadow-xs">
          The Weekend
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-stone-900 tracking-tight leading-[1.08] sm:leading-[1.12] drop-shadow-xs font-normal">
          Two Beginnings.
          <br />
          One Family.
        </h1>

        {/* Flourish Divider */}
        <div className="flex items-center justify-center gap-3 my-3 sm:my-4">
          <div className="w-12 sm:w-20 h-[1px] bg-[#b38e5d]/70" />
          <svg
            viewBox="0 0 24 16"
            className="w-6 h-4 text-[#b38e5d] fill-none stroke-current stroke-[1.4]"
          >
            <circle cx="12" cy="8" r="2" fill="currentColor" />
            <path d="M12 4C10 6 10 10 12 12C14 10 14 6 12 4Z" />
            <path d="M5 8C5 8 8 5 11 8C8 11 5 8 5 8Z" />
            <path d="M19 8C19 8 16 5 13 8C16 11 19 8 19 8Z" />
          </svg>
          <div className="w-12 sm:w-20 h-[1px] bg-[#b38e5d]/70" />
        </div>

        {/* Subtext Paragraph */}
        <div className="max-w-xl mx-auto space-y-0.5 text-xs sm:text-sm md:text-base font-serif text-stone-800 leading-relaxed drop-shadow-xs">
          <p>An evening of music. A morning of tradition.</p>
          <p>A weekend filled with blessings, love and memories</p>
          <p>to cherish for a lifetime.</p>
        </div>
      </div>

      {/* 3. Middle Layer: Temple (Lowered comfortably below typography) */}
      <div
        className="absolute inset-x-0 bottom-[-30px] sm:bottom-[-45px] md:bottom-[-60px] z-20 w-full h-[62vh] sm:h-[68vh] md:h-[74vh] flex items-end justify-center will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.22}px, 0)`,
        }}
      >
        <div className="relative w-full h-full max-w-[1250px] mx-auto px-2">
          <Image
            src="/images/hero/Temple.png"
            alt="Srirangam Temple"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* 4. Foreground / Front Layer: Bottom Landscape (Shifted extra little bit down) */}
      <div
        className="absolute inset-x-0 bottom-[-50px] sm:bottom-[-70px] md:bottom-[-90px] z-30 w-full h-[106%] sm:h-[108%] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.08}px, 0)`,
        }}
      >
        <Image
          src="/images/hero/bottom.png"
          alt="Foreground Landscape & Courtyard"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Subtle bottom gradient to blend seamlessly into following sections */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/60 to-transparent z-40 pointer-events-none" />
    </div>
  );
};
