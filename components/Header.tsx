"use client";

import React from "react";
import { Music2, VolumeX, Sparkles } from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { WEDDING_DATA } from "@/data/weddingData";

interface HeaderProps {
  currentTab: string;
}

export default function Header({ currentTab }: HeaderProps) {
  const { isPlaying, togglePlay } = useAudio();

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case "cover":
        return "Cover";
      case "mempelai":
        return "Mempelai";
      case "acara":
        return "Acara";
      case "cerita":
        return "Cerita";
      case "rsvp":
        return "Rsvp Doa";
      default:
        return "Cover";
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf9f5]/92 backdrop-blur-md border-b border-[#ebdcd0]/70 transition-all duration-300">
      {/* Subtle Golden Shimmer Line at Top of Header */}
      <div className="h-[1.5px] w-full shimmer-gold" />

      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Monogram and Active Tab Title */}
        <div className="flex items-center space-x-3">
          <div className="relative group cursor-pointer">
            <div className="w-9 h-9 rounded-full border border-wedding-gold/50 flex items-center justify-center bg-white shadow-xs group-hover:border-wedding-rose transition-colors">
              <span className="font-serif italic text-xs font-bold text-wedding-rose tracking-wider">
                {WEDDING_DATA.general.monogram}
              </span>
            </div>
            {/* Tiny gold dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-wedding-gold/80" />
          </div>

          <div className="flex flex-col">
            <h1
              key={currentTab}
              className="font-serif text-lg font-bold tracking-wide text-wedding-dark capitalize animate-page-enter flex items-center space-x-1.5"
            >
              <span>{getTabTitle(currentTab)}</span>
            </h1>
            <span className="text-[9px] tracking-widest uppercase font-semibold text-wedding-muted">
              {WEDDING_DATA.general.coupleShort}
            </span>
          </div>
        </div>

        {/* Right: Audio Toggle & Couple Avatar */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs border relative group ${
              isPlaying
                ? "bg-gradient-to-br from-[#7D3E3E] to-[#552727] border-wedding-gold/50 text-white shadow-md animate-nav-glow"
                : "bg-white/90 border-[#e3d8cc] text-wedding-muted hover:text-wedding-dark hover:border-wedding-gold"
            }`}
          >
            {isPlaying ? (
              <span className="relative flex items-center justify-center">
                <Music2 className="w-4 h-4 animate-spin-slow text-wedding-gold-light" />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-wedding-gold rounded-full animate-ping" />
              </span>
            ) : (
              <VolumeX className="w-4 h-4 text-wedding-muted" />
            )}
          </button>

          {/* Couple circular avatar with glowing border */}
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-wedding-gold/60 shadow-xs ring-1 ring-wedding-rose/20 hover:scale-105 transition-transform duration-300">
            <img
              src="/images/couple-front.jpg"
              alt={WEDDING_DATA.general.coupleShort}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
