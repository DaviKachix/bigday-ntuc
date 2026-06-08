"use client";

import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";

export default function Give() {
  return (
    <div className="relative min-h-screen bg-white">

      {/* RIGHT BAR */}
      <RightBar />

      {/* MAIN CONTENT */}
      <main className="pr-[14.285%]">

        <Navbar />

        <section className="max-w-5xl mx-auto px-6 md:px-10 py-14 space-y-14">

          {/* HERO IMAGE */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/img2.jpg"
              alt="NTUC Headquarters Construction Project"
              className="w-full h-[260px] md:h-[380px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-600/40 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white max-w-xl">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                Construction of a Modern NTUC Office Building
              </h1>
              <p className="text-white/80 text-sm mt-2">
                A new administrative headquarters to strengthen leadership, coordination, and mission infrastructure across Northern Tanzania.
              </p>
            </div>
          </div>

          {/* GOAL */}
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm tracking-wide">
              Total Project Budget
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-orange-600">
              10,000,000,000 TZS
            </h2>

            <p className="text-gray-600">
              Phase One Construction Target:
              <span className="font-semibold text-orange-600 ml-2">
                3,300,000,000 TZS
              </span>
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4 text-center">
            <p>
              This project focuses on the construction of a modern NTUC headquarters building that will serve as
              the central administrative and coordination hub for church operations in Northern Tanzania.
            </p>

            <p>
              The facility will improve efficiency in leadership, mission planning, education support, and
              institutional development across all NTUC regions.
            </p>
          </div>

          {/* BANK DETAILS */}
          <div className="border-t pt-10 max-w-2xl mx-auto text-center space-y-6">

            <h3 className="text-lg font-semibold text-orange-600">
              Official Contribution Account (NMB Bank Only)
            </h3>

            <div className="space-y-3 text-gray-700">

              <div>
                <p className="text-sm text-gray-500">Bank</p>
                <p className="font-semibold">NMB Bank</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-semibold">
                  SDA Church Office Building – NTUC Headquarters
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="text-3xl font-bold text-orange-600 tracking-widest">
                  40810276593
                </p>
              </div>

            </div>
          </div>

          {/* FOOT IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/img1.jpg"
              alt="NTUC Construction Progress Vision"
              className="w-full h-[220px] md:h-[300px] object-cover"
            />
          </div>

          {/* FOOT NOTE */}
          <p className="text-center text-xs text-gray-500">
            All contributions are officially allocated to the construction of the NTUC Phase One Headquarters building project.
          </p>

        </section>
      </main>
    </div>
  );
}