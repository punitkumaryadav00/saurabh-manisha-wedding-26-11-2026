"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Lang, WEDDING_DATA } from "@/data/weddingData";

interface HeroArchProps {
  lang: Lang;
  onToggleLang: () => void;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroArch({ lang, onToggleLang }: HeroArchProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax depth on scroll down
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-56px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.68], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full aspect-[9/16] flex flex-col items-center justify-start overflow-hidden bg-[#f8f2e8]"
    >
      {/* Top-right subtle Language Switcher */}
      <button
        onClick={onToggleLang}
        className="absolute top-3.5 right-3.5 z-30 px-3 py-1 rounded-full bg-[#f8f2e8]/90 backdrop-blur-sm border border-[#c69c5b]/60 text-[#5c1616] text-[11px] font-semibold tracking-wider shadow-sm hover:bg-[#5c1616] hover:text-[#f8f2e8] transition-colors cursor-pointer"
      >
        {lang === "en" ? "हिंदी में देखें" : "View in English"}
      </button>

      {/* Hero Archway Illustration with Swans & Roses + Scroll Parallax */}
      <div className="relative w-full h-full flex flex-col items-center overflow-hidden">
        <motion.img
          src="/images/hero-swans-arch.jpg"
          alt="Saurabh and Manisha Wedding Arch"
          style={{ scale: bgScale, y: bgY }}
          initial={{ scale: 1.06, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.35, ease: EASE_ROYAL }}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none will-change-transform"
        />

        {/* Soft top cream radial wash so calligraphy text inside arch pops effortlessly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 36%, rgba(250, 244, 234, 0.72) 0%, rgba(250, 244, 234, 0.22) 45%, rgba(250, 244, 234, 0) 72%)",
          }}
        />

        {/* Soft bottom melt into the parchment scroll */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #f8f2e8 0%, rgba(248, 242, 232, 0.6) 45%, rgba(248, 242, 232, 0) 100%)",
          }}
        />

        {/* Typography Placed Precisely Inside the Open Arch Sky */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 flex flex-col items-center text-center pt-[21%] px-6 max-w-[82%]"
        >
          {/* Sacred Ganesh Invocation */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_ROYAL }}
            className="text-[10px] sm:text-[11px] font-devanagari tracking-[0.16em] text-[#6e1820]/90 font-semibold mb-1.5"
          >
            {lang === "hi" ? "॥ श्री गणेशाय नमः ॥" : "|| SHRI GANESHAYA NAMAH ||"}
          </motion.p>

          {/* Wedding Day / शुभ विवाह */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: EASE_ROYAL }}
            className="font-script text-2xl sm:text-3xl text-[#5c3d31] mb-0.5"
          >
            {lang === "hi" ? "शुभ विवाह" : "Wedding Day"}
          </motion.h2>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 0.9, delay: 0.38, ease: EASE_ROYAL }}
            className="font-serif-royal text-sm sm:text-base text-[#6e1820] font-semibold mb-2.5 sm:mb-3"
          >
            {WEDDING_DATA.couple.dateShort}
          </motion.p>

          {/* Sweeping Couple Names */}
          <div className="my-0.5">
            <motion.h1
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.48, ease: EASE_ROYAL }}
              className={`${
                lang === "hi"
                  ? "font-devanagari font-bold text-3xl sm:text-4xl"
                  : "font-script text-5xl sm:text-[3.6rem]"
              } text-[#4b1015] leading-[1.06] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]`}
            >
              {lang === "hi" ? WEDDING_DATA.couple.groomHi : WEDDING_DATA.couple.groomEn}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.62, ease: EASE_ROYAL }}
              className="font-script text-2xl sm:text-3xl text-[#8d5d38] block leading-none my-0.5"
            >
              {lang === "hi" ? "संग" : "&"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.72, ease: EASE_ROYAL }}
              className={`${
                lang === "hi"
                  ? "font-devanagari font-bold text-3xl sm:text-4xl"
                  : "font-script text-5xl sm:text-[3.6rem]"
              } text-[#4b1015] leading-[1.06] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]`}
            >
              {lang === "hi" ? WEDDING_DATA.couple.brideHi : WEDDING_DATA.couple.brideEn}
            </motion.h1>
          </div>

          {/* Scroll Down Hint */}
          <motion.a
            href="#invitation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.92, ease: EASE_ROYAL }}
            className="mt-3 sm:mt-4 inline-flex flex-col items-center text-[#5c3d31] hover:text-[#6e1820] transition-colors animate-gentle-float"
          >
            <span className="font-script text-lg sm:text-xl tracking-wide">
              {lang === "hi" ? "नीचे स्क्रॉल करें" : "Scroll down"}
            </span>
            <ChevronDown className="w-4 h-4 -mt-0.5 opacity-75" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
