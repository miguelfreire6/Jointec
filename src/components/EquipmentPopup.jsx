import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const POPUP_TITLE = "Finally you can produce your own pallet blocks, on site.";

export default function EquipmentPopup() {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.state?.showEquipmentPopup) {
      setOpen(true);
    }
  }, [location.state]);

  if (!open || location.pathname.startsWith("/internal") || location.pathname.startsWith("/admin")) {
    return null;
  }

  const dismiss = () => {
    videoRef.current?.pause();
    setOpen(false);

    if (location.state?.showEquipmentPopup) {
      navigate(location.pathname + location.search + location.hash, { replace: true, state: {} });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-brand-dark/80 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="equipment-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <article className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-brand-dark text-white shadow-2xl">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-brand-dark/70 text-xl text-white transition hover:border-brand-accent hover:text-brand-accent"
          aria-label="Close equipment video"
        >
          x
        </button>

        <div className="grid lg:grid-cols-[0.44fr_0.56fr]">
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
            <p className="inline-flex w-fit rounded-full border border-brand-accent/35 bg-brand-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-accent">
              Block Production Line
            </p>
            <h2 id="equipment-popup-title" className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              {POPUP_TITLE}
            </h2>
          </div>

          <div className="bg-black">
            <video
              ref={videoRef}
              src="/videos/equipment-pallet-blocks-onsite.mp4"
              className="aspect-video h-full w-full object-contain"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      </article>
    </div>
  );
}
