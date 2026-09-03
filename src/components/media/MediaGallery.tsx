'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Eye, Sparkles, Filter } from 'lucide-react';
import { MediaItem, MediaCategory } from '@/types';
import { ceremonyMedia, filterMediaByCategory } from '@/lib/media';
import { LightboxModal } from '@/components/ui/LightboxModal';

const categories: { label: string; value: MediaCategory }[] = [
  { label: 'All Media', value: 'all' },
  { label: 'Sacred Rituals', value: 'ceremony' },
  { label: 'Agni & Samskara', value: 'rituals' },
  { label: 'Family & Elders', value: 'family' },
  { label: 'Mandap & Decor', value: 'decorations' },
  { label: 'Video Highlights', value: 'highlights' },
];

export const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems = filterMediaByCategory(ceremonyMedia, activeCategory);

  const handleOpenLightbox = (item: MediaItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat.value
                ? 'bg-amber-500 text-stone-950 font-semibold shadow-md shadow-amber-500/20 scale-105'
                : 'bg-stone-900/70 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(item)}
            className="group relative overflow-hidden rounded-2xl bg-stone-900 border border-amber-900/20 hover:border-amber-500/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer"
          >
            {/* Aspect Ratio Container */}
            <div className="relative w-full h-64 overflow-hidden bg-stone-950">
              <Image
                src={item.thumbnailSrc || item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              {/* Type Badge */}
              <div className="absolute top-3 right-3 z-10">
                {item.type === 'video' ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500 text-stone-950 shadow-md">
                    <Play size={10} className="fill-stone-950" /> Video
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-900/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                    <Eye size={10} /> Photo
                  </span>
                )}
              </div>

              {/* Play Icon Centered For Video */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 flex items-center justify-center text-stone-950 group-hover:scale-125 transition-transform duration-300 shadow-xl shadow-amber-500/40">
                    <Play size={20} className="fill-stone-950 ml-0.5" />
                  </div>
                </div>
              )}

              {/* Hover Details at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400">
                  {item.category}
                </span>
                <h4 className="text-base font-serif font-bold text-stone-100 group-hover:text-amber-200 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={selectedItem}
        items={filteredItems}
        onClose={() => setIsLightboxOpen(false)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </div>
  );
};
