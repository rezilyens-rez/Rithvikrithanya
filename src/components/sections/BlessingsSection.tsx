'use client';

import React, { useState } from 'react';
import { Send, Heart, Sparkles } from 'lucide-react';
import { BlessingMessage } from '@/types';

const initialBlessings: BlessingMessage[] = [
  {
    id: 'b-1',
    senderName: 'Grandparents (Sharma)',
    relation: 'Paternal Grandparents',
    message: 'May Lord Surya and Gayatri Devi shower eternal wisdom, good health, and glorious achievements upon our dear Aditya on this sacred initiation.',
    createdAt: 'Yesterday',
  },
  {
    id: 'b-2',
    senderName: 'Venkatesh & Suma Raghavan',
    relation: 'Maternal Uncle & Aunt',
    message: 'Hearty congratulations and best wishes to Chi. Aditya on his Brahmopadesham! May you walk the path of Dharma with grace.',
    createdAt: '2 days ago',
  },
];

export const BlessingsSection = () => {
  const [blessings, setBlessings] = useState<BlessingMessage[]>(initialBlessings);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newBlessing: BlessingMessage = {
      id: `b-${Date.now()}`,
      senderName: name,
      relation: relation || 'Well-wisher & Friend',
      message,
      createdAt: 'Just now',
    };

    setBlessings([newBlessing, ...blessings]);
    setName('');
    setRelation('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="blessings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-500">Asheervadam &amp; Wishes</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 mt-2 mb-4">
          Digital Blessings &amp; Guestbook
        </h2>
        <div className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-stone-400 text-sm max-w-lg mx-auto">
          Leave your loving wishes and sacred blessings for the young Brahmachari.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Card */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-stone-900/80 border border-amber-900/40 backdrop-blur-sm shadow-xl">
          <h3 className="text-xl font-serif font-bold text-amber-200 mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-amber-400" /> Bestow Your Blessings
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh &amp; Meena Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Relationship / City (Optional)</label>
              <input
                type="text"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                placeholder="e.g. Family Friend, Mysore"
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Blessing &amp; Message *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers, Vedic shlokas, or blessings for the young boy..."
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
              ></textarea>
            </div>

            {submitted && (
              <div className="p-3 rounded-xl bg-green-950/50 border border-green-700/50 text-green-300 text-xs text-center">
                ✨ Thank you! Your auspicious blessing has been shared.
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={15} /> Send Blessing
            </button>
          </form>
        </div>

        {/* Blessings List */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-serif font-bold text-stone-200 mb-4">
            Recent Blessings ({blessings.length})
          </h3>

          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-stone-900/60 border border-amber-900/20 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif font-bold text-amber-200 text-base">{b.senderName}</h4>
                    {b.relation && <p className="text-xs text-stone-400">{b.relation}</p>}
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono">{b.createdAt}</span>
                </div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mt-2 italic">
                  &quot;{b.message}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
