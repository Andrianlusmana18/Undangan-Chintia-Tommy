"use client";

import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export default function PetalEffect() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const colors = ["#F4C2C2", "#E8A598", "#FAD0C4", "#FFD1DC", "#E0A5A5"];
    const generated: Petal[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 8 + 9,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(generated);
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal-floating"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", filter: "drop-shadow(0 2px 4px rgba(224,165,165,0.3))" }}
          >
            <path
              d="M15 0C6 10 0 22 2 30C4 38 15 40 15 40C15 40 26 38 28 30C30 22 24 10 15 0Z"
              fill={petal.color}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
