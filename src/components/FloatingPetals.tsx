"use client";

import React from "react";
import { motion } from "framer-motion";

// Deterministic rose-gold shimmer particles (avoids SSR hydration mismatch)
const PARTICLES = [
  { id: 1, left: "8%", delay: 0.2, duration: 9.5, size: 7, color: "#e5b869", sway: 18 },
  { id: 2, left: "22%", delay: 2.4, duration: 11.2, size: 9, color: "#d67b87", sway: -22 },
  { id: 3, left: "38%", delay: 1.1, duration: 10.4, size: 6, color: "#ebcb96", sway: 14 },
  { id: 4, left: "54%", delay: 3.6, duration: 12.0, size: 8, color: "#c98b63", sway: -16 },
  { id: 5, left: "71%", delay: 0.8, duration: 9.8, size: 7, color: "#e5b869", sway: 20 },
  { id: 6, left: "86%", delay: 2.9, duration: 11.6, size: 9, color: "#d67b87", sway: -18 },
  { id: 7, left: "15%", delay: 5.0, duration: 10.8, size: 6, color: "#ebcb96", sway: 12 },
  { id: 8, left: "63%", delay: 4.3, duration: 12.5, size: 8, color: "#b66873", sway: -14 },
  { id: 9, left: "92%", delay: 1.8, duration: 10.2, size: 6, color: "#e5b869", sway: -12 },
];

export function FloatingPetals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[460px] overflow-hidden z-20"
    >
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -30, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.4, 0],
            opacity: [0, 0.55, 0.45, 0],
            rotate: [0, 140, 290, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 rounded-[60%_40%_70%_30%/50%_60%_40%_50%] blur-[0.3px]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.25,
            background: `radial-gradient(circle at 30% 30%, #fff4dc 0%, ${p.color} 80%)`,
          }}
        />
      ))}
    </div>
  );
}

