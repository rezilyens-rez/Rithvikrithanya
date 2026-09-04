"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Send, CheckCircle2, Feather, Flame } from "lucide-react";
import { siteImages, resolveImageUrl } from "@/config/images";

export const GratitudeSection: React.FC = () => {
  const [guestName, setGuestName] = useState<string>("");
  const [guestMessage, setGuestMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim() && guestMessage.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="gratitude"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 relative z-10">
        {/* Sacred Lotus Motif */}
        <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/40 flex items-center justify-center text-[#b38e5d]">
          <Heart size={18} className="text-[#b38e5d]" />
        </div>

        <span className="text-xs sm:text-sm font-mono tracking-[0.28em] text-[#b38e5d] uppercase font-semibold">
          ASHEERVADAM &amp; SAMARPANAM
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight font-normal mt-2 mb-3">
          With Heartfelt Gratitude
        </h2>

        {/* Lotus Divider */}
        <div className="flex items-center justify-center gap-3 w-40 mx-auto my-3 opacity-80">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/60 to-[#b38e5d]" />
          <svg
            className="w-5 h-5 text-[#b38e5d]"
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

        {/* Sanskrit Blessing Verse */}
        <p className="font-serif italic text-stone-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-2">
          &ldquo;सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः&rdquo;
        </p>
        <p className="text-stone-500 text-xs sm:text-sm font-light tracking-wide mt-1">
          May all beings be filled with joy, peace, and divine blessings.
        </p>
      </div>

      {/* --- MAIN PARCHMENT MANDAPAM CARD --- */}
      <div className="relative z-10 max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f5ede0] border border-[#c5a059]/50 shadow-2xl p-7 sm:p-12 lg:p-14 overflow-hidden">
        {/* Ornate Gold Inset Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#c5a059]/25 pointer-events-none" />

        {/* Corner Flourish Accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#b38e5d]/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#b38e5d]/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#b38e5d]/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b38e5d]/60 pointer-events-none" />

        {/* Central Dedication Message */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="font-serif italic text-stone-800 text-base sm:text-xl lg:text-2xl leading-relaxed">
            &ldquo;With deepest reverence and profound gratitude for your prayers, love, and gracious presence on this sacred double milestone.&rdquo;
          </p>
        </div>

        {/* 3 Pillars of Gratitude */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-8 sm:my-10">
          {/* Pillar 1: Gurus & Acharyas */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xs border border-[#c5a059]/30 p-6 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 text-[#9b6f38] flex items-center justify-center mb-3.5">
              <Feather size={22} />
            </div>
            <h4 className="font-serif text-lg text-stone-900 font-medium mb-1.5">
              To Our Gurus &amp; Vidwans
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 font-serif leading-relaxed">
              For nurturing the sacred gift of Carnatic music and guiding Kum. Rithanyaa towards her maiden Sangeeta Upanyasam debut.
            </p>
          </div>

          {/* Pillar 2: Elders & Ancestors */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xs border border-[#c5a059]/30 p-6 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 text-[#9b6f38] flex items-center justify-center mb-3.5">
              <Flame size={22} />
            </div>
            <h4 className="font-serif text-lg text-stone-900 font-medium mb-1.5">
              To Our Elders &amp; Acharyas
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 font-serif leading-relaxed">
              For bestowing sacred Gayatri Upadesham, Vedic values, and enduring blessings upon Chi. Rithvik as he enters Brahmacharya.
            </p>
          </div>

          {/* Pillar 3: Beloved Family & Friends */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xs border border-[#c5a059]/30 p-6 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 text-[#9b6f38] flex items-center justify-center mb-3.5">
              <Heart size={22} />
            </div>
            <h4 className="font-serif text-lg text-stone-900 font-medium mb-1.5">
              To Family &amp; Friends
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 font-serif leading-relaxed">
              For journeying from far and near, gracing every ritual, and filling our home with timeless joy, feasts, and laughter.
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE DIGITAL BLESSINGS & GUESTBOOK WISH BOX --- */}
      

        {/* --- SIGN-OFF & PARIVARAM SIGNATURE --- */}
        <div className="mt-12 pt-8 border-t border-[#c5a059]/30 text-center">
          <span className="text-[11px] sm:text-xs tracking-[0.25em] font-mono text-[#b38e5d] uppercase font-semibold block mb-1">
            WITH PROFOUND RESPECT &amp; LOVE
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal tracking-wide">
            Sharma &amp; Bharadwaja Parivaram
          </h3>
          <p className="text-xs font-serif italic text-stone-500 mt-1">
            Srirangam • July 2026
          </p>
        </div>
      </div>
    </section>
  );
};
