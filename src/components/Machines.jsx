import { useTranslation } from "react-i18next";

function Machines() {
  const { t } = useTranslation();
  const machines = t("machines.items", { returnObjects: true });

  return (
    <section id="machines" className="bg-brand-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {t("machines.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-dark sm:text-4xl">
            {t("machines.title")}
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-dark/68">
            {t("machines.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {machines.map((machine, idx) => (
            <article
              key={machine.product}
              id={machine.anchor}
              className="flex h-full flex-col rounded-[1.75rem] border border-brand-dark/8 bg-white p-7 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-brand-accent/30"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 items-center rounded-full bg-brand-accent/10 px-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark/45">
                  {t("machines.worldwide")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-brand-dark">
                {machine.product}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-accent">
                {machine.headline}
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-dark/68">
                {machine.description}
              </p>

              <div className="mt-6 border-t border-brand-dark/8 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-dark/55">
                  {t("machines.featuresLabel")}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-dark/72">
                  {machine.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:gap-3"
                >
                  {t("machines.cta")} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-brand-accent/25 bg-brand-dark p-7 text-white sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
                {t("machines.fefpebEyebrow")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                {t("machines.fefpebTitle")}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
                {t("machines.fefpebDescription")}
              </p>
            </div>
            <a
              href="#contact"
              className="primary-button inline-flex h-12 items-center justify-center px-6"
            >
              {t("machines.fefpebCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Machines;
