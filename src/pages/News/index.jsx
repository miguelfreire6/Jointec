import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function NewsPage() {
  const { t } = useTranslation();
  const articles = t("newsPage.articles", { returnObjects: true });
  const labels = t("newsPage.labels", { returnObjects: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img
            src="/images/production_line.webp"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/55 to-brand-dark/95" />
        </div>

        <div className="section-shell relative">
          <div className="grid min-h-[50vh] grid-cols-1 items-center py-20 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {t("newsPage.eyebrow")}
              </p>
              <h1 className="mt-6 text-5xl font-light leading-[1.02] tracking-[-0.035em] sm:text-6xl">
                {t("newsPage.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {t("newsPage.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <article className="overflow-hidden rounded-[2rem] border border-brand-dark/8 bg-brand-light">
            <div className="grid gap-px lg:grid-cols-[1.2fr_1fr]">
              <div className="aspect-[16/10] overflow-hidden bg-brand-dark lg:aspect-auto">
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-brand-light p-8 sm:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                  {featured.tag} · {featured.date}
                </p>
                <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.02em] text-brand-dark sm:text-4xl">
                  {featured.headline}
                </h2>
                <p className="mt-5 text-sm leading-7 text-brand-dark/72">
                  {featured.summary}
                </p>
                <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-brand-dark/55">
                  {labels.byline} {featured.author}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-brand-light py-20 sm:py-24">
        <div className="section-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {labels.moreLabel}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <article
                key={i}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-dark/8 bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-dark">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                    {a.tag} · {a.date}
                  </p>
                  <h3 className="mt-3 text-lg font-medium tracking-[-0.01em] text-brand-dark">
                    {a.headline}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-brand-dark/70">
                    {a.summary}
                  </p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-brand-dark/55">
                    {labels.byline} {a.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {labels.ctaEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-light tracking-[-0.02em] sm:text-3xl">
                {labels.ctaTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
                {labels.ctaBody}
              </p>
            </div>
            <a
              href="https://www.linkedin.com/company/108651152/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button inline-flex h-12 items-center px-6"
            >
              {labels.ctaButton} ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
