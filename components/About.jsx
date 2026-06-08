"use client";

import { useLang } from "@/context/LangContext";

export default function About() {
  const { lang } = useLang();
  const isEN = lang === "en";

  return (
    <section className="px-6 py-20 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/img4.jpg"
            alt="NTUC Landscape"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />

          <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-medium text-orange-600">
            {isEN ? "Northern Tanzania Mission Field" : "Uwanja wa Utume Kaskazini Tanzania"}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            {isEN
              ? "Northern Tanzania Union Conference"
              : "Mkutano wa Muungano wa Kaskazini Tanzania"}
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {isEN
              ? "The gospel work in Tanzania began in 1903 under the Tanzania Union Mission and was later reorganized in 2013 into unions, including the Northern Tanzania Union Conference (NTUC)."
              : "Kazi ya injili Tanzania ilianza mwaka 1903 chini ya Tanzania Union Mission, kisha kupangwa upya mwaka 2013 na kuanzishwa Mkutano wa Muungano wa Kaskazini Tanzania (NTUC)."}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {isEN
              ? "NTUC covers the northern region of Tanzania including Kilimanjaro, Arusha, Mara, and surrounding areas, serving through strong mission institutions and church networks."
              : "NTUC inahudumia kanda ya kaskazini ya Tanzania ikijumuisha Kilimanjaro, Arusha, Mara na maeneo ya jirani kupitia taasisi imara za utume na mitandao ya makanisa."}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {isEN
              ? "Blessed with Mount Kilimanjaro and world-renowned national parks such as Serengeti and Ngorongoro, the region uniquely combines mission, nature, and community impact."
              : "Iliyo barikiwa na Mlima Kilimanjaro pamoja na hifadhi maarufu duniani kama Serengeti na Ngorongoro, eneo hili linachanganya utume, mazingira na maendeleo ya jamii."}
          </p>

          {/* FINAL QUOTE */}
          <div className="mt-10 border-l-4 border-orange-600 pl-5 italic text-gray-700">
            {isEN
              ? "Welcome to NTUC — serving with humility, mission, and purpose."
              : "Karibu NTUC — tukitumikia kwa unyenyekevu, utume na kusudi."}
          </div>

        </div>
      </div>
    </section>
  );
}