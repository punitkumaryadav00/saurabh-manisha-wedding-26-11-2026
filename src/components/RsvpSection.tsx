"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Lang } from "@/data/weddingData";

interface RsvpSectionProps {
  lang: Lang;
  onOpenRsvp: () => void;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function RsvpSection({ lang, onOpenRsvp }: RsvpSectionProps) {
  return (
    <section
      id="rsvp"
      className="relative pt-12 pb-36 sm:pb-40 px-5 bg-[#f8f2e8] text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-sm mx-auto space-y-5">
        {/* Calligraphic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE_ROYAL }}
        >
          <h2
            className={`${
              lang === "hi"
                ? "font-devanagari font-bold text-3xl"
                : "font-script text-4xl sm:text-5xl"
            } text-[#4b1015] leading-tight mb-2`}
          >
            {lang === "hi" ? "अपनी उपस्थिति दर्ज करें" : "Confirm Your Attendance"}
          </h2>
          <p className="font-serif-royal text-sm text-[#5c4338] max-w-xs mx-auto leading-relaxed">
            {lang === "hi"
              ? "समारोह की सुंदर व्यवस्था हेतु कृपया अपने आगमन की पुष्टि करें।"
              : "To help us prepare for a joyful celebration, kindly confirm your attendance."}
          </p>
        </motion.div>

        {/* Interactive Burgundy RSVP Wax Seal Stamps Into Place on Scroll */}
        <div className="pt-2 flex flex-col items-center">
          <motion.button
            onClick={onOpenRsvp}
            initial={{ opacity: 0, scale: 1.3, rotate: -14, y: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 210, damping: 16 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            className="w-28 h-28 rounded-[52%_48%_47%_53%/48%_52%_48%_52%] wax-seal-burgundy flex items-center justify-center p-2 cursor-pointer focus:outline-none group"
          >
            <div className="w-full h-full rounded-full border border-[#ebcb96]/35 flex flex-col items-center justify-center shadow-inner">
              <span className="font-serif-royal text-xl font-bold tracking-[0.18em] text-[#f5e1cc] drop-shadow">
                RSVP
              </span>
              <span className="text-[9px] text-[#ebcb96]/70 tracking-wider mt-0.5 uppercase">
                S &amp; M
              </span>
            </div>
          </motion.button>

          <motion.button
            onClick={onOpenRsvp}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_ROYAL }}
            className="mt-3 inline-flex flex-col items-center text-[#5c3d31] hover:text-[#6e1820] transition-colors cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 -mb-1 animate-bounce" />
            <span className="font-script text-xl">
              {lang === "hi" ? "खोलने के लिए क्लिक करें" : "Click to open"}
            </span>
          </motion.button>
        </div>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: EASE_ROYAL }}
          className="pt-4 space-y-1"
        >
          <p className="font-script text-2xl sm:text-3xl text-[#5c3d31]">
            {lang === "hi" ? "आपके शुभ आगमन की प्रतीक्षा में!" : "Hope to see you there!"}
          </p>
          <p className="font-script text-4xl sm:text-5xl text-[#4b1015]">
            {lang === "hi" ? "सौरभ एवं मनीषा" : "Saurabh & Manisha"}
          </p>
        </motion.div>
      </div>

      {/* Bottom Lush Watercolor Roses Border Rises In */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.85, ease: EASE_ROYAL }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
      >
        <img
          src="/images/floral-roses-border.jpg"
          alt="Wedding Floral Roses Garland"
          className="w-full h-auto object-cover mix-blend-multiply"
        />
      </motion.div>
    </section>
  );
}
