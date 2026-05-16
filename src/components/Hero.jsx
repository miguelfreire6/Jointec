import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Full-bleed photographic backdrop */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_factory_winter.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-55"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/55 to-brand-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/55 to-transparent" />
      </div>

      <div className="section-shell relative">
        <div className="grid min-h-[90vh] grid-cols-1 items-center py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 opacity-0 animate-fade-up">
              <span className="inline-block h-px w-12 bg-brand-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-light leading-[1.02] tracking-[-0.035em] text-white opacity-0 animate-fade-up sm:text-6xl lg:text-[5.5rem]">
              {t("hero.title")}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/82 opacity-0 animate-fade-up [animation-delay:160ms] sm:text-lg">
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
        </div>

        {/* Stats band at the bottom of the hero */}
        <div
          id="sustainability"
          className="relative grid gap-px overflow-hidden border-t border-white/12 bg-white/[0.04] opacity-0 animate-fade-up [animation-delay:400ms] sm:grid-cols-4"
        >
          <div className="bg-brand-dark/80 px-5 py-8 backdrop-blur sm:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
              {t("hero.partnerLabel")}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-white/82">
              {t("hero.partnerText")}
            </p>
          </div>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-dark/80 px-5 py-8 backdrop-blur sm:py-10"
            >
              <p className="text-3xl font-light tracking-tight text-orange-300 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] uppercase leading-relaxed tracking-[0.26em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
