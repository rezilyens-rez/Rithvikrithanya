import React from "react";

export const FilmsSection: React.FC = () => {
  return (
    <section id="films" className="scroll-mt-24 py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-stone-200/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
          Video Teasers &amp; Highlights
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-wide mt-2 mb-4">
          The Films
        </h2>
        <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mb-4 opacity-75" />
        <p className="text-stone-600 text-sm sm:text-base font-light">
          Ceremony trailers, ritual recordings, and cinematic teasers.
        </p>
      </div>

      {/* Video Placeholder Container */}
      <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-3xl bg-stone-900 border border-stone-800 flex flex-col items-center justify-center text-center p-8 overflow-hidden shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#b38e5d] text-stone-950 flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
          <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-serif text-stone-100">Ceremony Invitation Film</h3>
        <p className="text-xs text-stone-400 mt-1">
          [ Placeholder for embedded video player / YouTube / Vimeo teaser ]
        </p>
      </div>
    </section>
  );
};
