"use client";

export default function RightBar() {
  return (
    <>
      {/* DESKTOP SIDEBAR (1/7) */}
      <aside
        className="
          hidden md:flex
          fixed right-0 top-0
          h-screen w-[14.285%]
          bg-purple-950
          flex-col items-center justify-start
          py-6 z-50
        "
      >
        <img
          src="/white.png"
          alt="NTUC Logo"
          className="w-16 h-16 object-contain"
        />
      </aside>

      {/* MOBILE SIDEBAR (clean thin indicator bar) */}
      <aside
        className="
          md:hidden
          fixed right-0 top-0
          h-screen w-10
          bg-gradient-to-b from-purple-950 to-purple-900
          flex flex-col items-center justify-start
          py-3 z-50
          border-l border-white/10
        "
      >
        <img
          src="/white.png"
          alt="NTUC Logo"
          className="w-6 h-6 object-contain opacity-90"
        />
    </aside>
    </>
  );
}