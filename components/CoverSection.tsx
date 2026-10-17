"use client";

import React, { useState, useEffect } from "react";
import { Mail, Clock, Volume2, Sparkles } from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";
import { useAudio } from "@/context/AudioContext";

interface CoverSectionProps {
  guestName: string;
  onOpenInvitation: () => void;
}

/* Antique Royal Corner Filigree Ornament */
function CornerFiligree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 44 C4 20 20 4 44 4"
        stroke="#C6A87D"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 44 C10 24 24 10 44 10"
        stroke="#E2CDAF"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <path
        d="M4 4 L14 4 C9 9 9 9 4 14 Z"
        fill="#C6A87D"
        opacity="0.85"
      />
      <circle cx="20" cy="20" r="2" fill="#D4AF37" />
      <path
        d="M20 4 C20 12 12 20 4 20"
        stroke="#C6A87D"
        strokeWidth="1"
      />
      <circle cx="4" cy="4" r="2.5" fill="#9B7D54" />
    </svg>
  );
}

/* Pure Royal Gold Monogram Crest */
function RoyalMonogramCrest({ monogram }: { monogram: string }) {
  return (
    <div className="my-2 flex flex-col items-center justify-center relative">
      {/* Soft warm golden ambient halo */}
      <div className="absolute w-52 h-52 rounded-full bg-wedding-gold/15 blur-2xl pointer-events-none" />

      {/* Subtle Botanical Gold Vine Wreath */}
      <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/images/botanical-monogram-wreath.png"
          alt="Monogram Wreath"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_4px_12px_rgba(198,168,125,0.15)]"
        />

        {/* Center Interlocking Monogram Calligraphy */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Subtle botanical top accent */}
          <span className="text-xs text-[#C6A87D] tracking-widest leading-none mb-1 opacity-90 drop-shadow-xs">
            ❦
          </span>

          {/* Majestic Calligraphy Monogram */}
          <div className="relative flex items-center justify-center">
            <span className="font-serif italic text-4xl sm:text-5xl font-normal text-[#64222A] tracking-wider drop-shadow-[0_2px_4px_rgba(198,168,125,0.3)]">
              {monogram}
            </span>
          </div>

          {/* Delicate Bottom Divider */}
          <div className="flex items-center space-x-1.5 mt-1.5 opacity-80">
            <span className="h-[1px] w-5 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <span className="text-[7px] text-[#C6A87D]">♦</span>
            <span className="h-[1px] w-5 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoverSection({
  guestName,
  onOpenInvitation,
}: CoverSectionProps) {
  const { restartAndPlayAudio, stopAndResetAudio } = useAudio();
  const [isUnsealing, setIsUnsealing] = useState(false);

  // Stop & reset audio automatically whenever user is on the Cover screen
  useEffect(() => {
    stopAndResetAudio();
  }, [stopAndResetAudio]);

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(WEDDING_DATA.general.targetDateIso).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenClick = () => {
    if (isUnsealing) return;
    setIsUnsealing(true);
    restartAndPlayAudio();
    setTimeout(() => {
      onOpenInvitation();
    }, 680);
  };

  return (
    <section className="min-h-screen py-7 px-4 flex flex-col items-center justify-center space-y-5 pb-10 relative overflow-hidden">
      {/* Top Main Luxury Card (The Sealed Royal Invitation) */}
      <div
        className={`w-full max-w-md bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(100,50,40,0.08),0_2px_12px_rgba(198,168,125,0.12)] border-2 border-[#E7D6C1] text-center relative overflow-hidden scroll-reveal ${
          isUnsealing ? "cover-unseal-card" : ""
        }`}
      >
        {/* Inner Delicate Gold Border Frame */}
        <div className="absolute inset-2.5 rounded-[22px] border border-[#DFCCA9]/70 pointer-events-none" />

        {/* 4 Antique Royal Corner Filigrees */}
        <CornerFiligree className="absolute top-3 left-3 w-8 h-8 pointer-events-none opacity-85" />
        <CornerFiligree className="absolute top-3 right-3 w-8 h-8 pointer-events-none opacity-85 scale-x-[-1]" />
        <CornerFiligree className="absolute bottom-3 left-3 w-8 h-8 pointer-events-none opacity-85 scale-y-[-1]" />
        <CornerFiligree className="absolute bottom-3 right-3 w-8 h-8 pointer-events-none opacity-85 scale-[-1]" />

        {/* Subtle decorative background light gradients */}
        <div className="absolute -top-24 -left-24 w-52 h-52 bg-wedding-gold/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-wedding-rose/15 rounded-full blur-2xl pointer-events-none" />

        {/* Walimatul 'Urs Title with Royal Gold Lines */}
        <div className="flex items-center justify-center space-x-3 mb-4 relative z-10">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C6A87D]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9B7D54] uppercase font-sans">
            {WEDDING_DATA.general.title}
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C6A87D]" />
        </div>

        {/* Pure Royal Gold Monogram Crest "C&T" */}
        <div className={`relative z-10 my-1 ${isUnsealing ? "cover-unseal-crest" : ""}`}>
          <RoyalMonogramCrest monogram={WEDDING_DATA.general.monogram} />
        </div>

        {/* The Wedding Of & Couple Names */}
        <div className="mt-5 space-y-2 relative z-10">
          <p className="text-[10px] tracking-[0.32em] uppercase font-semibold text-[#9B7D54]">
            THE WEDDING OF
          </p>
          <h2 className="font-serif text-[34px] sm:text-[40px] font-medium text-[#64222A] tracking-[0.01em] leading-tight drop-shadow-[0_1px_1px_rgba(198,168,125,0.3)]">
            Chintia <span className="italic font-normal text-[#B38E5D] mx-0.5">&amp;</span> Tommy
          </h2>
          <p className="font-serif italic text-[#8C6D46] text-base sm:text-lg font-medium tracking-wide [font-variant-numeric:lining-nums]">
            {WEDDING_DATA.general.weddingDate}
          </p>
        </div>

        {/* Royal Gold Hairline Divider */}
        <div className="flex items-center justify-center space-x-3 my-5 relative z-10">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C6A87D]/80" />
          <span className="text-[#C6A87D] text-[10px]">❖</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C6A87D]/80" />
        </div>

        {/* Guest Recipient Box (Stylized Invitation Card Envelope) */}
        <div className="bg-gradient-to-b from-[#FAF5EE] to-[#F4EBE0] border border-[#E2D2BE] rounded-2xl px-5 py-5 my-4 relative z-10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_4px_14px_rgba(100,50,40,0.04)] space-y-2.5">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-[1px] w-5 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <span className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-[#9B7D54]">
              KEPADA YTH. BAPAK / IBU / SAUDARA / I
            </span>
            <span className="h-[1px] w-5 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>

          <h3 className="font-serif italic text-2xl sm:text-[26px] font-semibold text-[#64222A] leading-snug tracking-wide">
            {guestName || "Tamu Undangan & Kerabat Terkasih"}
          </h3>

          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#C6A87D]/60 to-transparent mx-auto" />

          <p className="font-serif italic text-[13.5px] sm:text-sm text-[#5C4938] leading-relaxed max-w-[270px] mx-auto">
            &ldquo;Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir dan memberikan doa restu pada momen bahagia pernikahan kami.&rdquo;
          </p>
        </div>

        {/* Buka Undangan Button */}
        <div className="mt-6 space-y-2.5 relative z-10">
          <button
            onClick={handleOpenClick}
            disabled={isUnsealing}
            className="w-full bg-gradient-to-r from-[#7D2934] via-[#651F28] to-[#7D2934] hover:from-[#651F28] hover:to-[#501720] text-white py-3.5 px-6 rounded-xl font-semibold tracking-[0.2em] text-xs uppercase flex items-center justify-center space-x-2.5 shadow-[0_8px_20px_rgba(100,30,40,0.28)] hover:shadow-[0_10px_25px_rgba(100,30,40,0.38)] border border-[#C6A87D]/50 transition-all duration-500 transform active:scale-98 group relative overflow-hidden"
          >
            {isUnsealing && (
              <span className="absolute inset-0 shimmer-gold opacity-40 pointer-events-none" />
            )}
            <Mail
              className={`w-4 h-4 stroke-[1.8] transition-transform duration-500 text-[#F5DFBB] ${
                isUnsealing ? "scale-110 -translate-y-0.5" : "group-hover:scale-110"
              }`}
            />
            <span>{isUnsealing ? "MEMBUKA UNDANGAN..." : "BUKA UNDANGAN"}</span>
          </button>
          <p className="text-[9.5px] tracking-[0.2em] uppercase font-medium text-[#9B7D54]">
            KETUK UNTUK MEMBUKA UNDANGAN
          </p>
        </div>

        {/* Countdown Timer Section */}
        <div className="mt-8 pt-6 border-t border-[#EBDCCB] relative z-10">
          <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider text-[#8C7662] uppercase mb-3">
            <span className="flex items-center space-x-1">
              <span>MENGHITUNG HARI</span>
            </span>
            <span className="flex items-center space-x-1 text-[#64222A]">
              <Clock className="w-3 h-3 stroke-[2.5]" />
              <span>MENUJU BAHAGIA</span>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "HARI", value: timeLeft.days },
              { label: "JAM", value: timeLeft.hours },
              { label: "MENIT", value: timeLeft.minutes },
              { label: "DETIK", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white to-[#F9F4EB] border border-[#E2D2BE] rounded-xl py-3 px-1 text-center shadow-[0_2px_6px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]"
              >
                <span className="font-serif text-2xl font-bold text-[#64222A] block leading-none">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-bold text-[#9B7D54] tracking-widest uppercase mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Card (QS Ar-Rum : 21) */}
      <div
        className={`w-full max-w-md bg-gradient-to-b from-[#FAF5EC] to-[#F5ECE0] rounded-3xl p-6 border border-[#E2D2BE] text-center shadow-[0_8px_20px_rgba(100,50,40,0.04)] relative overflow-hidden scroll-reveal ${
          isUnsealing ? "cover-unseal-quote" : ""
        }`}
      >
        {/* Subtle inner corner filigree */}
        <CornerFiligree className="absolute top-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-50" />
        <CornerFiligree className="absolute top-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-50 scale-x-[-1]" />

        <div className="w-8 h-8 rounded-full bg-[#EFE3D3] text-[#9B7D54] flex items-center justify-center mx-auto mb-3 shadow-xs border border-[#DFCCA9]/70">
          <span className="font-serif text-lg leading-none font-bold">❝</span>
        </div>
        <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed italic font-serif px-2">
          &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
        </p>
        <p className="text-[10px] tracking-widest font-bold text-[#64222A] uppercase mt-4">
          QS. AR-RUM : 21
        </p>
      </div>
    </section>
  );
}
