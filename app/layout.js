import { LangProvider } from "@/context/LangContext";

export const metadata = {
  title: "NTUC Big Day 2026",
  description: "Phase One NTUC Headquarters Development Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Lucide Icons */}
        <script src="https://unpkg.com/lucide@latest"></script>

        {/* Global Styles */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Noto Sans', sans-serif;
            background: #ffffff;
            color: #1f2937;
            overflow-x: hidden;
          }

          /* Soft background watermark */
          .ntuc-bg::before {
            content: "";
            position: fixed;
            inset: 0;
            background: url('/logo.png') no-repeat center;
            background-size: 320px;
            opacity: 0.54;
            pointer-events: none;
            z-index: 0;
          }

          /* subtle noise overlay for premium feel */
          .ntuc-bg::after {
            content: "";
            position: fixed;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.53'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 0;
          }

          /* ensure content stays above bg */
          .content-layer {
            position: relative;
            z-index: 10;
          }
        `}</style>
      </head>

      <body className="ntuc-bg">
        <LangProvider>
          <div className="content-layer">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
