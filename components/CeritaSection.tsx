"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Heart,
  Sparkles,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";

interface CeritaSectionProps {
  onNavigateNext?: () => void;
}

export default function CeritaSection({ onNavigateNext }: CeritaSectionProps) {
  const { stories } = WEDDING_DATA;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "/images/couple-front.jpg",
      caption: "Senyum Menuju Bahagia",
      featured: true,
    },
    {
      url: "/images/couple-flower.jpg",
      caption: "Kejutan Buket Bunga",
    },
    {
      url: "/images/ring-exchange.jpg",
      caption: "Penyematan Cincin Suci",
    },
    {
      url: "/images/ring-detail.jpg",
      caption: "Ikatan Kasih Abadi",
    },
    {
      url: "/images/ring-bw.jpg",
      caption: "Sentuhan Kasih & Janji",
    },
    {
      url: "/images/couple.jpg",
      caption: "Saling Menatap Penuh Cinta",
      featured: true,
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % galleryImages.length);
  };

  return (
    <section className="py-6 px-4 max-w-md mx-auto space-y-7 pb-8">
      {/* Intro Header */}
      <div className="text-center space-y-2 pt-2 scroll-reveal">
        <div className="anim-badge animate-medallion-float w-12 h-12 rounded-full bg-[#FAF3EC] border border-[#E9DACB] flex items-center justify-center mx-auto text-wedding-gold-dark shadow-2xs">
          <BookOpen className="w-5 h-5 text-wedding-gold-dark stroke-[2]" />
        </div>

        <p className="anim-badge text-[10px] tracking-[0.25em] font-semibold uppercase text-wedding-gold-dark">
          OUR LOVE STORY
        </p>

        <h2 className="anim-title luxury-gold-text font-serif text-2xl sm:text-3xl font-bold">
          Kisah Perjalanan Kasih
        </h2>

        <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
          Setiap kisah cinta itu indah, namun kisah cinta kami adalah yang paling kami syukuri dalam hidup.
        </p>

        <div className="anim-divider flex items-center justify-center space-x-2 pt-1">
          <div className="h-[1px] w-10 bg-wedding-gold/40" />
          <Heart className="w-3.5 h-3.5 text-wedding-rose fill-wedding-rose" />
          <div className="h-[1px] w-10 bg-wedding-gold/40" />
        </div>
      </div>

      {/* Love Story Timeline */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-wedding-gold before:via-wedding-rose/50 before:to-wedding-gold/30">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`relative group scroll-reveal ${
              index === 0 ? "delay-100" : index === 1 ? "delay-150" : "delay-200"
            }`}
          >
            {/* Timeline bullet icon */}
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-white border-2 border-wedding-rose flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-wedding-rose" />
            </div>

            {/* Story Card */}
            <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EF] rounded-2xl p-5 shadow-card border border-[#E7D6C1] space-y-2 hover:border-[#C6A87D] transition-all">
              <div className="anim-badge flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#9B7D54] bg-[#FAF3EC] border border-[#E4D2BF] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {story.year}
                </span>
                <span className="text-[11px] text-wedding-muted font-medium">
                  {story.date}
                </span>
              </div>

              <h3 className="anim-title luxury-gold-text font-serif text-lg font-bold">
                {story.title}
              </h3>

              <p className="anim-desc text-xs text-wedding-muted leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Magazine Photo Gallery with Interactive Lightbox */}
      <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-5 sm:p-6 shadow-card border-2 border-[#E7D6C1] space-y-4 scroll-reveal relative overflow-hidden">
        <div className="text-center space-y-1">
          <div className="anim-badge flex items-center justify-center space-x-2">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <p className="text-[10px] tracking-[0.22em] font-bold uppercase text-[#9B7D54]">
              POTRET KENANGAN
            </p>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>
          <h4 className="anim-title luxury-gold-text font-serif text-xl sm:text-2xl font-bold">
            Momen Kebersamaan
          </h4>
          <p className="anim-desc text-[10px] text-wedding-muted italic font-serif">
            Ketuk foto untuk memperbesar tampilan penuh
          </p>
        </div>

        {/* 1 - 2 - 2 - 1 Editorial Magazine Grid */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`group relative overflow-hidden rounded-2xl border border-[#DFCCA9] shadow-sm bg-[#FAF6F1] text-left focus:outline-hidden transition-all duration-300 hover:shadow-md hover:border-[#C6A87D] ${
                img.featured ? "col-span-2" : "col-span-1"
              }`}
            >
              <div
                className={`${
                  img.featured ? "aspect-[16/11]" : "aspect-[4/5]"
                } overflow-hidden relative bg-stone-200`}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.02] contrast-[1.03]"
                />
                {/* Subtle luxury gradient & zoom badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/35 backdrop-blur-xs border border-white/40 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-2.5 text-center bg-white/95 backdrop-blur-xs border-t border-[#EFE5D8]">
                <p className="font-serif italic text-xs font-medium text-[#64222A]">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Romantic Quote */}
      <div className="bg-[#FAF6F1] rounded-3xl p-6 border border-[#EAE0D3] shadow-soft text-center scroll-reveal delay-100">
        <Sparkles className="anim-badge w-5 h-5 text-wedding-gold mx-auto mb-2" />
        <p className="anim-title font-serif italic text-sm text-wedding-dark leading-relaxed">
          &ldquo;Mencintai bukan berarti menemukan seseorang yang sempurna, melainkan belajar melihat orang yang tidak sempurna dengan cara yang sempurna.&rdquo;
        </p>
        <p className="anim-desc text-[10px] tracking-widest font-semibold text-wedding-rose uppercase mt-3">
          CHINTIA &amp; TOMMY
        </p>
      </div>

      {/* Fullscreen Luxury Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-page-enter"
        >
          {/* Top Bar */}
          <div className="w-full max-w-md flex items-center justify-between text-white/90 pt-2">
            <span className="text-xs font-mono tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              {selectedIdx + 1} / {galleryImages.length}
            </span>
            <button
              type="button"
              onClick={() => setSelectedIdx(null)}
              aria-label="Tutup Galeri"
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Image Viewer with Prev/Next Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md flex items-center justify-center my-auto"
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 border border-white/30 flex items-center justify-center text-white shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="p-1.5 rounded-2xl bg-gradient-to-b from-[#DFCCA9] to-[#9B7D54] shadow-2xl max-h-[70vh] overflow-hidden">
              <img
                src={galleryImages[selectedIdx].url}
                alt={galleryImages[selectedIdx].caption}
                className="max-h-[67vh] w-auto rounded-xl object-contain mx-auto"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto Selanjutnya"
              className="absolute right-2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 border border-white/30 flex items-center justify-center text-white shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption Plaque */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xs text-center pb-4 space-y-1"
          >
            <p className="font-serif italic text-lg text-[#FAF4EB] font-medium">
              {galleryImages[selectedIdx].caption}
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C6A87D] font-semibold">
              {WEDDING_DATA.general.coupleShort}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
