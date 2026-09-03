import { CeremonyDetails, CeremonyEvent } from '@/types';

export const siteConfig = {
  title: 'Sacred Upanayana Ceremony | Brahmopadesha',
  description: 'Join us in celebrating the sacred thread ceremony (Upanayana & Brahmopadesha) of Master Aditya Sharma.',
  url: 'https://upanayana-ceremony.vercel.app',
  ogImage: '/images/hero/og-banner.jpg',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Ceremony', href: '#ceremony' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Gallery & Videos', href: '#gallery' },
    { label: 'Live Stream', href: '#livestream' },
    { label: 'Venue', href: '#venue' },
    { label: 'Blessings', href: '#blessings' },
  ],
};

export const ceremonyDetails: CeremonyDetails = {
  vatuName: 'Chi. Master Aditya Sharma',
  familyName: 'Sharma & Bharadwaja Parivaram',
  gotra: 'Kashyapa Gotram, Rigveda Smartha Sampradaya',
  date: 'Sunday, November 15, 2026',
  muhurthamTime: '08:45 AM - 09:30 AM (Vrishabha Lagna)',
  venueName: 'Sri Shankara Krupa Kalyana Mandapam',
  venueAddress: '12th Cross, Temple Road, Malleshwaram, Bengaluru, Karnataka 560003',
  venueMapUrl: 'https://maps.google.com/?q=Malleshwaram+Bengaluru',
  liveStreamUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Or YouTube Live stream link
  contactNumber: '+91 98765 43210',
  contactEmail: 'blessings@sharmafamily.org',
};

export const ceremonySchedule: CeremonyEvent[] = [
  {
    id: 'event-1',
    title: 'Ganapati Pooja & Punyahavachanam',
    sanskritName: 'श्री गणपति पूजा एवं पुण्याहवाचनम्',
    date: '15 Nov 2026',
    time: '06:30 AM - 07:30 AM',
    description: 'Invocation of Lord Ganesha for barrier-free conduct and purification of the sacred ritual space with holy waters.',
    keyRituals: ['Maha Ganapati Dhyanam', 'Sankalpa', 'Kalasha Pooja'],
  },
  {
    id: 'event-2',
    title: 'Chowla Karma & Nandi Samaradhana',
    sanskritName: 'चौल कर्म एवं नान्दी समाराधना',
    date: '15 Nov 2026',
    time: '07:30 AM - 08:30 AM',
    description: 'Ceremonial tonsure ritual, sacred bath, and invoking ancestral blessings (Pitru Nandi).',
    keyRituals: ['Abhyangana Snana', 'Nandi Shradha', 'Mouna Vrata'],
  },
  {
    id: 'event-3',
    title: 'Yajnopavita Dharanam & Brahmopadesham',
    sanskritName: 'यज्ञोपवीत धारणम् एवं ब्रह्मोपदेशम् (मुहूर्तम्)',
    date: '15 Nov 2026',
    time: '08:45 AM - 09:30 AM',
    description: 'The supreme moment of bestowing the sacred thread (Janeu/Poonal) and initiation into the sacred Gayatri Mantra by the Father/Guru.',
    keyRituals: ['Yajnopavita Dharanam', 'Munjabandhana', 'Gayatri Mantra Diksha'],
  },
  {
    id: 'event-4',
    title: 'Agni Karyam & Bhikshatana',
    sanskritName: 'अग्नि कार्यम् एवं भिक्षाटनम्',
    date: '15 Nov 2026',
    time: '09:45 AM - 11:00 AM',
    description: 'The newly initiated Brahmachari performs his first sacrificial fire rituals and gathers symbolic alms with humility.',
    keyRituals: ['Samidadhanam', 'Bhavati Bhiksham Dehi', 'Asheervadam'],
  },
  {
    id: 'event-5',
    title: 'Maha Prasadam & Traditional Feast',
    sanskritName: 'महाप्रसादम् एवं भोजन समाराधना',
    date: '15 Nov 2026',
    time: '12:00 PM onwards',
    description: 'Traditional satvik feast served on plantain leaves to celebrate with all loving friends and family.',
    keyRituals: ['Bhojana Shuddhi', 'Tamboolam Samarpanam'],
  },
];
