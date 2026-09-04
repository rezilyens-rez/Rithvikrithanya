"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MandalaLogo } from "@/components/icons/MandalaLogo";
import { navigationConfig, NavItem } from "@/config/navigation";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");
  const [isPastHero, setIsPastHero] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // If not on homepage, don't run homepage scroll calculations
    if (pathname !== "/") return;
    const handleScroll = () => {
      // Detect if scrolled past the hero section
      const heroThreshold = window.innerHeight * 0.75;
      setIsPastHero(window.scrollY > heroThreshold);

      // ScrollSpy: Find the active section in view
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < heroThreshold) {
        setActiveItem("");
        return;
      }

      for (let i = navigationConfig.navItems.length - 1; i >= 0; i--) {
        const item = navigationConfig.navItems[i];
        const elementId = item.href.replace("#", "");
        const element = document.getElementById(elementId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveItem(item.label);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    e.preventDefault();
    setActiveItem(label);

    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveItem("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide global Header when on /gallery route
  if (pathname === "/gallery" || pathname?.startsWith("/gallery")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
        isPastHero
          ? "bg-[#faf7f2]/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-[#c5a059]/30 shadow-md py-3.5 sm:py-4"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side: Logo & Date / Location */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
        >
          <MandalaLogo
            size={34}
            color={isPastHero ? "#b38e5d" : "#f6d788"}
            className="shrink-0 transition-transform duration-500 group-hover:rotate-45 drop-shadow-sm"
          />
          <div
            className={`flex items-center gap-2.5 text-[11px] sm:text-[12.5px] tracking-[0.22em] font-medium uppercase select-none transition-colors duration-300 ${
              isPastHero
                ? "text-stone-800 dark:text-stone-200"
                : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            }`}
          >
            <span className="whitespace-nowrap">{navigationConfig.ceremonyDate}</span>
            <span
              className={`font-bold text-xs mx-0.5 ${
                isPastHero ? "text-[#b38e5d]" : "text-[#f6d788]"
              }`}
            >
              •
            </span>
            <span className="whitespace-nowrap">{navigationConfig.location}</span>
          </div>
        </a>

        {/* Right Side: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navigationConfig.navItems.map((item: NavItem) => {
            const isActive = activeItem === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`group relative py-1 text-[11.5px] lg:text-[12.5px] tracking-[0.2em] font-medium uppercase transition-colors duration-300 cursor-pointer ${
                  isPastHero
                    ? isActive
                      ? "text-stone-950 dark:text-stone-100 font-semibold"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100"
                    : isActive
                    ? "text-[#f6d788] font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    : "text-white/90 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                }`}
              >
                <span>{item.label}</span>

                {/* Animated Gold Underline on Hover and Active State */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                    isPastHero ? "bg-[#b38e5d]" : "bg-[#f6d788]"
                  } ${
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
            className={`p-2 transition-colors cursor-pointer ${
              isPastHero
                ? "text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white"
                : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-[#f6d788]"
            }`}
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
                  onClick={(e) => {
                    handleNavClick(e, item.href, item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between text-xs tracking-[0.2em] font-medium uppercase py-2 border-b border-stone-200/40 dark:border-stone-800/40 transition-colors cursor-pointer ${
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
