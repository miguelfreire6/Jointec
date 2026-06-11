import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";

const FEFPEB_FEATURED = {
  tag: {
    en: "Featured announcement",
    es: "Anuncio destacado",
    sv: "Utvalt meddelande",
    de: "Ausgewählte Ankündigung",
    fr: "Annonce à la une",
  },
  date: {
    en: "30 September - 2 October 2026 · Båstad, Sweden",
    es: "30 de septiembre - 2 de octubre de 2026 · Båstad, Suecia",
    sv: "30 september - 2 oktober 2026 · Båstad, Sverige",
    de: "30. September - 2. Oktober 2026 · Båstad, Schweden",
    fr: "30 septembre - 2 octobre 2026 · Båstad, Suède",
  },
  headline: {
    en: "Jointec at FEFPEB 2026",
    es: "Jointec en FEFPEB 2026",
    sv: "Jointec på FEFPEB 2026",
    de: "Jointec auf der FEFPEB 2026",
    fr: "Jointec à la FEFPEB 2026",
  },
  summary: {
    en: "Meet Jointec at the FEFPEB Congress in Båstad. During the 1 October industrial visit, see CAPE lines in operation and Jointec's new Block Production Line demonstrated.",
    es: "Conozca a Jointec en el Congreso FEFPEB en Båstad. Durante la visita industrial del 1 de octubre, vea líneas CAPE en operación y la nueva Block Production Line de Jointec en demostración.",
    sv: "Träffa Jointec på FEFPEB-kongressen i Båstad. Under industribesöket den 1 oktober kan du se CAPE-linjer i drift och Jointecs nya Block Production Line demonstrerad.",
    de: "Treffen Sie Jointec auf dem FEFPEB-Kongress in Båstad. Beim Industriebesuch am 1. Oktober sehen Sie CAPE-Linien in Betrieb und Jointecs neue Block Production Line in Vorführung.",
    fr: "Rencontrez Jointec au congrès FEFPEB à Båstad. Lors de la visite industrielle du 1er octobre, découvrez les lignes CAPE en fonctionnement et la nouvelle Block Production Line de Jointec en démonstration.",
  },
  author: "Jointec",
  image: "/images/fefpeb-congress-2026.jpg",
};

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const labels = t("newsPage.labels", { returnObjects: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const featured = {
    ...FEFPEB_FEATURED,
    tag: FEFPEB_FEATURED.tag[language] || FEFPEB_FEATURED.tag.en,
    date: FEFPEB_FEATURED.date[language] || FEFPEB_FEATURED.date.en,
    headline: FEFPEB_FEATURED.headline[language] || FEFPEB_FEATURED.headline.en,
    summary: FEFPEB_FEATURED.summary[language] || FEFPEB_FEATURED.summary.en,
  };
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
                <Link
                  to="/news/fefpeb-2026"
                  className="primary-button mt-7 inline-flex px-5 py-3 text-xs"
                >
                  {labels.readMore}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <MachineUpdatesSignup sourcePage="News" />

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
