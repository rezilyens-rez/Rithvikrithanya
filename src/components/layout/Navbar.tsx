'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Video, Calendar, Image as ImageIcon, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/85 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-600/30">
            ॐ
          </div>
          <div className="flex flex-col">
            <span className="text-base font-serif font-bold tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
              Upanayana Samskara
            </span>
            <span className="text-[10px] tracking-widest uppercase text-stone-400">
              Brahmopadesham
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-900/60 p-1.5 rounded-full border border-amber-900/40 backdrop-blur-sm">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-stone-300 hover:text-amber-300 hover:bg-amber-600/20 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#livestream"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-red-950 text-red-300 border border-red-800/40 hover:bg-red-900/60 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Watch Live
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl bg-stone-900 text-stone-300 border border-amber-900/40"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950/95 border-b border-amber-900/40 px-6 py-5 backdrop-blur-lg">
          <div className="flex flex-col gap-3">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 text-sm font-medium py-2 border-b border-stone-800/60"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#livestream"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-full text-xs font-semibold bg-red-900/40 text-red-300 border border-red-700/50"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Broadcast
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
