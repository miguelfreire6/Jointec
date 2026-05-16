/**
 * Full-bleed photographic divider between sections.
 * Holds an industrial photo with an optional eyebrow + headline overlay.
 */
function PhotoStrip({ src, alt, eyebrow, headline, align = "left" }) {
  return (
    <section
      aria-hidden={!eyebrow && !headline}
      className="relative w-full overflow-hidden bg-brand-dark"
    >
      <img
        src={src}
        alt={alt || ""}
        className="h-[40vh] w-full object-cover opacity-75 sm:h-[52vh]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/70" />
      {(eyebrow || headline) ? (
        <div className="absolute inset-0 flex items-end pb-12 sm:pb-16">
          <div className={`section-shell ${align === "right" ? "text-right" : ""}`}>
            <div className={`max-w-2xl ${align === "right" ? "ml-auto" : ""}`}>
              {eyebrow ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {eyebrow}
                </p>
              ) : null}
              {headline ? (
                <h2 className="mt-3 text-2xl font-light leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                  {headline}
                </h2>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default PhotoStrip;
