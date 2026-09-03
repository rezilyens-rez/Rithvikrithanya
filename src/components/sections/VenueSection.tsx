import React from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { ceremonyDetails } from '@/config/site';

export const VenueSection = () => {
  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Directions &amp; Location</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-2 mb-4">
          Ceremony Venue &amp; Reach Us
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Venue Information Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-stone-900/80 border border-amber-900/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-100">
                {ceremonyDetails.venueName}
              </h3>
              <p className="text-xs text-stone-400">Main Marriage &amp; Samskara Hall</p>
            </div>
          </div>

          <p className="text-stone-300 text-sm leading-relaxed mb-6">
            {ceremonyDetails.venueAddress}
          </p>

          <div className="space-y-3 pt-6 border-t border-stone-800 text-sm text-stone-400">
            {ceremonyDetails.contactNumber && (
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500" />
                <span>{ceremonyDetails.contactNumber}</span>
              </div>
            )}
            {ceremonyDetails.contactEmail && (
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500" />
                <span>{ceremonyDetails.contactEmail}</span>
              </div>
            )}
          </div>

          <div className="mt-8">
            <a
              href={ceremonyDetails.venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all"
            >
              <Navigation size={16} /> Open in Google Maps
            </a>
          </div>
        </div>

        {/* Embedded Map Visual / Placeholder */}
        <div className="h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border border-stone-800 relative bg-stone-950">
          <iframe
            title="Venue Location Map"
            src="https://maps.google.com/maps?q=Malleshwaram,%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
