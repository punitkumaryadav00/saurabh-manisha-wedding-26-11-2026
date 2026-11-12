import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh & Manisha — Wedding Invitation (24 & 26 Nov 2026)",
  description:
    "With the blessings of elders and family, Saurabh Balrodia & Manisha Yadav warmly invite you to their wedding celebrations in Mahendragarh & Narnaul, Haryana.",
  openGraph: {
    title: "Saurabh & Manisha — Shubh Vivah Invitation",
    description: "24 & 26 November 2026 | Mahendragarh & Narnaul, Haryana",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${notoDevanagari.variable}`}
    >
      <body className="antialiased selection:bg-[#6e1820] selection:text-[#f8f2e8]">
        {children}
      </body>
    </html>
  );
}

