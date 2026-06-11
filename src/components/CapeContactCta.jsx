import { useTranslation } from "react-i18next";
import { CAPE_INQUIRY_MAILTO } from "../data/cape";

const COPY = {
  en: {
    eyebrow: "CAPE machinery inquiries",
    title: "Interested in CAPE Machinery?",
    text: "Contact Jointec to discuss your production needs, available space, automation level and the CAPE machine configuration best suited to your operation.",
    cta: "Request CAPE Information",
    call: "Call CEO Karl: +46 70 633 97 17",
  },
  es: {
    eyebrow: "Consultas sobre maquinaria CAPE",
    title: "¿Le interesa la maquinaria CAPE?",
    text: "Contacte con Jointec para hablar de sus necesidades de producción, espacio disponible, nivel de automatización y configuración CAPE más adecuada.",
    cta: "Solicitar información CAPE",
    call: "Llamar al CEO Karl: +46 70 633 97 17",
  },
  sv: {
    eyebrow: "Förfrågningar om CAPE-utrustning",
    title: "Intresserad av CAPE-utrustning?",
    text: "Kontakta Jointec för att diskutera produktionsbehov, tillgänglig yta, automationsnivå och den CAPE-konfiguration som passar din drift bäst.",
    cta: "Begär CAPE-information",
    call: "Ring VD Karl: +46 70 633 97 17",
  },
  de: {
    eyebrow: "Anfragen zu CAPE-Maschinen",
    title: "Interessiert an CAPE-Maschinen?",
    text: "Kontaktieren Sie Jointec, um Produktionsbedarf, verfügbare Fläche, Automationsgrad und die passende CAPE-Konfiguration zu besprechen.",
    cta: "CAPE-Informationen anfragen",
    call: "CEO Karl anrufen: +46 70 633 97 17",
  },
  fr: {
    eyebrow: "Demandes concernant les machines CAPE",
    title: "Intéressé par les machines CAPE ?",
    text: "Contactez Jointec pour discuter de vos besoins de production, de l’espace disponible, du niveau d’automatisation et de la configuration CAPE la mieux adaptée.",
    cta: "Demander des informations CAPE",
    call: "Appeler le CEO Karl : +46 70 633 97 17",
  },
};

export default function CapeContactCta() {
  const { i18n } = useTranslation();
  const copy = COPY[i18n.resolvedLanguage || i18n.language] || COPY.en;

  return (
    <section id="cape-contact" className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="section-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">
            {copy.text}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={CAPE_INQUIRY_MAILTO} className="primary-button">
            {copy.cta}
          </a>
          <a
            href="tel:+46706339717"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent"
          >
            {copy.call}
          </a>
        </div>
      </div>
    </section>
  );
}
