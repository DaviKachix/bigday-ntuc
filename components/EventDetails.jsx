"use client";

import { useLang } from "@/context/LangContext";
import Link from "next/link";

export default function EventDetails() {
  const { lang } = useLang();
  const isEN = lang === "en";

  return (
    <section className="px-6 py-20 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/img2.jpg"
            alt="NTUC Event"
            className="w-full h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-3xl font-bold text-orange-600">
            {isEN ? "Event Overview" : "Muhtasari wa Tukio"}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {isEN
              ? "The NTUC Big Day 2026 Phase One Project is a special gathering dedicated to supporting the development of the Northern Tanzania Union Conference headquarters. It brings together believers, leaders, and supporters in a unified mission of growth and service."
              : "Big Day NTUC 2026 Awamu ya Kwanza ni mkutano maalum unaolenga kusaidia ujenzi wa makao makuu ya NTUC. Inawaleta pamoja waumini, viongozi na washirika katika dhamira moja ya ukuaji na huduma."}
          </p>

          {/* KEY DETAILS (NO CARDS, SIMPLE LIST STYLE) */}
          <div className="mt-6 space-y-3 text-gray-700">

            <p>
              <span className="font-semibold text-orange-600">
                {isEN ? "Event:" : "Tukio:"}
              </span>{" "}
              NTUC Big Day 2026 Phase One
            </p>

            <p>
              <span className="font-semibold text-orange-600">
                {isEN ? "Date:" : "Tarehe:"}
              </span>{" "}
              20 June 2026
            </p>

            <p>
              <span className="font-semibold text-orange-600">
                {isEN ? "Venue:" : "Mahali:"}
              </span>{" "}
              Njiro SDA Church, Arusha
            </p>

            <p>
              <span className="font-semibold text-orange-600">
                {isEN ? "Time:" : "Muda:"}
              </span>{" "}
              8:00 – 17:00
            </p>

          </div>


{/* CALL TO ACTION */}
<Link href="/give">
  <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-700 transition">
    {isEN ? "Support This Event" : "Changia Tukio Hili"}
  </button>
</Link>

        </div>
      </div>
    </section>
  );
}