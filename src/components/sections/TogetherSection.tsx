"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Heart, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

import siteImages, { resolveImageUrl } from "@/config/images";

export const TogetherSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const aspectRatios = [
    "aspect-[4/5]", // 1. Vertical portrait
    "aspect-square", // 2. Classic square
    "aspect-[4/3]",  // 3. Landscape group
    "aspect-[4/5]",  // 4. Portrait
    "aspect-[4/3]",  // 5. Landscape
    "aspect-square", // 6. Square
    "aspect-[4/5]",  // 7. Portrait
    "aspect-[4/3]",  // 8. Landscape
    "aspect-square", // 9. Square
    "aspect-[4/5]",  // 10. Portrait
    "aspect-[4/3]",  // 11. Landscape
    "aspect-square", // 12. Square
  ];

  const rotations = [
    "-rotate-2",
    "rotate-2",
    "-rotate-1",
    "rotate-3",
    "-rotate-2",
    "rotate-1",
    "-rotate-2",
    "rotate-2",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-1",
  ];

  const tapeColors = [
    "bg-[#d8c3a5]/75",
    "bg-[#c5b59f]/75",
    "bg-[#d4af37]/45",
    "bg-[#b8a99a]/75",
    "bg-[#d8c3a5]/75",
    "bg-[#c5b59f]/75",
    "bg-[#d8c3a5]/75",
    "bg-[#c5b59f]/75",
    "bg-[#d4af37]/45",
    "bg-[#b8a99a]/75",
    "bg-[#d8c3a5]/75",
    "bg-[#c5b59f]/75",
  ];

  const polaroids = siteImages.together.polaroids.map((item, idx) => ({
    ...item,
    rotation: rotations[idx % rotations.length],
    tapeColor: tapeColors[idx % tapeColors.length],
    aspect: aspectRatios[idx % aspectRatios.length],
  }));

  const filteredPolaroids =
    activeTag === "all"
      ? polaroids
      : polaroids.filter((item) => item.tag === activeTag);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPolaroids.length);
    }
  }, [selectedPhotoIndex, filteredPolaroids.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPolaroids.length) %
          filteredPolaroids.length
      );
    }
  }, [selectedPhotoIndex, filteredPolaroids.length]);

  // Keyboard navigation
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
      id="together"
      className="relative w-full bg-[#f4ece1] text-[#3e1f14] py-14 sm:py-20 px-3.5 sm:px-6 lg:px-10 scroll-mt-16 overflow-hidden border-b border-[#c5a059]/30"
    >
      {/* Background Scrapbook Pinboard Atmosphere */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#b38e5d_0.75px,transparent_0.75px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-10 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Sacred Lotus / Heart Motif */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-1.5 sm:mb-2 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/40 flex items-center justify-center text-[#b38e5d]">
            <Heart size={15} />
          </div>

          <span className="text-[11px] sm:text-sm font-mono tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
            FAMILY MEMORIES &amp; BOND
          </span>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-serif text-[#4a0e17] tracking-tight font-normal mt-1 mb-2">
            Together
          </h2>

          {/* Lotus Divider */}
          <div className="flex items-center justify-center gap-3 w-32 mx-auto my-1.5 sm:my-2 opacity-80">
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
              <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
            </svg>
            <div className="h-[1px] flex-1 bg-[#b38e5d]" />
          </div>

          <p className="text-[#3e1f14] text-xs sm:text-sm md:text-base font-serif italic max-w-xl mx-auto leading-relaxed">
            &ldquo;Laughter, blessings, and cherished bonds that span across generations.&rdquo;
          </p>
        </div>

        {/* --- COMPACT POLAROID PHOTO ALBUM GRID (2 COLS ON MOBILE, 3 COLS ON DESKTOP) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 xs:gap-5 sm:gap-7 lg:gap-8 pt-2 max-w-6xl mx-auto">
          {filteredPolaroids.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative bg-[#fdfbf7] p-1.5 sm:p-2.5 rounded-xs shadow-md hover:shadow-xl shadow-stone-900/10 border border-stone-200/90 transition-all duration-300 transform sm:${item.rotation} hover:rotate-0 hover:scale-104 hover:z-20 cursor-pointer flex flex-col justify-start`}
            >
              {/* Washi Tape Accent at Top Center */}
              <div
                className={`absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-3.5 sm:h-4.5 ${item.tapeColor} backdrop-blur-xs border border-white/50 shadow-xs transform -rotate-1 pointer-events-none z-10`}
              />

              {/* Polaroid Photo Image Box */}
              <div className={`relative w-full ${item.aspect} rounded-[2px] overflow-hidden bg-stone-900 border border-stone-300/30 shadow-inner`}>
                <Image
                  src={resolveImageUrl(item.imageUrl)}
                  alt="Polaroid Memory"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM POLAROID MEMORY QUOTE & VIEW MORE BUTTON --- */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-[#c5a059]/25 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/70 border border-[#b38e5d]/30 text-[11px] sm:text-xs font-serif italic text-stone-700 shadow-xs">
            <Sparkles size={13} className="text-[#b38e5d] shrink-0" />
            <span>&ldquo;Memories captured in warmth, preserved in tradition.&rdquo;</span>
          </div>

          <a
            href="/gallery?category=together"
            className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full text-xs font-mono tracking-[0.22em] uppercase bg-[#0c2738] hover:bg-[#12364e] text-[#fdfbf7] border border-[#c5a059]/50 shadow-sm hover:shadow-md transition-all duration-300 font-medium group cursor-pointer shrink-0"
          >
            <span>VIEW MORE</span>
            <span className="text-[#d4af37] text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* --- FULLSCREEN LIGHTBOX MODAL --- */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-stone-300 hover:text-white p-2.5 sm:p-3 rounded-full bg-stone-900/85 hover:bg-stone-800 border border-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close Fullscreen View"
          >
            <X size={20} className="sm:w-5 sm:h-5" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-stone-200 hover:text-white p-2.5 sm:p-3.5 rounded-full bg-stone-900/85 hover:bg-stone-800 border border-white/20 transition-all z-50 hover:scale-110 cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft size={22} className="sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-stone-200 hover:text-white p-2.5 sm:p-3.5 rounded-full bg-stone-900/85 hover:bg-stone-800 border border-white/20 transition-all z-50 hover:scale-110 cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight size={22} className="sm:w-6 sm:h-6" />
          </button>

          {/* Photo Counter Badge */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-50 px-3.5 py-1 rounded-full bg-stone-900/85 backdrop-blur-sm border border-white/20 text-white font-mono text-[11px] sm:text-xs tracking-widest">
            {selectedPhotoIndex + 1} / {filteredPolaroids.length}
          </div>

          {/* Pure Floating Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[78vh] sm:h-[88vh] max-w-6xl flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto">
              <Image
                src={resolveImageUrl(
                  filteredPolaroids[selectedPhotoIndex].imageUrl
                )}
                alt="Polaroid Fullscreen"
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
