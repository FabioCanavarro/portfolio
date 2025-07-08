'use client';

import { useEffect } from "react";

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

export default GridBackground;