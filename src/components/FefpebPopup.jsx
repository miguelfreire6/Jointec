import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FEFPEB_DEMO_MAILTO,
  KARL_PHONE_HREF,
  KARL_PHONE_LABEL,
  PRIVATE_VISIT_MAILTO,
} from "../data/fefpeb";

const DISMISSED_KEY = "jointec-fefpeb-2026-popup-dismissed";

export default function FefpebPopup() {
  const location = useLocation();
  const [open, setOpen] = useState(() => sessionStorage.getItem(DISMISSED_KEY) !== "true");

  if (!open || location.pathname.startsWith("/internal") || location.pathname.startsWith("/admin")) return null;

  const dismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "true");
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/78 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fefpeb-popup-title"
    >
      <article className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/12 bg-brand-dark text-white shadow-2xl">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-brand-dark/70 text-xl text-white transition hover:border-brand-accent hover:text-brand-accent"
          aria-label="Close FEFPEB announcement"
        >
          ×
        </button>

        <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
          <div className="flex flex-col items-center justify-center gap-6 bg-white p-7 text-center lg:p-8">
            <img
              src="/images/fefpeb-congress-2026.jpg"
              alt="FEFPEB and Swedish Wood"
              className="w-full max-w-[260px]"
            />
            <div className="rounded-2xl border border-brand-dark/8 bg-brand-light px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                Industrial visit
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-brand-dark">
                1 Oct
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-9 lg:p-10">
            <p className="inline-flex rounded-full border border-brand-accent/35 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
              FEFPEB Congress 2026
            </p>
            <h2 id="fefpeb-popup-title" className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              Jointec at FEFPEB.
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/62">
              Båstad, Sweden · 30 Sep - 2 Oct
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/78">
              Meet Jointec at Europe’s pallet and wood packaging congress. See real production
              equipment during the industrial visit and discuss new value-adding pallet
              solutions in Båstad.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  See
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">CAPE lines in operation</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  Demo
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">New Block Production Line</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  Discuss
                </p>
                <p className="mt-2 text-sm font-semibold leading-6">MicroDryer + Nonstop &amp; Topfoil</p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/58">
              MicroDryer and Nonstop &amp; Topfoil are presented at the congress, not running at
              the industrial site.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={FEFPEB_DEMO_MAILTO} className="primary-button">
                Book a Demonstration Visit
              </a>
              <a
                href={PRIVATE_VISIT_MAILTO}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent"
              >
                Arrange a Private Visit
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:gap-x-5">
              <Link to="/news/fefpeb-2026" onClick={dismiss} className="font-semibold text-white hover:text-brand-accent">
                Read the full announcement →
              </Link>
              <a href="https://www.fefpeb.eu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-brand-accent">
                Visit fefpeb.eu ↗
              </a>
            </div>
            <p className="mt-4 text-sm text-white/68">
              Or call CEO Karl directly:{" "}
              <a href={KARL_PHONE_HREF} className="font-semibold text-white hover:text-brand-accent">
                {KARL_PHONE_LABEL}
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
