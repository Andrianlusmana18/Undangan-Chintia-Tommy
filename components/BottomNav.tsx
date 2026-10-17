"use client";

import React from "react";
import { Heart, Users, Calendar, BookOpen, Mail } from "lucide-react";

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ currentTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "cover", label: "COVER", icon: Heart },
    { id: "mempelai", label: "MEMPELAI", icon: Users },
    { id: "acara", label: "ACARA", icon: Calendar },
    { id: "cerita", label: "CERITA", icon: BookOpen },
    { id: "rsvp", label: "RSVP", icon: Mail },
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
  };

  return (
    <nav className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        {/* Luxury outer gradient glow container */}
        <div className="pointer-events-auto w-full max-w-md p-[1.5px] rounded-full bg-gradient-to-r from-[#D9C4A9]/70 via-[#E4B5A5]/60 to-[#D9C4A9]/70 shadow-[0_16px_45px_rgba(75,35,35,0.22)]">
          <div className="w-full bg-white/94 backdrop-blur-2xl rounded-full py-2 px-2.5 flex items-center justify-between border border-white/60 relative overflow-hidden">
            {/* Subtle romantic shimmer across top edge */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] shimmer-gold" />

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  aria-label={tab.label}
                  className="flex-1 flex flex-col items-center justify-center relative py-1 group focus:outline-hidden transition-all duration-300"
                >
                  {isActive ? (
                    <div className="flex flex-col items-center relative">
                      {/* Romantic tiny glowing pearl indicator above active button */}
                      <span className="absolute -top-1.5 w-1 h-1 rounded-full bg-wedding-gold animate-ping" />
                      
                      {/* Active Button with Luxury Dual Gradient & Gold Ring */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7D3E3E] via-[#632F2F] to-[#481E1E] text-white flex flex-col items-center justify-center shadow-lg transition-all duration-300 transform scale-105 ring-2 ring-wedding-gold/40 ring-offset-2 ring-offset-white animate-nav-glow">
                        <Icon className="w-4 h-4 stroke-[2.2] animate-pulse-subtle" />
                        <span className="text-[7.5px] font-extrabold tracking-wider mt-0.5 text-stone-100">
                          {tab.label}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-[#8C827A] group-hover:text-[#6E3D3D] transition-all duration-200 py-1 group-active:scale-95">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-[#FAF4EE] transition-colors">
                        <Icon className="w-4 h-4 stroke-[1.8] group-hover:stroke-[2.2] transition-all" />
                      </div>
                      <span className="text-[8.5px] font-medium tracking-wider mt-0.5 group-hover:font-semibold">
                        {tab.label}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
  );
}
