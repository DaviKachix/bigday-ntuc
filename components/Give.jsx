"use client";

import { useLang } from "@/context/LangContext";

export default function Give() {
  const { lang } = useLang();
  const isEN = lang === "en";

  return (
    <section className="relative px-6 py-16 bg-white overflow-hidden">

      {/* BACKGROUND LOGO */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/logo.png')" }}
      />

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-left { animation: slideInLeft 0.8s ease-out forwards; }
        .slide-right { animation: slideInRight 0.8s ease-out forwards; }
      `}</style>

      <div className="relative max-w-2xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
          {isEN ? "Support God's Work" : "Changia Kazi ya Mungu"}
        </h2>

        {/* INTRO */}
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          {isEN
            ? "Your contribution supports the NTUC Big Day 2026 Phase One Project. Every gift strengthens the mission and growth of the church."
            : "Mchango wako unasaidia Mradi wa NTUC Big Day 2026 Awamu ya Kwanza. Kila sadaka inaimarisha utume na ukuaji wa kanisa."}
        </p>

        {/* GRID LAYOUT */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">

          {/* VERSE */}
          <div className="slide-left border-l-4 border-orange-600 pl-4 italic text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-md">
            <p className="text-sm leading-relaxed">
              “Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”
            </p>
            <p className="mt-2 text-xs text-gray-500">
              2 Corinthians 9:7
            </p>
          </div>

          {/* BANK INFO */}
          <div className="slide-right space-y-4 bg-white/70 backdrop-blur-sm p-4 rounded-md">

            <div>
              <p className="text-xs text-gray-500">
                {isEN ? "Bank Name" : "Jina la Benki"}
              </p>
              <p className="font-semibold text-gray-900">NMB Bank</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                {isEN ? "Account Name" : "Jina la Akaunti"}
              </p>
              <p className="font-semibold text-gray-900">
                SDA Church Office Building
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                {isEN ? "Account Number" : "Namba ya Akaunti"}
              </p>
              <p className="text-xl font-bold text-orange-600 tracking-widest">
                40810276593
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}