"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Camera, Users, Filter } from "lucide-react";

export const TogetherSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>("all");

  const polaroids = [
    {
      id: 1,
      caption: "Thaatha & Paati’s Blessings",
      date: "Srirangam • July 2026",
      tag: "elders",
      rotation: "-rotate-2",
      tapeColor: "bg-[#d8c3a5]/70",
      bgGradient: "from-[#2b2118] via-[#48382b] to-[#1a130c]",
      icon: "👵👴",
      note: "Three generations under one sacred roof",
    },
    {
      id: 2,
      caption: "Rithanyaa & Rithvik",
      date: "The Practice Hour • 04:30 PM",
      tag: "siblings",
      rotation: "rotate-2",
      tapeColor: "bg-[#c5b59f]/70",
      bgGradient: "from-[#102436] via-[#1c3850] to-[#0a1622]",
      icon: "👧👦",
      note: "Shared rhythm, shared heritage",
    },
    {
      id: 3,
      caption: "The Feast & Endless Laughter",
      date: "Banana Leaf Lunch • Day 1",
      tag: "candids",
      rotation: "-rotate-1",
      tapeColor: "bg-[#d4af37]/40",
      bgGradient: "from-[#2e1c12] via-[#452d20] to-[#1c0f08]",
      icon: "🍲",
      note: "Maha Prasadam with the entire family",
    },
    {
      id: 4,
      caption: "Golden Hour at Temple Tank",
      date: "Amma Mandapam • Evening",
      tag: "portraits",
      rotation: "rotate-3",
      tapeColor: "bg-[#b8a99a]/70",
      bgGradient: "from-[#1a2818] via-[#2a3d28] to-[#121c10]",
      icon: "🛕",
      note: "Breathtaking Kaveri sunset breeze",
    },
    {
      id: 5,
      caption: "Cousins Squad Assembled",
      date: "Courtyard Candids • 11:00 AM",
      tag: "candids",
      rotation: "-rotate-2",
      tapeColor: "bg-[#d8c3a5]/70",
      bgGradient: "from-[#251828] via-[#3a273e] to-[#180f1a]",
      icon: "✨",
      note: "All of us together after years",
    },
    {
      id: 6,
      caption: "Traditional Silk & Jasmine",
      date: "Morning Preparation Details",
      tag: "portraits",
      rotation: "rotate-1",
      tapeColor: "bg-[#c5b59f]/70",
      bgGradient: "from-[#2b1f14] via-[#433221] to-[#1d140b]",
      icon: "🌸",
      note: "Pattu sarees and fragrant mallipoo",
    },
  ];

  const filteredPolaroids =
    activeTag === "all"
      ? polaroids
      : polaroids.filter((item) => item.tag === activeTag);

  return (
    <section
      id="together"
      className="relative w-full bg-[#f4ece1] text-stone-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 scroll-mt-16 overflow-hidden border-b border-[#c5a059]/30"
    >
      {/* Background Scrapbook Pinboard Atmosphere */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#b38e5d_0.75px,transparent_0.75px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Sacred Lotus / Heart Motif */}
          <div className="w-9 h-9 mx-auto mb-2 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/40 flex items-center justify-center text-[#b38e5d]">
            <Heart size={18} />
          </div>

          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
            FAMILY MEMORIES &amp; BOND
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-stone-900 tracking-tight font-normal mt-1.5 mb-2.5">
            Together
          </h2>

          {/* Lotus Divider */}
          <div className="flex items-center justify-center gap-3 w-36 mx-auto my-2 opacity-80">
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
            <svg className="w-4 h-4 text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
          </div>

          <p className="text-stone-700 text-sm sm:text-base font-serif italic max-w-xl mx-auto leading-relaxed">
            &ldquo;Laughter, blessings, and cherished bonds that span across generations.&rdquo;
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: "all", label: "All Polaroids" },
              { id: "elders", label: "Grandparents & Elders" },
              { id: "siblings", label: "Rithanyaa & Rithvik" },
              { id: "portraits", label: "Portraits" },
              { id: "candids", label: "Laughter & Candids" },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setActiveTag(pill.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  activeTag === pill.id
                    ? "bg-[#0c2738] text-white shadow-xs"
                    : "bg-white/80 text-stone-700 hover:bg-white border border-stone-300/70"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- POLAROID PHOTO ALBUM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {filteredPolaroids.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-[#fdfbf7] p-4 pb-7 rounded-sm shadow-xl shadow-stone-900/10 border border-stone-200/80 transition-all duration-300 transform ${item.rotation} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-20 cursor-pointer`}
            >
              {/* Washi Tape Accent at Top Center */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5.5 ${item.tapeColor} backdrop-blur-xs border border-white/40 shadow-xs transform -rotate-1 pointer-events-none`}
              />

              {/* Polaroid Photo Image Box */}
              <div className={`relative aspect-square w-full rounded-xs overflow-hidden bg-gradient-to-b ${item.bgGradient} border border-stone-300/40 shadow-inner flex flex-col items-center justify-center p-6 text-center`}>
                {/* Photo Placeholder Aura & Icon */}
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl mb-3 group-hover:scale-115 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                <p className="text-xs font-serif text-[#fdfbf7] italic tracking-wide max-w-[200px] leading-snug">
                  {item.note}
                </p>
                <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest mt-2 block">
                  [ Polaroid Capture ]
                </span>
              </div>

              {/* Polaroid Handwritten Caption Section */}
              <div className="pt-4 text-center">
                <h4 className="font-serif italic text-base sm:text-lg text-stone-800 font-medium leading-snug">
                  {item.caption}
                </h4>
                <span className="text-[11px] font-mono tracking-wider text-stone-500 uppercase block mt-1">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM POLAROID MEMORY QUOTE --- */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-[#b38e5d]/30 text-xs font-serif italic text-stone-700">
            <Sparkles size={14} className="text-[#b38e5d]" />
            <span>&ldquo;Memories captured in warmth, preserved in tradition.&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
};
