import { useTranslation } from "react-i18next";
import fallbackPoster from "../assets/video/jointec-hero-fallback.jpg";

function ProcessVideo() {
  const { t } = useTranslation();

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
                src="/videos/process.mp4"
                poster={fallbackPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessVideo;
