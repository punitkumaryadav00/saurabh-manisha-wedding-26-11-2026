"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";
import { Lang } from "@/data/weddingData";

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

export function RsvpModal({ isOpen, onClose, lang }: RsvpModalProps) {
  const [guestName, setGuestName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState("2");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    // Persist locally
    try {
      const existing = JSON.parse(localStorage.getItem("sm_rsvps") || "[]");
      existing.push({
        name: guestName.trim(),
        attending,
        guests: Number(guestCount) || 1,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("sm_rsvps", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const statusText =
      attending === "yes"
        ? lang === "hi"
          ? `हाँ, हम ${guestCount} सदस्यों के साथ समारोह में सपरिवार पधार रहे हैं।`
          : `Yes, I accept with pleasure (${guestCount} guests attending).`
        : lang === "hi"
        ? "क्षमा करें, किसी कारणवश उपस्थित होने में असमर्थ हूँ। नवदम्पति को हार्दिक शुभकामनाएँ!"
        : "Regretfully unable to attend, sending warm blessings to Saurabh & Manisha!";

    const msg = encodeURIComponent(
      `🙏 *शुभ विवाह RSVP — सौरभ संग मनीषा*\n\nनाम: ${guestName}\nसंदेश: ${statusText}`
    );
    window.open(`https://api.whatsapp.com/send?phone=919416909082&text=${msg}`, "_blank");
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setGuestName("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-[#f9f3eb] border border-[#c69c5b]/60 rounded-2xl shadow-2xl p-6 text-[#422c24]"
          >
            {/* Close X Button (Exact video frame 00:21 top-right) */}
            <button
              onClick={resetAndClose}
              aria-label="Close RSVP modal"
              className="absolute top-4 right-4 text-[#785f54] hover:text-[#4b1015] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              className={`${
                lang === "hi" ? "font-devanagari font-bold text-xl" : "font-script text-3xl"
              } text-[#4b1015] text-center mb-5`}
            >
              {lang === "hi" ? "अपनी उपस्थिति की पुष्टि करें" : "Confirm Your Attendance"}
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-serif-royal">
                {/* Your Name */}
                <div>
                  <label className="block text-sm font-medium text-[#5c3d31] mb-1">
                    {lang === "hi" ? "आपका शुभ नाम" : "Your name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={lang === "hi" ? "जैसे: डॉ. रमेश राव" : "Enter your full name"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/80 border border-[#c69c5b]/50 text-[#422c24] text-sm focus:outline-none focus:border-[#6e1820]"
                  />
                </div>

                {/* Will you be attending? */}
                <div>
                  <label className="block text-sm font-medium text-[#5c3d31] mb-2">
                    {lang === "hi" ? "क्या आप पधार रहे हैं?" : "Will you be attending?"}
                  </label>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        checked={attending === "yes"}
                        onChange={() => setAttending("yes")}
                        className="accent-[#6e1820] w-4 h-4"
                      />
                      <span>
                        {lang === "hi" ? "सहर्ष स्वीकार है (आ रहे हैं)" : "Accepts with pleasure"}
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        checked={attending === "no"}
                        onChange={() => setAttending("no")}
                        className="accent-[#6e1820] w-4 h-4"
                      />
                      <span>
                        {lang === "hi" ? "असमर्थ (हार्दिक शुभकामनाएँ)" : "Declines with regret"}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Number of Guests Attending */}
                {attending === "yes" && (
                  <div>
                    <label className="block text-sm font-medium text-[#5c3d31] mb-1">
                      {lang === "hi" ? "अतिथियों की संख्या" : "Number of Guests Attending"}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="25"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/80 border border-[#c69c5b]/50 text-[#422c24] text-sm focus:outline-none focus:border-[#6e1820]"
                    />
                  </div>
                )}

                {/* Full-width Burgundy Submit Button (Matching video frame 00:21) */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#6e1820] hover:bg-[#551016] text-[#f8f2e8] font-serif-royal text-base font-semibold tracking-wide shadow-md transition-colors cursor-pointer"
                >
                  {lang === "hi" ? "सबमिट करें" : "Submit"}
                </button>
              </form>
            ) : (
              /* Success Confirmation State */
              <div className="text-center py-3 space-y-4 font-serif-royal">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#4b1015]">
                    {lang === "hi" ? `धन्यवाद, ${guestName}!` : `Thank You, ${guestName}!`}
                  </h4>
                  <p className="text-sm text-[#5c4338] mt-1">
                    {attending === "yes"
                      ? lang === "hi"
                        ? "आपकी उपस्थिति दर्ज हो गई है। बालरोड़िया परिवार आपके स्वागत हेतु उत्सुक है!"
                        : "Your RSVP is confirmed. The Balrodia family looks forward to welcoming you!"
                      : lang === "hi"
                      ? "आपकी शुभकामनाओं के लिए हृदय से धन्यवाद!"
                      : "Thank you for your warm wishes and blessings!"}
                  </p>
                </div>

                {/* Optional 1-click WhatsApp confirmation to Host (+91 9416909082) */}
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1ebc5b] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {lang === "hi"
                      ? "व्हाट्सएप पर परिवार को संदेश भेजें"
                      : "Send RSVP on WhatsApp to Hosts"}
                  </span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="text-xs text-[#785f54] hover:text-[#4b1015] underline"
                >
                  {lang === "hi" ? "निमंत्रण पत्र पर वापस जाएं" : "Return to Invitation"}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

