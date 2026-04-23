import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import fallbackImage from "../assets/video/jointec-hero-fallback.jpg";

const HERO_VIDEO_URL =
  "https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/docs/walking_talking.mp4";

function VideoSection() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlayClick = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

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

          <div className="relative overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-brand-dark shadow-panel opacity-0 animate-fade-up [animation-delay:140ms]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.18)_100%)]" />

            <div className="relative aspect-[16/9] w-full">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster={fallbackImage}
                controls
                playsInline
                preload="metadata"
                aria-label={t("video.videoLabel")}
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
              </video>

              {!isPlaying ? (
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-brand-dark/18 transition hover:bg-brand-dark/10"
                  aria-label={t("video.playLabel")}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/14 text-white shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/20">
                    <span className="ml-1 text-3xl leading-none">▶</span>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
