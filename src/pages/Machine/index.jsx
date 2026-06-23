import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";
import { PRIVATE_VISIT_MAILTO } from "../../data/cases";
import {
  MACHINE_DETAIL_TRANSLATIONS,
  MACHINE_DETAILS,
  MACHINE_ORDER,
} from "../../data/machineDetails";

const MACHINE_PAGE_LABELS = {
  en: {
    back: "All machines",
    requestMachineInfo: "Request Machine Information",
    machineVideo: "Machine video",
    seeOperation: "See the machine in operation.",
    nextStep: "Next step",
    interestedEquipment: "Interested in Our Equipment?",
    nextStepText:
      "Contact Jointec to discuss your production needs, answer technical questions, or request a visit to a reference site where relevant equipment is already in operation.",
    contactUs: "Contact us",
    requestReferenceVisit: "Request reference visit",
    protectivePalletProduction: "Protective pallet production",
    whatSolutionDoes: "What this solution does",
    addedValue: "Added value",
    whyItMatters: "Why It Matters",
    forPalletProducers: "For Pallet Producers",
    forPalletUsers: "For Pallet Users",
    automaticAddedValue: "Automatic added value",
    manualToAutomatic: "From manual protection to automatic added value.",
    flexibleIntegration: "Flexible integration",
    adaptableTitle: "Adaptable to New and Existing Lines",
    whoItIsFor: "Who it is for",
    designedFor: "Designed for",
    purpose: "Purpose",
    whatMachineDoes: "What this machine does",
    keyAdvantages: "Key advantages",
    technicalInfo: "Technical information",
    configured: "Configured for your production.",
    finalCtaValueTitle: "Interested in Adding More Value to Every Pallet?",
    finalCtaMachineTitle: "Interested in this machine?",
    finalCtaValueText:
      "Contact Jointec to discuss how Nonstop & Topfoil Pallet can be adapted to your pallet production line and customer needs.",
    finalCtaMachineText:
      "Contact Jointec to discuss your production needs, available space and suitable machine configuration.",
    requestInformation: "Request Information",
    nextMachine: "Next machine",
    machineVisualComingSoon: "Machine visual coming soon",
  },
  es: {
    back: "Todas las máquinas",
    requestMachineInfo: "Solicitar información de la máquina",
    machineVideo: "Vídeo de la máquina",
    seeOperation: "Vea la máquina en funcionamiento.",
    nextStep: "Siguiente paso",
    interestedEquipment: "¿Le interesa nuestro equipo?",
    nextStepText:
      "Contacte con Jointec para hablar de sus necesidades de producción, resolver preguntas técnicas o solicitar una visita a una referencia donde el equipo relevante ya esté en funcionamiento.",
    contactUs: "Contactar",
    requestReferenceVisit: "Solicitar visita de referencia",
    protectivePalletProduction: "Producción de palets protectores",
    whatSolutionDoes: "Qué hace esta solución",
    addedValue: "Valor añadido",
    whyItMatters: "Por qué es importante",
    forPalletProducers: "Para productores de palets",
    forPalletUsers: "Para usuarios de palets",
    automaticAddedValue: "Valor añadido automático",
    manualToAutomatic: "De protección manual a valor añadido automático.",
    flexibleIntegration: "Integración flexible",
    adaptableTitle: "Adaptable a líneas nuevas y existentes",
    whoItIsFor: "Para quién es",
    designedFor: "Diseñada para",
    purpose: "Propósito",
    whatMachineDoes: "Qué hace esta máquina",
    keyAdvantages: "Ventajas clave",
    technicalInfo: "Información técnica",
    configured: "Configurada para su producción.",
    finalCtaValueTitle: "¿Quiere añadir más valor a cada palet?",
    finalCtaMachineTitle: "¿Le interesa esta máquina?",
    finalCtaValueText:
      "Contacte con Jointec para hablar de cómo Nonstop & Topfoil Pallet puede adaptarse a su línea y a las necesidades de sus clientes.",
    finalCtaMachineText:
      "Contacte con Jointec para hablar de sus necesidades de producción, espacio disponible y configuración adecuada.",
    requestInformation: "Solicitar información",
    nextMachine: "Siguiente máquina",
    machineVisualComingSoon: "Imagen de la máquina próximamente",
  },
  sv: {
    back: "Alla maskiner",
    requestMachineInfo: "Begär maskininformation",
    machineVideo: "Maskinvideo",
    seeOperation: "Se maskinen i drift.",
    nextStep: "Nästa steg",
    interestedEquipment: "Intresserad av vår utrustning?",
    nextStepText:
      "Kontakta Jointec för att diskutera era produktionsbehov, få svar på tekniska frågor eller boka ett besök på en referensanläggning där relevant utrustning redan är i drift.",
    contactUs: "Kontakta oss",
    requestReferenceVisit: "Boka referensbesök",
    protectivePalletProduction: "Skyddande pallproduktion",
    whatSolutionDoes: "Vad lösningen gör",
    addedValue: "Mervärde",
    whyItMatters: "Varför det är viktigt",
    forPalletProducers: "För pallproducenter",
    forPalletUsers: "För pallanvändare",
    automaticAddedValue: "Automatiskt mervärde",
    manualToAutomatic: "Från manuellt skydd till automatiskt mervärde.",
    flexibleIntegration: "Flexibel integration",
    adaptableTitle: "Anpassningsbar till nya och befintliga linjer",
    whoItIsFor: "Vem den är för",
    designedFor: "Utformad för",
    purpose: "Syfte",
    whatMachineDoes: "Vad maskinen gör",
    keyAdvantages: "Viktiga fördelar",
    technicalInfo: "Teknisk information",
    configured: "Anpassad för er produktion.",
    finalCtaValueTitle: "Vill ni skapa mer värde i varje pall?",
    finalCtaMachineTitle: "Intresserad av den här maskinen?",
    finalCtaValueText:
      "Kontakta Jointec för att diskutera hur Nonstop & Topfoil Pallet kan anpassas till er pallproduktionslinje och era kunders behov.",
    finalCtaMachineText:
      "Kontakta Jointec för att diskutera era produktionsbehov, tillgänglig yta och lämplig maskinkonfiguration.",
    requestInformation: "Begär information",
    nextMachine: "Nästa maskin",
    machineVisualComingSoon: "Maskinbild kommer snart",
  },
  de: {
    back: "Alle Maschinen",
    requestMachineInfo: "Maschineninformationen anfordern",
    machineVideo: "Maschinenvideo",
    seeOperation: "Sehen Sie die Maschine im Betrieb.",
    nextStep: "Nächster Schritt",
    interestedEquipment: "Interessiert an unserer Ausrüstung?",
    nextStepText:
      "Kontaktieren Sie Jointec, um Ihre Produktionsanforderungen zu besprechen, technische Fragen zu klären oder einen Besuch an einem Referenzstandort mit relevanter Ausrüstung anzufragen.",
    contactUs: "Kontakt aufnehmen",
    requestReferenceVisit: "Referenzbesuch anfragen",
    protectivePalletProduction: "Schützende Palettenproduktion",
    whatSolutionDoes: "Was diese Lösung macht",
    addedValue: "Mehrwert",
    whyItMatters: "Warum es wichtig ist",
    forPalletProducers: "Für Palettenproduzenten",
    forPalletUsers: "Für Palettennutzer",
    automaticAddedValue: "Automatischer Mehrwert",
    manualToAutomatic: "Vom manuellen Schutz zum automatischen Mehrwert.",
    flexibleIntegration: "Flexible Integration",
    adaptableTitle: "Anpassbar an neue und bestehende Linien",
    whoItIsFor: "Für wen es geeignet ist",
    designedFor: "Konzipiert für",
    purpose: "Zweck",
    whatMachineDoes: "Was diese Maschine macht",
    keyAdvantages: "Wichtige Vorteile",
    technicalInfo: "Technische Informationen",
    configured: "Konfiguriert für Ihre Produktion.",
    finalCtaValueTitle: "Möchten Sie jeder Palette mehr Wert hinzufügen?",
    finalCtaMachineTitle: "Interessiert an dieser Maschine?",
    finalCtaValueText:
      "Kontaktieren Sie Jointec, um zu besprechen, wie Nonstop & Topfoil Pallet an Ihre Palettenproduktionslinie und Kundenbedürfnisse angepasst werden kann.",
    finalCtaMachineText:
      "Kontaktieren Sie Jointec, um Produktionsbedarf, verfügbaren Platz und geeignete Maschinenkonfiguration zu besprechen.",
    requestInformation: "Informationen anfordern",
    nextMachine: "Nächste Maschine",
    machineVisualComingSoon: "Maschinenbild folgt in Kürze",
  },
  fr: {
    back: "Toutes les machines",
    requestMachineInfo: "Demander des informations machine",
    machineVideo: "Vidéo machine",
    seeOperation: "Voir la machine en fonctionnement.",
    nextStep: "Étape suivante",
    interestedEquipment: "Intéressé par notre équipement ?",
    nextStepText:
      "Contactez Jointec pour discuter de vos besoins de production, obtenir des réponses techniques ou demander une visite sur un site de référence où l’équipement concerné est déjà en fonctionnement.",
    contactUs: "Nous contacter",
    requestReferenceVisit: "Demander une visite de référence",
    protectivePalletProduction: "Production de palettes protectrices",
    whatSolutionDoes: "Ce que fait cette solution",
    addedValue: "Valeur ajoutée",
    whyItMatters: "Pourquoi c’est important",
    forPalletProducers: "Pour les producteurs de palettes",
    forPalletUsers: "Pour les utilisateurs de palettes",
    automaticAddedValue: "Valeur ajoutée automatique",
    manualToAutomatic: "De la protection manuelle à la valeur ajoutée automatique.",
    flexibleIntegration: "Intégration flexible",
    adaptableTitle: "Adaptable aux lignes nouvelles et existantes",
    whoItIsFor: "Pour qui",
    designedFor: "Conçu pour",
    purpose: "Objectif",
    whatMachineDoes: "Ce que fait cette machine",
    keyAdvantages: "Avantages clés",
    technicalInfo: "Informations techniques",
    configured: "Configuré pour votre production.",
    finalCtaValueTitle: "Vous voulez ajouter plus de valeur à chaque palette ?",
    finalCtaMachineTitle: "Intéressé par cette machine ?",
    finalCtaValueText:
      "Contactez Jointec pour discuter de l’adaptation de Nonstop & Topfoil Pallet à votre ligne de production et aux besoins de vos clients.",
    finalCtaMachineText:
      "Contactez Jointec pour discuter de vos besoins de production, de l’espace disponible et de la configuration machine adaptée.",
    requestInformation: "Demander des informations",
    nextMachine: "Machine suivante",
    machineVisualComingSoon: "Visuel machine à venir",
  },
};

function getMachineCopy(detail, language) {
  return {
    ...detail,
    ...(MACHINE_DETAIL_TRANSLATIONS[language]?.[detail.slug] || {}),
  };
}

function getLabels(language) {
  return MACHINE_PAGE_LABELS[language] || MACHINE_PAGE_LABELS.en;
}

function PlaceholderVisual({ label }) {
  return (
    <div className="flex aspect-[16/10] items-center justify-center rounded-3xl bg-gradient-to-br from-brand-dark to-slate-700 px-8 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
        {label}
      </span>
    </div>
  );
}

function BenefitList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-brand-dark/74">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NextStepCta({ detail, labels }) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-8 rounded-3xl border border-brand-dark/8 bg-brand-light p-7 shadow-sm sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {labels.nextStep}
            </p>
            <h2 className="mt-3 text-3xl font-light tracking-[-0.02em]">
              {labels.interestedEquipment}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-dark/72">
              {labels.nextStepText}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button">
              {labels.contactUs}
            </a>
            <a href={PRIVATE_VISIT_MAILTO} className="secondary-button">
              {labels.requestReferenceVisit}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PpwrSection({ ppwr, language, detail }) {
  if (!ppwr) return null;
  const copy = ppwr[language] || ppwr.en || ppwr;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-brand-dark shadow-panel">
          <div className="grid gap-0 lg:grid-cols-[0.44fr_0.56fr]">
            <div className="p-7 text-white sm:p-10 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/76">
              {copy.intro}
            </p>
            <p className="mt-5 text-2xl font-light leading-snug tracking-[-0.02em] text-white">
              {copy.question}
            </p>
            <p className="mt-5 text-base leading-8 text-white/76">
              {copy.body}
            </p>
          </div>

            <div className="bg-white p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                {copy.valueTitle}
              </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {copy.points.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-brand-dark/8 bg-brand-light p-5">
                  <h3 className="font-semibold tracking-[-0.01em] text-brand-dark">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-dark/68">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-brand-dark/8 bg-brand-dark p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                {copy.questionsTitle}
              </p>
              <ul className="mt-5 space-y-3">
                {copy.customerQuestions.map((question) => (
                  <li key={question} className="flex gap-3 text-sm leading-7 text-white/76">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

              <p className="mt-6 text-xl font-light leading-8 tracking-[-0.02em] text-brand-dark">
                {copy.closing}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#block-production-line-details" className="secondary-button">
                  {copy.explore}
                </a>
                <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button">
                  {copy.talk}
                </a>
              </div>
              <p className="mt-6 rounded-2xl border border-brand-accent/25 bg-orange-50 p-5 text-sm font-medium leading-7 text-brand-dark/76">
                {copy.note}
              </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MachinePage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
  const detail = MACHINE_DETAILS[slug];
  const labels = getLabels(language);
  const copy = detail ? getMachineCopy(detail, language) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (copy) document.title = copy.pageTitle;
  }, [copy?.pageTitle]);

  if (!detail) return <Navigate to="/machines" replace />;

  const idx = MACHINE_ORDER.indexOf(slug);
  const nextSlug = MACHINE_ORDER[(idx + 1) % MACHINE_ORDER.length];
  const nextMachine = MACHINE_DETAILS[nextSlug];
  const nextMachineCopy = getMachineCopy(nextMachine, language);
  const hideTechnicalSection = ["microdryer", "nonstop-topfoil-pallet"].includes(detail.slug);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="relative overflow-hidden bg-brand-dark text-white">
        {detail.image ? (
          <div className="absolute inset-0">
            <img src={detail.image} alt="" className="h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/35" />
          </div>
        ) : null}
        <div className="section-shell relative py-20 sm:py-28">
          <Link
            to="/machines"
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-brand-accent"
          >
            ← {labels.back}
          </Link>
          <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.03] tracking-[-0.035em] sm:text-6xl">
            {copy.name}
          </h1>
          {copy.headline ? (
            <h2 className="mt-6 max-w-4xl text-3xl font-light leading-tight tracking-[-0.025em] text-white sm:text-4xl">
              {copy.headline}
            </h2>
          ) : null}
          <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-8 text-white/80">{copy.intro}</p>
          <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button mt-9">
            {labels.requestMachineInfo}
          </a>
        </div>
      </section>

      {detail.video ? (
        <>
          <section className="bg-brand-light py-20 sm:py-24">
            <div className="section-shell">
              {detail.slug === "block-production-line" ? null : (
                <>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                    {labels.machineVideo}
                  </p>
                  <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
                    {labels.seeOperation}
                  </h2>
                </>
              )}
              <div className={`${detail.slug === "block-production-line" ? "" : "mt-8"} overflow-hidden rounded-3xl border border-brand-dark/10 bg-black shadow-panel`}>
                <video
                  src={detail.video}
                  poster={detail.videoPoster || detail.image || undefined}
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
            </div>
          </section>
          <PpwrSection ppwr={detail.ppwr} language={language} detail={detail} />
          <NextStepCta detail={detail} labels={labels} />
        </>
      ) : null}

      {detail.value ? (
        <>
          <section id="block-production-line-details" className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {labels.protectivePalletProduction}
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">{labels.whatSolutionDoes}</h2>
              </div>
              <div className="whitespace-pre-line text-base leading-8 text-brand-dark/72">
                {copy.purpose}
              </div>
            </div>
          </section>

          <section className="bg-brand-light py-20 sm:py-24">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {labels.addedValue}
              </p>
              <h2 className="mt-5 text-4xl font-light tracking-[-0.03em]">{labels.whyItMatters}</h2>
              <p className="mt-6 max-w-4xl whitespace-pre-line text-base leading-8 text-brand-dark/72">
                {copy.value}
              </p>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                <article className="rounded-3xl border border-brand-dark/8 bg-white p-7">
                  <h3 className="text-2xl font-light tracking-[-0.02em]">{labels.forPalletProducers}</h3>
                  <BenefitList items={copy.producerBenefits} />
                </article>
                <article className="rounded-3xl border border-brand-dark/8 bg-white p-7">
                  <h3 className="text-2xl font-light tracking-[-0.02em]">{labels.forPalletUsers}</h3>
                  <BenefitList items={copy.userBenefits} />
                </article>
              </div>
            </div>
          </section>

          <section className="bg-brand-dark py-16 text-white sm:py-20">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {labels.automaticAddedValue}
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] sm:text-4xl">
                {labels.manualToAutomatic}
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-white/72">{copy.salesBlock}</p>
            </div>
          </section>

          <section className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {labels.flexibleIntegration}
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
                  {labels.adaptableTitle}
                </h2>
              </div>
              <p className="whitespace-pre-line text-base leading-8 text-brand-dark/72">{copy.adaptability}</p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {labels.whoItIsFor}
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">{labels.designedFor}</h2>
                <BenefitList items={copy.designedFor} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {labels.purpose}
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">{labels.whatMachineDoes}</h2>
                <p className="mt-6 text-base leading-8 text-brand-dark/72">{copy.purpose}</p>
                <p className="mt-5 text-base leading-8 text-brand-dark/72">{copy.process}</p>
              </div>
            </div>
          </section>

          {detail.slug !== "microdryer" ? (
          <section className="bg-brand-light py-20 sm:py-24">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {labels.keyAdvantages}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {copy.advantages.map(([title, body]) => (
                  <article key={title} className="rounded-2xl border border-brand-dark/8 bg-white p-6">
                    <h3 className="font-semibold tracking-[-0.01em]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-dark/68">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          ) : null}
        </>
      )}

      {!hideTechnicalSection ? (
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {labels.technicalInfo}
            </p>
            <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
              {labels.configured}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-dark/72">{copy.technical}</p>
          </div>
          <div>
            {detail.gallery.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.gallery.map((src) => (
                  <div key={src} className="aspect-[16/10] overflow-hidden rounded-3xl bg-brand-light">
                    <img
                      src={src}
                      alt=""
                      className={`h-full w-full object-cover ${
                        detail.rotateGallery ? "rotate-90 scale-[1.36]" : ""
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <PlaceholderVisual label={labels.machineVisualComingSoon} />
            )}
          </div>
        </div>
      </section>
      ) : null}

      <MachineUpdatesSignup sourcePage={copy.name} />

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-light tracking-[-0.02em]">
              {detail.value ? labels.finalCtaValueTitle : labels.finalCtaMachineTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              {detail.value ? labels.finalCtaValueText : labels.finalCtaMachineText}
            </p>
          </div>
          <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button">
            {detail.value ? labels.requestInformation : labels.requestMachineInfo}
          </a>
        </div>
      </section>

      <section className="bg-brand-light py-12 sm:py-16">
        <div className="section-shell">
          <Link
            to={`/machines/${nextSlug}`}
            className="group flex items-center justify-between rounded-3xl border border-brand-dark/8 bg-white p-6 transition hover:border-brand-accent/30 hover:shadow-panel sm:p-8"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-dark/55">
                {labels.nextMachine}
              </p>
              <p className="mt-2 text-xl font-medium tracking-[-0.02em]">{nextMachineCopy.name}</p>
            </div>
            <span className="text-3xl text-brand-accent transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
