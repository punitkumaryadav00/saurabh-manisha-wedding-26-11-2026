"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { Lang, WEDDING_DATA } from "@/data/weddingData";

interface LocationSectionProps {
  lang: Lang;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function LocationSection({ lang }: LocationSectionProps) {
  const [activeVenueId, setActiveVenueId] = useState<string>("nirvana");

  const activeVenue =
    WEDDING_DATA.venues.find((v) => v.id === activeVenueId) || WEDDING_DATA.venues[0];

  return (
    <section
      id="location"
      className="py-12 px-5 bg-[#f8f2e8] border-b border-[#e5d6c3]/50 overflow-hidden"
    >
      <div className="max-w-md mx-auto text-center">
        {/* Calligraphic Heading + Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE_ROYAL }}
          className="mb-5"
        >
          <h2
            className={`${
              lang === "hi"
                ? "font-devanagari font-bold text-3xl"
                : "font-script text-4xl sm:text-5xl"
            } text-[#4b1015] mb-2`}
          >
            {lang === "hi" ? "समारोह स्थल" : "Location"}
          </h2>

          {/* Venue Selection Tabs (3 Venues from Photo 1) */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {WEDDING_DATA.venues.map((venue) => {
              const isSelected = venue.id === activeVenueId;
              return (
                <button
                  key={venue.id}
                  onClick={() => setActiveVenueId(venue.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all border cursor-pointer ${
                    isSelected
                      ? "bg-[#6e1820] text-[#f8f2e8] border-[#6e1820] shadow-sm scale-[1.03]"
                      : "bg-[#efe4d3]/60 text-[#5c3d31] border-[#c69c5b]/40 hover:bg-[#e5d6c3]"
                  }`}
                >
                  {lang === "hi" ? venue.nameHi : venue.nameEn}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Venue Details with Tab Transition */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: EASE_ROYAL }}
          className="min-h-[104px] mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenue.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE_ROYAL }}
              className="space-y-1.5"
            >
              <span className="inline-block text-[11px] uppercase tracking-[0.18em] text-[#8d5d38] font-semibold">
                {lang === "hi" ? activeVenue.tagHi : activeVenue.tagEn}
              </span>
              <h3 className="font-serif-royal text-2xl font-bold text-[#4b1015]">
                {lang === "hi" ? activeVenue.nameHi : activeVenue.nameEn}
              </h3>
              <p className="font-serif-royal text-sm text-[#422c24]">
                {lang === "hi" ? activeVenue.dateHi : activeVenue.dateEn}
              </p>
              <p className="font-serif-royal text-xs sm:text-sm text-[#785f54] max-w-xs mx-auto leading-relaxed">
                {lang === "hi" ? activeVenue.addressHi : activeVenue.addressEn}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Watercolor Palace Illustration Reveal on Scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: EASE_ROYAL }}
          className="relative w-full my-3 overflow-hidden rounded-lg"
        >
          <img
            src="/images/venue-palace.jpg"
            alt="Royal Wedding Venue Illustration"
            className="w-full h-auto object-contain mix-blend-multiply scale-105"
          />
        </motion.div>

        {/* Baraat Route Note from Photo 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: EASE_ROYAL }}
          className="my-4 p-3 rounded-lg bg-[#efe4d3]/60 border border-[#c69c5b]/35 text-xs text-[#5c3d31] font-serif-royal leading-relaxed"
        >
          <p className="font-semibold text-[#6e1820] mb-0.5 flex items-center justify-center gap-1">
            <Navigation className="w-3.5 h-3.5" />
            {lang === "hi" ? "बारात प्रस्थान मार्ग (26 नवम्बर):" : "Baraat Route (Nov 26):"}
          </p>
          {lang === "hi"
            ? "बारात हमारे निवास स्थान बालरोड़िया फार्म हाउस, चामधेड़ा रोड़ से शुभम् गार्डन, निजामपुर रोड़, नारनौल के लिए प्रस्थान करेगी।"
            : "Baraat will depart from our residence Balrodia Farm House, Chamdera Road, Mahendragarh to Shubham Garden, Nizampur Road, Narnaul."}
        </motion.div>

        {/* Embedded Interactive Google Map Card Lifts In */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: EASE_ROYAL }}
          className="relative w-full h-56 rounded-xl overflow-hidden border border-[#c69c5b]/50 shadow-md bg-[#efe4d3]"
        >
          <iframe
            src={activeVenue.embedUrl}
            title={activeVenue.nameEn}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Top-left "Open in Maps" Floating Pill matching the video */}
          <a
            href={activeVenue.mapQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/95 hover:bg-white text-[#4b1015] text-xs font-semibold shadow-md border border-gray-200 transition-transform hover:scale-105"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c80000]" />
            <span>{lang === "hi" ? "मैप में खोलें" : "Open in Maps"}</span>
            <ExternalLink className="w-3 h-3 text-gray-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
