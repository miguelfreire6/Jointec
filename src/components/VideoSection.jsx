import { useTranslation } from "react-i18next";

function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-light py-8 sm:py-10 lg:py-14">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center opacity-0 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
              {t("video.eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-brand-dark sm:text-4xl">
              {t("video.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-dark/68">
              {t("video.description")}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-brand-dark shadow-panel opacity-0 animate-fade-up [animation-delay:140ms]">
            <div className="relative aspect-[16/9] w-full">
              <video
                src="/videos/heritage-web.mp4"
                className="absolute inset-0 h-full w-full"
                controls
                preload="metadata"
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
