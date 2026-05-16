import { useTranslation } from "react-i18next";

function CapeAgent() {
  const { t } = useTranslation();
  const categories = t("cape.categories", { returnObjects: true });
  const territories = t("cape.territories", { returnObjects: true });

  return (
    <section id="cape" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {t("cape.eyebrow")}
            </p>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.025em] text-brand-dark sm:text-5xl">
              {t("cape.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-dark/70">
              {t("cape.description")}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {territories.map((territory) => (
                <div
                  key={territory.code}
                  className="rounded-2xl border border-brand-dark/8 bg-brand-light px-3 py-4 text-center"
                >
                  <div className="text-2xl">{territory.flag}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/70">
                    {territory.code}
                  </div>
                  <div className="mt-1 text-[11px] text-brand-dark/55">
                    {territory.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-brand-dark/8 bg-brand-light px-5 py-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-accent" />
              <span className="text-sm font-medium text-brand-dark/75">
                {t("cape.partnerLine")}
              </span>
            </div>
          </div>

          <div className="grid gap-5">
            {categories.map((category, idx) => (
              <article
                key={category.slug}
                id={`cape-${category.slug}`}
                className="group rounded-[1.5rem] border border-brand-dark/8 bg-brand-light p-7 transition duration-300 hover:border-brand-accent/30 hover:shadow-panel"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-xs font-semibold text-brand-accent">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-dark">
                        {category.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-brand-dark/68">
                      {category.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {category.models.map((model) => (
                        <span
                          key={model}
                          className="rounded-full bg-white px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-brand-dark/72 ring-1 ring-brand-dark/10"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl text-brand-dark/25 transition group-hover:text-brand-accent">
                    →
                  </div>
                </div>
              </article>
            ))}

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-accent"
            >
              {t("cape.inventoryCta")} <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapeAgent;
