"use client";

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-16">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 leading-tight">
            Northern Tanzania Union Conference
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            NTUC is the highest Seventh-day Adventist administrative structure in Northern Tanzania,
            coordinating mission, education, health, and church development across the region.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/img1.jpg"
                alt="NTUC Overview"
                className="w-full h-[340px] object-cover scale-105 hover:scale-100 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">

            <div className="space-y-4 text-gray-700 leading-relaxed">

              <p>
                NTUC oversees mission work across Northern Tanzania, integrating evangelism with
                education, healthcare, and community development.
              </p>

              <p>
                It operates through more than 2,000 churches and companies, supporting over
                900,000 members across multiple regions.
              </p>

              <div className="pt-4 space-y-2 text-sm text-gray-600 border-l-2 border-orange-600 pl-4">
                <p>Over 2,000 Churches & Companies</p>
                <p>900,000+ Members</p>
                <p>Universities, Schools & Training Institutions</p>
                <p>Hospitals, Media, Clinics & ADRA Tanzania Programs</p>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="mt-16 pt-10 border-t border-gray-100 max-w-3xl mx-auto text-center">

          <p className="text-gray-700 leading-relaxed">
            The gospel work in Tanzania began in 1903 under the Tanzania Union Mission and was later reorganized in 2013.
            Today NTUC stands strengthened by both mission heritage and natural landmarks such as Mount Kilimanjaro,
            Serengeti,Ngorongoro and Nyanza Lake Victoria Regions.
          </p>

          <p className="mt-6 font-semibold text-orange-600">
            “Welcome to NTUC — serving with humility, mission, and purpose.”
          </p>

        </div>

      </section>
    </>
  );
}