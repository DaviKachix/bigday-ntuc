"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative flex items-center justify-center text-center min-h-[85vh] px-6">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/img1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY (stronger for readability) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* subtle gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-white">

        {/* LOGO (CLEAN WHITE BADGE) */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full shadow-lg border border-gray-200">
            <img
              src="/orange-nobg.png"
              alt="NTUC Logo"
              className="h-16 w-16 object-cover rounded-full"
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          {t.title}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 text-lg md:text-xl text-white/90 font-medium drop-shadow-sm">
          {t.subtitle}
        </p>

        {/* TAGLINE */}
        <p className="mt-2 text-sm md:text-base text-white/70 tracking-wide">
          {t.tagline}
        </p>
      </div>
    </section>
  );
}