"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lang, WEDDING_DATA } from "@/data/weddingData";

interface ScheduleTimelineProps {
  lang: Lang;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Crisp SVG Rose Bud Icon matching the burgundy rose milestones along the center line in the video
function RoseNodeIcon() {
  return (
    <motion.div
      initial={{ scale: 0.25, rotate: -45, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 230, damping: 16 }}
      className="w-8 h-8 rounded-full bg-[#f8f2e8] flex items-center justify-center z-10 shadow-sm border border-[#e2cdb4]"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <defs>
          <radialGradient id="roseGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#a82c3a" />
            <stop offset="60%" stopColor="#6e1520" />
            <stop offset="100%" stopColor="#3d080f" />
          </radialGradient>
        </defs>
        <path
          d="M16 4 C10 4, 6 9, 7 15 C8 21, 13 26, 16 26 C19 26, 24 21, 25 15 C26 9, 22 4, 16 4 Z"
          fill="url(#roseGrad)"
        />
        <path
          d="M16 7 C13 7, 11 10, 12 14 C13 18, 19 18, 20 14 C21 10, 19 7, 16 7 Z"
          fill="none"
          stroke="#f3b8c0"
          strokeWidth="0.9"
          strokeOpacity="0.65"
        />
        <path
          d="M13 12 C14 9, 18 9, 19 12"
          fill="none"
          stroke="#f3b8c0"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
        {/* Small sage leaves underneath */}
        <path d="M10 24 Q13 27 16 26 Q13 23 10 24 Z" fill="#607358" />
        <path d="M22 24 Q19 27 16 26 Q19 23 22 24 Z" fill="#607358" />
      </svg>
    </motion.div>
  );
}

export function ScheduleTimeline({ lang }: ScheduleTimelineProps) {
  const day1Events = WEDDING_DATA.schedule.slice(0, 3);
  const day2Events = WEDDING_DATA.schedule.slice(3);

  return (
    <section
      id="schedule"
      className="py-12 px-5 bg-[#f8f2e8] border-b border-[#e5d6c3]/50 overflow-hidden"
    >
      <div className="max-w-sm mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE_ROYAL }}
          className="text-center mb-8"
        >
          <p className="text-[11px] font-devanagari text-[#6e1820]/80 tracking-wider mb-1">
            {lang === "hi"
              ? WEDDING_DATA.invocations.mantraHi
              : "With the blessings of Lord Ganesha"}
          </p>
          <h2
            className={`${
              lang === "hi"
                ? "font-devanagari font-bold text-3xl"
                : "font-script text-4xl sm:text-5xl"
            } text-[#4b1015]`}
          >
            {lang === "hi" ? "मांगलिक कार्यक्रम" : "Schedule of Events"}
          </h2>
        </motion.div>

        {/* Day 1 Header: Tuesday, 24 Nov 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_ROYAL }}
          className="text-center mb-5"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#6e1820]/10 border border-[#6e1820]/25 text-[#6e1820] text-xs font-semibold tracking-wide">
            {lang === "hi"
              ? "मंगलवार, दिनांक 24 नवम्बर, 2026"
              : "Tuesday, November 24, 2026"}
          </span>
        </motion.div>

        {/* Vertical Timeline Container for Day 1 */}
        <div className="relative mb-10">
          {/* Animated Drawing Center Stem Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.0, ease: EASE_ROYAL }}
            className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[1.5px] bg-[#b59479]/65 origin-top"
          />

          <div className="space-y-8">
            {day1Events.map((ev, index) => (
              <div
                key={ev.id}
                className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3"
              >
                {/* Left Column: Time slides from left */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: EASE_ROYAL,
                  }}
                  className="text-right pr-2"
                >
                  <span className="font-serif-royal text-lg sm:text-xl font-medium text-[#422c24] tracking-wide">
                    {lang === "hi" ? ev.timeHi : ev.timeEn}
                  </span>
                </motion.div>

                {/* Center Rose Milestone Node */}
                <RoseNodeIcon />

                {/* Right Column: Title & Subtle Note slide from right */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.05,
                    ease: EASE_ROYAL,
                  }}
                  className="text-left pl-2"
                >
                  <h4 className="font-serif-royal text-base sm:text-lg font-semibold text-[#4b1015] leading-tight">
                    {lang === "hi" ? ev.titleHi : ev.titleEn}
                  </h4>
                  <p className="text-[11px] text-[#785f54] mt-0.5 leading-snug">
                    {lang === "hi" ? ev.subtitleHi : ev.subtitleEn}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 Header: Thursday, 26 Nov 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_ROYAL }}
          className="text-center mb-5"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#6e1820] text-[#f8f2e8] text-xs font-semibold tracking-wide shadow-sm">
            {lang === "hi"
              ? "वीरवार, दिनांक 26 नवम्बर, 2026 (शुभ विवाह)"
              : "Thursday, November 26, 2026 (Wedding Day)"}
          </span>
        </motion.div>

        {/* Vertical Timeline Container for Day 2 */}
        <div className="relative">
          {/* Animated Drawing Center Stem Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: EASE_ROYAL }}
            className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[1.5px] bg-[#b59479]/65 origin-top"
          />

          <div className="space-y-8">
            {day2Events.map((ev, index) => (
              <div
                key={ev.id}
                className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3"
              >
                {/* Left Column: Time slides from left */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: EASE_ROYAL,
                  }}
                  className="text-right pr-2"
                >
                  <span className="font-serif-royal text-lg sm:text-xl font-medium text-[#422c24] tracking-wide">
                    {lang === "hi" ? ev.timeHi : ev.timeEn}
                  </span>
                </motion.div>

                {/* Center Rose Milestone Node */}
                <RoseNodeIcon />

                {/* Right Column: Title & Subtle Note slide from right */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08 + 0.05,
                    ease: EASE_ROYAL,
                  }}
                  className="text-left pl-2"
                >
                  <h4 className="font-serif-royal text-base sm:text-lg font-semibold text-[#4b1015] leading-tight">
                    {lang === "hi" ? ev.titleHi : ev.titleEn}
                  </h4>
                  <p className="text-[11px] text-[#785f54] mt-0.5 leading-snug">
                    {lang === "hi" ? ev.subtitleHi : ev.subtitleEn}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
