import { MediaItem, MediaCategory } from '@/types';

/**
 * Initial curated gallery collection with photos and videos.
 * Easily replace these with actual local uploads in /public/images/ or /public/videos/
 */
export const ceremonyMedia: MediaItem[] = [
  {
    id: 'media-1',
    title: 'Brahmopadesha & Sacred Thread (Yajnopavita)',
    description: 'The auspicious moment of receiving the sacred Gayatri Mantra from the father and Guru.',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1545232979-fbf675549021?auto=format&fit=crop&w=1200&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1545232979-fbf675549021?auto=format&fit=crop&w=600&q=80',
    category: 'ceremony',
    aspectRatio: 'landscape',
    featured: true,
    tags: ['Brahmopadesha', 'Gayatri Mantra', 'Yajnopavita'],
  },
  {
    id: 'media-2',
    title: 'Sacred Homa & Agni Invocation',
    description: 'Offerings to the sacred fire invoking Agni Devata, Surya, and ancestral rishis.',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1609137144822-4a5584dc7499?auto=format&fit=crop&w=1200&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1609137144822-4a5584dc7499?auto=format&fit=crop&w=600&q=80',
    category: 'rituals',
    aspectRatio: 'portrait',
    featured: true,
    tags: ['Havan', 'Agni Pooja', 'Samskara'],
  },
  {
    id: 'media-3',
    title: 'Traditional Mandap & Floral Decor',
    description: 'Traditional South Indian floral arrangement with marigolds, lotus, and brass lamps.',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    category: 'decorations',
    aspectRatio: 'landscape',
    featured: false,
    tags: ['Mandap', 'Floral Decor', 'Ambience'],
  },
  {
    id: 'media-4',
    title: 'Bhikshatana Ritual Highlights',
    description: 'The young Brahmachari performing the Bhikshatana ritual asking for alms from mother and elders.',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    category: 'highlights',
    aspectRatio: 'landscape',
    featured: true,
    duration: '01:45',
    tags: ['Bhikshatana', 'Traditions', 'Video'],
  },
  {
    id: 'media-5',
    title: 'Family Blessings & Akshata',
    description: 'Grandparents, uncles, aunts, and family elders showering yellow rice (Akshata) with Vedic blessings.',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    category: 'family',
    aspectRatio: 'portrait',
    featured: true,
    tags: ['Family', 'Asheervadam', 'Akshata'],
  },
  {
    id: 'media-6',
    title: 'Kumkuma, Kalasha & Pooja Setup',
    description: 'Consecrated Kalashas, holy water, sandalwood paste, and puja essentials.',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    thumbnailSrc: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    category: 'decorations',
    aspectRatio: 'square',
    featured: false,
    tags: ['Pooja', 'Kalasha', 'Traditions'],
  },
];

/**
 * Filter media by category
 */
export function filterMediaByCategory(items: MediaItem[], category: MediaCategory): MediaItem[] {
  if (category === 'all') return items;
  return items.filter((item) => item.category === category);
}

/**
 * Filter only video media items
 */
export function getVideoMedia(items: MediaItem[]): MediaItem[] {
  return items.filter((item) => item.type === 'video');
}

/**
 * Filter only photo media items
 */
export function getPhotoMedia(items: MediaItem[]): MediaItem[] {
  return items.filter((item) => item.type === 'image');
}
