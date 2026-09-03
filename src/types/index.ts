// Place your shared TypeScript types and interfaces here
export interface MediaItem {
  id: string;
  title: string;
  src: string;
  type: 'image' | 'video';
  category?: string;
  description?: string;
}
