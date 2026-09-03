import React from "react";

export const WeekendSection: React.FC = () => {
  return (
    <section id="weekend" className="scroll-mt-24 py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-stone-200/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
          Schedule &amp; Timings
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-wide mt-2 mb-4">
          The Weekend
        </h2>
        <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mb-4 opacity-75" />
        <p className="text-stone-600 text-sm sm:text-base font-light">
          Ceremony schedule, Muhurtham timelines, and event sequences across July 4 – 5, 2026.
        </p>
      </div>

      {/* Placeholder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-white/70 border border-stone-200/70 shadow-xs">
          <span className="text-xs font-mono text-[#b38e5d]">DAY 1 • JULY 4, 2026</span>
          <h3 className="text-xl font-serif text-stone-800 mt-2 mb-3">Preliminary Rituals &amp; Welcome</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            [ Placeholder for Day 1 schedule, pooja details, and evening gatherings ]
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/70 border border-stone-200/70 shadow-xs">
          <span className="text-xs font-mono text-[#b38e5d]">DAY 2 • JULY 5, 2026</span>
          <h3 className="text-xl font-serif text-stone-800 mt-2 mb-3">Upanayanam &amp; Brahmopadesham</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            [ Placeholder for Main Muhurtham, sacred thread ceremony, and festive lunch ]
          </p>
        </div>
      </div>
    </section>
  );
};
