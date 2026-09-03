"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MandalaLogo } from "@/components/icons/MandalaLogo";
import { navigationConfig, NavItem } from "@/config/navigation";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("RITHANYAA");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent py-5 sm:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side: Logo & Date / Location */}
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
        >
          <MandalaLogo
            size={36}
            color="#b38e5d"
            className="shrink-0 transition-transform duration-500 group-hover:rotate-45"
          />
          <div className="flex items-center gap-2.5 text-[11px] sm:text-[12.5px] tracking-[0.22em] font-medium text-stone-800 dark:text-stone-200 uppercase select-none">
            <span className="whitespace-nowrap">{navigationConfig.ceremonyDate}</span>
            <span className="text-[#b38e5d] font-bold text-xs mx-0.5">•</span>
            <span className="whitespace-nowrap">{navigationConfig.location}</span>
          </div>
        </Link>

        {/* Right Side: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navigationConfig.navItems.map((item: NavItem) => {
            const isActive = activeItem === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`group relative py-1 text-[11.5px] lg:text-[12.5px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-stone-900 dark:text-stone-100 font-semibold"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100"
                }`}
              >
                <span>{item.label}</span>

                {/* Animated Gold Underline on Hover and Active State */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#b38e5d] transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2]/95 dark:bg-stone-950/95 backdrop-blur-lg border-b border-stone-200/50 dark:border-stone-800/50 px-6 py-6 transition-all duration-300 shadow-lg">
          <div className="flex flex-col gap-4">
            {navigationConfig.navItems.map((item: NavItem) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between text-xs tracking-[0.2em] font-medium uppercase py-2 border-b border-stone-200/40 dark:border-stone-800/40 transition-colors ${
                    isActive
                      ? "text-[#b38e5d] font-semibold"
                      : "text-stone-700 dark:text-stone-300 hover:text-[#b38e5d]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b38e5d]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
