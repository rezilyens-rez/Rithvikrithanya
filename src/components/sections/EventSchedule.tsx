import React from 'react';
import { Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { ceremonySchedule } from '@/config/site';

export const EventSchedule = () => {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Auspicious Timings</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-2 mb-4">
          Ritual Sequence &amp; Schedule
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-stone-400 text-sm max-w-xl mx-auto">
          Please join us according to the sacred Muhurtham schedule for each auspicious Vedic ritual.
        </p>
      </div>

      <div className="relative border-l-2 border-amber-900/60 ml-4 md:ml-32 space-y-10">
        {ceremonySchedule.map((event, index) => {
          const isMuhurtham = event.sanskritName?.includes('मुहूर्तम्');
          return (
            <div key={event.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  isMuhurtham
                    ? 'bg-amber-500 border-amber-300 shadow-lg shadow-amber-500/50'
                    : 'bg-stone-900 border-amber-600'
                }`}
              />

              {/* Event Card */}
              <div
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                  isMuhurtham
                    ? 'bg-gradient-to-r from-amber-950/40 via-stone-900/90 to-stone-900 border-amber-500/50 shadow-xl shadow-amber-900/20'
                    : 'bg-stone-900/70 border-stone-800/80 hover:border-amber-900/60'
                }`}
              >
                {/* Time Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Clock size={13} /> {event.time}
                  </span>
                  {isMuhurtham && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-stone-950 shadow-md">
                      ★ Primary Muhurtham
                    </span>
                  )}
                </div>

                {/* Sanskrit & English Title */}
                {event.sanskritName && (
                  <p className="text-xs font-serif text-amber-400/90 tracking-wide mb-1">
                    {event.sanskritName}
                  </p>
                )}
                <h3 className="text-xl font-serif font-bold text-stone-100 mb-2">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Key Ritual Sub-items */}
                {event.keyRituals && event.keyRituals.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-800">
                    {event.keyRituals.map((ritual, rIdx) => (
                      <span
                        key={rIdx}
                        className="inline-flex items-center gap-1 text-[11px] text-stone-400 bg-stone-950/60 px-2.5 py-1 rounded-lg border border-stone-800"
                      >
                        <CheckCircle2 size={11} className="text-amber-500" />
                        {ritual}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
