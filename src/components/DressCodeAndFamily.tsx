"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles, HeartHandshake } from "lucide-react";
import { Lang, WEDDING_DATA } from "@/data/weddingData";

interface DressCodeAndFamilyProps {
  lang: Lang;
}

const EASE_ROYAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function DressCodeAndFamily({ lang }: DressCodeAndFamilyProps) {
  const palette = [
    { name: lang === "hi" ? "रोज़ गोल्ड" : "Rose Gold", hex: "#D69E82" },
    { name: lang === "hi" ? "बरगंडी" : "Burgundy", hex: "#6E1820" },
    { name: lang === "hi" ? "वॉर्म ब्राउन" : "Warm Brown", hex: "#4D332B" },
    { name: lang === "hi" ? "शाही आइवरी" : "Royal Ivory", hex: "#EFE1CA" },
  ];

  return (
    <section
      id="dresscode"
      className="py-12 px-5 bg-[#f8f2e8] border-b border-[#e5d6c3]/50 overflow-hidden"
    >
      <div className="max-w-md mx-auto text-center space-y-10">
        {/* 1. DRESS CODE SECTION */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE_ROYAL }}
            className="space-y-3"
          >
            <h2
              className={`${
                lang === "hi"
                  ? "font-devanagari font-bold text-3xl"
                  : "font-script text-4xl sm:text-5xl"
              } text-[#4b1015]`}
            >
              {lang === "hi" ? "परिधान (Dress Code)" : "Dress Code"}
            </h2>

            <p className="font-serif-royal text-sm sm:text-base text-[#4d352b] max-w-xs mx-auto leading-relaxed">
              {lang === "hi"
                ? "समारोह की शोभा बढ़ाने के लिए कृपया रोज़ गोल्ड, बरगंडी, रॉयल आइवरी अथवा पारंपरिक परिधान धारण करें।"
                : "We kindly ask guests to adorn Rose Gold, Burgundy, and Brown tones for the celebration."}
            </p>
          </motion.div>

          {/* Color Palette Swatches Stagger Pop */}
          <div className="flex items-center justify-center gap-3 pt-1">
            {palette.map((color, idx) => (
              <motion.div
                key={color.hex}
                initial={{ opacity: 0, scale: 0.5, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                  delay: idx * 0.08,
                }}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="w-7 h-7 rounded-full border border-[#c69c5b]/60 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-[10px] text-[#785f54] font-serif-royal">
                  {color.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Watercolor Guests Fashion Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE_ROYAL }}
            className="relative w-full pt-2"
          >
            <img
              src="/images/dress-code-guests.jpg"
              alt="Wedding Guest Attire Inspiration"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Expanding Golden Sparkles Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_ROYAL }}
            className="h-px w-16 bg-[#c69c5b]/55 origin-right"
          />
          <motion.div
            initial={{ rotate: -60, scale: 0.4 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <Sparkles className="w-4 h-4 text-[#8d5d38]" />
          </motion.div>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_ROYAL }}
            className="h-px w-16 bg-[#c69c5b]/55 origin-left"
          />
        </motion.div>

        {/* 2. FAMILY, HOSTS, SPECIAL REQUESTS & DARSHANABHILASHI */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, ease: EASE_ROYAL }}
          className="bg-[#f3e9da]/75 border border-[#c69c5b]/45 rounded-2xl p-6 shadow-sm space-y-6 text-center"
        >
          {/* विनीत / Hosts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, ease: EASE_ROYAL }}
          >
            <h3 className="font-script text-3xl text-[#6e1820] mb-1">
              {lang === "hi" ? "विनीत" : "With Warm Regards"}
            </h3>
            <div className="space-y-1.5 mt-2">
              {(lang === "hi" ? WEDDING_DATA.family.hostsHi : WEDDING_DATA.family.hostsEn).map(
                (host, i) => (
                  <div key={i}>
                    <p className="font-serif-royal text-base font-bold text-[#4b1015]">
                      {host.name}
                    </p>
                    <p className="text-xs text-[#785f54]">{host.role}</p>
                  </div>
                )
              )}
            </div>
            <p className="text-xs text-[#5c4338] mt-3 font-serif-royal">
              {lang === "hi" ? WEDDING_DATA.family.addressHi : WEDDING_DATA.family.addressEn}
            </p>

            {/* Clickable Phone Numbers */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {WEDDING_DATA.family.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6e1820]/10 hover:bg-[#6e1820] text-[#6e1820] hover:text-[#f8f2e8] text-xs font-semibold border border-[#6e1820]/30 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 {phone}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* विशेष आग्रह & प्रतिष्ठान */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE_ROYAL }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#c69c5b]/30 text-xs"
          >
            <div className="space-y-1">
              <p className="font-bold uppercase tracking-wider text-[#6e1820] text-[11px]">
                {lang === "hi" ? "विशेष आग्रह" : "Special Request"}
              </p>
              {(lang === "hi"
                ? WEDDING_DATA.family.specialRequestHi
                : WEDDING_DATA.family.specialRequestEn
              ).map((name, i) => (
                <p key={i} className="font-serif-royal text-sm text-[#422c24] font-medium">
                  {name}
                </p>
              ))}
            </div>

            <div className="space-y-1">
              <p className="font-bold uppercase tracking-wider text-[#6e1820] text-[11px]">
                {lang === "hi" ? "प्रतिष्ठान" : "Establishment"}
              </p>
              <p className="font-serif-royal text-xs sm:text-sm text-[#422c24] leading-snug">
                {lang === "hi" ? WEDDING_DATA.family.firmHi : WEDDING_DATA.family.firmEn}
              </p>
            </div>
          </motion.div>

          {/* दर्शनाभिलाषी / Darshanabhilashi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE_ROYAL }}
            className="pt-4 border-t border-[#c69c5b]/30"
          >
            <p className="font-bold uppercase tracking-wider text-[#6e1820] text-[11px] mb-1.5 flex items-center justify-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5" />
              {lang === "hi" ? "दर्शनाभिलाषी" : "Awaiting Your Gracious Presence"}
            </p>
            <p className="font-serif-royal text-xs text-[#5c4338] leading-relaxed">
              {lang === "hi"
                ? WEDDING_DATA.family.darshanabhilashiHi
                : WEDDING_DATA.family.darshanabhilashiEn}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
