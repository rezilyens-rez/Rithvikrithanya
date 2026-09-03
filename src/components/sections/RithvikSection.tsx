import React from "react";

export const RithvikSection: React.FC = () => {
  return (
    <section id="rithvik" className="scroll-mt-24 py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-stone-200/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
          Brahmopadesham
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-wide mt-2 mb-4">
          Rithvik
        </h2>
        <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mb-4 opacity-75" />
        <p className="text-stone-600 text-sm sm:text-base font-light">
          The sacred initiation and spiritual journey of Brahmachari Rithvik.
        </p>
      </div>

      {/* Placeholder Media / Content Box */}
      <div className="min-h-[300px] rounded-3xl bg-white/70 border border-stone-200/70 p-10 flex flex-col items-center justify-center text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/30 flex items-center justify-center text-[#b38e5d] mb-4 font-serif text-xl">
          ॐ
        </div>
        <h3 className="text-lg font-serif text-stone-800 mb-2">Rithvik Section Content</h3>
        <p className="text-xs text-stone-500 max-w-md">
          [ Placeholder for Brahmopadesha rituals, sacred thread details, portrait gallery, and Vedic mantras ]
        </p>
      </div>
    </section>
  );
};
