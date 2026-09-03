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
    <div className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#e8ded1]">
      {/* 1. Background Layer: Sky */}
      <div
        className="absolute inset-0 w-full h-[115%] -top-[10%] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.5}px, 0)`,
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

      {/* 2. Hero Typography / Title Layer (Positioned higher up in the open sky area) */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-28 px-4 text-center will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.65}px, 0)`,
          opacity: Math.max(0, 1 - offsetY / 400),
        }}
      >
        <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#b38e5d] font-semibold mb-2 drop-shadow-sm">
          Vedic Samskara &amp; Celebrations
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-wide text-stone-900 drop-shadow-sm font-normal">
          Upanayanam
        </h1>
        <div className="w-16 sm:w-24 h-[1.5px] bg-[#b38e5d] my-3 opacity-80"></div>
        <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-stone-700 font-medium">
          Srirangam • July 4 – 5, 2026
        </p>
      </div>

      {/* 3. Middle Layer: Temple (Full Temple fitted & visible) */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 w-full h-[70vh] sm:h-[78vh] md:h-[84vh] flex items-end justify-center will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.28}px, 0)`,
        }}
      >
        <div className="relative w-full h-full max-w-[1400px] mx-auto px-2">
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

      {/* 4. Foreground / Front Layer: Bottom Landscape */}
      <div
        className="absolute inset-0 z-30 w-full h-full will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offsetY * 0.08}px, 0)`,
        }}
      >
        <Image
          src="/images/hero/bottom.png"
          alt="Foreground Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Subtle bottom gradient to blend seamlessly into following sections */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/60 to-transparent z-40 pointer-events-none" />
    </div>
  );
};
