'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { MediaItem } from '@/types';

interface LightboxModalProps {
  item: MediaItem | null;
  items: MediaItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: MediaItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Close Button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous item"
            className="absolute left-4 z-50 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-amber-600 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next item"
            className="absolute right-4 z-50 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-amber-600 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Media Content Box */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-stone-950 border border-amber-900/30">
          {item.type === 'video' ? (
            <video
              src={item.src}
              controls
              autoPlay
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />
          ) : (
            <div className="relative w-full h-[70vh]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 text-center text-stone-200">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              {item.category}
            </span>
            {item.duration && (
              <span className="flex items-center gap-1 text-xs text-stone-400">
                <Play size={12} className="fill-stone-400" /> {item.duration}
              </span>
            )}
          </div>
          <h3 className="text-xl font-serif font-bold text-amber-100">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-stone-400 mt-1 max-w-2xl mx-auto">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
