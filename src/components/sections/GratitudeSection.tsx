import React from "react";

export const GratitudeSection: React.FC = () => {
  return (
    <section id="gratitude" className="scroll-mt-24 py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
          Asheervadam &amp; Thanks
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-wide mt-2 mb-4">
          Gratitude
        </h2>
        <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mb-4 opacity-75" />
        <p className="text-stone-600 text-sm sm:text-base font-light">
          Heartfelt thanks and gratitude to our beloved family, elders, and gurus.
        </p>
      </div>

      {/* Placeholder Guestbook / Blessings card */}
      <div className="max-w-3xl mx-auto rounded-3xl bg-white/70 border border-stone-200/70 p-10 text-center shadow-xs">
        <p className="font-serif italic text-stone-700 text-base sm:text-lg mb-4">
          &ldquo;With profound gratitude for your prayers, love, and gracious presence on this sacred milestone.&rdquo;
        </p>
        <span className="text-xs tracking-[0.2em] text-[#b38e5d] uppercase font-semibold">
          Sharma &amp; Bharadwaja Parivaram
        </span>
        <div className="mt-8 pt-6 border-t border-stone-200 text-xs text-stone-400">
          [ Placeholder for digital blessings book, guest messages, and contact details ]
        </div>
      </div>
    </section>
  );
};
