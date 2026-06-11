import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {t("services.eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.025em] text-brand-dark sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-dark/72">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, idx) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-brand-dark/8 bg-brand-light p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-panel"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-xs font-semibold text-brand-accent">
                0{idx + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.02em] text-brand-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-dark/70">
                {service.description}
              </p>
              {service.bullets ? (
                <ul className="mt-5 space-y-2 border-t border-brand-dark/8 pt-5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-6 text-brand-dark/72"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
