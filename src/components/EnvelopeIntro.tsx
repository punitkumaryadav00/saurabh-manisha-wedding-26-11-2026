"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lang } from "@/data/weddingData";

interface EnvelopeIntroProps {
  onOpen: () => void;
  onSealTap?: () => void;
  lang: Lang;
  onToggleLang: () => void;
}

type OpeningStage = "closed" | "igniting" | "bursting" | "dissolving" | "opened";

// Deterministic sparkling dust motes radiating during the burst
const SPARK_MOTES = [
  { id: 1, x: -75, y: -90, delay: 0.05, size: 5 },
  { id: 2, x: 85, y: -70, delay: 0.12, size: 6 },
  { id: 3, x: -110, y: 20, delay: 0.18, size: 4 },
  { id: 4, x: 115, y: 35, delay: 0.08, size: 5 },
  { id: 5, x: -65, y: 110, delay: 0.22, size: 6 },
  { id: 6, x: 75, y: 120, delay: 0.15, size: 4 },
  { id: 7, x: 0, y: -135, delay: 0.1, size: 5 },
  { id: 8, x: -45, y: -45, delay: 0.25, size: 3.5 },
  { id: 9, x: 52, y: -35, delay: 0.28, size: 4 },
  { id: 10, x: -95, y: -30, delay: 0.3, size: 4.5 },
  { id: 11, x: 98, y: -15, delay: 0.2, size: 3.5 },
  { id: 12, x: 12, y: 145, delay: 0.16, size: 5 },
];

// Ornate Embossed Rose SVG (dark leather when closed, molten gold when lit)
function EmbossedRose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      {/* Outer petals */}
      <path
        d="M60 18 C75 18 90 29 94 44 C104 52 104 72 91 83 C84 96 68 102 54 99 C38 100 24 89 22 73 C14 60 19 41 32 33 C39 22 50 18 60 18 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M60 28 C73 28 83 37 84 50 C90 58 87 73 76 80 C68 89 52 89 44 80 C33 74 30 58 37 49 C38 36 48 28 60 28 Z"
        stroke="currentColor"
        strokeWidth="2.1"
        fill="currentColor"
        fillOpacity="0.16"
      />
      {/* Mid petals */}
      <path
        d="M60 39 C69 39 76 46 76 56 C78 65 71 75 60 76 C49 76 42 66 44 56 C44 46 51 39 60 39 Z"
        stroke="currentColor"
        strokeWidth="1.9"
        fill="currentColor"
        fillOpacity="0.18"
      />
      {/* Inner spiral bud */}
      <path
        d="M60 49 C66 49 69 55 66 61 C62 66 54 65 52 59 C51 53 56 48 61 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Surrounding delicate leaves */}
      <path d="M22 44 Q8 32 14 20 Q28 24 22 44 Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
      <path d="M98 44 Q112 32 106 20 Q92 24 98 44 Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
      <path d="M26 84 Q12 96 18 106 Q32 102 26 84 Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
      <path d="M94 84 Q108 96 102 106 Q88 102 94 84 Z" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function EnvelopeIntro({
  onOpen,
  onSealTap,
  lang,
  onToggleLang,
}: EnvelopeIntroProps) {
  const [stage, setStage] = useState<OpeningStage>("closed");

  const handleTapSeal = () => {
    if (stage !== "closed") return;
    onSealTap?.();

    // Stage 1: Diagonal seams & botanical leaves ignite in molten gold (matches video 00:02 - 00:04)
    setStage("igniting");

    // Stage 2: Top flap lifts, blinding golden sunburst & rays erupt below seal, side roses glow gold (matches video 00:05 - 00:07)
    setTimeout(() => {
      setStage("bursting");
    }, 680);

    // Stage 3: Warm sunlit cream wash blooms across screen (matches video 00:07 - 00:08)
    setTimeout(() => {
      setStage("dissolving");
    }, 1850);

    // Stage 4: Reveal invitation hero smoothly inside the cream wash
    setTimeout(() => {
      setStage("opened");
      onOpen();
    }, 2350);
  };

  if (stage === "opened") return null;

  const isIgnitingOrMore =
    stage === "igniting" || stage === "bursting" || stage === "dissolving";
  const isBurstingOrMore = stage === "bursting" || stage === "dissolving";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1a0706]"
      >
        {/* Centered Mobile Card Envelope Frame matching the video */}
        <div className="relative w-full h-full max-w-[460px] mx-auto envelope-leather shadow-2xl overflow-hidden flex items-center justify-center">
          {/* Subtle top-right language switcher pill */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleLang();
            }}
            className={`absolute top-4 right-4 z-40 px-3 py-1 rounded-full bg-black/45 border border-[#ebcb96]/40 text-[#ebcb96] text-xs font-serif-royal tracking-wider hover:bg-black/65 transition cursor-pointer ${
              isBurstingOrMore ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {lang === "en" ? "हिंदी" : "ENG"}
          </button>

          {/* Subtle top-center Ganesh invocation */}
          <div
            className={`absolute top-5 left-0 right-0 z-30 text-center pointer-events-none transition-opacity duration-500 ${
              isBurstingOrMore ? "opacity-0" : "opacity-85"
            }`}
          >
            <p className="text-[11px] tracking-[0.22em] text-[#ebcb96]/80 font-devanagari">
              {lang === "hi" ? "॥ श्री गणेशाय नमः ॥" : "|| SHRI GANESHAYA NAMAH ||"}
            </p>
          </div>

          {/* ========================================================== */}
          {/* LEFT & RIGHT FLAPS (With Dark-Embossed -> Gold-Lit Roses)  */}
          {/* ========================================================== */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              clipPath: "polygon(0 0, 50% 50%, 0 100%)",
              background:
                "linear-gradient(118deg, #3c1411 0%, #240a08 62%, #180605 100%)",
            }}
          >
            {/* Blind-embossed subtle leather roses & glow when burst hits */}
            <motion.div
              animate={{
                color: isBurstingOrMore
                  ? "#ffd98a"
                  : isIgnitingOrMore
                  ? "#9b6434"
                  : "#471c17",
                opacity: isBurstingOrMore ? 0.92 : isIgnitingOrMore ? 0.65 : 0.45,
                filter: isBurstingOrMore
                  ? "drop-shadow(0 0 16px rgba(255, 210, 120, 0.85))"
                  : "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.8))",
              }}
              transition={{ duration: 0.75 }}
              className="w-full h-full relative"
            >
              <EmbossedRose className="w-28 h-28 absolute left-[10%] top-[43%] -translate-y-1/2" />
              <EmbossedRose className="w-20 h-20 absolute left-[3%] top-[24%] opacity-70" />
              <EmbossedRose className="w-20 h-20 absolute left-[4%] bottom-[22%] opacity-70" />
            </motion.div>
          </div>

          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
              background:
                "linear-gradient(242deg, #3c1411 0%, #240a08 62%, #180605 100%)",
            }}
          >
            <motion.div
              animate={{
                color: isBurstingOrMore
                  ? "#ffd98a"
                  : isIgnitingOrMore
                  ? "#9b6434"
                  : "#471c17",
                opacity: isBurstingOrMore ? 0.92 : isIgnitingOrMore ? 0.65 : 0.45,
                filter: isBurstingOrMore
                  ? "drop-shadow(0 0 16px rgba(255, 210, 120, 0.85))"
                  : "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.8))",
              }}
              transition={{ duration: 0.75 }}
              className="w-full h-full relative"
            >
              <EmbossedRose className="w-28 h-28 absolute right-[10%] top-[43%] -translate-y-1/2 scale-x-[-1]" />
              <EmbossedRose className="w-20 h-20 absolute right-[3%] top-[24%] opacity-70 scale-x-[-1]" />
              <EmbossedRose className="w-20 h-20 absolute right-[4%] bottom-[22%] opacity-70 scale-x-[-1]" />
            </motion.div>
          </div>

          {/* ========================================================== */}
          {/* BOTTOM FLAP + EMBOSSED GOLD BOTANICAL LEAVES ALONG V-SEAM  */}
          {/* ========================================================== */}
          <motion.div
            animate={isBurstingOrMore ? { y: "4%" } : { y: "0%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
              background:
                "linear-gradient(0deg, #210907 0%, #3d1511 65%, #511c16 100%)",
              boxShadow: "inset 0 14px 28px rgba(0,0,0,0.65)",
            }}
          >
            <svg
              viewBox="0 0 400 700"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="goldLeafVibrant" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    stopColor={isIgnitingOrMore ? "#d99438" : "#5a321c"}
                  />
                  <stop
                    offset="55%"
                    stopColor={isIgnitingOrMore ? "#ffe3a4" : "#9c6d41"}
                  />
                  <stop
                    offset="100%"
                    stopColor={isIgnitingOrMore ? "#ffffff" : "#caa06c"}
                  />
                </linearGradient>
              </defs>

              {/* Left Diagonal V-Branch Hugging Seam */}
              <g
                stroke="url(#goldLeafVibrant)"
                fill="url(#goldLeafVibrant)"
                fillOpacity={isBurstingOrMore ? 0.9 : isIgnitingOrMore ? 0.85 : 0.42}
                strokeWidth="1.2"
                style={{
                  filter: isIgnitingOrMore
                    ? "drop-shadow(0 0 10px rgba(255,212,120,0.85))"
                    : "none",
                  transition: "all 0.65s ease",
                }}
              >
                <path d="M 18 688 Q 92 556 172 418" fill="none" strokeWidth="1.8" />
                <ellipse cx="42" cy="640" rx="16" ry="6" transform="rotate(-42 42 640)" />
                <ellipse cx="66" cy="656" rx="15" ry="6" transform="rotate(15 66 656)" />
                <ellipse cx="66" cy="596" rx="15" ry="6" transform="rotate(-42 66 596)" />
                <ellipse cx="92" cy="610" rx="14" ry="5.5" transform="rotate(18 92 610)" />
                <ellipse cx="92" cy="552" rx="14" ry="5.5" transform="rotate(-42 92 552)" />
                <ellipse cx="118" cy="566" rx="13" ry="5" transform="rotate(20 118 566)" />
                <ellipse cx="118" cy="508" rx="13" ry="5" transform="rotate(-40 118 508)" />
                <ellipse cx="144" cy="522" rx="12" ry="4.5" transform="rotate(22 144 522)" />
                <ellipse cx="144" cy="466" rx="11" ry="4.2" transform="rotate(-38 144 466)" />
                <circle cx="174" cy="414" r="4.5" />
              </g>

              {/* Right Diagonal V-Branch Hugging Seam */}
              <g
                stroke="url(#goldLeafVibrant)"
                fill="url(#goldLeafVibrant)"
                fillOpacity={isBurstingOrMore ? 0.9 : isIgnitingOrMore ? 0.85 : 0.42}
                strokeWidth="1.2"
                style={{
                  filter: isIgnitingOrMore
                    ? "drop-shadow(0 0 10px rgba(255,212,120,0.85))"
                    : "none",
                  transition: "all 0.65s ease",
                }}
              >
                <path d="M 382 688 Q 308 556 228 418" fill="none" strokeWidth="1.8" />
                <ellipse cx="358" cy="640" rx="16" ry="6" transform="rotate(42 358 640)" />
                <ellipse cx="334" cy="656" rx="15" ry="6" transform="rotate(-15 334 656)" />
                <ellipse cx="334" cy="596" rx="15" ry="6" transform="rotate(42 334 596)" />
                <ellipse cx="308" cy="610" rx="14" ry="5.5" transform="rotate(-18 308 610)" />
                <ellipse cx="308" cy="552" rx="14" ry="5.5" transform="rotate(42 308 552)" />
                <ellipse cx="282" cy="566" rx="13" ry="5" transform="rotate(-20 282 566)" />
                <ellipse cx="282" cy="508" rx="13" ry="5" transform="rotate(40 282 508)" />
                <ellipse cx="256" cy="522" rx="12" ry="4.5" transform="rotate(-22 256 522)" />
                <ellipse cx="256" cy="466" rx="11" ry="4.2" transform="rotate(38 256 466)" />
                <circle cx="226" cy="414" r="4.5" />
              </g>

              {/* Center Lower Sprigs glowing directly beneath sunflare (as seen in 00:06-00:07) */}
              <g
                stroke="url(#goldLeafVibrant)"
                fill="url(#goldLeafVibrant)"
                fillOpacity={isBurstingOrMore ? 0.9 : 0.25}
                style={{ transition: "all 0.65s ease" }}
              >
                <path d="M 162 630 L 146 668" strokeWidth="1.4" />
                <ellipse cx="152" cy="648" rx="7" ry="3.2" transform="rotate(-50 152 648)" />
                <ellipse cx="160" cy="654" rx="7" ry="3.2" transform="rotate(35 160 654)" />
                <path d="M 238 630 L 254 668" strokeWidth="1.4" />
                <ellipse cx="248" cy="648" rx="7" ry="3.2" transform="rotate(50 248 648)" />
                <ellipse cx="240" cy="654" rx="7" ry="3.2" transform="rotate(-35 240 654)" />
              </g>
            </svg>
          </motion.div>

          {/* ========================================================== */}
          {/* DIAGONAL MOLTEN GOLD SEAM RAYS ACROSS ENVELOPE             */}
          {/* ========================================================== */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
          >
            <defs>
              <linearGradient id="seamIdle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6c4524" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#dfc08b" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6c4524" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="seamBlaze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c57b2a" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#fff7d6" stopOpacity="1" />
                <stop offset="100%" stopColor="#c57b2a" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Primary Diagonal Seams */}
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke={isIgnitingOrMore ? "url(#seamBlaze)" : "url(#seamIdle)"}
              strokeWidth={isBurstingOrMore ? "0.85" : isIgnitingOrMore ? "0.65" : "0.32"}
              style={{
                filter: isIgnitingOrMore
                  ? "drop-shadow(0 0 6px rgba(255, 224, 145, 0.95))"
                  : "none",
                transition: "all 0.55s ease",
              }}
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke={isIgnitingOrMore ? "url(#seamBlaze)" : "url(#seamIdle)"}
              strokeWidth={isBurstingOrMore ? "0.85" : isIgnitingOrMore ? "0.65" : "0.32"}
              style={{
                filter: isIgnitingOrMore
                  ? "drop-shadow(0 0 6px rgba(255, 224, 145, 0.95))"
                  : "none",
                transition: "all 0.55s ease",
              }}
            />
          </svg>

          {/* ========================================================== */}
          {/* TOP FLAP + ATTACHED S&M WAX SEAL (Lifts up on light burst) */}
          {/* ========================================================== */}
          <motion.div
            animate={isBurstingOrMore ? { y: "-8%" } : { y: "0%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            {/* Triangular Top Flap */}
            <div
              className="w-full h-full"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%)",
                background:
                  "linear-gradient(180deg, #210907 0%, #3d1511 72%, #59201a 100%)",
                filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.72))",
              }}
            >
              {/* Faint embossed roses on top flap catching burst light */}
              <motion.div
                animate={{
                  color: isBurstingOrMore ? "#ffd98a" : "#4a1c17",
                  opacity: isBurstingOrMore ? 0.7 : 0.42,
                }}
                transition={{ duration: 0.7 }}
                className="w-full h-full relative"
              >
                <EmbossedRose className="w-24 h-24 absolute left-[24%] top-[12%]" />
                <EmbossedRose className="w-24 h-24 absolute right-[24%] top-[12%] scale-x-[-1]" />
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* PHOTOREALISTIC RADIANT GOLDEN SUNBURST LIGHT ANIMATION     */}
          {/* (Triggers between envelope flaps & right beneath the seal!) */}
          {/* ========================================================== */}

          {/* Stage 1 Pre-Glow: Amber ember right behind seal edges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              isIgnitingOrMore
                ? { opacity: isBurstingOrMore ? 1 : 0.85, scale: isBurstingOrMore ? 1.45 : 1 }
                : { opacity: 0, scale: 0.4 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] z-20 pointer-events-none"
          >
            <div
              className="w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,244,210,0.95) 0%, rgba(255,190,85,0.68) 38%, rgba(210,120,30,0) 75%)",
                filter: "blur(10px)",
              }}
            />
          </motion.div>

          {/* Stage 2 Explosion: Starburst Conic Light Rays + Horizontal Anamorphic Flare */}
          {isBurstingOrMore && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: stage === "dissolving" ? 2.4 : 1.15 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
            >
              {/* Rotating Volumetric Golden Light Beams */}
              <motion.div
                animate={{ rotate: 22 }}
                transition={{ duration: 2.2, ease: "linear" }}
                className="w-[520px] h-[520px] rounded-full opacity-85"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(255,235,175,0.55) 14deg, transparent 32deg, rgba(255,210,120,0.45) 56deg, transparent 78deg, rgba(255,245,205,0.6) 104deg, transparent 132deg, rgba(255,215,130,0.5) 168deg, transparent 196deg, rgba(255,235,180,0.55) 228deg, transparent 258deg, rgba(255,220,145,0.45) 292deg, transparent 325deg, rgba(255,240,190,0.5) 346deg, transparent 360deg)",
                  filter: "blur(5px)",
                  maskImage: "radial-gradient(circle, black 22%, transparent 72%)",
                  WebkitMaskImage: "radial-gradient(circle, black 22%, transparent 72%)",
                }}
              />

              {/* Horizontal & Vertical Prism Lens Flare Bars (exact 00:05 - 00:06 effect) */}
              <div
                className="absolute w-[115%] h-14 -translate-y-[-6px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.98) 0%, rgba(255,235,175,0.85) 28%, rgba(255,190,90,0) 75%)",
                  filter: "blur(6px)",
                }}
              />
              <div
                className="absolute w-16 h-[78%]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,225,155,0.7) 35%, rgba(255,180,75,0) 75%)",
                  filter: "blur(7px)",
                }}
              />

              {/* Blinding White-Gold Diamond Core directly beneath lifted Wax Seal */}
              <motion.div
                initial={{ scale: 0.35, opacity: 0.7 }}
                animate={{
                  scale: stage === "dissolving" ? 4.2 : [0.85, 1.15, 1.05],
                  opacity: 1,
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute translate-y-4 w-36 h-36 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #ffffff 0%, #fff7db 24%, #ffd685 52%, rgba(245, 168, 70, 0) 78%)",
                  boxShadow: "0 0 70px 26px rgba(255, 224, 150, 0.9)",
                }}
              />

              {/* Radiating Golden Sparkle Motes */}
              {SPARK_MOTES.map((mote) => (
                <motion.span
                  key={mote.id}
                  initial={{ x: 0, y: 12, opacity: 0, scale: 0 }}
                  animate={{
                    x: mote.x,
                    y: mote.y,
                    opacity: [0, 1, 0.85, 0],
                    scale: [0.2, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.25,
                    delay: mote.delay,
                    ease: "easeOut",
                  }}
                  className="absolute rounded-full bg-[#fff5d6]"
                  style={{
                    width: mote.size,
                    height: mote.size,
                    boxShadow: "0 0 8px 2px rgba(255, 220, 130, 0.95)",
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* ========================================================== */}
          {/* INTERACTIVE S&M WAX SEAL (Glows & Lifts on Unseal)          */}
          {/* ========================================================== */}
          <motion.button
            onClick={handleTapSeal}
            whileHover={stage === "closed" ? { scale: 1.06 } : undefined}
            whileTap={stage === "closed" ? { scale: 0.94 } : undefined}
            animate={
              stage === "dissolving"
                ? { y: -62, scale: 1.15, opacity: 0 }
                : isBurstingOrMore
                ? {
                    y: -52,
                    scale: 1.05,
                    opacity: 0.95,
                    filter: "drop-shadow(0 0 28px rgba(255, 215, 130, 0.95))",
                  }
                : isIgnitingOrMore
                ? {
                    y: -4,
                    scale: 1.04,
                    filter: "drop-shadow(0 0 18px rgba(255, 200, 110, 0.85))",
                  }
                : { scale: [1, 1.03, 1] }
            }
            transition={
              stage === "closed"
                ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
            }
            aria-label="Open Wedding Invitation"
            className="relative z-40 group focus:outline-none cursor-pointer"
          >
            {/* Outer organic wax halo */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[47%_53%_49%_51%/51%_48%_52%_49%] wax-seal-peach flex items-center justify-center p-2 transition-transform">
              {/* Inner Stamped Circle */}
              <div className="w-full h-full rounded-full border-2 border-[#a86944]/45 shadow-inner flex flex-col items-center justify-center relative">
                <span className="font-script text-3xl sm:text-4xl text-[#6e3a20] drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)] select-none pr-1">
                  S&amp;M
                </span>
              </div>
            </div>

            {/* Subtle prompt below seal */}
            <div
              className={`absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                stage === "closed" ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#ebcb96]/90 font-serif-royal animate-pulse">
                {lang === "hi" ? "निमंत्रण खोलने हेतु स्पर्श करें" : "Tap Seal To Open"}
              </span>
            </div>
          </motion.button>

          {/* ========================================================== */}
          {/* STAGE 3 WARM CREAM SUNLIGHT DISSOLVE INTO HERO ARCH        */}
          {/* ========================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === "dissolving" ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-b from-[#fff5de] via-[#f8f2e8] to-[#f8f2e8]"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
