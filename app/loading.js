import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="relative flex items-center justify-center">
        
        {/* Rotating Ring */}
        <div className="absolute w-32 h-32 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin" />

        {/* Logo */}
        <div className="relative w-20 h-20">
          <Image
            src="/orange.png"
            alt="NTUC Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
}