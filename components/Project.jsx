"use client";

import { useLang } from "@/context/LangContext";
import Link from "next/link";

export default function Project() {
  const { lang } = useLang();
  const isEN = lang === "en";

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-purple-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            {isEN ? "Phase One Project" : "Awamu ya Kwanza"}
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 leading-tight">
            {isEN
              ? "NTUC Headquarters Development Initiative"
              : "Mradi wa Ujenzi wa Makao Makuu ya NTUC"}
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {isEN
              ? "This project supports the development of the Northern Tanzania Union Conference headquarters, strengthening mission coordination, leadership, and church administration across the region."
              : "Mradi huu unalenga kuendeleza makao makuu ya NTUC ili kuimarisha uratibu wa utume, uongozi na utawala wa kanisa katika eneo lote."}
          </p>

          {/* KEY POINTS (clean list, not cards) */}
          <div className="mt-8 space-y-4 text-gray-700">

            <p>
              <span className="text-orange-600 font-semibold">• </span>
              {isEN ? "Administrative Center for mission coordination" : "Kituo cha uratibu wa shughuli za utume"}
            </p>

            <p>
              <span className="text-orange-600 font-semibold">• </span>
              {isEN ? "Systems supporting evangelism and outreach" : "Mifumo ya kusaidia uinjilisti na huduma"}
            </p>

            <p>
              <span className="text-orange-600 font-semibold">• </span>
              {isEN ? "Leadership training and development" : "Mafunzo na maendeleo ya uongozi"}
            </p>

            <p>
              <span className="text-orange-600 font-semibold">• </span>
              {isEN ? "Infrastructure growth across NTUC" : "Ukuaji wa miundombinu ya NTUC"}
            </p>

          </div>

{/* CTA */}
<Link
  href="/give"
  className="inline-block mt-10 bg-orange-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-orange-700 transition"
>
  {isEN ? "Support This Project" : "Changia Mradi Huu"}
</Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/img3.jpg"
            alt="NTUC Project Vision"
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />

          {/* overlay label */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow text-sm font-medium text-orange-600">
            {isEN ? "Vision for NTUC Future" : "Maono ya Baadaye ya NTUC"}
          </div>
        </div>

      </div>

      {/* FOOT NOTE */}
      <div className="text-center mt-20 text-sm text-gray-500 max-w-2xl mx-auto">
        {isEN
          ? "Phase One focuses on building a strong foundation for future expansion and sustainable ministry impact."
          : "Awamu ya Kwanza inalenga kuweka msingi imara wa maendeleo endelevu ya utume."}
      </div>

    </section>
  );
}