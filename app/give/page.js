"use client";

import Navbar from "@/components/Navbar";

export default function Give() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-10">

        {/* TITLE */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
            NTUC Headquarters Construction Project
          </h1>

          <p className="text-gray-600">
            Njiro Hill Development Initiative
          </p>
        </header>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/img2.jpg"
            alt="NTUC Project"
            className="w-full h-[280px] object-cover"
          />
        </div>

        {/* SINGLE NARRATION */}
        <p className="border-l-2 border-orange-600 pl-4 text-gray-700 leading-8 text-justify">
          The Northern Tanzania Union Conference is constructing a new headquarters at Njiro Hill to serve as the central administrative hub for church operations, coordination, and mission work across the region, with a total project value of 10,600,000,000 TZS and Phase One set at 3,300,000,000 TZS, reflecting an institutional effort supported by church contributions to strengthen leadership capacity and improve mission efficiency in Northern Tanzania.
        </p>

        {/* FINANCIAL INFO */}
        <div className="border-t pt-10 text-center space-y-4 text-gray-700">

          <div>
            <p className="text-sm text-gray-500">Total Budget</p>
            <p className="text-xl font-semibold">10,600,000,000 TZS</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phase One</p>
            <p className="text-xl font-semibold text-orange-600">
              3,300,000,000 TZS
            </p>
          </div>

          <div className="pt-4">
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
            <p className="text-2xl font-bold text-orange-600 tracking-widest">
              40810276593
            </p>
          </div>

        </div>

        {/* FOOT IMAGE */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/img1.jpg"
            alt="Construction progress"
            className="w-full h-[220px] object-cover"
          />
        </div>

        <p className="text-center text-xs text-gray-500">
          All contributions are designated for the NTUC Headquarters Construction Project.
        </p>

      </section>
    </div>
  );
}