import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CapeContactCta from "../../components/CapeContactCta";
import CapePlaceholder from "../../components/CapePlaceholder";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { CAPE_USED_MAILTO, getCapeCategoryMap } from "../../data/cape";

const COPY = {
  en: {
    allCategories: "All CAPE Categories",
    requestInfo: "Request Information",
    availabilityTitle: "Current availability varies.",
    availabilityText: "Contact Jointec for available used and refurbished CAPE machinery.",
    availabilityCta: "Ask About Used CAPE Machinery",
  },
  es: {
    allCategories: "Todas las categorías CAPE",
    requestInfo: "Solicitar información",
    availabilityTitle: "La disponibilidad varía.",
    availabilityText: "Contacte con Jointec para conocer maquinaria CAPE usada y reacondicionada disponible.",
    availabilityCta: "Consultar maquinaria CAPE usada",
  },
  sv: {
    allCategories: "Alla CAPE-kategorier",
    requestInfo: "Begär information",
    availabilityTitle: "Aktuell tillgänglighet varierar.",
    availabilityText: "Kontakta Jointec för tillgänglig begagnad och renoverad CAPE-utrustning.",
    availabilityCta: "Fråga om begagnad CAPE-utrustning",
  },
  de: {
    allCategories: "Alle CAPE-Kategorien",
    requestInfo: "Information anfragen",
    availabilityTitle: "Die aktuelle Verfügbarkeit variiert.",
    availabilityText: "Kontaktieren Sie Jointec für verfügbare gebrauchte und überholte CAPE-Maschinen.",
    availabilityCta: "Nach gebrauchten CAPE-Maschinen fragen",
  },
  fr: {
    allCategories: "Toutes les catégories CAPE",
    requestInfo: "Demander des informations",
    availabilityTitle: "La disponibilité varie.",
    availabilityText: "Contactez Jointec pour connaître les machines CAPE d’occasion et reconditionnées disponibles.",
    availabilityCta: "Demander les machines CAPE d’occasion",
  },
};

export default function CapeCategoryPage() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const copy = COPY[language] || COPY.en;
  const { categorySlug } = useParams();
  const category = getCapeCategoryMap(language)[categorySlug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (category) document.title = category.seoTitle;
  }, [category]);

  if (!category) return <Navigate to="/cape" replace />;

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="bg-brand-dark py-20 text-white sm:py-24">
        <div className="section-shell">
          <Link to="/cape" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
            ← {copy.allCategories}
          </Link>
          <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.04] tracking-[-0.04em] sm:text-6xl">
            {category.pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 sm:text-lg">{category.intro}</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          {category.machines.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.machines.map((machine) => (
                <article key={machine.name} className="overflow-hidden rounded-3xl border border-brand-dark/8 bg-brand-light transition hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-panel">
                  <CapePlaceholder label={machine.name} />
                  <div className="p-6">
                    <h2 className="text-lg font-semibold tracking-[-0.015em]">{machine.name}</h2>
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-7 text-brand-dark/68">{machine.description}</p>
                    <a href={machine.mailto} className="secondary-button mt-5 px-5 py-2.5 text-xs">
                      {copy.requestInfo}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-brand-dark/8 bg-brand-light p-7 sm:p-10">
              <h2 className="text-3xl font-light tracking-[-0.02em]">{copy.availabilityTitle}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-brand-dark/70">
                {copy.availabilityText}
              </p>
              <a href={CAPE_USED_MAILTO} className="primary-button mt-7">{copy.availabilityCta}</a>
            </div>
          )}
        </div>
      </section>

      <CapeContactCta />
      <Footer />
    </div>
  );
}
