"use client";

import { useLang } from "@/context/LangContext";

export default function Give() {
  const { lang } = useLang();
  const isEN = lang === "en";

  return (
    <section className="px-6 py-24 bg-white">

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .slide-right {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          {isEN ? "Support the Work of God" : "Changia Kazi ya Mungu"}
        </h2>

        {/* INTRO */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          {isEN
            ? "Your contribution supports the NTUC Big Day 2026 Phase One Project. Every gift strengthens the mission, leadership, and growth of God’s church."
            : "Mchango wako unasaidia Mradi wa NTUC Big Day 2026 Awamu ya Kwanza. Kila sadaka inaimarisha utume, uongozi na ukuaji wa kanisa la Mungu."}
        </p>

        {/* BIBLE VERSE (SLIDES IN FROM LEFT) */}
        <div className="mt-14 slide-left text-center border-l-4 border-orange-600 pl-6 italic text-gray-700">

          <p className="text-lg leading-relaxed">
            “Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.”
          </p>

          <p className="mt-3 text-sm text-gray-500">
            2 Corinthians 9:7
          </p>

        </div>

        {/* DONATION INFO (SLIDES IN FROM RIGHT) */}
        <div className="mt-14 slide-right text-left space-y-6">

          <div>
            <p className="text-sm text-gray-500">
              {isEN ? "Bank Name" : "Jina la Benki"}
            </p>
            <p className="text-lg font-semibold text-gray-900">
              NMB Bank
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              {isEN ? "Account Name" : "Jina la Akaunti"}
            </p>
            <p className="text-lg font-semibold text-gray-900">
              SDA Church Office Building
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              {isEN ? "Account Number" : "Namba ya Akaunti"}
            </p>
            <p className="text-2xl font-bold text-orange-600 tracking-widest">
              40810276593
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}