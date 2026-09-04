"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import siteImages, { resolveImageUrl } from "@/config/images";

export const RithvikSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Column spans mapping matching a balanced 2-row layout (Row 1: 3 items of 4 cols, Row 2: 4 items of 3 cols)
  const colSpans = [
    "col-span-1 sm:col-span-2 lg:col-span-4", // 1. The Morning Begins
    "col-span-1 sm:col-span-1 lg:col-span-4", // 2. Preparation
    "col-span-1 sm:col-span-1 lg:col-span-4", // 3. Agni Homa
    "col-span-1 sm:col-span-1 lg:col-span-3", // 4. In Prayer & Dhyanam
    "col-span-1 sm:col-span-1 lg:col-span-3", // 5. Yajnopavita Dharanam
    "col-span-1 sm:col-span-1 lg:col-span-3", // 6. Gayatri Upadesham
    "col-span-1 sm:col-span-1 lg:col-span-3", // 7. Elders Blessings
  ];

  const moments = siteImages.rithvik.moments.map((item, idx) => ({
    ...item,
    colSpan: colSpans[idx] || "col-span-1 sm:col-span-1 lg:col-span-3",
  }));

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % moments.length);
    }
  }, [selectedPhotoIndex, moments.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + moments.length) % moments.length
      );
    }
  }, [selectedPhotoIndex, moments.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto]);

  return (
    <section
      id="rithvik"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[720px] lg:max-h-[1080px] flex flex-col justify-between bg-[#faf7f2] text-[#3e1f14] py-4 sm:py-5 px-3 sm:px-6 lg:px-10 scroll-mt-0 overflow-hidden"
    >
      <div className="w-full max-w-[1480px] mx-auto flex-1 flex flex-col justify-between">
        {/* --- 1. HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center pt-1">
          {/* Sacred Kalasam Icon */}
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 mb-1 flex items-center justify-center">
            <Image
              src="/images/hero/kalasam.png"
              alt="Kalasam"
              width={26}
              height={26}
              className="object-contain"
            />
          </div>

          {/* Date & Time */}
          <span className="text-[10.5px] sm:text-xs font-mono tracking-[0.25em] text-[#b38e5d] uppercase font-semibold mb-1">
            JULY 5, 2026 &nbsp;•&nbsp; MORNING
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif text-[#4a0e17] tracking-tight font-normal mb-1 leading-tight">
            Rithvik’s Upanayanam
          </h2>

          {/* Lotus Divider */}
          <div className="flex items-center justify-center gap-2.5 w-28 mx-auto my-1 opacity-80">
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
            <svg
              className="w-3.5 h-3.5 text-[#b38e5d]"
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
          <p className="text-xs sm:text-sm font-serif italic text-[#9b6f38] mb-1 font-normal">
            A beginning. A tradition. A journey.
          </p>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-[#3e1f14] leading-relaxed max-w-xl mx-auto font-light">
            Surrounded by love, guided by tradition, Rithvik took his sacred step into a life of learning, discipline and responsibility.
          </p>
        </div>

        {/* --- 2. EXPANDED PHOTO MOMENTS GRID WITH LARGER GAPS --- */}
        <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 py-2.5 items-stretch">
          {moments.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-sm flex flex-col justify-end p-3 transition-all duration-300 hover:shadow-xl hover:border-[#b38e5d] hover:scale-[1.015] cursor-pointer ${item.colSpan} min-h-[140px] sm:min-h-[160px] lg:min-h-0 h-full bg-stone-900`}
            >
              {/* Image Layer (Pure Photo Display) */}
              <Image
                src={resolveImageUrl(item.imageUrl)}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-106"
              />

              {/* Inset Gold Hairline Frame */}
              <div className="absolute inset-1.5 rounded-xl border border-white/20 pointer-events-none group-hover:border-[#d4af37]/60 transition-colors" />
            </div>
          ))}
        </div>

        {/* --- 3. BOTTOM SACRED BANNER & VIEW MORE BUTTON --- */}
        <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 pb-1 border-t border-[#c5a059]/25">
          {/* Sacred Quote */}
          <div className="flex items-center gap-2 text-[#3e1f14] text-center sm:text-left">
            <svg
              className="w-3.5 h-3.5 text-[#b38e5d] shrink-0 hidden sm:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
            <p className="font-serif italic text-[11.5px] sm:text-xs md:text-[13px] tracking-wide text-[#3e1f14]">
              &ldquo;In the light of knowledge, may you walk with clarity. In the strength of tradition, may you live with purpose.&rdquo;
            </p>
          </div>

          {/* View More Button */}
          <a
            href="/gallery?category=rithvik"
            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full text-xs font-mono tracking-[0.22em] uppercase bg-[#0d2a1c] hover:bg-[#133c28] text-[#fdfbf7] border border-[#c5a059]/50 shadow-sm hover:shadow-md transition-all duration-300 font-medium group cursor-pointer shrink-0"
          >
            <span>VIEW MORE</span>
            <span className="text-[#d4af37] text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* --- 4. FULLSCREEN INTERACTIVE LIGHTBOX MODAL --- */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-stone-300 hover:text-white p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close Fullscreen View"
          >
            <X size={22} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-stone-200 hover:text-white p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-white/20 transition-all z-50 hover:scale-110 cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-stone-200 hover:text-white p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-white/20 transition-all z-50 hover:scale-110 cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Pure Image Container (No borders, pure image display) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[88vh] max-w-6xl flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto">
              <Image
                src={resolveImageUrl(moments[selectedPhotoIndex].imageUrl)}
                alt={moments[selectedPhotoIndex].title || "Moment"}
                fill
                priority
                sizes="95vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
