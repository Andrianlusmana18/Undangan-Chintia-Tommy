"use client";

import React, { useState } from "react";
import { Heart, Mail, Sparkles, Crown, ArrowRight } from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";

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
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface MempelaiSectionProps {
  onNavigateToRsvp: () => void;
  onNavigateNext?: () => void;
}

export default function MempelaiSection({
  onNavigateToRsvp,
}: MempelaiSectionProps) {
  return (
    <section className="py-6 px-4 max-w-md mx-auto space-y-6 pb-8">
      {/* Intro Header */}
      <div className="text-center space-y-3 pt-2 scroll-reveal">
        <div className="anim-badge inline-flex items-center space-x-1.5 bg-[#FAF3EC] border border-[#E9DACB] px-3.5 py-1 rounded-full shadow-2xs">
          <Heart className="w-3 h-3 text-wedding-rose fill-wedding-rose/20" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-wedding-gold-dark">
            THE HOLY MATRIMONY
          </span>
        </div>

        <h2 className="anim-title luxury-gold-text font-serif italic text-2xl sm:text-3xl font-medium">
          Bismillahirrohmanirrohim
        </h2>

        <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami dengan penuh rasa syukur bermaksud
          menyelenggarakan syukuran pernikahan putra-putri kami tercinta:
        </p>

        {/* Small golden crown ornament */}
        <div className="anim-divider flex items-center justify-center space-x-2 pt-1">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C6A87D]" />
          <Crown className="w-3.5 h-3.5 text-[#C6A87D] fill-[#C6A87D]/20 stroke-[1.8]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C6A87D]" />
        </div>
      </div>

      {/* Hero Grand Arch Couple Photo Card (Dimensional Royal Portrait Centerpiece) */}
      <div className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-5 sm:p-7 shadow-[0_18px_45px_rgba(100,50,40,0.1),0_2px_12px_rgba(198,168,125,0.18)] border-2 border-[#E7D6C1] text-center relative overflow-hidden scroll-reveal group">
        {/* Inner Delicate Gold Border Frame */}
        <div className="absolute inset-2.5 rounded-[22px] border border-[#DFCCA9]/70 pointer-events-none" />

        {/* 4 Antique Royal Corner Filigrees */}
        <CornerFiligree className="absolute top-3 left-3 w-7 h-7 pointer-events-none opacity-80" />
        <CornerFiligree className="absolute top-3 right-3 w-7 h-7 pointer-events-none opacity-80 scale-x-[-1]" />
        <CornerFiligree className="absolute bottom-3 left-3 w-7 h-7 pointer-events-none opacity-80 scale-y-[-1]" />
        <CornerFiligree className="absolute bottom-3 right-3 w-7 h-7 pointer-events-none opacity-80 scale-[-1]" />

        {/* Ambient Warm Golden Backlight Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-radial from-[#F3DFC1]/40 via-[#FAF0E1]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Top Arch Crest / Fleur Header */}
        <div className="flex items-center justify-center space-x-2 mb-3.5 relative z-10">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C6A87D]" />
          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-[#FAF3EC] border border-[#E4D2BF] text-[9px] font-bold text-[#9B7D54] tracking-widest uppercase shadow-2xs">
            <span>❖</span>
            <span>POTRET PERTUNANGAN</span>
            <span>❖</span>
          </div>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C6A87D]" />
        </div>

        {/* Multi-Layered Arch Photo Frame Container */}
        <div className="relative mx-auto w-full max-w-[285px] z-10">
          {/* Layer 1: Outer Champagne Matting Arch with Rich Bevel Shadow */}
          <div className="p-2 sm:p-2.5 rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#FAF4EB] via-[#F4E9DC] to-[#EFE2D2] border-2 border-[#D9C4A9] shadow-[0_14px_30px_rgba(85,45,45,0.18),0_2px_8px_rgba(198,168,125,0.3)]">
            
            {/* Layer 2: Delicate Golden Hairline Arch Rim */}
            <div className="p-1 rounded-t-full rounded-b-xl border border-[#C6A87D]/80 bg-white/70 shadow-inner">
              
              {/* Layer 3: The Arch Photo Window */}
              <div className="w-full aspect-[3/4.1] rounded-t-full rounded-b-lg overflow-hidden relative bg-stone-200 shadow-md">
                <img
                  src="/images/couple-front.jpg"
                  alt={WEDDING_DATA.general.coupleShort}
                  className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.03] contrast-[1.04] saturate-[1.06]"
                />
                
                {/* Cinematic Romantic Vignette & Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/5 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_35px_rgba(80,40,40,0.3)] pointer-events-none rounded-t-full" />
                
                {/* Subtle Glass Shimmer Beam */}
                <div className="absolute -inset-full w-[300%] h-[300%] bg-gradient-to-tr from-transparent via-white/15 to-transparent rotate-12 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Floating Luxury Glassmorphic Plaque (Elevates text above feet/carpet) */}
          <div className="relative -mt-7 z-20 mx-auto max-w-[245px] bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#DFCCA9] shadow-[0_10px_25px_rgba(85,45,45,0.14)] text-center space-y-1">
            <p className="font-serif italic text-xl font-bold text-wedding-rose tracking-wide">
              {WEDDING_DATA.general.coupleShort}
            </p>

            <div className="flex items-center justify-center space-x-2 pt-0.5">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8C6D48]">
                Dua Hati, Satu Janji Suci
              </p>
              <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
            </div>
          </div>
        </div>

        {/* Bottom Motto with Golden Stars */}
        <div className="pt-5 pb-1 flex items-center justify-center space-x-2 text-wedding-gold-dark text-xs font-serif italic relative z-10">
          <Sparkles className="w-3.5 h-3.5 text-wedding-gold stroke-[2]" />
          <span className="text-[#64222A] font-medium tracking-wide">Bersatu dalam ikatan suci yang abadi</span>
          <Sparkles className="w-3.5 h-3.5 text-wedding-gold stroke-[2]" />
        </div>
      </div>

      {/* Profil Mempelai Pria (Groom) — Royal Stationery Card */}
      <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-6 sm:p-7 shadow-[0_12px_32px_rgba(100,50,40,0.06)] border-2 border-[#E7D6C1] text-center space-y-4 scroll-reveal hover:border-[#C6A87D] transition-all duration-300 relative overflow-hidden">
        {/* Inner Delicate Gold Frame */}
        <div className="absolute inset-2 rounded-[20px] border border-[#DFCCA9]/60 pointer-events-none" />

        {/* 4 Antique Royal Corner Filigrees */}
        <CornerFiligree className="absolute top-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75" />
        <CornerFiligree className="absolute top-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-x-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75 scale-y-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-[-1]" />

        {/* Royal Monogram Medallion Crest (Replaces plain gender symbol) */}
        <div className="anim-badge relative pt-1 z-10">
          <div className="animate-medallion-float w-16 h-16 rounded-full bg-gradient-to-b from-[#FAF4EB] to-[#EFE2D2] border-2 border-[#D9C4A9] shadow-[0_6px_18px_rgba(100,50,40,0.1)] flex items-center justify-center mx-auto relative">
            <div className="absolute inset-1 rounded-full border border-dashed border-[#C6A87D]/70" />
            <span className="font-serif italic text-2xl font-bold text-[#64222A] drop-shadow-[0_1px_1px_rgba(198,168,125,0.4)]">
              T
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-center space-x-2">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <span className="text-[10px] tracking-[0.22em] font-bold uppercase text-[#9B7D54]">
              {WEDDING_DATA.groom.role}
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>
        </div>

        <h3 className="anim-title luxury-gold-text font-serif text-2xl sm:text-3xl font-bold relative z-10">
          {WEDDING_DATA.groom.fullName}
        </h3>

        <div className="anim-desc bg-white/90 border border-[#E5D6C5] rounded-2xl p-4 text-xs text-wedding-dark/85 shadow-2xs relative z-10 space-y-1">
          <p className="text-[11px] font-serif italic text-[#8C7662]">
            Putra pertama dari pasangan
          </p>
          <p className="font-semibold text-wedding-dark tracking-wide">
            {WEDDING_DATA.groom.father} &amp; {WEDDING_DATA.groom.mother}
          </p>
        </div>

        <div className="anim-divider relative z-10 pt-0.5">
          <a
            href={WEDDING_DATA.groom.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#FAF3EC] hover:bg-[#F1E5D6] border border-[#DFCCA9] text-[#64222A] px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-2xs"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#64222A]" />
            <span>{WEDDING_DATA.groom.instagram}</span>
          </a>
        </div>
      </div>

      {/* Decorative Wreath Connector */}
      <div className="flex items-center justify-center space-x-3 my-1 scroll-reveal delay-75">
        <div className="anim-divider h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C6A87D]" />
        <div className="animate-medallion-float w-14 h-14 rounded-full border-2 border-[#D9C4A9] flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE0] shadow-soft relative">
          <div className="absolute inset-1 rounded-full border border-dashed border-[#C6A87D]/50" />
          <span className="font-serif italic text-sm text-[#64222A] font-bold leading-none">&amp;</span>
          <span className="text-[7px] tracking-[0.2em] font-bold text-[#9B7D54] uppercase mt-0.5">LOVE</span>
        </div>
        <div className="anim-divider h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C6A87D]" />
      </div>

      {/* Profil Mempelai Wanita (Bride) — Royal Stationery Card */}
      <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-6 sm:p-7 shadow-[0_12px_32px_rgba(100,50,40,0.06)] border-2 border-[#E7D6C1] text-center space-y-4 scroll-reveal hover:border-[#C6A87D] transition-all duration-300 relative overflow-hidden">
        {/* Inner Delicate Gold Frame */}
        <div className="absolute inset-2 rounded-[20px] border border-[#DFCCA9]/60 pointer-events-none" />

        {/* 4 Antique Royal Corner Filigrees */}
        <CornerFiligree className="absolute top-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75" />
        <CornerFiligree className="absolute top-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-x-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75 scale-y-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-[-1]" />

        {/* Royal Monogram Medallion Crest (Replaces plain gender symbol) */}
        <div className="anim-badge relative pt-1 z-10">
          <div className="animate-medallion-float w-16 h-16 rounded-full bg-gradient-to-b from-[#FAF4EB] to-[#EFE2D2] border-2 border-[#D9C4A9] shadow-[0_6px_18px_rgba(100,50,40,0.1)] flex items-center justify-center mx-auto relative">
            <div className="absolute inset-1 rounded-full border border-dashed border-[#C6A87D]/70" />
            <span className="font-serif italic text-2xl font-bold text-[#64222A] drop-shadow-[0_1px_1px_rgba(198,168,125,0.4)]">
              C
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-center space-x-2">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <span className="text-[10px] tracking-[0.22em] font-bold uppercase text-[#9B7D54]">
              {WEDDING_DATA.bride.role}
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>
        </div>

        <h3 className="anim-title luxury-gold-text font-serif text-2xl sm:text-3xl font-bold relative z-10">
          {WEDDING_DATA.bride.fullName}
        </h3>

        <div className="anim-desc bg-white/90 border border-[#E5D6C5] rounded-2xl p-4 text-xs text-wedding-dark/85 shadow-2xs relative z-10 space-y-1">
          <p className="text-[11px] font-serif italic text-[#8C7662]">
            Putri kedua dari pasangan
          </p>
          <p className="font-semibold text-wedding-dark tracking-wide">
            {WEDDING_DATA.bride.father} &amp; {WEDDING_DATA.bride.mother}
          </p>
        </div>

        <div className="anim-divider relative z-10 pt-0.5">
          <a
            href={WEDDING_DATA.bride.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 bg-[#FAF3EC] hover:bg-[#F1E5D6] border border-[#DFCCA9] text-[#64222A] px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-2xs"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#64222A]" />
            <span>{WEDDING_DATA.bride.instagram}</span>
          </a>
        </div>
      </div>

      {/* Kutipan Ayat Suci — QS. Ar-Rum : 21 */}
      <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-6 sm:p-7 border-2 border-[#E7D6C1] shadow-soft text-center relative overflow-hidden scroll-reveal">
        <div className="absolute inset-2 rounded-[20px] border border-[#DFCCA9]/60 pointer-events-none" />
        <CornerFiligree className="absolute top-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75" />
        <CornerFiligree className="absolute top-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-x-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 left-2.5 w-6 h-6 pointer-events-none opacity-75 scale-y-[-1]" />
        <CornerFiligree className="absolute bottom-2.5 right-2.5 w-6 h-6 pointer-events-none opacity-75 scale-[-1]" />

        <span className="anim-badge text-2xl text-wedding-gold font-serif opacity-85 block mb-1 relative z-10">
          ❝
        </span>
        <div className="anim-badge flex items-center justify-center space-x-2 mb-3 relative z-10">
          <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
          <span className="text-[10px] tracking-[0.22em] font-bold text-[#9B7D54] uppercase">
            QS. AR-RUM : 21
          </span>
          <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
        </div>
        <p className="anim-title font-serif italic text-sm text-wedding-dark leading-relaxed relative z-10 px-1">
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.&rdquo;
        </p>
      </div>

      {/* Quick RSVP CTA card */}
      <div className="bg-white rounded-2xl p-4 border border-[#EFE6DA] shadow-soft flex items-center justify-between scroll-reveal delay-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF3EC] border border-[#E9DACB] flex items-center justify-center text-wedding-rose shrink-0">
            <Mail className="w-4 h-4 stroke-[2]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-wedding-dark">Kirim Doa &amp; Restu</h4>
            <p className="text-[11px] text-wedding-muted">
              Berikan ucapan hangat untuk {WEDDING_DATA.general.coupleShort}
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateToRsvp}
          className="bg-[#6E3D3D] hover:bg-[#592E2E] text-white text-xs font-semibold px-4 py-2 rounded-xl shrink-0 transition-colors shadow-2xs"
        >
          Tulis Doa
        </button>
      </div>
    </section>
  );
}
