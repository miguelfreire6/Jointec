import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const numbers = t("about.numbers", { returnObjects: true });
  const pillars = t("about.pillars", { returnObjects: true });

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="section-shell">
        {/* Eyebrow + title */}
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.025em] text-brand-dark sm:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-dark/72">
              {t("about.description")}
            </p>

            {/* Reference customer card */}
            <div className="mt-10 rounded-2xl border border-brand-dark/8 bg-brand-light p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {t("about.referenceLabel")}
              </p>
              <p className="mt-3 text-lg font-medium text-brand-dark">
                {t("about.referenceName")}
              </p>
              <p className="mt-2 text-sm leading-7 text-brand-dark/70">
                {t("about.referenceText")}
              </p>
            </div>
          </div>

          {/* Big numbers band */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-dark/8 bg-brand-dark/10">
            {numbers.map((n) => (
              <div key={n.label} className="bg-white p-6 sm:p-7">
                <p className="text-4xl font-light tracking-[-0.02em] text-brand-accent sm:text-5xl">
                  {n.value}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.28em] text-brand-dark/55">
                  {n.label}
                </p>
                {n.sub ? (
                  <p className="mt-2 text-xs text-brand-dark/55">{n.sub}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Three credibility pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => (
            <article
              key={p.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-brand-dark/8 bg-brand-light p-7"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-xs font-semibold text-brand-accent">
                0{idx + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.02em] text-brand-dark">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-dark/70">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
