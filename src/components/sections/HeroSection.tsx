import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { ceremonyDetails } from '@/config/site';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Graphic & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545232979-fbf675549021?auto=format&fit=crop&w=2000&q=80"
          alt="Sacred Upanayana Ambience"
          fill
          priority
          className="object-cover object-center opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/90 to-stone-950"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Sacred Symbol Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
          <Sparkles size={14} className="text-amber-400" />
          <span>Sacred Vedic Samskara</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-stone-100 mb-4 leading-tight">
          Upanayanam &amp; <br />
          <span className="gold-shimmer font-serif">Brahmopadesham</span>
        </h1>

        {/* Boy's name & family */}
        <div className="my-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-amber-200 font-semibold tracking-wide">
            {ceremonyDetails.vatuName}
          </p>
          <p className="text-xs sm:text-sm text-amber-400/80 font-mono tracking-wider mt-1 uppercase">
            {ceremonyDetails.gotra}
          </p>
        </div>

        <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          With the divine blessings of Almighty, elders, and gurus, we cordially invite you and your family to grace the auspicious sacred thread ceremony and bestow your heartfelt blessings on the Brahmachari.
        </p>

        {/* Date & Muhurtham Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-900/40 backdrop-blur-sm flex flex-col items-center">
            <Calendar className="w-5 h-5 text-amber-400 mb-2" />
            <span className="text-xs text-stone-400 uppercase font-medium">Date</span>
            <span className="text-sm font-semibold text-stone-100 mt-0.5">{ceremonyDetails.date}</span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 backdrop-blur-sm flex flex-col items-center">
            <Clock className="w-5 h-5 text-amber-300 mb-2 animate-pulse" />
            <span className="text-xs text-amber-300/80 uppercase font-medium">Muhurtham</span>
            <span className="text-sm font-bold text-amber-200 mt-0.5">{ceremonyDetails.muhurthamTime}</span>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/80 border border-amber-900/40 backdrop-blur-sm flex flex-col items-center">
            <MapPin className="w-5 h-5 text-amber-400 mb-2" />
            <span className="text-xs text-stone-400 uppercase font-medium">Venue</span>
            <span className="text-sm font-semibold text-stone-100 mt-0.5 truncate max-w-[200px]">{ceremonyDetails.venueName}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#schedule"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-600/30 transition-all transform hover:-translate-y-0.5"
          >
            View Rituals Schedule
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 border border-amber-500/40 text-sm font-semibold transition-all backdrop-blur-sm"
          >
            Photos &amp; Video Album
          </a>
        </div>
      </div>

      {/* Down Arrow */}
      <a
        href="#ceremony"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-500 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Scroll to ceremony section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
