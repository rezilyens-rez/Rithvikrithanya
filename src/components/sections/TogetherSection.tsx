import React from "react";

export const TogetherSection: React.FC = () => {
  return (
    <section id="together" className="scroll-mt-24 py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-stone-200/60">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs tracking-[0.25em] text-[#b38e5d] uppercase font-semibold">
          Family &amp; Bond
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-stone-900 tracking-wide mt-2 mb-4">
          Together
        </h2>
        <div className="w-12 h-[1px] bg-[#b38e5d] mx-auto mb-4 opacity-75" />
        <p className="text-stone-600 text-sm sm:text-base font-light">
          Cherished family moments, candid memories, and shared joy.
        </p>
      </div>

      {/* Placeholder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-64 rounded-2xl bg-white/70 border border-dashed border-stone-300 flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="text-xs text-stone-400 font-mono mb-2">PHOTO / MOMENT #{item}</span>
            <p className="text-xs text-stone-500">[ Placeholder for family memories ]</p>
          </div>
        ))}
      </div>
    </section>
  );
};
