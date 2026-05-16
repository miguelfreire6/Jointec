import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Subtle ambient lighting, Biesse-style restrained */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-[40rem] w-[40rem] rounded-full bg-brand-accent/[0.07] blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[36rem] w-[36rem] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="section-shell relative">
        <div className="grid min-h-[88vh] grid-cols-1 items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          {/* Left column — typography-led */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 opacity-0 animate-fade-up">
              <span className="inline-block h-px w-10 bg-brand-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-light leading-[1.02] tracking-[-0.035em] text-white opacity-0 animate-fade-up sm:text-6xl lg:text-[5.5rem]">
              {t("hero.title")}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 opacity-0 animate-fade-up [animation-delay:160ms] sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-12 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:items-center [animation-delay:280ms]">
              <a href="#machines" className="primary-button">
                {t("hero.primaryCta")}
              </a>
              <a href="#contact" className="secondary-button">
                {t("hero.secondaryCta")}
              </a>
            </div>
          </div>

          {/* Right column — stats and partner badge */}
          <div className="lg:pl-8">
            <div
              id="sustainability"
              className="grid gap-px overflow-hidden rounded-3xl bg-white/8 opacity-0 animate-fade-up [animation-delay:400ms] sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-dark px-6 py-8 sm:px-5 sm:py-9"
                >
                  <p className="text-4xl font-light tracking-tight text-orange-300 sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-xs uppercase leading-relaxed tracking-[0.26em] text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-6 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 opacity-0 animate-fade-up [animation-delay:520ms]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
                  {t("hero.partnerLabel")}
                </p>
                <p className="mt-1 text-sm font-medium text-white/82">
                  {t("hero.partnerText")}
                </p>
              </div>
              <a
                href="#cape"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition hover:bg-brand-accent hover:text-white"
              >
                CAPE →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom marquee — model codes ticker, premium-industrial feel */}
        <div className="border-t border-white/10 py-6 opacity-0 animate-fade-up [animation-delay:640ms]">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <span>Klotsproduktionslinje</span>
            <span className="hidden h-px w-8 bg-white/15 sm:inline-block" />
            <span>Plastning Nonstop</span>
            <span className="hidden h-px w-8 bg-white/15 sm:inline-block" />
            <span>Topfoil Pallet</span>
            <span className="hidden h-px w-8 bg-white/15 sm:inline-block" />
            <span className="text-brand-accent/90">CAPE · Exclusive agent · SE · CH · AT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
