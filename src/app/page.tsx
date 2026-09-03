import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CeremonyDetails } from '@/components/sections/CeremonyDetails';
import { EventSchedule } from '@/components/sections/EventSchedule';
import { MediaGallery } from '@/components/media/MediaGallery';
import { LiveStreamSection } from '@/components/sections/LiveStreamSection';
import { VenueSection } from '@/components/sections/VenueSection';
import { BlessingsSection } from '@/components/sections/BlessingsSection';
import { VideoPlayer } from '@/components/media/VideoPlayer';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Vedic Significance & Details */}
      <CeremonyDetails />

      {/* 3. Auspicious Schedule & Muhurtham Timeline */}
      <EventSchedule />

      {/* 4. Featured Video Teaser / Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Ceremony Teaser</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 mt-1">
            Ceremony Invitation &amp; Highlight Reel
          </h2>
        </div>
        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          poster="https://images.unsplash.com/photo-1545232979-fbf675549021?auto=format&fit=crop&w=1200&q=80"
          title="Sacred Upanayana Teaser & Invitations"
        />
      </section>

      {/* 5. Comprehensive Photo & Video Media Gallery */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Sacred Moments</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-2 mb-4">
            Photo &amp; Video Memories
          </h2>
          <div className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            Browse through photographs and video recordings from the sacred thread ceremony, homas, and family blessings.
          </p>
        </div>

        <MediaGallery />
      </section>

      {/* 6. Live Stream Broadcast */}
      <LiveStreamSection />

      {/* 7. Venue & Directions */}
      <VenueSection />

      {/* 8. Digital Blessings & Guestbook */}
      <BlessingsSection />
    </div>
  );
}
