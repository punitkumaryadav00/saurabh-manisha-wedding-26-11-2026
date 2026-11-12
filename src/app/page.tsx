"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Lang } from "@/data/weddingData";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { HeroArch } from "@/components/HeroArch";
import { CountdownSection } from "@/components/CountdownSection";
import { ScheduleTimeline } from "@/components/ScheduleTimeline";
import { LocationSection } from "@/components/LocationSection";
import { DressCodeAndFamily } from "@/components/DressCodeAndFamily";
import { RsvpSection } from "@/components/RsvpSection";
import { RsvpModal } from "@/components/RsvpModal";
import { AudioPlayerButton } from "@/components/AudioPlayerButton";
import { FloatingPetals } from "@/components/FloatingPetals";

function ScrollGoldRibbon() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="sticky top-0 left-0 right-0 z-30 h-[2.5px] origin-left bg-gradient-to-r from-[#8d5d38] via-[#e5b869] to-[#6e1820]"
    />
  );
}

export default function WeddingInvitationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <div
      className={`min-h-screen w-full bg-[#1e0a09] relative ${
        !isOpened ? "h-screen overflow-hidden" : ""
      }`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 25%, rgba(120, 42, 30, 0.35) 0%, rgba(22, 6, 6, 0.96) 72%)",
      }}
    >
      {/* Preload watercolor assets quietly while envelope is closed */}
      {!isOpened && (
        <div className="sr-only pointer-events-none" aria-hidden="true">
          <img src="/images/hero-swans-arch.jpg" alt="" />
          <img src="/images/venue-palace.jpg" alt="" />
          <img src="/images/dress-code-guests.jpg" alt="" />
          <img src="/images/floral-roses-border.jpg" alt="" />
        </div>
      )}

      {/* Interactive Embossed Chocolate-Burgundy Envelope with Golden Burst */}
      <EnvelopeIntro
        lang={lang}
        onToggleLang={toggleLang}
        onSealTap={() => setIsMusicPlaying(true)}
        onOpen={() => setIsOpened(true)}
      />

      {/* Centered Mobile-Sized Royal Wedding Scroll Frame (mounted upon seal open so all scroll animations play cleanly) */}
      {isOpened && (
        <>
          <FloatingPetals />

          <motion.main
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="relative mx-auto w-full max-w-[460px] min-h-screen bg-[#f8f2e8] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-x-clip"
          >
            {/* Soft Sunlight Cream Veil Dissolve (matches video 00:07 -> 00:08 transition) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[460px] z-40 bg-gradient-to-b from-[#fff5de] via-[#f8f2e8] to-[#f8f2e8]"
            />

            <ScrollGoldRibbon />
            <HeroArch lang={lang} onToggleLang={toggleLang} />
            <CountdownSection lang={lang} />
            <ScheduleTimeline lang={lang} />
            <LocationSection lang={lang} />
            <DressCodeAndFamily lang={lang} />
            <RsvpSection lang={lang} onOpenRsvp={() => setIsRsvpOpen(true)} />

            <footer className="bg-[#361210] text-[#ebcb96]/80 text-center py-3 px-4 text-[11px] font-serif-royal tracking-wider border-t border-[#c69c5b]/25">
              {lang === "hi"
                ? "चि. सौरभ संग सौ. मनीषा · 24 एवं 26 नवम्बर 2026"
                : "Chi. Saurabh & Sau. Manisha · 24 & 26 Nov 2026"}
            </footer>
          </motion.main>
        </>
      )}

      {/* Interactive RSVP Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        lang={lang}
      />

      {/* Floating Audio Toggle (Web Audio Romantic Arpeggio Synthesizer) */}
      <AudioPlayerButton
        isPlaying={isMusicPlaying}
        onToggle={() => setIsMusicPlaying((prev) => !prev)}
      />
    </div>
  );
}
