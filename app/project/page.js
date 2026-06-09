"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";

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
    <div className="relative min-h-screen bg-white">

       {/*<RightBar />*/}

      <main className="">

        <Navbar />

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
              Phase One Development Project
            </h1>

            <p className="mt-4 text-gray-600">
              NTUC Headquarters strengthening mission coordination and leadership across Northern Tanzania.
            </p>
          </div>

          {/* FEATURE STRIP */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
            <div className="py-4 border-b md:border-b-0 md:border-r">Foundation</div>
            <div className="py-4 border-b md:border-b-0 md:border-r">Administration</div>
            <div className="py-4 border-b md:border-b-0 md:border-r">Mission Hub</div>
            <div className="py-4">Infrastructure</div>
          </div>

          {/* GALLERY */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">

            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => openViewer(i)}
                className="relative cursor-pointer group overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  className="w-full h-40 md:h-52 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />

                <div className="absolute bottom-2 left-2 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                  Click to view
                </div>
              </div>
            ))}

          </div>

        </section>
      </main>

      {/* LIGHTBOX VIEWER */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={closeViewer}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-5 text-white text-3xl"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[activeIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-5 text-white text-3xl"
          >
            ›
          </button>

          {/* DOWNLOAD */}
          <a
            href={images[activeIndex]}
            download
            className="absolute bottom-6 bg-purple-600 text-white px-5 py-2 rounded-lg text-sm"
          >
            Download
          </a>

        </div>
      )}
    </div>
  );
}