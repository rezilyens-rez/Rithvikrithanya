"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Film,
  Music2,
  Flame,
  Sparkles,
} from "lucide-react";
import { siteImages, resolveImageUrl, resolveVideoEmbedUrl } from "@/config/images";

export const FilmsSection: React.FC = () => {
  const videos = siteImages.films?.videos || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentVideo = videos[currentIndex] || {
    id: 1,
    title: "03 - July - 2026 Upanayanam | Parayanam | Rithvik | 4k 60FPS",
    subtitle: "Chi. Rithvik • 4K 60FPS Vedic Chanting",
    duration: "4K Video",
    tag: "Parayanam",
    posterImage: "https://img.youtube.com/vi/x9yduwpW3ho/maxresdefault.jpg",
    videoEmbedUrl: "https://youtu.be/x9yduwpW3ho",
  };

  const videoEmbedUrl = resolveVideoEmbedUrl(currentVideo.videoEmbedUrl || "");
  const posterUrl = resolveImageUrl(currentVideo.posterImage || "");

  const handleSelectVideo = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const getVideoIcon = (tag: string, index: number) => {
    const lowerTag = (tag || "").toLowerCase();
    if (lowerTag.includes("parayanam")) return Flame;
    if (lowerTag.includes("udaya")) return Sparkles;
    if (lowerTag.includes("sangeetha") || lowerTag.includes("music")) return Music2;
    if (lowerTag.includes("brahmopadesam")) return Film;
    const fallbackIcons = [Flame, Sparkles, Music2, Film];
    return fallbackIcons[index % fallbackIcons.length];
  };

  return (
    <section
      id="films"
      className="scroll-mt-24 py-14 sm:py-24 px-3.5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#c5a059]/30"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        {/* Lotus / Film Reel Icon */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto mb-2 sm:mb-3 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/40 flex items-center justify-center text-[#b38e5d]">
          <Film size={16} />
        </div>

        <span className="text-[11px] sm:text-sm font-mono tracking-[0.28em] text-[#b38e5d] uppercase font-semibold">
          CEREMONY VIDEOS &amp; 4K FILMS
        </span>

        <h2 className="text-2xl xs:text-3xl sm:text-5xl font-serif text-[#4a0e17] tracking-tight mt-1 mb-2 font-normal">
          The Films
        </h2>

        {/* Lotus Divider */}
        <div className="flex items-center justify-center gap-3 w-36 mx-auto my-2 sm:my-2.5 opacity-80">
          <div className="h-[1px] flex-1 bg-[#b38e5d]" />
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b38e5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
            <path d="M6 13c0-2 1.5-4 3-5.5C8 9 7 11 7 13a5 5 0 0 0 5 5 5 5 0 0 0 5-5c0-2-1-4-2-5.5 1.5 1.5 3 3.5 3 5.5a5 5 0 0 1-10 0z" />
          </svg>
          <div className="h-[1px] flex-1 bg-[#b38e5d]" />
        </div>

        <p className="text-[#3e1f14] text-xs sm:text-sm md:text-base font-serif italic max-w-lg mx-auto leading-relaxed">
          &ldquo;Ceremony recordings, musical offerings, and sacred rituals in pristine 4K resolution.&rdquo;
        </p>
      </div>

      {/* Main Video Stage Player */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-video rounded-xl sm:rounded-3xl bg-stone-950 border border-[#c5a059]/40 overflow-hidden shadow-2xl shadow-stone-900/30 group">
          {isPlaying ? (
            <iframe
              src={`${videoEmbedUrl}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&fs=1&disablekb=0`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-10 cursor-pointer select-none"
            >
              {/* Poster Thumbnail */}
              {posterUrl && (
                <Image
                  src={posterUrl}
                  alt={currentVideo.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-cover opacity-70 group-hover:scale-103 group-hover:opacity-85 transition-all duration-700"
                />
              )}

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-6 sm:left-6 z-10">
                <span className="px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-xs border border-white/20 text-[#f6d788] text-[9px] xs:text-[10px] sm:text-xs font-mono tracking-wider uppercase font-medium">
                  {currentVideo.tag} • {currentVideo.duration}
                </span>
              </div>

              {/* Glowing Golden Play Button */}
              <div className="relative z-10 w-13 h-13 xs:w-16 xs:h-16 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-[#f6d788] via-[#d4af37] to-[#9b6f38] text-stone-950 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(212,175,55,0.6)]">
                <Play className="w-5 h-5 xs:w-7 xs:h-7 sm:w-10 sm:h-10 fill-stone-950 ml-0.5 sm:ml-1 text-stone-950" />
              </div>

              {/* Bottom Title & Subtitle Banner */}
              <div className="absolute inset-x-0 bottom-0 p-3 xs:p-4 sm:p-7 bg-gradient-to-t from-black/98 via-black/85 to-transparent flex flex-col items-center text-center">
                <h3 className="text-sm xs:text-lg sm:text-2xl md:text-3xl font-serif text-[#fdfbf7] tracking-wide font-normal max-w-2xl drop-shadow-md line-clamp-2">
                  {currentVideo.title}
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-stone-300 font-serif italic mt-0.5 sm:mt-1 max-w-lg line-clamp-1">
                  {currentVideo.subtitle}
                </p>

                {(currentVideo as { disclaimer?: string }).disclaimer && (
                  <div className="mt-2 sm:mt-2.5 max-w-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-black/60 border border-[#d4af37]/35 backdrop-blur-xs text-left">
                    <p className="text-[10px] xs:text-[10.5px] sm:text-[11.5px] leading-relaxed text-[#f4e6c8]/95 font-serif">
                      <span className="font-semibold text-[#f6d788] not-italic font-mono uppercase tracking-wider text-[9px] sm:text-[10px] mr-1.5 inline-block">
                        Disclaimer:
                      </span>
                      {(currentVideo as { disclaimer?: string }).disclaimer}
                    </p>
                  </div>
                )}

                <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-[#f6d788] font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] mt-1.5 sm:mt-2.5 font-medium">
                  CLICK TO PLAY FILM ▶
                </span>
              </div>
            </div>
          )}

          {/* Previous Video Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/90 border border-[#d4af37]/50 hover:border-[#f6d788] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Previous Video"
          >
            <ChevronLeft size={18} className="sm:w-6 sm:h-6" />
          </button>

          {/* Next Video Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black/90 border border-[#d4af37]/50 hover:border-[#f6d788] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Next Video"
          >
            <ChevronRight size={18} className="sm:w-6 sm:h-6" />
          </button>

          {/* Video Index Indicator Badge */}
          <div className="absolute top-2.5 right-2.5 sm:top-6 sm:right-6 z-30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white font-mono text-[10px] sm:text-xs tracking-widest">
            0{currentIndex + 1} / 0{videos.length}
          </div>
        </div>

        {/* Active Video Disclaimer Callout Note */}
        {(currentVideo as { disclaimer?: string }).disclaimer && (
          <div className="mt-3 sm:mt-4 p-3 sm:p-4.5 rounded-xl sm:rounded-2xl bg-[#4a0e17]/5 border border-[#c5a059]/30 backdrop-blur-xs text-[#3e1f14] shadow-xs max-w-4xl mx-auto">
            <div className="flex items-start gap-2 sm:gap-2.5">
              <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-md bg-[#b38e5d]/15 text-[#8c2a3e] font-mono text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider">
                Disclaimer
              </span>
              <p className="text-[11px] sm:text-[13px] font-serif italic text-[#4a0e17]/90 leading-relaxed">
                {(currentVideo as { disclaimer?: string }).disclaimer}
              </p>
            </div>
          </div>
        )}

        {/* Clean 4-Card Playlist Selector Below */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {videos.map((vid, idx) => {
            const IconComponent = getVideoIcon(vid.tag, idx);
            const isSelected = idx === currentIndex;

            return (
              <button
                key={vid.id}
                onClick={() => handleSelectVideo(idx)}
                className={`relative flex flex-col items-start text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isSelected
                    ? "bg-[#0e2947] text-white border-[#d4af37] shadow-lg shadow-sky-950/25 scale-[1.01]"
                    : "bg-white/85 hover:bg-white text-[#3e1f14] border-stone-200/90 hover:border-[#d4af37]/60 shadow-xs hover:shadow-md"
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#f6d788] to-[#d4af37]" />
                )}

                {/* Top Row: Icon + 4K Tag */}
                <div className="flex items-center justify-between w-full mb-1.5 sm:mb-2">
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#d4af37] text-stone-950"
                        : "bg-[#b38e5d]/10 text-[#b38e5d]"
                    }`}
                  >
                    <IconComponent size={14} />
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/15 text-[#f6d788]"
                        : "bg-stone-100 text-[#5c3a2a]"
                    }`}
                  >
                    {vid.duration}
                  </span>
                </div>

                {/* Video Title */}
                <h4
                  className={`font-serif text-xs sm:text-[13px] font-medium leading-snug line-clamp-2 ${
                    isSelected ? "text-white" : "text-[#4a0e17]"
                  }`}
                >
                  {vid.title}
                </h4>

                {/* Video Subtitle */}
                <span
                  className={`text-[9.5px] sm:text-[10px] font-serif italic mt-0.5 sm:mt-1 block line-clamp-1 ${
                    isSelected ? "text-stone-300" : "text-[#7a5542]"
                  }`}
                >
                  {vid.subtitle}
                </span>

                {(vid as { disclaimer?: string }).disclaimer && (
                  <span
                    className={`text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider mt-1.5 px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-[#d4af37]/20 text-[#f6d788]"
                        : "bg-amber-100/80 text-amber-900"
                    }`}
                  >
                    Audio Note
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
