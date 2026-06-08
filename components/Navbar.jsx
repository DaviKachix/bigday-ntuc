"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, switchLang } = useLang();
  const t = translations[lang];
  const [open, setOpen] = useState(false);

  const navLink =
    "text-gray-700 hover:text-purple-950 transition-colors duration-200";

  const langBtn = (active) =>
    `px-2 py-1 rounded-md text-sm transition ${
      active
        ? "bg-purple-950 text-white"
        : "text-gray-500 hover:text-purple-950"
    }`;

  return (
    <>
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* BRAND */}
            <div className="flex items-center gap-3">
              <img
                src="/orange.png"
                alt="NTUC Logo"
                className="h-11 w-11 object-contain"
              />

              <div className="leading-tight">
                <p className="font-bold text-purple-950">
                  NTUC BIG DAY 2026
                </p>
                <p className="text-xs text-gray-500">
                  Phase One Campaign
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className={navLink}>{t.nav_home}</Link>
              <Link href="/project" className={navLink}>{t.nav_project}</Link>
              <Link href="/give" className={navLink}>{t.nav_give}</Link>
              <Link href="/about" className={navLink}>{t.nav_about}</Link>
            </nav>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-4">

              {/* LANGUAGE SWITCH (FIXED VISIBILITY) */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => switchLang("en")}
                  className={langBtn(lang === "en")}
                >
                  EN
                </button>

                <button
                  onClick={() => switchLang("sw")}
                  className={langBtn(lang === "sw")}
                >
                  SW
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-xl"
              >
                ☰
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72
          bg-white z-50 shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO WATERMARK */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "260px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full">

          {/* HEADER */}
          <div className="flex items-center justify-between p-5 border-b">
            <div className="font-bold text-purple-950">
              NTUC MENU
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>

          {/* NAV LINKS (FIXED ROUTES) */}
          <nav className="flex flex-col gap-5 p-6 text-sm font-medium">
            <Link onClick={() => setOpen(false)} href="/" className={navLink}>
              {t.nav_home}
            </Link>

            <Link onClick={() => setOpen(false)} href="/project" className={navLink}>
              {t.nav_project}
            </Link>

            <Link onClick={() => setOpen(false)} href="/give" className={navLink}>
              {t.nav_give}
            </Link>

            <Link onClick={() => setOpen(false)} href="/about" className={navLink}>
              {t.nav_about}
            </Link>
          </nav>

          {/* CTA */}
          <div className="mt-auto p-6 border-t">
            <button className="w-full bg-purple-950 hover:bg-purple-900 text-white py-3 rounded-xl transition">
              {lang === "en" ? "Donate Now" : "Changia Sasa"}
            </button>
          </div>

        </div>
      </aside>
    </>
  );
}