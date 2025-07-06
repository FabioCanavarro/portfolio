"use client";

import { useState, useEffect } from "react";
import Navbar from "./_components/nav-bar";
import MainBody from "./_components/main-body";
import Footer from "./_components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fabio Canavarro",
  url: "https://fabiocanavarro.vercel.app/",
  sameAs: ["https://github.com/FabioCanavarro"],
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Arts&Legend.id",
  },
  description:
    "A 16-year-old software developer specializing in Rust, systems programming, and building foundational technologies.",
  alumniOf: "Hackclub",
};

// Background Component
const GridBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const background = document.getElementById("interactive-background");
      if (background) {
        background.style.setProperty("--mouse-x", `${clientX}px`);
        background.style.setProperty("--mouse-y", `${clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx={true} global={true}>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        #interactive-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: #24273a; /* Catppuccin Macchiato Base */

          /* The static grid lines using a subtle palette color */
          background-image: repeating-linear-gradient(
              90deg,
              rgba(117, 124, 153, 0.15) 0px,
              rgba(117, 124, 153, 0.15) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(117, 124, 153, 0.15) 0px,
              rgba(117, 124, 153, 0.15) 1px,
              transparent 1px,
              transparent 40px
            );

          animation: fadeIn 2s ease-in-out;
        }

        /* The pseudo-element for the glowing effect */
        #interactive-background::before {
          content: "";
          position: absolute;
          inset: 0;

          /* The glowing effect that follows the mouse */
          background: radial-gradient(
            500px circle at var(--mouse-x) var(--mouse-y),
            rgba(203, 166, 247, 0.1),
            /* Soft mauve glow */ transparent 80%
          );
          transition: background 0.2s ease-out;
        }
      `}</style>
      <div id="interactive-background"></div>
    </>
  );
};

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const colors = {
    base: "#24273a",
    crust: "#1e2030",
    surface0: "#363a4f",
    surface2: "#575b71",
    text: "#cad3f5",
    subtext0: "#a5adce",
    subtext1: "#939ab7",
    mauve: "#cba6f7",
    rosewater: "#f5e0dc",
    flamingo: "#f2cdcd",
    blue: "#89b4fa",
    green: "#a6e3a1",
    sapphire: "#74c7ec",
    red: "#f38ba8",
  };

  return (
    <div
      className="min-h-screen text-text font-sans antialiased"
      style={{ backgroundColor: colors.base }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <GridBackground />
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}
