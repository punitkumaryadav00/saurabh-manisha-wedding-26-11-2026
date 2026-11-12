"use client";

import React, { useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";

interface AudioPlayerButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

// Romantic classical chord arpeggio notes in Hz (Warm C Major / A Minor / F Major / G Major)
const MELODY_SEQUENCE = [
  // Measure 1 (Cadd9)
  261.63, 329.63, 392.0, 523.25, 587.33, 523.25, 392.0, 329.63,
  // Measure 2 (G/B)
  246.94, 392.0, 493.88, 587.33, 659.25, 587.33, 493.88, 392.0,
  // Measure 3 (Am7)
  220.0, 329.63, 392.0, 523.25, 659.25, 523.25, 392.0, 329.63,
  // Measure 4 (Fmaj7)
  174.61, 261.63, 349.23, 440.0, 523.25, 440.0, 349.23, 261.63,
];

export function AudioPlayerButton({ isPlaying, onToggle }: AudioPlayerButtonProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);

  useEffect(() => {
    const playStep = () => {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state !== "running") return;

      const freq = MELODY_SEQUENCE[stepRef.current % MELODY_SEQUENCE.length];
      stepRef.current += 1;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const subOsc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Warm string/harp blend
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(freq * 0.5, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.045, now + 0.14);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(filter);
      subOsc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      subOsc.start(now);
      osc.stop(now + 1.45);
      subOsc.stop(now + 1.45);
    };

    if (isPlaying) {
      try {
        if (!audioCtxRef.current) {
          const AudioCtx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }
        playStep();
        timerRef.current = window.setInterval(playStep, 480);
      } catch {
        // Ignore browser autoplay block if triggered programmatically
      }
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state === "running") {
        audioCtxRef.current.suspend();
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying]);

  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      title={isPlaying ? "Pause wedding melody" : "Play wedding melody"}
      className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#361614]/85 hover:bg-[#5e181f] text-[#f5e1cc] backdrop-blur-md border border-[#e2be84]/40 shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
    >
      {isPlaying ? (
        <Pause className="w-4 h-4 fill-current" />
      ) : (
        <Play className="w-4 h-4 fill-current ml-0.5" />
      )}
    </button>
  );
}

