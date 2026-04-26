import { useTranslation } from "react-i18next";
import fallbackPoster from "../assets/video/jointec-hero-fallback.jpg";

function ProcessVideo() {
  const { t } = useTranslation();
  const steps = t("processVideo.steps", { returnObjects: true });

  return (
    <section className="bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center opacity-0 animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {t("processVideo.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-dark sm:text-4xl">
            {t("processVideo.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-brand-dark/68">
            {t("processVideo.description")}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] opacity-0 animate-fade-up [animation-delay:140ms] sm:mt-12">
          <div className="overflow-hidden rounded-[1.5rem] border border-brand-dark/10 bg-white shadow-panel">
            <div className="relative aspect-video w-full bg-zinc-100">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/machine_process.mp4"
                poster={fallbackPoster}
                autoPlay
                muted
                loop
                playsInline
                controls
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-black/35 to-transparent px-4 py-3 sm:px-5 sm:py-4">
                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                  Infeed
                </div>
                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                  Mixing
                </div>
                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                  Extrusion
                </div>
                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                  Output
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark/50">
            {steps.map((step) => (
              <span
                key={step}
                className="rounded-full border border-brand-dark/10 bg-white px-3 py-2"
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessVideo;
