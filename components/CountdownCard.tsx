"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { WEDDING_DATA } from "@/data/weddingData";

export default function CountdownCard({ className = "" }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(WEDDING_DATA.general.targetDateIso).getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`w-full bg-white rounded-3xl p-5 border border-[#EFE6DA] shadow-card text-center ${className}`}>
      <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider text-wedding-muted uppercase mb-3">
        <span>MENGHITUNG HARI</span>
        <span className="flex items-center space-x-1 text-wedding-rose">
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
        ].map((item) => (
          <div key={item.label} className="bg-[#FAF6F1] border border-[#ECE2D5] rounded-xl py-2.5 px-1">
            <span className="font-serif text-2xl font-bold text-wedding-rose block leading-none">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] font-semibold text-wedding-muted tracking-wider uppercase mt-1 block">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
