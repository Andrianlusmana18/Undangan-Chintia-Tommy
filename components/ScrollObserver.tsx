"use client";

import { useEffect } from "react";

interface ScrollObserverProps {
  currentTab: string;
}

export default function ScrollObserver({ currentTab }: ScrollObserverProps) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Use requestAnimationFrame so DOM layout is computed accurately
    const rafId = requestAnimationFrame(() => {
      const targets = document.querySelectorAll<HTMLElement>(
        ".scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right"
      );

      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          // Positive bottom margin of 40px so cards start gliding in just before entering the viewport,
          // ensuring zero awkward empty blank space while scrolling
          rootMargin: "0px 0px 40px 0px",
          threshold: 0.05,
        }
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the visible fold or above, show immediately with zero delay
        if (rect.top <= window.innerHeight * 0.95) {
          el.classList.add("is-visible");
        } else {
          observer?.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [currentTab]);

  return null;
}
