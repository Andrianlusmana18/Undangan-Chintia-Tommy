"use client";

import React, { useState, Suspense, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { AudioProvider, useAudio } from "@/context/AudioContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import CoverSection from "@/components/CoverSection";
import MempelaiSection from "@/components/MempelaiSection";
import AcaraSection from "@/components/AcaraSection";
import CeritaSection from "@/components/CeritaSection";
import RsvpSection from "@/components/RsvpSection";
import PetalEffect from "@/components/PetalEffect";
import ScrollObserver from "@/components/ScrollObserver";
import { WEDDING_DATA } from "@/data/weddingData";

const CONTINUOUS_SECTIONS = ["mempelai", "acara", "cerita", "rsvp"] as const;

/* Ornate Royal Stationery Divider between Continuous Sections */
const RoyalSectionDivider = () => (
  <div className="scroll-reveal py-4 px-8 flex items-center justify-center gap-3 select-none pointer-events-none">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A25A]/55 to-[#7D3E3E]/45 anim-divider" />
    <div className="flex items-center gap-1.5 text-[#C6A25A]">
      <span className="w-1 h-1 rounded-full bg-[#C6A25A]/70" />
      <svg className="w-4 h-4 text-[#7D3E3E]/70" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <span className="w-1 h-1 rounded-full bg-[#C6A25A]/70" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A25A]/55 to-[#7D3E3E]/45 anim-divider" />
  </div>
);

function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  const guestQuery = searchParams.get("to") || searchParams.get("u") || searchParams.get("guest");
  const [guestName, setGuestName] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [currentTab, setCurrentTab] = useState("cover");
  const { stopAndResetAudio } = useAudio();
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (guestQuery) {
      setGuestName(guestQuery);
    }
  }, [guestQuery]);

  // Scroll-Spy: automatically update active navbar tab as user scrolls down/up
  useEffect(() => {
    if (!isOpened) return;

    let ticking = false;

    const updateActiveSection = () => {
      if (isProgrammaticScrollRef.current) {
        ticking = false;
        return;
      }

      // Detection line at ~36% of viewport height for natural reading feel
      const triggerLine = window.innerHeight * 0.36;
      let activeId = "mempelai";

      for (const sectionId of CONTINUOUS_SECTIONS) {
        const el = document.getElementById(`section-${sectionId}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            activeId = sectionId;
          }
        }
      }

      setCurrentTab((prev) => (prev !== activeId ? activeId : prev));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpened]);

  const scrollToSection = useCallback((sectionId: string) => {
    const targetEl = document.getElementById(`section-${sectionId}`);
    if (!targetEl) return;

    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const headerOffset = 68; // Sticky header height allowance
    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setCurrentTab("mempelai");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const handleNavigateToTab = (tab: string) => {
    if (tab === "cover") {
      stopAndResetAudio();
      setIsOpened(false);
      setCurrentTab("cover");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setCurrentTab(tab);

    if (!isOpened) {
      setIsOpened(true);
      setTimeout(() => scrollToSection(tab), 120);
    } else {
      scrollToSection(tab);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] text-wedding-dark flex justify-center selection:bg-wedding-rose/20">
      {/* Falling Romantic Petals Effect (only active after invitation is opened) */}
      {isOpened && <PetalEffect />}

      {/* Universal Scroll-Triggered Reveal Observer */}
      <ScrollObserver currentTab={isOpened ? "opened" : "cover"} />

      {/* Decorative desktop background columns for luxury editorial look */}
      <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 max-w-xs space-y-4 opacity-70 pointer-events-none text-left">
        <div className="w-16 h-16 rounded-full border border-wedding-gold/40 flex items-center justify-center bg-white shadow-soft">
          <span className="font-serif italic text-xl font-bold text-wedding-rose">
            {WEDDING_DATA.general.monogram}
          </span>
        </div>
        <h3 className="font-serif text-3xl font-normal text-wedding-rose leading-tight">
          The Wedding of<br />
          <span className="italic font-semibold">{WEDDING_DATA.general.coupleShort}</span>
        </h3>
        <p className="text-xs text-wedding-muted leading-relaxed font-sans">
          Merupakan suatu kehormatan & kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.
        </p>
        <div className="pt-2 text-[11px] font-semibold tracking-widest text-wedding-gold-dark uppercase">
          {WEDDING_DATA.general.weddingDate}
        </div>
      </div>

      <div className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 max-w-xs space-y-3 opacity-70 pointer-events-none text-right">
        <p className="font-serif italic text-sm text-wedding-muted leading-relaxed">
          &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri...&rdquo;
        </p>
        <p className="text-[10px] tracking-widest font-bold text-wedding-rose uppercase">
          QS. AR-RUM : 21
        </p>
        <div className="text-xs font-serif text-wedding-muted">
          Bekasi, Jawa Barat
        </div>
      </div>

      {/* Main Mobile App Frame Container */}
      <main className="w-full max-w-md min-h-screen bg-[#FCF9F5] shadow-[0_0_50px_rgba(0,0,0,0.06)] relative flex flex-col border-x border-[#EFE6DA]/60">
        {/* Sticky Header (Revealed once invitation is opened) */}
        {isOpened && <Header currentTab={currentTab} />}

        {/* Content Rendering: Cover vs Continuous Scrollable Invitation */}
        {!isOpened ? (
          <div key="cover-view" className="flex-1 w-full animate-page-enter">
            <CoverSection
              guestName={guestName}
              onOpenInvitation={handleOpenInvitation}
            />
          </div>
        ) : (
          <div key="continuous-invitation" className="flex-1 w-full animate-invitation-unveil relative">
            {/* Warm Champagne Silk Veil that gently dissolves as the invitation opens */}
            <div className="pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-[#FAF3E8] via-[#FCF9F5]/60 to-transparent animate-veil-dissolve" />

            {/* SECTION 1: MEMPELAI */}
            <div id="section-mempelai" className="scroll-mt-16">
              <MempelaiSection
                onNavigateToRsvp={() => handleNavigateToTab("rsvp")}
                onNavigateNext={() => handleNavigateToTab("acara")}
              />
            </div>

            <RoyalSectionDivider />

            {/* SECTION 2: ACARA */}
            <div id="section-acara" className="scroll-mt-16">
              <AcaraSection onNavigateNext={() => handleNavigateToTab("cerita")} />
            </div>

            <RoyalSectionDivider />

            {/* SECTION 3: CERITA & GALERI */}
            <div id="section-cerita" className="scroll-mt-16">
              <CeritaSection onNavigateNext={() => handleNavigateToTab("rsvp")} />
            </div>

            <RoyalSectionDivider />

            {/* SECTION 4: RSVP, DOA & TANDA KASIH */}
            <div id="section-rsvp" className="scroll-mt-16">
              <RsvpSection initialGuestName={guestName} />
            </div>
          </div>
        )}

        {/* Floating Bottom Navigation (Revealed once invitation is opened) */}
        {isOpened && (
          <BottomNav currentTab={currentTab} onTabChange={handleNavigateToTab} />
        )}
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <AudioProvider>
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FCF9F5] flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 border-2 border-wedding-rose border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="font-serif italic text-sm text-wedding-muted">
                Mempersiapkan Undangan...
              </p>
            </div>
          </div>
        }
      >
        <WeddingInvitationContent />
      </Suspense>
    </AudioProvider>
  );
}
