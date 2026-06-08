"use client";

import RightBar from "@/components/RightBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Give from "@/components/Give";
import About from "@/components/About";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/img2.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* NTUC Overlay */}
        <div className="absolute inset-0 bg-[rgb(75,32,127)]/70" />

        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(75,32,127)]/80 via-[rgb(75,32,127)]/50 to-black/40" />

        {/* Watermark */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "500px",
          }}
        />
      </div>

      {/* RIGHT BRAND COLUMN */}
      <RightBar />

      {/* PAGE */}
      <main className="md:pr-[14.285%] pr-10">

        <Navbar />

        {/* HERO */}
        <Hero />

        {/* CONTENT SURFACE */}
        <section className="bg-white/97 backdrop-blur-md md:rounded-tl-[40px] shadow-2xl">
          <EventDetails />
          <Project />
          <Give />
          <About />
        </section>

      </main>
    </div>
  );
}