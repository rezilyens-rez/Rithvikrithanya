import React from 'react';
import { BookOpen, Flame, Sun, Sparkles } from 'lucide-react';

export const CeremonyDetails = () => {
  const significances = [
    {
      icon: Sun,
      title: 'Brahmopadesha (Gayatri Diksha)',
      description: 'Initiation into the sacred Savitru Gayatri Mantra, bestowing spiritual illumination, concentration, and wisdom.',
    },
    {
      icon: Flame,
      title: 'Yajnopavita (Janeu / Poonal)',
      description: 'The triple strand sacred thread symbolizing the three debts (Rishi Rina, Pitru Rina, Deva Rina) and mastery over thought, word, and deed.',
    },
    {
      icon: BookOpen,
      title: 'Entry to Brahmacharya Ashrama',
      description: 'The formal commencement of education, ethical study of scriptures, disciplined living, and pursuit of noble ideals.',
    },
  ];

  return (
    <section id="ceremony" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Significance &amp; Heritage</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-2 mb-4">
          The Spiritual Journey of Upanayana
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
          &quot;Upanayana&quot; literally means &quot;leading closer&quot;—taking the child near to the teacher, knowledge, and inner divine truth (Dvija / Twice-born).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {significances.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-8 rounded-3xl bg-stone-900/60 border border-amber-900/30 hover:border-amber-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-amber-100 mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
