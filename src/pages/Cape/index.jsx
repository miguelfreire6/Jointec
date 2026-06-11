import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CapeContactCta from "../../components/CapeContactCta";
import CapePlaceholder from "../../components/CapePlaceholder";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";
import { CAPE_AGENT_MAILTO, CAPE_INQUIRY_MAILTO, getCapeCategories } from "../../data/cape";

const SEO_DESCRIPTION =
  "Jointec is the exclusive agent for CAPE woodworking machinery in Scandinavia, Switzerland and Austria. Explore CAPE pallet machinery, sawmill machinery, cable drum machinery, stackers and handling systems.";

const COPY = {
  en: {
    title: "CAPE Woodworking Machinery | Exclusive Agent in Scandinavia, Switzerland & Austria | Jointec",
    eyebrow: "Exclusive Agent of CAPE",
    heroTitle: "CAPE Woodworking Machinery, Supplied by Jointec",
    heroText:
      "Jointec is the exclusive agent for CAPE in Scandinavia, Switzerland and Austria, offering advanced machinery solutions for pallet production, sawmill operations, cable drums and automated wood packaging production.",
    explore: "Explore CAPE Machines",
    contact: "Contact Jointec",
    aboutEyebrow: "CAPE woodworking machinery",
    aboutTitle: "About CAPE",
    aboutText1:
      "CAPE is one of the leading manufacturers of woodworking machinery for pallet, sawmill and cable drum production. Their technology is designed for industrial producers who need reliable, automated and scalable production solutions.",
    aboutText2:
      "Through Jointec, customers in Scandinavia, Switzerland and Austria can access CAPE machinery together with local technical knowledge, project support and long-term service coordination.",
    agentEyebrow: "Exclusive representation",
    agentTitle: "Jointec - Exclusive Agent of CAPE",
    agentText:
      "Jointec represents CAPE in Scandinavia, Switzerland and Austria. We support customers from the first machinery discussion through configuration, installation planning and after-sales coordination.",
    regions: ["Scandinavia", "Switzerland", "Austria"],
    discuss: "Discuss CAPE Machinery With Jointec",
    categoriesEyebrow: "Production areas",
    categoriesTitle: "CAPE Machine Categories",
    categoriesText:
      "Explore CAPE machinery by production area. Each category includes machines and systems designed for professional wood packaging and industrial production environments.",
    viewMachines: "View Machines",
  },
  es: {
    title: "CAPE Woodworking Machinery | Agente exclusivo en Escandinavia, Suiza y Austria | Jointec",
    eyebrow: "Agente exclusivo de CAPE",
    heroTitle: "CAPE Woodworking Machinery, suministrada por Jointec",
    heroText:
      "Jointec es el agente exclusivo de CAPE en Escandinavia, Suiza y Austria, ofreciendo soluciones avanzadas para producción de palets, aserraderos, tambores de cable y embalaje de madera automatizado.",
    explore: "Explorar equipos CAPE",
    contact: "Contactar con Jointec",
    aboutEyebrow: "Maquinaria CAPE para madera",
    aboutTitle: "Acerca de CAPE",
    aboutText1:
      "CAPE es uno de los fabricantes líderes de maquinaria para madera destinada a producción de palets, aserraderos y tambores de cable. Su tecnología está pensada para productores industriales que necesitan soluciones fiables, automatizadas y escalables.",
    aboutText2:
      "A través de Jointec, los clientes de Escandinavia, Suiza y Austria acceden a maquinaria CAPE con conocimiento técnico local, apoyo de proyecto y coordinación de servicio a largo plazo.",
    agentEyebrow: "Representación exclusiva",
    agentTitle: "Jointec - Agente exclusivo de CAPE",
    agentText:
      "Jointec representa a CAPE en Escandinavia, Suiza y Austria. Acompañamos a los clientes desde la primera conversación técnica hasta la configuración, planificación de instalación y soporte posterior.",
    regions: ["Escandinavia", "Suiza", "Austria"],
    discuss: "Hablar de maquinaria CAPE con Jointec",
    categoriesEyebrow: "Áreas de producción",
    categoriesTitle: "Categorías de equipos CAPE",
    categoriesText:
      "Explore la maquinaria CAPE por área de producción. Cada categoría incluye máquinas y sistemas diseñados para embalaje de madera profesional y producción industrial.",
    viewMachines: "Ver equipos",
  },
  sv: {
    title: "CAPE Woodworking Machinery | Exklusiv agent i Skandinavien, Schweiz och Österrike | Jointec",
    eyebrow: "Exklusiv agent för CAPE",
    heroTitle: "CAPE Woodworking Machinery, levererad av Jointec",
    heroText:
      "Jointec är exklusiv agent för CAPE i Skandinavien, Schweiz och Österrike och erbjuder avancerade lösningar för pallproduktion, sågverk, kabeltrummor och automatiserad träemballageproduktion.",
    explore: "Utforska CAPE-utrustning",
    contact: "Kontakta Jointec",
    aboutEyebrow: "CAPE träbearbetningsutrustning",
    aboutTitle: "Om CAPE",
    aboutText1:
      "CAPE är en av de ledande tillverkarna av träbearbetningsutrustning för pall-, sågverks- och kabeltrumsproduktion. Tekniken är utvecklad för industriella producenter som behöver tillförlitliga, automatiserade och skalbara lösningar.",
    aboutText2:
      "Genom Jointec får kunder i Skandinavien, Schweiz och Österrike tillgång till CAPE-utrustning tillsammans med lokal teknisk kunskap, projektstöd och långsiktig servicekoordinering.",
    agentEyebrow: "Exklusiv representation",
    agentTitle: "Jointec - Exklusiv agent för CAPE",
    agentText:
      "Jointec representerar CAPE i Skandinavien, Schweiz och Österrike. Vi stöttar kunder från första maskindiskussionen till konfiguration, installationsplanering och eftermarknad.",
    regions: ["Skandinavien", "Schweiz", "Österrike"],
    discuss: "Diskutera CAPE-utrustning med Jointec",
    categoriesEyebrow: "Produktionsområden",
    categoriesTitle: "CAPE utrustningskategorier",
    categoriesText:
      "Utforska CAPE-utrustning efter produktionsområde. Varje kategori omfattar maskiner och system för professionellt träemballage och industriell produktion.",
    viewMachines: "Visa utrustning",
  },
  de: {
    title: "CAPE Woodworking Machinery | Exklusiver Agent in Skandinavien, Schweiz und Österreich | Jointec",
    eyebrow: "Exklusiver Agent für CAPE",
    heroTitle: "CAPE Woodworking Machinery, geliefert von Jointec",
    heroText:
      "Jointec ist exklusiver Agent für CAPE in Skandinavien, der Schweiz und Österreich und bietet fortschrittliche Maschinenlösungen für Palettenproduktion, Sägewerke, Kabeltrommeln und automatisierte Holzverpackungsproduktion.",
    explore: "CAPE-Ausrüstung entdecken",
    contact: "Jointec kontaktieren",
    aboutEyebrow: "CAPE Holzbearbeitungsmaschinen",
    aboutTitle: "Über CAPE",
    aboutText1:
      "CAPE gehört zu den führenden Herstellern von Holzbearbeitungsmaschinen für Paletten-, Sägewerks- und Kabeltrommelproduktion. Die Technologie ist für industrielle Produzenten entwickelt, die zuverlässige, automatisierte und skalierbare Lösungen benötigen.",
    aboutText2:
      "Über Jointec erhalten Kunden in Skandinavien, der Schweiz und Österreich Zugang zu CAPE-Maschinen mit lokaler technischer Kompetenz, Projektunterstützung und langfristiger Servicekoordination.",
    agentEyebrow: "Exklusive Vertretung",
    agentTitle: "Jointec - Exklusiver Agent für CAPE",
    agentText:
      "Jointec vertritt CAPE in Skandinavien, der Schweiz und Österreich. Wir unterstützen Kunden vom ersten Maschinengespräch über Konfiguration und Installationsplanung bis zur After-Sales-Koordination.",
    regions: ["Skandinavien", "Schweiz", "Österreich"],
    discuss: "CAPE-Maschinen mit Jointec besprechen",
    categoriesEyebrow: "Produktionsbereiche",
    categoriesTitle: "CAPE Ausrüstungskategorien",
    categoriesText:
      "Entdecken Sie CAPE-Maschinen nach Produktionsbereich. Jede Kategorie umfasst Maschinen und Systeme für professionelle Holzverpackung und industrielle Produktion.",
    viewMachines: "Ausrüstung ansehen",
  },
  fr: {
    title: "CAPE Woodworking Machinery | Agent exclusif en Scandinavie, Suisse et Autriche | Jointec",
    eyebrow: "Agent exclusif de CAPE",
    heroTitle: "CAPE Woodworking Machinery, fournie par Jointec",
    heroText:
      "Jointec est l’agent exclusif de CAPE en Scandinavie, Suisse et Autriche, avec des solutions avancées pour la production de palettes, les scieries, les tourets de câble et l’emballage bois automatisé.",
    explore: "Explorer les équipements CAPE",
    contact: "Contacter Jointec",
    aboutEyebrow: "Machines CAPE pour le bois",
    aboutTitle: "À propos de CAPE",
    aboutText1:
      "CAPE est l’un des principaux fabricants de machines pour le bois destinées à la production de palettes, aux scieries et aux tourets de câble. Sa technologie s’adresse aux producteurs industriels qui recherchent fiabilité, automatisation et évolutivité.",
    aboutText2:
      "Avec Jointec, les clients de Scandinavie, Suisse et Autriche accèdent aux machines CAPE avec expertise technique locale, accompagnement de projet et coordination du service à long terme.",
    agentEyebrow: "Représentation exclusive",
    agentTitle: "Jointec - Agent exclusif de CAPE",
    agentText:
      "Jointec représente CAPE en Scandinavie, Suisse et Autriche. Nous accompagnons les clients de la première discussion machine à la configuration, la planification d’installation et le suivi après-vente.",
    regions: ["Scandinavie", "Suisse", "Autriche"],
    discuss: "Discuter des machines CAPE avec Jointec",
    categoriesEyebrow: "Domaines de production",
    categoriesTitle: "Catégories d’équipements CAPE",
    categoriesText:
      "Explorez les machines CAPE par domaine de production. Chaque catégorie comprend des machines et systèmes conçus pour l’emballage bois professionnel et la production industrielle.",
    viewMachines: "Voir l’équipement",
  },
};

export default function CapePage() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const copy = COPY[language] || COPY.en;
  const categories = getCapeCategories(language);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = copy.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", SEO_DESCRIPTION);
  }, [copy.title]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img src="/images/production_line.webp" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/65" />
        </div>
        <div className="section-shell relative grid min-h-[68vh] gap-10 py-20 lg:grid-cols-[1fr_0.34fr] lg:items-center lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              {copy.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cape-categories" className="primary-button">{copy.explore}</a>
              <a href={CAPE_INQUIRY_MAILTO} className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent">
                {copy.contact}
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-panel sm:p-8">
            <img src="/images/cape-logo.svg" alt="CAPE" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">{copy.aboutEyebrow}</p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.03em]">{copy.aboutTitle}</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-brand-dark/72">
            <p>{copy.aboutText1}</p>
            <p>{copy.aboutText2}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 sm:py-24">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-brand-dark/8 bg-white p-7 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">{copy.agentEyebrow}</p>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.03em]">{copy.agentTitle}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-dark/72">
              {copy.agentText}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.regions.map((region) => (
                <div key={region} className="rounded-2xl border border-brand-dark/8 bg-brand-light px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-dark/72">
                  {region}
                </div>
              ))}
            </div>
            <a href={CAPE_AGENT_MAILTO} className="primary-button mt-8">{copy.discuss}</a>
          </div>
        </div>
      </section>

      <section id="cape-categories" className="bg-white py-20 sm:py-28">
        <div className="section-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">{copy.categoriesEyebrow}</p>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] sm:text-5xl">{copy.categoriesTitle}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-dark/70">
            {copy.categoriesText}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <article key={category.slug} className="group overflow-hidden rounded-3xl border border-brand-dark/8 bg-brand-light transition hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-panel">
                <CapePlaceholder label={category.title} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{category.title}</h3>
                  <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-brand-dark/68">{category.description}</p>
                  <Link to={`/cape/${category.slug}`} className="secondary-button mt-5 px-5 py-2.5 text-xs">
                    {copy.viewMachines}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MachineUpdatesSignup sourcePage="CAPE" />

      <CapeContactCta />
      <Footer />
    </div>
  );
}
