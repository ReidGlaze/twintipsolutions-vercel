"use client";

import { useEffect } from "react";

/* Light, progressive interactivity. Nothing here is required to read the page:
   - .reveal blocks rise in as they enter the viewport
   - .plate cards tilt toward a fine pointer and carry a soft glow under it
   All of it is skipped under prefers-reduced-motion. */
export default function Interactions() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    root.classList.add("motion");
    cleanups.push(() => {
      io.disconnect();
      root.classList.remove("motion");
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>(".plate").forEach((el) => {
        let raf = 0;
        const move = (e: PointerEvent) => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            // wider cards get less tilt so the edges travel a similar distance
            const max = Math.min(3.2, 1800 / r.width);
            el.style.setProperty("--ry", `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
            el.style.setProperty("--rx", `${((0.5 - py) * 2 * max * 0.7).toFixed(2)}deg`);
            el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
            el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
          });
        };
        const leave = () => {
          cancelAnimationFrame(raf);
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
