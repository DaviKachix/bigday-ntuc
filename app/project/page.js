"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Project() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const openViewer = (i) => setActiveIndex(i);
  const closeViewer = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">

        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
            NTUC HQ Project – Njiro Hill
          </h1>

          <p className="mt-4 text-gray-600">
            Total: 10.6B TZS · Phase 1: 3.3B TZS
          </p>
        </header>

        {/* STORY */}
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-8 text-justify">

          <p className="border-l-2 border-orange-600 pl-4">
            The Seventh-day Adventist Church is constructing the Northern Tanzania Union Conference
            Headquarters at Njiro Hill, a strategic center designed to strengthen mission coordination,
            leadership, and administration across the region.
          </p>

          <p className="border-l-2 border-orange-600 pl-4">
            The project focuses on mission, leadership, and administration, built to institutional
            standards of quality. Phase One, valued at 3.3B TZS, marks the beginning of the development,
            forming the foundation of the full 10.6B TZS headquarters plan.
          </p>

          <p className="border-l-2 border-orange-600 pl-4">
            The project is currently set to begin, with a completion target of less than 5 years.
            It reflects a structured institutional effort to support long-term mission growth and
            church development in Northern Tanzania.
          </p>

        </div>

        {/* GALLERY */}
        <div className="mt-14 border-t border-gray-100 pt-10">

          <h2 className="text-xl font-semibold text-orange-600 text-center mb-6">
            The Project
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => openViewer(i)}
                className="overflow-hidden rounded-md border border-gray-200"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-44 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">

          <button
            onClick={closeViewer}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            alt="Project preview"
          />

          <button
            onClick={next}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>

          <a
            href={images[activeIndex]}
            download
            className="absolute bottom-6 bg-orange-600 text-white px-5 py-2 rounded-md text-sm"
          >
            Download
          </a>

        </div>
      )}
    </div>
  );
}