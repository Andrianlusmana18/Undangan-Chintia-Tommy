"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Heart,
  QrCode,
  Download,
  Gift,
} from "lucide-react";
import { WEDDING_DATA, WishMessage } from "@/data/weddingData";

/* Realistic Gold EMV Smart Chip SVG for Luxury Bank Cards */
function GoldChipIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="28"
        rx="5"
        fill="url(#goldChipGrad)"
        stroke="#B38E5D"
        strokeWidth="1.2"
      />
      <path
        d="M1 10H13M27 10H39M1 20H13M27 20H39M13 1V29M27 1V29"
        stroke="#9B7746"
        strokeWidth="0.9"
        opacity="0.7"
      />
      <rect
        x="13"
        y="8"
        width="14"
        height="14"
        rx="2"
        stroke="#9B7746"
        strokeWidth="0.9"
        opacity="0.75"
      />
      <defs>
        <linearGradient id="goldChipGrad" x1="0" y1="0" x2="40" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5E1B9" />
          <stop offset="50%" stopColor="#D8B475" />
          <stop offset="100%" stopColor="#C29B59" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface RsvpSectionProps {
  initialGuestName: string;
}

export default function RsvpSection({ initialGuestName }: RsvpSectionProps) {
  const [name, setName] = useState(initialGuestName || "");
  const [presence, setPresence] = useState<"Hadir" | "Ragu" | "Maaf">("Hadir");
  const [guestCount, setGuestCount] = useState("1 Orang Tamu");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<WishMessage[]>(WEDDING_DATA.initialWishes);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showQris, setShowQris] = useState(false);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    if (initialGuestName) {
      setName(initialGuestName);
    }
  }, [initialGuestName]);

  // Load saved wishes from localStorage if any
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wedding_wishes_ar");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopy = (text: string, bankName: string) => {
    navigator.clipboard.writeText(text.replace(/\s+/g, ""));
    setCopiedBank(bankName);
    showToast(`Nomor rekening ${bankName} berhasil disalin!`);
    setTimeout(() => {
      setCopiedBank(null);
    }, 2000);
  };

  const handleCopyAddress = (addressText: string) => {
    navigator.clipboard.writeText(addressText);
    setCopiedAddress(true);
    showToast("Alamat pengiriman kado berhasil disalin!");
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Mohon masukkan nama Anda");
      return;
    }
    if (!message.trim()) {
      showToast("Mohon tuliskan doa atau ucapan Anda");
      return;
    }

    const newWish: WishMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      status: presence,
      message: message.trim(),
      timeAgo: "Baru saja",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("wedding_wishes_ar", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setMessage("");
    showToast("Terima kasih, doa restu Anda telah terkirim! ❤️");
  };

  const getInitials = (nameStr: string) => {
    const parts = nameStr.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return nameStr.substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-6 px-4 max-w-md mx-auto space-y-6 pb-28 relative">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 inset-x-4 max-w-sm mx-auto z-50 bg-[#6E3D3D] text-white text-xs py-2.5 px-4 rounded-xl shadow-floating text-center font-medium animate-bounce border border-wedding-gold/40">
          {toastMessage}
        </div>
      )}

      {/* Top Monogram */}
      <div className="text-center space-y-2 pt-2 scroll-reveal">
        <div className="anim-badge animate-medallion-float w-16 h-16 rounded-full border border-wedding-gold/50 flex items-center justify-center mx-auto bg-white shadow-2xs">
          <span className="font-serif italic text-lg font-semibold text-wedding-rose">
            {WEDDING_DATA.general.monogram}
          </span>
        </div>

        <p className="anim-badge text-[10px] tracking-[0.25em] font-semibold uppercase text-wedding-gold-dark">
          KEHADIRAN & DOA RESTU
        </p>

        <h2 className="anim-title luxury-gold-text font-serif text-2xl sm:text-3xl font-bold">
          Untaian Kasih & Doa
        </h2>

        <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu.
        </p>
      </div>

      {/* Form Konfirmasi Kehadiran */}
      <div className="bg-white rounded-3xl p-6 shadow-card border border-[#EFE6DA] space-y-5 scroll-reveal delay-100">
        <div className="anim-badge flex items-center space-x-2.5 border-b border-[#F0E8DD] pb-3">
          <Mail className="w-4 h-4 text-wedding-rose" />
          <h3 className="anim-title luxury-gold-text font-serif text-lg font-bold">
            Konfirmasi Kehadiran
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guest Name */}
          <div className="space-y-1.5">
            <label className="text-[10px] tracking-wider font-semibold uppercase text-wedding-dark block">
              NAMA LENGKAP TAMU
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap Anda..."
              className="w-full bg-[#FAF6F1] border border-[#ECE2D5] rounded-xl px-3.5 py-2.5 text-xs text-wedding-dark placeholder-wedding-muted focus:outline-hidden focus:border-wedding-rose/60 focus:bg-white transition-all"
            />
          </div>

          {/* Konfirmasi Presensi */}
          <div className="space-y-1.5">
            <label className="text-[10px] tracking-wider font-semibold uppercase text-wedding-dark block">
              KONFIRMASI PRESENSI
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPresence("Hadir")}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 border transition-all ${
                  presence === "Hadir"
                    ? "bg-[#435340] border-[#374534] text-white shadow-xs"
                    : "bg-[#FAF6F1] border-[#ECE2D5] text-wedding-muted hover:text-wedding-dark"
                }`}
              >
                <span>✔</span>
                <span>Hadir</span>
              </button>

              <button
                type="button"
                onClick={() => setPresence("Ragu")}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 border transition-all ${
                  presence === "Ragu"
                    ? "bg-[#435340] border-[#374534] text-white shadow-xs"
                    : "bg-[#FAF6F1] border-[#ECE2D5] text-wedding-muted hover:text-wedding-dark"
                }`}
              >
                <span>?</span>
                <span>Ragu</span>
              </button>

              <button
                type="button"
                onClick={() => setPresence("Maaf")}
                className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1 border transition-all ${
                  presence === "Maaf"
                    ? "bg-[#435340] border-[#374534] text-white shadow-xs"
                    : "bg-[#FAF6F1] border-[#ECE2D5] text-wedding-muted hover:text-wedding-dark"
                }`}
              >
                <span>✕</span>
                <span>Maaf</span>
              </button>
            </div>
          </div>

          {/* Jumlah Tamu */}
          <div className="space-y-1.5">
            <label className="text-[10px] tracking-wider font-semibold uppercase text-wedding-dark block">
              JUMLAH TAMU
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full bg-[#FAF6F1] border border-[#ECE2D5] rounded-xl px-3.5 py-2.5 text-xs text-wedding-dark focus:outline-hidden focus:border-wedding-rose/60 focus:bg-white transition-all cursor-pointer"
            >
              <option value="1 Orang Tamu">1 Orang Tamu</option>
              <option value="2 Orang Tamu">2 Orang Tamu</option>
              <option value="3 Orang Tamu">3 Orang Tamu</option>
              <option value="4 Orang Tamu">4 Orang Tamu</option>
            </select>
          </div>

          {/* Doa & Pesan */}
          <div className="space-y-1.5">
            <label className="text-[10px] tracking-wider font-semibold uppercase text-wedding-dark block">
              UNTAIAN DOA & PESAN HANGAT
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan selamat dan doa untuk mempelai..."
              className="w-full bg-[#FAF6F1] border border-[#ECE2D5] rounded-xl p-3 text-xs text-wedding-dark placeholder-wedding-muted focus:outline-hidden focus:border-wedding-rose/60 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6E3D3D] hover:bg-[#592E2E] text-white py-3.5 px-4 rounded-xl font-medium tracking-wider text-xs uppercase flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98"
          >
            <span>KIRIM KONFIRMASI & DOA</span>
            <Send className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </form>
      </div>

      {/* Papan Doa Restu */}
      <div className="space-y-3 scroll-reveal delay-150">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center space-x-1.5 text-wedding-dark">
            <span className="text-wedding-rose font-bold">❝</span>
            <h4 className="font-serif text-lg font-bold">Papan Doa Restu</h4>
          </div>
          <span className="text-[10px] font-semibold text-wedding-muted bg-[#FAF6F1] border border-[#ECE2D5] px-2.5 py-0.5 rounded-full">
            {wishes.length} Doa Diterima
          </span>
        </div>

        {/* Wishes List */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-card border border-[#EFE6DA] space-y-2 transition-all hover:border-wedding-gold/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F0E6D8] text-wedding-rose font-bold text-[11px] flex items-center justify-center shadow-2xs">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-wedding-dark">
                      {item.name}
                    </h5>
                    <p className="text-[10px] text-wedding-muted">{item.timeAgo}</p>
                  </div>
                </div>

                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                    item.status === "Hadir"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : item.status === "Ragu"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-stone-50 text-stone-600 border border-stone-200"
                  }`}
                >
                  <span>●</span>
                  <span>{item.status}</span>
                </span>
              </div>

              <p className="text-xs text-wedding-dark/85 leading-relaxed font-sans pl-10">
                &ldquo;{item.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Amplop Digital & Kado Kasih */}
      <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#FFFDF9] rounded-3xl p-6 shadow-card border-2 border-[#E7D6C1] space-y-5 text-center scroll-reveal delay-100">
        <div>
          <div className="anim-badge flex items-center justify-center space-x-2 mb-1">
            <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#C6A87D]" />
            <span className="text-[10px] tracking-[0.22em] font-bold uppercase text-[#9B7D54]">
              TANDA KASIH DIGITAL
            </span>
            <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#C6A87D]" />
          </div>
          <h4 className="anim-title luxury-gold-text font-serif text-xl sm:text-2xl font-bold mb-2">
            Amplop Digital &amp; Kado Kasih
          </h4>
          <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto">
            Doa restu Anda merupakan hadiah terindah. Namun jika ingin memberikan tanda kasih secara cashless atau mengirimkan kado, Anda dapat menggunakan opsi berikut:
          </p>
        </div>

        {/* Luxury Metallic Bank Cards */}
        <div className="space-y-3.5 text-left">
          {WEDDING_DATA.bankAccounts.map((acc, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#FFFDF9] via-[#F7EFE4] to-[#EBDAC6] border border-[#D5BE9F] shadow-[0_10px_24px_rgba(100,50,40,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] space-y-4"
            >
              {/* Subtle Metallic Sheen & Decorative Circles */}
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#C6A87D]/12 pointer-events-none" />
              <div className="absolute -right-2 -bottom-10 w-24 h-24 rounded-full bg-[#64222A]/5 pointer-events-none" />

              {/* Top Row: Gold EMV Chip & Bank Logo */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-3">
                  <GoldChipIcon className="w-9 h-7 shadow-2xs" />
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#9B7D54] block">
                      {acc.bankName}
                    </span>
                    <h5 className="font-serif text-sm sm:text-base font-bold text-[#4A2525]">
                      a.n. {acc.accountHolder}
                    </h5>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold tracking-widest px-2.5 py-1 rounded-lg bg-white/90 text-[#64222A] border border-[#DFCCA9] shadow-2xs">
                  {acc.logo}
                </span>
              </div>

              {/* Bottom Row: Embossed Account Number & Copy Pill */}
              <div className="flex items-center justify-between bg-white/90 backdrop-blur-xs rounded-xl py-2.5 px-3.5 border border-[#DFCCA9] relative z-10 shadow-2xs">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.15em] text-[#3B2323]">
                  {acc.accountNumber}
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(acc.accountNumber, acc.bankName)}
                  className="flex items-center space-x-1.5 text-xs font-semibold text-[#64222A] hover:bg-[#F3E8DA] px-3 py-1 rounded-lg bg-[#FAF4EB] border border-[#DFCCA9] transition-colors"
                >
                  {copiedBank === acc.bankName ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700 text-[11px] font-bold">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Physical Gift Shipping Address Card */}
          <div className="bg-white/90 border border-[#DFCCA9] rounded-2xl p-4 shadow-2xs space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FAF3EC] border border-[#E4D2BF] flex items-center justify-center text-[#64222A] shrink-0">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#9B7D54] block">
                    KIRIM KADO FISIK
                  </span>
                  <h5 className="font-serif text-sm font-bold text-[#64222A]">
                    {WEDDING_DATA.giftAddress.recipient}
                  </h5>
                </div>
              </div>
            </div>

            <p className="text-xs text-wedding-muted leading-relaxed bg-[#FAF6F1] p-3 rounded-xl border border-[#ECE2D5]">
              {WEDDING_DATA.giftAddress.address}
            </p>

            <button
              type="button"
              onClick={() =>
                handleCopyAddress(
                  `${WEDDING_DATA.giftAddress.recipient} (${WEDDING_DATA.giftAddress.phone}) - ${WEDDING_DATA.giftAddress.address}`
                )
              }
              className="w-full py-2 px-3 rounded-xl bg-[#FAF4EB] hover:bg-[#F3E8DA] border border-[#DFCCA9] text-[#64222A] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-700">Alamat Berhasil Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat Pengiriman Kado</span>
                </>
              )}
            </button>
          </div>

          {/* QRIS Accordion */}
          <div className="bg-[#FAF6F1] border border-[#DFCCA9] rounded-2xl p-4 shadow-2xs space-y-3">
            <button
              type="button"
              onClick={() => setShowQris(!showQris)}
              className="w-full flex items-center justify-between text-left focus:outline-hidden"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E0D3C5] flex items-center justify-center text-[#64222A]">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-wedding-dark">
                    QRIS Semua Pembayaran
                  </h5>
                  <p className="text-[10px] text-wedding-muted">
                    Gopay, OVO, ShopeePay, Dana, &amp; Mobile Banking
                  </p>
                </div>
              </div>

              {showQris ? (
                <ChevronUp className="w-4 h-4 text-wedding-muted" />
              ) : (
                <ChevronDown className="w-4 h-4 text-wedding-muted" />
              )}
            </button>

            {showQris && (
              <div className="pt-3 border-t border-[#ECE2D5] text-center space-y-3 animate-fadeIn">
                <div className="bg-white p-4 rounded-xl border border-[#E0D3C5] inline-block shadow-2xs">
                  <div className="w-44 h-44 mx-auto flex items-center justify-center bg-stone-50 border border-stone-200 rounded-lg p-2">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Wedding-Chintia-Tommy-Gift"
                      alt="QRIS Wedding Chintia & Tommy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[10px] text-wedding-muted mt-2 font-mono uppercase">
                    NMID: ID1020258192039
                  </p>
                </div>

                <div>
                  <a
                    href="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=Wedding-Chintia-Tommy-Gift"
                    download="QRIS-Wedding-Chintia-Tommy.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-white border border-[#D8C7B5] hover:bg-[#FAF6F1] text-wedding-rose px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-2xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download QR Code</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Closing Card */}
      <div className="text-center pt-4 pb-2 space-y-2 scroll-reveal delay-150">
        <div className="anim-divider flex items-center justify-center space-x-2">
          <div className="h-[1px] w-12 bg-wedding-gold/40" />
          <Heart className="w-3.5 h-3.5 text-wedding-rose fill-wedding-rose" />
          <div className="h-[1px] w-12 bg-wedding-gold/40" />
        </div>

        <p className="anim-desc text-xs text-wedding-muted leading-relaxed max-w-xs mx-auto italic font-serif">
          Atas kehadiran dan doa restu yang tulus, kami ucapkan terima kasih yang tak terhingga.
        </p>

        <div className="pt-1">
          <p className="anim-badge text-[10px] tracking-widest uppercase font-semibold text-wedding-gold-dark">
            KELUARGA BESAR
          </p>
          <h3 className="anim-title luxury-gold-text font-serif italic text-2xl font-bold">
            {WEDDING_DATA.general.coupleShort}
          </h3>
        </div>
      </div>
    </section>
  );
}
