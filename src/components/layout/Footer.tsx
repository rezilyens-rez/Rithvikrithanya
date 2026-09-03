import React from 'react';
import { ceremonyDetails } from '@/config/site';
import { Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-amber-950 py-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-bold">
          ॐ
        </div>

        <p className="font-serif text-lg text-amber-200 mb-2">
          {ceremonyDetails.vatuName} &apos;s Upanayana Ceremony
        </p>

        <p className="text-xs text-stone-500 max-w-md mx-auto mb-6">
          &quot;ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥&quot;
          <br />
          <span className="italic mt-1 block">May the Divine Light illuminate our intellect and dispel all ignorance.</span>
        </p>

        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mb-6"></div>

        <div className="flex items-center justify-center gap-1 text-xs text-stone-500">
          <span>Organized with gratitude by the</span>
          <span className="text-amber-400/90 font-medium">{ceremonyDetails.familyName}</span>
        </div>
      </div>
    </footer>
  );
};
