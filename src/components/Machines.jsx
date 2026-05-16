import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MACHINE_IMAGES = {
  klotsproduktionslinje: "/images/klots_extrusion.webp",
  "plastning-nonstop":    "/images/finished_pallets.webp",
  "topfoil-pallet":       "/images/pallet_green_blocks.webp",
};

function Machines() {
  const { t } = useTranslation();
  const machines = t("machines.items", { returnObjects: true });

  return (
    <section id="machines" className="bg-brand-light py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {t("machines.eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.025em] text-brand-dark sm:text-5xl">
            {t("machines.title")}
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-dark/72">
            {t("machines.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {machines.map((machine, idx) => (
            <article
              key={machine.product}
              id={machine.anchor}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-dark/8 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-panel"
            >
              <Link
                to={`/machines/${machine.anchor}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-brand-dark"
                aria-label={machine.product}
              >
                <img
                  src={MACHINE_IMAGES[machine.anchor]}
                  alt={machine.product}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex h-7 items-center rounded-full bg-white/95 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
                  0{idx + 1} · {t("machines.worldwide")}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-dark">
                  {machine.product}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-accent">
                  {machine.headline}
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-dark/70">
                  {machine.description}
                </p>

                <div className="mt-6 border-t border-brand-dark/8 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-dark/55">
                    {t("machines.featuresLabel")}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-dark/72">
                    {machine.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    to={`/machines/${machine.anchor}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:gap-3"
                  >
                    {t("machines.cta")} <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-brand-accent/25 bg-brand-dark p-7 text-white sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
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
