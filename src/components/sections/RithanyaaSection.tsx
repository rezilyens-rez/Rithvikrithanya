"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import siteImages, { resolveImageUrl } from "@/config/images";

export const RithanyaaSection: React.FC = () => {
  const stagePhotoUrl = resolveImageUrl(siteImages.rithanyaa.stagePhoto);
  const moments = siteImages.rithanyaa.moments;
  const infiniteMoments = [...moments, ...moments];
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

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
      id="rithanyaa"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[700px] lg:max-h-[1080px] flex flex-col justify-between bg-[#faf7f2] text-stone-900 scroll-mt-0 overflow-hidden"
    >
      {/* --- 1. FULL-BLEED PANORAMIC UPPER BANNER (IMAGE ON LEFT, TEXT ON RIGHT) --- */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden flex flex-col justify-center">
        {/* Full-Bleed Left Side Stage Image */}
        <div
          onClick={() => openLightbox(0)}
          className="absolute top-0 left-0 bottom-0 w-full lg:w-[68%] xl:w-[65%] h-full z-0 cursor-pointer"
        >
          <Image
            src={stagePhotoUrl}
            alt="Kum. Rithanyaa Sangeeta Upanyasam Stage"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 68vw"
            className="object-cover object-[20%_center] lg:object-[25%_center]"
          />
          {/* Seamless Soft Horizontal Gradient Mask (Fade from image into solid cream on right) */}
          <div className="absolute inset-y-0 right-0 w-48 sm:w-72 lg:w-96 bg-gradient-to-l from-[#faf7f2] via-[#faf7f2]/85 via-[#faf7f2]/35 to-transparent z-10 pointer-events-none" />
          {/* Subtle Top & Bottom Soft Blend */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#faf7f2]/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/80 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Right Side Content & Typography (Over Solid Cream Background) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 sm:py-6 flex justify-end items-center pointer-events-none">
          <div className="max-w-xl lg:max-w-md xl:max-w-lg space-y-2.5 sm:space-y-3 pointer-events-auto text-left">
            {/* Header Badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center shrink-0">
                <Image
                  src="/images/hero/sithara.png"
                  alt="Sithara"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-mono tracking-[0.22em] text-[#9b6f38] uppercase font-semibold">
                JULY 4, 2026 &nbsp;•&nbsp; EVENING
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif text-stone-900 tracking-tight leading-[1.12] font-normal pt-0.5">
              Rithanyaa’s <br />
              Sangeeta Upanyasam
            </h2>

            {/* Lotus Flourish Divider */}
            <div className="flex items-center gap-2.5 w-28 my-1 opacity-80">
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

            {/* Poetic Subtitle */}
            <p className="text-sm sm:text-base font-serif italic text-[#9b6f38] font-medium tracking-wide">
              A debut. A voice. An offering.
            </p>

            {/* Description */}
            <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed font-light">
              An evening of Carnatic music, storytelling and devotion presented by <strong className="font-semibold text-stone-900">Kum. Rithanyaa Venkat</strong> under the guidance of her guru, <strong className="font-semibold text-stone-900">Smt. Vanitha Suresh</strong>.
            </p>

            {/* View More Action Button */}
            <div className="pt-2 sm:pt-3">
              <a
                href="/gallery?category=rithanyaa"
                className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full text-xs font-mono tracking-[0.22em] uppercase bg-[#0c2738] hover:bg-[#12364e] text-[#fdfbf7] border border-[#c5a059]/50 shadow-sm hover:shadow-md transition-all duration-300 font-medium group cursor-pointer"
              >
                <span>VIEW MORE</span>
                <span className="text-[#d4af37] text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. ORNATE LOTUS SEPARATOR LINE --- */}
      <div className="relative z-10 shrink-0 w-full flex items-center justify-center py-1.5 px-6">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38e5d]/40 to-[#b38e5d]/60" />
        <div className="px-3 text-[#b38e5d] opacity-85">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
            <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
          </svg>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38e5d]/40 to-[#b38e5d]/60" />
      </div>

      {/* --- 3. HORIZONTAL CONCERT MOMENTS PHOTO CARDS --- */}
      <div className="relative z-10 shrink-0 w-full py-2.5 sm:py-3.5 px-4 sm:px-8 overflow-hidden">
        <div className="animate-marquee flex gap-4 sm:gap-5 items-center">
          {infiniteMoments.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx % moments.length)}
              className="group relative w-56 sm:w-64 md:w-72 lg:w-80 h-36 sm:h-40 md:h-44 lg:h-48 rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-lg shrink-0 transition-transform duration-300 hover:scale-103 cursor-pointer bg-stone-900"
            >
              {/* Photo Background (Clean without text) */}
              <Image
                src={resolveImageUrl(item.imageUrl || stagePhotoUrl)}
                alt={item.title || "Concert Moment"}
                fill
                sizes="(max-width: 768px) 260px, (max-width: 1200px) 320px, 360px"
                className={`object-cover ${item.offset || "object-center"} transform transition-transform duration-500 group-hover:scale-106`}
              />
              {/* Subtle Inset Gold Hairline Frame */}
              <div className="absolute inset-1.5 rounded-xl border border-white/20 pointer-events-none group-hover:border-[#d4af37]/60 transition-colors" />
            </div>
          ))}
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

          {/* Pure Floating Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[88vh] max-w-6xl flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto">
              <Image
                src={resolveImageUrl(moments[selectedPhotoIndex].imageUrl || stagePhotoUrl)}
                alt={moments[selectedPhotoIndex].title || "Concert Moment"}
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
