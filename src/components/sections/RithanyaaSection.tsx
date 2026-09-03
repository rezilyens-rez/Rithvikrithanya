"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Music, Users, Image as ImageIcon } from "lucide-react";

export const RithanyaaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("gallery");

  const moments = [
    { label: "Tambura Invocations", tag: "Ritual & Dhyanam" },
    { label: "Accompanists & Ensemble", tag: "Violin & Mridangam" },
    { label: "Sangeeta Upanyasam", tag: "Vocal Performance" },
    { label: "Guru Vandanam", tag: "Pranam & Blessings" },
    { label: "Mangalam & Dedication", tag: "Samarpanam" },
    { label: "Vedic Chanting Opening", tag: "Shloka Samarpanam" },
    { label: "Rasika Asheervadam", tag: "Audience & Elders" },
  ];

  // Duplicated list for infinite seamless marquee loop
  const infiniteMoments = [...moments, ...moments];

  const programList = [
    { type: "Varnam", song: "Ninnukori", ragam: "Kambhoji" },
    { type: "Kriti", song: "Brochevarevare", ragam: "Kambhoji" },
    { type: "Kriti", song: "Marivere Gati", ragam: "Mohanam" },
    { type: "Ragam–Tanam–Pallavi", song: "Kambhoji", ragam: "Adi" },
    { type: "Tillana", song: "Krithi Theruvil", ragam: "Hamsanandi" },
    { type: "Mangalam", song: "Pavamana Sutham", ragam: "Madhyamavati" },
  ];

  const videoHighlights = [
    { title: "Varnam", subtitle: "Ninnukori • Kambhoji", duration: "03:21", id: 1 },
    { title: "Kriti", subtitle: "Brochevarevare • Kambhoji", duration: "04:18", id: 2 },
    { title: "Neraval", subtitle: "In Bamha • Devagandhari", duration: "02:47", id: 3 },
    { title: "Ragam–Tanam–Pallavi", subtitle: "Kambhoji • Adi Talam", duration: "05:02", id: 4 },
    { title: "Mangalam", subtitle: "Pavamana Sutham • Madhyamavati", duration: "01:38", id: 5 },
  ];

  return (
    <section id="rithanyaa" className="relative w-full bg-[#faf7f2] text-stone-900 pt-0 pb-0 scroll-mt-0">
      {/* --- 1. FULL WIDTH UPPER LAYER: LEFT TEXT & RIGHT IMAGE --- */}
      <div className="w-full flex flex-col lg:flex-row items-stretch border-b border-[#c5a059]/30">
        {/* Left Text Block */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#f5ede3] via-[#f7f0e7] to-[#f4ebe0] px-6 sm:px-12 lg:px-16 py-8 sm:py-12 flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <Image
                  src="/images/hero/sithara.png"
                  alt="Sithara"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-serif tracking-wider text-[#b38e5d] font-semibold">
                July 4, 2026 &nbsp;•&nbsp; Evening
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-[1.15] mb-2 font-normal">
              Rithanyaa’s <br />
              Sangeeta Upanyasam
            </h2>

            {/* Lotus Divider */}
            <div className="flex items-center gap-2.5 w-36 my-2 opacity-80">
              <div className="h-[1px] flex-1 bg-[#b38e5d]" />
              <svg className="w-3.5 h-3.5 text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
              </svg>
              <div className="h-[1px] flex-1 bg-[#b38e5d]" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-serif italic text-[#9b6f38] mb-2.5">
              A debut. A voice. An offering.
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-lg mb-6 font-light">
              An evening of Carnatic music, storytelling and devotion presented by Kum. Rithanyaa Venkat under the guidance of her guru, Smt. Vanitha Suresh.
            </p>
          </div>

          {/* Quick Navigation Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#rithanyaa-gallery"
              onClick={() => setActiveTab("gallery")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === "gallery"
                  ? "bg-[#0f2842] text-white shadow-sm"
                  : "bg-white/80 text-stone-700 hover:bg-stone-200 border border-stone-300/60"
              }`}
            >
              <ImageIcon size={12} />
              <span>Gallery</span>
            </a>

            <a
              href="#rithanyaa-program-section"
              onClick={() => setActiveTab("highlights")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/80 text-stone-700 hover:bg-stone-200 border border-stone-300/60 transition-all"
            >
              <Play size={11} />
              <span>Highlights</span>
            </a>

            <a
              href="#rithanyaa-program-section"
              onClick={() => setActiveTab("program")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/80 text-stone-700 hover:bg-stone-200 border border-stone-300/60 transition-all"
            >
              <Music size={12} />
              <span>The Program</span>
            </a>

            <a
              href="#rithanyaa-program-section"
              onClick={() => setActiveTab("artists")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/80 text-stone-700 hover:bg-stone-200 border border-stone-300/60 transition-all"
            >
              <Users size={12} />
              <span>The Artists</span>
            </a>
          </div>
        </div>

        {/* Right Stage Image Box */}
        <div className="w-full lg:w-1/2 min-h-[340px] lg:min-h-[440px] relative bg-gradient-to-t from-stone-950 via-[#0e2742] to-[#122e4d] flex items-center justify-center p-6 sm:p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#c5a059]/40 flex flex-col items-center justify-center text-center p-6 bg-[#0c2238]/70 backdrop-blur-xs shadow-inner">
            <div className="w-14 h-14 rounded-full bg-[#b38e5d]/20 border border-[#b38e5d]/50 flex items-center justify-center text-[#d4af37] mb-2.5">
              <Music size={24} />
            </div>
            <h4 className="text-xl sm:text-2xl font-serif text-[#fdfbf7] font-normal mb-1">
              Kum. Rithanyaa Venkat
            </h4>
            <p className="text-xs font-serif tracking-wider text-[#d4af37]">
              Sangeeta Upanyasam Stage Portrait
            </p>
            <span className="text-xs text-stone-400 mt-1.5 italic max-w-sm">
              [ High-Resolution Stage Image Placeholder ]
            </span>
          </div>
        </div>
      </div>

      {/* --- 2. JOINED DIRECTLY BELOW: AUTOMATIC INFINITE SCROLLING MOMENTS --- */}
      <div id="rithanyaa-gallery" className="w-full bg-[#081829] py-4 sm:py-5 overflow-hidden border-b border-[#c5a059]/30">
        <div className="animate-marquee flex gap-4 items-center">
          {infiniteMoments.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-56 sm:w-64 h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e2947] to-[#061422] border border-[#c5a059]/30 shadow-md flex flex-col justify-end p-3 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Center Placeholder Icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-[#0d2238]/60 group-hover:bg-[#0d2238]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-[#c5a059]/40 flex items-center justify-center text-[#d4af37] mb-1 group-hover:scale-110 transition-transform">
                  <ImageIcon size={15} />
                </div>
                <span className="text-[9px] font-serif tracking-wider text-[#d4af37]">
                  Moment #{(idx % moments.length) + 1}
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="relative z-10 bg-black/70 backdrop-blur-xs p-2 rounded-xl border border-white/10 text-left">
                <h5 className="text-[11px] font-serif text-[#fdfbf7] font-medium leading-tight truncate">
                  {item.label}
                </h5>
                <span className="text-[9px] text-[#e6d8be] italic block mt-0.5 truncate">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. FULL-WIDTH VIEWPORT LOWER SECTION (NO OUTER 4-SIDE GAPS) --- */}
      <div id="rithanyaa-program-section" className="w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] lg:max-h-[820px] flex flex-col justify-between bg-white border-b border-[#c5a059]/30">
        {/* Main 3 Columns Row (Full width with balanced interior padding) */}
        <div className="w-full px-6 sm:px-10 lg:px-16 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow">
          {/* Column 1: Video Highlights (Vertical List - Well Distributed) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-200">
                <div className="w-6 h-6 rounded-full bg-[#b38e5d]/20 flex items-center justify-center text-[#b38e5d]">
                  <Play size={11} className="ml-0.5" />
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-wide">
                  Video Highlights
                </h4>
              </div>

              {/* Distributed Video Items */}
              <div className="space-y-3">
                {videoHighlights.map((vid) => (
                  <div
                    key={vid.id}
                    className="group flex items-center gap-3.5 p-2 rounded-xl hover:bg-[#faf7f2] border border-transparent hover:border-stone-200 transition-all cursor-pointer"
                  >
                    <div className="relative w-20 h-13 rounded-lg bg-[#0e2742] border border-[#c5a059]/40 overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#b38e5d] transition-all">
                        <Play size={10} className="ml-0.5" />
                      </div>
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[8px] font-mono bg-black/80 text-white rounded">
                        {vid.duration}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className="text-sm font-serif font-semibold text-stone-900 group-hover:text-[#9b6f38] transition-colors truncate">
                        {vid.title}
                      </h5>
                      <p className="text-xs text-stone-500 italic truncate mt-0.5">
                        {vid.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#films"
              className="w-full py-3 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-medium transition-all flex items-center justify-center gap-1.5 mt-4"
            >
              <span>Watch the Full Concert (18:24)</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Column 2: The Program (Well Distributed with Generous Rows) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full lg:border-l lg:border-r lg:border-stone-200 lg:px-8">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-200">
                <div className="w-6 h-6 rounded-full bg-[#b38e5d]/20 flex items-center justify-center text-[#b38e5d]">
                  <Music size={12} />
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 tracking-wide">
                  The Program
                </h4>
              </div>

              <div className="space-y-3.5">
                {programList.map((item, i) => (
                  <div
                    key={i}
                    className="py-2 px-2 flex items-center justify-between border-b border-stone-100 hover:bg-stone-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#b38e5d] text-xs">✦</span>
                      <span className="font-serif font-semibold text-stone-900 text-sm sm:text-[15px]">
                        {item.type}
                      </span>
                      <span className="text-stone-700 text-sm truncate max-w-[120px] font-normal">
                        {item.song}
                      </span>
                    </div>
                    <span className="font-serif italic text-[#9b6f38] text-sm shrink-0 font-medium">
                      {item.ragam}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => alert("Detailed program brochure available upon request.")}
              className="w-full py-3 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-4"
            >
              <span>View Detailed Program</span>
              <ExternalLink size={13} />
            </button>
          </div>

          {/* Column 3: Sacred Quote Card with Temple Background */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-sm flex flex-col justify-between text-center p-8 h-full min-h-[380px]">
            {/* Background Temple Image Layer */}
            <div className="absolute inset-0 z-0 w-full h-full">
              <Image
                src="/images/hero/Temple.png"
                alt="Temple Background"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-bottom filter saturate-75 opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#faf5ee]/95 via-[#f5ede1]/90 to-[#efe2cf]/95" />
            </div>

            {/* Decorative Quote Mark */}
            <div className="relative z-10 text-4xl font-serif text-[#b38e5d] leading-none mb-2">
              “
            </div>

            {/* Sacred Quote Text */}
            <div className="relative z-10 my-auto px-2">
              <p className="font-serif italic text-stone-900 text-base sm:text-lg leading-relaxed font-normal">
                May the music we offer today be received as our humble pranam at the feet of the Lord, our gurus and the rasikas.
              </p>
              <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mt-4 opacity-60" />
            </div>

            {/* Lotus Symbol at bottom */}
            <div className="relative z-10 pt-3">
              <svg className="w-5 h-5 mx-auto text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- FULL-WIDTH EXACT MATCH BOTTOM QUOTE BANNER WITH TEMPLE SKYLINE --- */}
        <div className="w-full relative bg-[#081b2e] border-t border-[#c5a059]/40 py-4 px-6 sm:px-12 overflow-hidden">
          {/* Background Temple Skyline Banner Image */}
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <Image
              src="/images/hero/temple_skyline_banner.jpg"
              alt="Temple Skyline Banner"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>

          {/* Foreground Content: Left Lotus Line, Center Quote, Right Temple Sketch */}
          <div className="relative z-10 flex items-center justify-between gap-4 max-w-7xl mx-auto">
            {/* Left Side: Gold Line & Lotus */}
            <div className="hidden sm:flex items-center gap-3 flex-1">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
              <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
              </svg>
              <div className="h-[1px] w-8 bg-[#b38e5d]" />
            </div>

            {/* Center: Quote Text */}
            <div className="text-center px-4 shrink-0">
              <p className="font-serif italic text-sm sm:text-base text-[#e5c178] tracking-wide">
                &ldquo;Music is devotion becoming sound.&rdquo;
              </p>
              <span className="text-xs font-serif text-[#d4af37]/90 block mt-0.5">
                – Smt. Vanitha Suresh
              </span>
            </div>

            {/* Right Side: Gold Line & Temple Outline */}
            <div className="hidden sm:flex items-center gap-3 flex-1">
              <div className="h-[1px] w-8 bg-[#b38e5d]" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
              <div className="flex items-end gap-1 opacity-85 shrink-0 text-[#d4af37]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 2 L9 6 L9 8 L7 11 L7 14 L5 17 L5 22 L19 22 L19 17 L17 14 L17 11 L15 8 L15 6 Z" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="7" y1="14" x2="17" y2="14" />
                  <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="1 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
