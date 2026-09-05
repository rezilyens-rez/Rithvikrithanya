"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import siteImages, { resolveImageUrl } from "@/config/images";

interface PhotoItem {
  id: string;
  title: string;
  imageUrl: string;
  spanClass: string;
  aspectClass: string;
}

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // 44 ceremony photos from Google Photos album in the editorial layout
  const photos: PhotoItem[] = useMemo(() => {
    const rawList: string[] =
      siteImages.gallery && siteImages.gallery.length > 0
        ? (siteImages.gallery as string[])
        : [];

    // Editorial layout patterns matching the reference design for mobile 2-col and desktop 3-col
    const layoutPatterns = [
      { span: "col-span-2 md:col-span-2", aspect: "aspect-[16/10]" }, // Row 1 Left (Wide)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 1 Right (Portrait)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 2 Left (Portrait)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-square" },  // Row 2 Center (Square)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 2 Right (Portrait)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/3]" },   // Row 3 Left (Landscape)
      { span: "col-span-2 md:col-span-2", aspect: "aspect-[16/9]" },  // Row 3 Right (Wide)
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 4 Left
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 4 Center
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 4 Right
      { span: "col-span-2 md:col-span-2", aspect: "aspect-[16/10]" }, // Row 5 Wide
      { span: "col-span-1 md:col-span-1", aspect: "aspect-[4/5]" },   // Row 5 Portrait
      { span: "col-span-1 md:col-span-1", aspect: "aspect-square" },  // Row 6 Square
      { span: "col-span-2 md:col-span-2", aspect: "aspect-[16/9]" },  // Row 6 Wide
    ];

    return rawList.map((url, idx) => {
      const pattern = layoutPatterns[idx % layoutPatterns.length];
      return {
        id: `photo-${idx + 1}`,
        title: `Ceremony Moment ${idx + 1}`,
        imageUrl: url,
        spanClass: pattern.span,
        aspectClass: pattern.aspect,
      };
    });
  }, []);

  const openLightbox = (index: number) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  }, [selectedPhotoIndex, photos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedPhotoIndex, photos.length]);

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
    <div className="min-h-screen bg-[#faf7f2] text-[#3e1f14] selection:bg-[#d4af37]/30 selection:text-[#4a0e17]">
      {/* --- HERO HEADER (Matches Reference Image Layout & Site Typography) --- */}
      <section className="pt-6 sm:pt-12 pb-6 sm:pb-12 px-4 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
        {/* Top Back Navigation Bar */}
        <div className="mb-5 sm:mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#c5a059]/30 pb-3 sm:pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#3e1f14] hover:text-[#4a0e17] transition-colors group font-medium"
          >
            <ArrowLeft
              size={15}
              className="text-[#b38e5d] transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Back to Ceremony</span>
          </Link>

          <span className="text-[10px] sm:text-xs font-mono tracking-[0.22em] sm:tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
            SRIRANGAM • JULY 2026
          </span>
        </div>

        {/* Pill Tag on Left */}
        <div className="mb-2.5 sm:mb-4">
          <span className="inline-block px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/30 text-[#9b6f38] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase font-semibold">
            OUR STORIES
          </span>
        </div>

        {/* Title on Left & Subtitle on Right with Site Serif Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight font-normal text-[#4a0e17] leading-[1.02]">
            Photo Gallery
          </h1>
          <p className="text-[#3e1f14] text-xs sm:text-sm md:text-base font-serif italic max-w-xs md:text-right leading-relaxed mb-1">
            Captured moments from our sacred rituals, concert debut, and family blessings.
          </p>
        </div>
      </section>

      {/* --- EDITORIAL PHOTO GRID (2 COLS ON MOBILE, 3 COLS ON DESKTOP) --- */}
      <main className="max-w-[1400px] mx-auto px-3.5 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 xs:gap-3.5 sm:gap-5 lg:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`group relative ${photo.spanClass} rounded-xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer`}
            >
              {/* Image Container */}
              <div className={`relative w-full ${photo.aspectClass} overflow-hidden`}>
                <Image
                  src={resolveImageUrl(photo.imageUrl)}
                  alt={photo.title || "Ceremony Photograph"}
                  fill
                  priority={index < 4}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 66vw, 50vw"
                  className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FULLSCREEN LIGHTBOX MODAL --- */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
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
            {selectedPhotoIndex + 1} / {photos.length}
          </div>

          {/* Pure Fullscreen Image Preview */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[78vh] sm:h-[88vh] max-w-6xl flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full pointer-events-auto flex items-center justify-center">
              <Image
                src={resolveImageUrl(photos[selectedPhotoIndex].imageUrl)}
                alt={photos[selectedPhotoIndex].title}
                fill
                priority
                sizes="95vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
