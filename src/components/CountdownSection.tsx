"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lang, WEDDING_DATA } from "@/data/weddingData";

interface CountdownSectionProps {
  lang: Lang;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CountdownSection({ lang }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 13,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.couple.targetIsoDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { value: pad(timeLeft.days), label: lang === "hi" ? "दिन" : "Days" },
    { value: pad(timeLeft.hours), label: lang === "hi" ? "घंटे" : "Hours" },
    { value: pad(timeLeft.minutes), label: lang === "hi" ? "मिनट" : "Minutes" },
    { value: pad(timeLeft.seconds), label: lang === "hi" ? "सेकंड" : "Seconds" },
  ];

  return (
    <section
      id="invitation"
      className="relative py-12 px-6 text-center bg-[#f8f2e8] border-b border-[#e5d6c3]/50 overflow-hidden"
    >
      <div className="max-w-sm mx-auto space-y-5">
        {/* Top Sacred Invocations from Photo 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: EASE_ROYAL }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-devanagari text-[#6e1820]/85 font-medium"
        >
          {(lang === "hi" ? WEDDING_DATA.invocations.topHi : WEDDING_DATA.invocations.topEn).map(
            (inv, i) => (
              <span key={i}>{inv}</span>
            )
          )}
        </motion.div>

        {/* Script Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: EASE_ROYAL }}
        >
          <h2
            className={`${
              lang === "hi"
                ? "font-devanagari font-bold text-2xl sm:text-3xl"
                : "font-script text-4xl sm:text-5xl"
            } text-[#4b1015]`}
          >
            {lang === "hi" ? "चि. सौरभ संग सौ. मनीषा" : "Saurabh & Manisha"}
          </h2>
          <p className="font-script text-2xl text-[#8d5d38] -mt-1">
            {lang === "hi" ? "सादर सप्रेम निमंत्रण" : "warmly invite you"}
          </p>
        </motion.div>

        {/* Detailed Family Invocation Copy from Photo 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE_ROYAL }}
          className="space-y-2.5 text-sm sm:text-base font-serif-royal text-[#4d352b] leading-relaxed"
        >
          <p className="italic text-[#6e1820] text-xs sm:text-sm">
            {lang === "hi"
              ? WEDDING_DATA.couple.groomParentsHi
              : WEDDING_DATA.couple.groomParentsEn}
          </p>
          <p className="text-xs sm:text-sm text-[#5c4338]">
            {lang === "hi"
              ? `${WEDDING_DATA.couple.brideHi} (${WEDDING_DATA.couple.brideParentsHi}) के साथ पावन परिणयोत्सव सम्पन्न होने जा रहा है। इस पावन अवसर पर सहपरिवार पधारकर नवदम्पति को अपना स्नेह एवं मंगलमय आशीर्वाद प्रदान करें।`
              : `to celebrate as our families unite in sacred matrimony with ${WEDDING_DATA.couple.brideFullEn}, ${WEDDING_DATA.couple.brideParentsEn}.`}
          </p>
        </motion.div>

        {/* Animated Drawing Divider Flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex items-center justify-center gap-3 py-1"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_ROYAL }}
            className="h-px w-14 bg-[#c69c5b]/70 origin-right"
          />
          <motion.span
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "backOut" }}
            className="w-2 h-2 bg-[#6e1820]"
          />
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_ROYAL }}
            className="h-px w-14 bg-[#c69c5b]/70 origin-left"
          />
        </motion.div>

        {/* Countdown Block */}
        <div className="pt-1">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, ease: EASE_ROYAL }}
            className={`${
              lang === "hi"
                ? "font-devanagari font-semibold text-lg"
                : "font-script text-3xl"
            } text-[#5c3d31] mb-4`}
          >
            {lang === "hi"
              ? "शुभ उत्सव प्रारंभ होने में शेष समय"
              : "The Celebration Begins In"}
          </motion.h3>

          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 text-[#4b1015]">
            {units.map((u, idx) => (
              <React.Fragment key={u.label}>
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.88 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.1,
                    ease: EASE_ROYAL,
                  }}
                  className="flex flex-col items-center min-w-[54px] py-1.5 px-1 rounded-lg bg-[#efe4d3]/35 border border-[#c69c5b]/25 shadow-[0_2px_10px_rgba(110,24,32,0.04)]"
                >
                  <span className="text-3xl sm:text-4xl font-serif-royal font-semibold tracking-wider tabular-nums">
                    {u.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8d5d38] mt-1">
                    {u.label}
                  </span>
                </motion.div>
                {idx < units.length - 1 && (
                  <span className="text-2xl font-serif-royal text-[#8d5d38] -mt-4">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
