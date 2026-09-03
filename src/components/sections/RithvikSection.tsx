"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Grid,
  Sparkles,
  Flame,
  Heart,
  Users,
  Camera,
  ChevronDown,
} from "lucide-react";

export const RithvikSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("Most Recent");

  const filterTabs = [
    { id: "all", label: "All Moments", icon: Grid },
    { id: "preparations", label: "Preparations", icon: Sparkles },
    { id: "ceremony", label: "The Ceremony", icon: Flame },
    { id: "blessings", label: "Blessings", icon: Heart },
    { id: "family", label: "Family", icon: Users },
    { id: "candids", label: "Candids", icon: Camera },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "The Morning Begins",
      category: "ceremony",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-4",
      aspect: "aspect-[16/10]",
      placeholderBg: "from-[#081a28] via-[#0d2d42] to-[#1a3d54]",
      icon: "🛕",
      desc: "Temple Sunrise & Morning Serenity",
    },
    {
      id: 2,
      title: "Preparation",
      category: "preparations",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#1a2818] via-[#243d22] to-[#122410]",
      icon: "🥥",
      desc: "Vedic Attire & Adornment",
    },
    {
      id: 3,
      title: "Homa",
      category: "ceremony",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#28180c] via-[#422512] to-[#1e0e06]",
      icon: "🔥",
      desc: "Agni Karyam & Samidadhanam",
    },
    {
      id: 4,
      title: "In Prayer",
      category: "blessings",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      aspect: "aspect-[3/4]",
      placeholderBg: "from-[#182618] via-[#203b22] to-[#0c1c0e]",
      icon: "🙏",
      desc: "Dhyanam & Devotion",
    },
    {
      id: 5,
      title: "Sacred Thread",
      category: "ceremony",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#221c10] via-[#3d321c] to-[#1a1408]",
      icon: "✨",
      desc: "Yajnopavita Dharanam",
    },
    {
      id: 6,
      title: "Sankalpa",
      category: "preparations",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#2b1f14] via-[#483321] to-[#20150b]",
      icon: "📜",
      desc: "Sacred Mantras & Flowers",
    },
    {
      id: 7,
      title: "Upadesham",
      category: "ceremony",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#102416] via-[#1b3d26] to-[#0a180e]",
      icon: "🕉️",
      desc: "Gayatri Mantra Diksha",
    },
    {
      id: 8,
      title: "Blessings",
      category: "family",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
      aspect: "aspect-[4/3]",
      placeholderBg: "from-[#1e1c28] via-[#312d42] to-[#15131c]",
      icon: "🌸",
      desc: "Elders Ashirvachanam",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="rithvik"
      className="relative w-full bg-[#fbf8f3] text-stone-900 py-10 sm:py-14 px-4 sm:px-6 lg:px-12 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* --- 1. HEADER SECTION (CENTERED EXACT MATCH) --- */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Sacred Kalasam Icon */}
          <div className="relative w-9 h-9 mb-2.5 flex items-center justify-center">
            <Image
              src="/images/hero/kalasam.png"
              alt="Kalasam"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>

          {/* Date & Time */}
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#b38e5d] uppercase font-semibold mb-1.5">
            JULY 5, 2026 &nbsp;•&nbsp; MORNING
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-stone-900 tracking-tight font-normal mb-2.5">
            Rithvik’s Upanayanam
          </h2>

          {/* Lotus Divider */}
          <div className="flex items-center justify-center gap-3 w-36 mx-auto my-1.5 opacity-80">
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
            <svg
              className="w-4 h-4 text-[#b38e5d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base font-serif italic text-[#9b6f38] mb-2 font-normal">
            A beginning. A tradition. A journey.
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto font-light">
            Surrounded by love, guided by tradition, Rithvik took his sacred step
            into a life of learning, discipline and responsibility. Here are
            moments from the morning.
          </p>
        </div>

        {/* --- 2. CATEGORY TABS & SORT DROPDOWN BAR --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 pb-1 border-b border-stone-200/80">
          {/* Left Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0d2a1c] text-white shadow-xs"
                      : "bg-white/80 text-stone-700 hover:bg-stone-200/80 border border-stone-300/70"
                  }`}
                >
                  <IconComp size={12} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone-600 shrink-0">
            <span className="tracking-wider uppercase text-stone-500">SORT BY</span>
            <button
              onClick={() =>
                setSelectedSort((prev) =>
                  prev === "Most Recent" ? "Ceremony Order" : "Most Recent"
                )
              }
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/80 border border-stone-300/70 text-stone-800 hover:bg-stone-100 transition-colors uppercase cursor-pointer"
            >
              <span>{selectedSort}</span>
              <ChevronDown size={12} />
            </button>
          </div>
        </div>

        {/* --- 3. PHOTO MOMENTS GRID (EXACT 2-ROW BALANCED MASONRY GRID) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 pt-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b ${item.placeholderBg} border border-[#c5a059]/30 shadow-md flex flex-col justify-end p-4 transition-transform duration-300 hover:-translate-y-1 cursor-pointer ${item.colSpan} min-h-[220px] sm:min-h-[240px]`}
            >
              {/* Center Atmosphere Placeholder Motif */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/35 group-hover:bg-black/20 transition-colors">
                <span className="text-3xl mb-1.5 transform group-hover:scale-115 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
                  {item.desc}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative z-10 bg-black/65 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                <h4 className="text-xs sm:text-sm font-serif text-[#fdfbf7] font-medium leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* --- 4. SACRED BLESSING BANNER (EXACT MATCH BOTTOM RIBBON) --- */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 pt-6 pb-2 text-center max-w-4xl mx-auto">
          {/* Left Gold Lotus Line */}
          <div className="hidden sm:flex items-center gap-3 flex-1 opacity-75">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
            <svg
              className="w-4 h-4 text-[#b38e5d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
          </div>

          {/* Center Sacred Quote */}
          <p className="font-serif italic text-stone-800 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide px-2 font-normal">
            In the light of knowledge, may you walk with clarity. In the strength of tradition, may you live with purpose.
          </p>

          {/* Right Gold Lotus Line */}
          <div className="hidden sm:flex items-center gap-3 flex-1 opacity-75">
            <svg
              className="w-4 h-4 text-[#b38e5d]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
          </div>
        </div>
      </div>
    </section>
  );
};
