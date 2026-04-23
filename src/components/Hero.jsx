import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const stats = t("hero.stats", { returnObjects: true });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-dark pt-10 text-white sm:pt-14"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="absolute left-[-12rem] top-20 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="absolute right-[-10rem] top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="section-shell relative flex min-h-[calc(88vh-96px)] flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 opacity-0 animate-fade-up backdrop-blur-sm">
            {t("hero.eyebrow")}
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white opacity-0 animate-fade-up sm:text-5xl lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78 opacity-0 animate-fade-up [animation-delay:160ms] sm:text-lg">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up sm:flex-row sm:justify-center [animation-delay:280ms]">
            <a href="#services" className="primary-button">
              {t("hero.primaryCta")}
            </a>
            <a href="#contact" className="secondary-button">
              {t("hero.secondaryCta")}
            </a>
          </div>

          <div
            id="sustainability"
            className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-white/12 pt-8 opacity-0 animate-fade-up sm:grid-cols-3 [animation-delay:400ms]"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-orange-300">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/58">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
