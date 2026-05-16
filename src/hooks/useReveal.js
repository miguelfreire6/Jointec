import { useEffect, useRef } from "react";

/**
 * Adds an opacity-0 + translate-y-3 class until the element scrolls into view,
 * then animates to opacity-1 + translate-y-0. Respects prefers-reduced-motion.
 *
 * Usage:
 *   const ref = useReveal();
 *   return <div ref={ref}>…</div>;
 */
export default function useReveal({ rootMargin = "0px 0px -10% 0px", delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, delay]);

  return ref;
}
