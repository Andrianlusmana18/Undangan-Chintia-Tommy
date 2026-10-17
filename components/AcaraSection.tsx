"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Compass,
  Car,
  Train,
  CheckCircle2,
  Wine,
  Shirt,
  Video,
  Navigation,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* Fine-line Interlocking Gold Wedding Rings SVG (Replaces OS Emoji) */
function WeddingRingsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11.5" cy="13.5" r="7" stroke="#C6A87D" strokeWidth="1.8" />
      <circle cx="20.5" cy="13.5" r="7" stroke="#9B7D54" strokeWidth="1.8" />
      <path
        d="M18.5 6.5 L20.5 3.5 L22.5 6.5 Z"
        fill="#D4AF37"
        stroke="#9B7D54"
        strokeWidth="0.8"
      />
    </svg>
  );
}

interface AcaraSectionProps {
  onNavigateNext?: () => void;
}

export default function AcaraSection({ onNavigateNext }: AcaraSectionProps) {
  const { events, dressCode, liveStream } = WEDDING_DATA;

  return (
    <section className="py-6 px-4 max-w-md mx-auto space-y-6 pb-8">
      {/* Header Agenda & Lokasi */}
      <div className="text-center space-y-2 pt-2 scroll-reveal">
        <div className="anim-badge animate-medallion-float w-12 h-12 rounded-full bg-[#FAF3EC] border border-[#E9DACB] flex items-center justify-center mx-auto text-wedding-gold-dark shadow-2xs">
          <Calendar className="w-5 h-5 text-wedding-gold-dark stroke-[2]" />
        </div>

        <p className="anim-badge text-[10px] tracking-[0.25em] font-semibold uppercase text-wedding-gold-dark">
          AGENDA & LOKASI
        </p>

        <h2 className="anim-title luxury-gold-text font-serif text-2xl sm:text-3xl font-bold">
          Rangkaian Hari Bahagia
        </h2>

        <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
          Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan mendoakan kami pada momentum istimewa ini.
        </p>

        <div className="anim-divider flex items-center justify-center space-x-2 pt-1">
          <div className="h-[1px] w-10 bg-wedding-gold/40" />
          <span className="text-wedding-rose text-xs">♡</span>
          <div className="h-[1px] w-10 bg-wedding-gold/40" />
        </div>
      </div>

      {/* Card 1: Akad Nikah */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-[#EFE6DA] space-y-4 hover:border-wedding-gold/60 transition-all duration-300 scroll-reveal">
        <div className="anim-badge flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-[#A4855F] bg-[#FAF3EC] border border-[#EBE0D2] px-3 py-1 rounded-full uppercase">
            {events.akad.badge}
          </span>
          <CheckCircle2 className="w-4 h-4 text-wedding-gold stroke-[2]" />
        </div>

        <div>
          <h3 className="anim-title luxury-gold-text font-serif text-2xl font-bold mb-1.5">
            {events.akad.title}
          </h3>
          <div className="anim-desc flex items-center space-x-2 text-xs text-wedding-muted">
            <Clock className="w-3.5 h-3.5 text-wedding-rose shrink-0" />
            <span>{events.akad.date} • {events.akad.time}</span>
          </div>
        </div>

        {/* Venue Box */}
        <div className="bg-[#FAF6F1] border border-[#ECE2D5] rounded-2xl p-4 space-y-1.5">
          <div className="flex items-start space-x-2.5">
            <div className="mt-0.5 text-wedding-rose">
              <MapPin className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-wedding-dark">
                {events.akad.venueName}
              </h4>
              <p className="text-xs text-wedding-muted leading-relaxed mt-0.5">
                {events.akad.address}
              </p>
            </div>
          </div>
        </div>

        {/* Dress code tip */}
        <div className="bg-[#FAF6F1]/70 border border-[#ECE2D5] rounded-xl p-3 flex items-center space-x-2.5 text-xs text-wedding-dark/80">
          <Shirt className="w-4 h-4 text-wedding-gold-dark shrink-0" />
          <div>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-wedding-muted block">
              REKOMENDASI BUSANA
            </span>
            <span className="text-xs">{events.akad.note}</span>
          </div>
        </div>

        {/* Calendar Action */}
        <a
          href={events.akad.googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#6E3D3D] hover:bg-[#592E2E] text-white py-3 px-4 rounded-xl font-medium tracking-wider text-xs uppercase flex items-center justify-center space-x-2 shadow-sm transition-all"
        >
          <Calendar className="w-4 h-4 stroke-[2]" />
          <span>Simpan ke Google Calendar</span>
        </a>
      </div>

      {/* Card 2: Resepsi Pernikahan */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-[#EFE6DA] space-y-4 hover:border-wedding-gold/60 transition-all duration-300 scroll-reveal delay-100">
        <div className="anim-badge flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-wider text-[#A4855F] bg-[#FAF3EC] border border-[#EBE0D2] px-3 py-1 rounded-full uppercase">
            {events.resepsi.badge}
          </span>
          <Wine className="w-4 h-4 text-wedding-gold stroke-[2]" />
        </div>

        <div>
          <h3 className="anim-title luxury-gold-text font-serif text-2xl font-bold mb-1.5">
            {events.resepsi.title}
          </h3>
          <div className="anim-desc flex items-center space-x-2 text-xs text-wedding-muted">
            <Clock className="w-3.5 h-3.5 text-wedding-rose shrink-0" />
            <span>{events.resepsi.date} • {events.resepsi.time}</span>
          </div>
        </div>

        {/* Venue Box */}
        <div className="bg-[#FAF6F1] border border-[#ECE2D5] rounded-2xl p-4 space-y-1.5">
          <div className="flex items-start space-x-2.5">
            <div className="mt-0.5 text-wedding-rose">
              <MapPin className="w-4 h-4 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-wedding-dark">
                {events.resepsi.venueName}
              </h4>
              <p className="text-xs text-wedding-muted leading-relaxed mt-0.5">
                {events.resepsi.address}
              </p>
            </div>
          </div>
        </div>

        {/* Distance Info */}
        <div className="bg-[#FAF6F1]/70 border border-[#ECE2D5] rounded-xl p-3 flex items-center space-x-2.5 text-xs text-wedding-dark/80">
          <Navigation className="w-4 h-4 text-wedding-gold-dark shrink-0" />
          <span className="text-xs">{events.resepsi.distanceInfo}</span>
        </div>

        {/* Google Maps Action */}
        <a
          href={events.resepsi.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#6E3D3D] hover:bg-[#592E2E] text-white py-3 px-4 rounded-xl font-medium tracking-wider text-xs uppercase flex items-center justify-center space-x-2 shadow-sm transition-all"
        >
          <Compass className="w-4 h-4 stroke-[2]" />
          <span>Lihat Petunjuk Arah / Google Maps</span>
        </a>
      </div>

      {/* Card 3: Peta Lokasi Acara */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-[#EFE6DA] space-y-4 scroll-reveal">
        <div className="flex items-center justify-between">
          <div>
            <p className="anim-badge text-[10px] tracking-widest font-semibold text-wedding-muted uppercase">
              PETA LOKASI ACARA
            </p>
            <h4 className="anim-title luxury-gold-text font-serif text-lg font-bold">
              Desa Lenggahjaya, Kec. Cabangbungin
            </h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FAF3EC] border border-[#E9DACB] flex items-center justify-center text-wedding-rose">
            <MapPin className="w-4 h-4" />
          </div>
        </div>

        {/* Map Preview iframe */}
        <div className="relative rounded-2xl overflow-hidden border border-[#ECE2D5] h-52 bg-stone-100 shadow-inner">
          <iframe
            src="https://maps.google.com/maps?q=-6.076877,107.146440&hl=id&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          <div className="absolute bottom-2.5 inset-x-3 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-[#ECE2D5] flex items-center justify-between text-xs shadow-xs">
            <span className="font-medium text-wedding-dark truncate mr-2">
              Kp. Tapakserang RT 008/004, Lenggahjaya
            </span>
            <a
              href="https://maps.app.goo.gl/yJAgCQxeYNpdMPx59"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-wedding-rose hover:underline uppercase shrink-0"
            >
              BUKA MAPS
            </a>
          </div>
        </div>

        {/* Access info footer */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F0E8DD] text-[11px]">
          <div className="flex items-center space-x-2 text-wedding-muted">
            <MapPin className="w-3.5 h-3.5 text-wedding-gold-dark shrink-0" />
            <div>
              <span className="font-semibold block text-wedding-dark text-[10px]">WILAYAH</span>
              <span>Kab. Bekasi, Jawa Barat</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-wedding-muted">
            <Compass className="w-3.5 h-3.5 text-wedding-gold-dark shrink-0" />
            <div>
              <span className="font-semibold block text-wedding-dark text-[10px]">PANDUAN RUTE</span>
              <span>Navigasi via Google Maps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Pedoman Busana (Dress Code Palette) */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-[#EFE6DA] space-y-4 text-center scroll-reveal delay-100">
        <div>
          <p className="anim-badge text-[10px] tracking-widest font-semibold uppercase text-wedding-gold-dark mb-1">
            PEDOMAN BUSANA
          </p>
          <h4 className="anim-title luxury-gold-text font-serif text-xl font-bold mb-1">
            {dressCode.title}
          </h4>
          <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
            {dressCode.subtitle}
          </p>
        </div>

        {/* Color Palette Swatches */}
        <div className="grid grid-cols-4 gap-2 py-2">
          {dressCode.colors.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5">
              <div
                className="w-12 h-12 rounded-full shadow-inner border border-stone-200/60 transform hover:scale-105 transition-transform"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-[10px] font-semibold text-wedding-dark">
                {color.name}
              </span>
              <span className="text-[9px] text-wedding-muted uppercase font-mono">
                {color.hex}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#FAF6F1] border border-[#ECE2D5] rounded-xl p-3 text-xs text-wedding-dark/80 italic">
          &ldquo;{dressCode.note}&rdquo;
        </div>
      </div>

      {/* Card 5: Siaran Langsung Virtual */}
      <div className="bg-[#3b4739] text-white rounded-3xl p-6 shadow-card space-y-4 relative overflow-hidden scroll-reveal">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="anim-badge flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-200/90">
            SIARAN LANGSUNG VIRTUAL
          </span>
        </div>

        <div>
          <h4 className="anim-title font-serif text-2xl font-bold text-stone-100 mb-2">
            {liveStream.title}
          </h4>
          <p className="anim-desc text-xs text-stone-300 leading-relaxed">
            {liveStream.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={liveStream.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-stone-100 text-[#3b4739] py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xs transition-colors"
          >
            <YoutubeIcon className="w-4 h-4 text-red-600" />
            <span>YouTube Live</span>
          </a>

          <a
            href={liveStream.zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DFC9A9] hover:bg-[#cbb28d] text-[#2c2725] py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xs transition-colors"
          >
            <Video className="w-4 h-4 text-[#3b4739]" />
            <span>Zoom Room</span>
          </a>
        </div>
      </div>

      {/* Section Footer */}
      <div className="text-center pt-3 pb-1 space-y-1.5 scroll-reveal delay-150">
        <div className="animate-medallion-float w-10 h-10 rounded-full border border-[#D9C4A9] flex items-center justify-center mx-auto bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE0] shadow-2xs">
          <WeddingRingsIcon className="w-5 h-5" />
        </div>
        <p className="anim-title font-serif italic text-base text-wedding-rose font-semibold">
          {WEDDING_DATA.general.coupleShort}
        </p>
        <p className="anim-desc text-[10px] tracking-widest text-wedding-muted uppercase font-semibold">
          {WEDDING_DATA.general.locationSummary}
        </p>
      </div>
    </section>
  );
}
