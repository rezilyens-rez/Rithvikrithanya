export type MediaType = 'image' | 'video';

export type MediaCategory =
  | 'all'
  | 'ceremony'
  | 'family'
  | 'decorations'
  | 'highlights'
  | 'rituals';

export interface MediaItem {
  id: string;
  title: string;
  description?: string;
  type: MediaType;
  src: string;
  thumbnailSrc?: string;
  category: MediaCategory;
  date?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  featured?: boolean;
  tags?: string[];
  duration?: string; // For videos, e.g. "02:45"
}

export interface CeremonyEvent {
  id: string;
  title: string;
  sanskritName?: string;
  time: string;
  date: string;
  description: string;
  location?: string;
  iconName?: string;
  keyRituals?: string[];
}

export interface FamilyMember {
  role: string;
  name: string;
  relation?: string;
  photoSrc?: string;
}

export interface CeremonyDetails {
  vatuName: string; // The young boy undergoing Upanayana
  familyName: string;
  gotra: string;
  date: string;
  muhurthamTime: string;
  venueName: string;
  venueAddress: string;
  venueMapUrl: string;
  liveStreamUrl?: string;
  contactNumber?: string;
  contactEmail?: string;
}

export interface BlessingMessage {
  id: string;
  senderName: string;
  relation?: string;
  message: string;
  createdAt: string;
}
