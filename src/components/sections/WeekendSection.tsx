"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { siteImages, resolveImageUrl } from "@/config/images";

export const WeekendSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [relScroll, setRelScroll] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const progress = window.innerHeight - rect.top;
          setRelScroll(progress);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="weekend"
      className="relative min-h-[880px] lg:h-screen lg:min-h-[740px] lg:max-h-[1080px] w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 scroll-mt-0 bg-[#d6a978]"
    >
      {/* 1. Background Parallax Layer: Temple Scenery & Invitation BG (Softened / reduced opacity) */}
      <div
        className="absolute -top-[10%] inset-x-0 h-[120%] w-full z-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${relScroll * 0.1}px, 0)`,
        }}
      >
        <Image
          src={resolveImageUrl(siteImages.weekend.invitationBackground)}
          alt="Temple Background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-35"
        />
        {/* Soft Warm Tint Overlay to gently tone down yellow saturation */}
        <div className="absolute inset-0 bg-[#d6a978]/50" />
      </div>

      {/* 2. Middle Parallax Layer: Ornate Side Frame (Reduced opacity) */}
      <div
        className="absolute -top-[5%] inset-x-0 h-[110%] w-full z-10 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${relScroll * 0.04}px, 0)`,
        }}
      >
        <Image
          src={resolveImageUrl(siteImages.weekend.sideFrame)}
          alt="Ornate Side Frame"
          fill
          sizes="100vw"
          priority
          className="object-cover sm:object-contain object-center w-full h-full opacity-60"
        />
      </div>

      {/* --- Dynamic Parallax Cloudy Mist Transitions --- */}

      {/* Top Cloud Canopy & Parting Fog seamlessly blending from Hero Section */}
      <div
        className="absolute -top-20 inset-x-0 h-64 z-15 pointer-events-none will-change-transform bg-gradient-to-b from-[#d6a978] via-[#d6a978]/90 via-[#d6a978]/60 to-transparent"
        style={{
          transform: `translate3d(0, -${relScroll * 0.25}px, 0)`,
        }}
      />
      <div
        className="absolute -top-24 -left-28 w-[70vw] h-64 z-15 pointer-events-none rounded-[100%] blur-3xl will-change-transform bg-gradient-to-br from-[#d6a978] via-[#e2be95]/80 to-transparent"
        style={{
          transform: `translate3d(-${relScroll * 0.1}px, -${relScroll * 0.28}px, 0)`,
        }}
      />
      <div
        className="absolute -top-24 -right-28 w-[70vw] h-64 z-15 pointer-events-none rounded-[100%] blur-3xl will-change-transform bg-gradient-to-bl from-[#d6a978] via-[#e2be95]/80 to-transparent"
        style={{
          transform: `translate3d(${relScroll * 0.1}px, -${relScroll * 0.28}px, 0)`,
        }}
      />

      {/* 3. Front Layer: Improvised Luxury Main Content & Cards */}
      <div
        className="relative z-20 max-w-5xl mx-auto text-center px-4 sm:px-6 pt-6 pb-6 flex flex-col justify-center items-center will-change-transform w-full"
        style={{
          transform: `translate3d(0, -${relScroll * 0.02}px, 0)`,
        }}
      >
        {/* Top Tagline */}
        <span className="text-[10.5px] sm:text-xs tracking-[0.3em] text-[#b38e5d] uppercase font-semibold mb-2">
          TWO BEGINNINGS. ONE FAMILY.
        </span>

        {/* Main Title with Refined Typography */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight font-normal leading-[1.15] max-w-2xl mx-auto mb-2.5">
          A Weekend <br />
          We Will Always Carry
        </h2>

        {/* Lotus Emblem Divider with Fine Gold Flourish */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-2 opacity-85">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
          <svg className="w-5 h-5 text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
            <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
        </div>

        {/* Subtitle */}
        <p className="text-stone-700 text-xs sm:text-sm md:text-base font-serif italic mb-7 sm:mb-9 tracking-wide font-normal">
          Music. Tradition. Family. Blessings.
        </p>

        {/* The Two Improvised Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-4xl mx-auto">
          {/* Card 1: Rithanyaa's Sangeeta Upanyasam (Royal Midnight Navy) */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0e2947] via-[#0b2138] to-[#071625] border border-[#c5a059]/50 shadow-2xl p-7 sm:p-8 flex flex-col items-center text-center justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cyan-950/30 hover:border-[#e5c178]">
            {/* Delicate Inset Gold Hairline Frame */}
            <div className="absolute inset-2 sm:inset-2.5 rounded-xl border border-[#c5a059]/25 pointer-events-none group-hover:border-[#c5a059]/40 transition-colors" />

            {/* Subtle Top Radial Lighting Glow */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Sithara Icon with Soft Gold Ambient Glow */}
            <div className="relative mb-3.5 z-10">
              <div className="absolute -inset-2 bg-[#d4af37]/15 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src={resolveImageUrl(siteImages.weekend.sitharaIcon)}
                  alt="Sithara Icon"
                  width={56}
                  height={56}
                  priority
                  className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transform group-hover:scale-108 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Date & Time Header */}
            <span className="relative z-10 text-[10.5px] sm:text-[11.5px] font-mono tracking-[0.25em] text-[#d4af37] uppercase font-medium mb-2.5 drop-shadow-xs">
              JULY 4, 2026 &nbsp;•&nbsp; EVENING
            </span>

            {/* Event Title */}
            <h3 className="relative z-10 text-2xl sm:text-[28px] lg:text-[31px] font-serif text-[#fdfbf7] tracking-wide leading-[1.25] font-normal mb-3">
              Rithanyaa’s <br />
              Sangeeta Upanyasam
            </h3>

            {/* Ornate Inner Divider */}
            <div className="relative z-10 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent my-2" />

            {/* Poetic Subtitle */}
            <p className="relative z-10 text-xs sm:text-[13.5px] font-serif italic text-[#e6d8be]/95 tracking-wide mb-6 font-light">
              A debut. A voice. An offering.
            </p>

            {/* Explore Button */}
            <a
              href="#rithanyaa"
              className="relative z-10 inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d4af37] hover:text-[#fff2c2] uppercase transition-colors group-hover:gap-3 duration-300 font-medium py-1 px-3 cursor-pointer"
            >
              <span>EXPLORE</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Card 2: Rithvik's Upanayanam (Deep Imperial Forest Green) */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0b3120] via-[#092619] to-[#05180f] border border-[#c5a059]/50 shadow-2xl p-7 sm:p-8 flex flex-col items-center text-center justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-950/30 hover:border-[#e5c178]">
            {/* Delicate Inset Gold Hairline Frame */}
            <div className="absolute inset-2 sm:inset-2.5 rounded-xl border border-[#c5a059]/25 pointer-events-none group-hover:border-[#c5a059]/40 transition-colors" />

            {/* Subtle Top Radial Lighting Glow */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Kalasam Icon with Soft Gold Ambient Glow */}
            <div className="relative mb-3.5 z-10">
              <div className="absolute -inset-2 bg-[#d4af37]/15 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src={resolveImageUrl(siteImages.weekend.kalasamIcon)}
                  alt="Kalasam Icon"
                  width={56}
                  height={56}
                  priority
                  className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transform group-hover:scale-108 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Date & Time Header */}
            <span className="relative z-10 text-[10.5px] sm:text-[11.5px] font-mono tracking-[0.25em] text-[#d4af37] uppercase font-medium mb-2.5 drop-shadow-xs">
              JULY 5, 2026 &nbsp;•&nbsp; MORNING
            </span>

            {/* Event Title */}
            <h3 className="relative z-10 text-2xl sm:text-[28px] lg:text-[31px] font-serif text-[#fdfbf7] tracking-wide leading-[1.25] font-normal mb-3">
              Rithvik’s <br />
              Upanayanam
            </h3>

            {/* Ornate Inner Divider */}
            <div className="relative z-10 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent my-2" />

            {/* Poetic Subtitle */}
            <p className="relative z-10 text-xs sm:text-[13.5px] font-serif italic text-[#e6d8be]/95 tracking-wide mb-6 font-light">
              A beginning. A tradition. A journey.
            </p>

            {/* Explore Button */}
            <a
              href="#rithvik"
              className="relative z-10 inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#d4af37] hover:text-[#fff2c2] uppercase transition-colors group-hover:gap-3 duration-300 font-medium py-1 px-3 cursor-pointer"
            >
              <span>EXPLORE</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
