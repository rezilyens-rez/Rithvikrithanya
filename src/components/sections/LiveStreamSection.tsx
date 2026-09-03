import React from 'react';
import { Video, Radio, Share2, MessageCircle } from 'lucide-react';
import { ceremonyDetails } from '@/config/site';

export const LiveStreamSection = () => {
  return (
    <section id="livestream" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950 border border-amber-900/40 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>Virtual Live Telecast</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mb-4">
              Join the Sacred Ceremony Live
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              For beloved relatives, friends, and well-wishers joining us virtually across the globe, we are broadcasting the complete Upanayana rituals and Brahmopadesham live with high-definition audio &amp; video.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ceremonyDetails.liveStreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm shadow-lg shadow-red-900/40 transition-all cursor-pointer"
              >
                <Radio size={16} /> Watch YouTube Live Stream
              </a>
              <a
                href="#blessings"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium border border-stone-700 transition-all cursor-pointer"
              >
                <MessageCircle size={16} className="text-amber-400" /> Send Digital Blessing
              </a>
            </div>
          </div>

          {/* Video Preview Frame */}
          <div className="w-full lg:w-96 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-xl relative aspect-video flex flex-col items-center justify-center text-center p-6">
            <div className="w-14 h-14 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-3">
              <Video size={28} />
            </div>
            <p className="text-sm font-semibold text-stone-200">Live Feed Starts at 06:30 AM IST</p>
            <p className="text-xs text-stone-400 mt-1">15th November 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
