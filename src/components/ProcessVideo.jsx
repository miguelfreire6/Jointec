import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import fallbackPoster from "../assets/video/jointec-hero-fallback.jpg";

function ProcessVideo() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    if (!next) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
    setMuted(next);
  };

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
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/process.mp4"
                poster={fallbackPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <button
                type="button"
                onClick={toggleMuted}
                aria-label={muted ? "Unmute video" : "Mute video"}
                aria-pressed={!muted}
                className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white shadow-md backdrop-blur-sm transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11"
              >
                {muted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4z" />
                    <line x1="22" y1="9" x2="16" y2="15" />
                    <line x1="16" y1="9" x2="22" y2="15" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessVideo;
