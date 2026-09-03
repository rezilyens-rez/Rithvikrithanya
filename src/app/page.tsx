import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WeekendSection } from "@/components/sections/WeekendSection";
import { RithanyaaSection } from "@/components/sections/RithanyaaSection";
import { RithvikSection } from "@/components/sections/RithvikSection";
import { TogetherSection } from "@/components/sections/TogetherSection";
import { FilmsSection } from "@/components/sections/FilmsSection";
import { GratitudeSection } from "@/components/sections/GratitudeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-stone-900">
      {/* 3D Parallax Hero Section */}
      <HeroSection />

      {/* Placeholder Sections for Navigation */}
      <WeekendSection />
      <RithanyaaSection />
      <RithvikSection />
      <TogetherSection />
      <FilmsSection />
      <GratitudeSection />
    </main>
  );
}
