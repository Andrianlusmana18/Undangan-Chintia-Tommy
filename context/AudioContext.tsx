"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  restartAndPlayAudio: () => void;
  stopAndResetAudio: () => void;
  hasInteracted: boolean;
  setHasInteracted: (val: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Priority: local /audio/bgm.mp3 if user dropped it, otherwise stream romantic acoustic instrumental
    const localSrc = "/audio/bgm.mp3";
    const fallbackSrc = "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c8914652e3.mp3?filename=romantic-moment-112199.mp3";

    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";

    // Try local audio first, fallback to streaming if not found
    fetch(localSrc, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          audio.src = localSrc;
        } else {
          audio.src = fallbackSrc;
        }
      })
      .catch(() => {
        audio.src = fallbackSrc;
      });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const playAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.log("Audio autoplay prevented by browser:", err);
        });
    }
  }, []);

  const restartAndPlayAudio = useCallback(() => {
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
      } catch (e) {
        console.log("Audio seek reset:", e);
      }
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.log("Audio autoplay prevented by browser:", err);
        });
    }
  }, []);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const stopAndResetAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      try {
        audioRef.current.currentTime = 0;
      } catch (e) {
        console.log("Audio reset:", e);
      }
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        playAudio,
        pauseAudio,
        restartAndPlayAudio,
        stopAndResetAudio,
        hasInteracted,
        setHasInteracted,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
