import { useTranslation } from "react-i18next";

const ROBOTICS_CARDS = [
  {
    tag: "ROBOTIC NAILING",
    title: "Robotic Pallet Nailing",
    text: "Early robotic nailing systems developed to improve production speed, precision and consistency in pallet manufacturing.",
    video: "/videos/robotic-pallet-nailing.mp4",
  },
  {
    tag: "ROBOTIC REPAIR",
    title: "Robotic Pallet Repair",
    text: "Robot-assisted repair solutions designed to make pallet repair faster, safer and more standardized.",
    video: "/videos/robotic-pallet-repair.mp4",
    poster: "/images/robotic-pallet-repair-poster.png",
  },
  {
    tag: "ROBOTIC HANDLING",
    title: "Automated Pallet Handling",
    text: "Robotic handling systems for moving, positioning and processing pallets efficiently inside production lines.",
    video: "/videos/robotic-pallet-handling.mp4",
  },
];

const TOPFOIL_HISTORY = [
  {
    title: "Paper Mill Pallet Foiling",
    video: "/videos/topfoil-early-paper-mills.mp4",
  },
  {
    title: "Topfoil Value Added to the Pallet",
    video: "/videos/topfoil-example-old.mp4",
  },
];

const COPY = {
  en: {
    label: "Historical Innovation",
    heading: "Robotics in the Pallet Industry - 25 Years Ago",
    badge: "Early 2000s · Robotic nailing · Repair automation · Pallet handling",
    intro:
      "Already in the early 2000s, Jointec was among the first to bring robotics into pallet production and repair. From robotic pallet nailing to automated repair and handling systems, these installations helped producers increase speed, consistency and safety long before robotics became common in the industry.",
    topfoilLabel: "Adding value since 1993",
    topfoilHeading: "Foiling Nonstop pallets for demanding industrial customers.",
    topfoilText:
      "In 1993, together with customers, Jointec understood the importance of adding value directly to the pallet. The famous Nonstop pallets were used by paper mills and other industrial customers, helping move protective foil application into pallet production instead of leaving it as a separate manual step.",
    closing: "Decades of automation experience - still built into every Jointec solution today.",
    cta: "Explore our machines",
    roboticsCards: ROBOTICS_CARDS,
    topfoilHistory: TOPFOIL_HISTORY,
  },
  es: {
    label: "Innovación histórica",
    heading: "Robótica en la industria del palet - hace 25 años",
    badge: "Años 2000 · Clavado robótico · Automatización de reparación · Manipulación de palets",
    intro:
      "Ya a principios de los años 2000, Jointec fue una de las primeras empresas en introducir robótica en la producción y reparación de palets. Desde el clavado robótico hasta sistemas automatizados de reparación y manipulación, estas instalaciones ayudaron a aumentar velocidad, consistencia y seguridad mucho antes de que la robótica fuera común en la industria.",
    topfoilLabel: "Añadiendo valor desde 1993",
    topfoilHeading: "Aplicación de foil a palets Nonstop para clientes industriales exigentes.",
    topfoilText:
      "En 1993, junto con sus clientes, Jointec entendió la importancia de añadir valor directamente al palet. Los conocidos palets Nonstop se utilizaban en papeleras y otros clientes industriales, integrando la aplicación de protección en la producción del palet.",
    closing: "Décadas de experiencia en automatización, todavía presentes en cada solución Jointec.",
    cta: "Explorar equipos",
    roboticsCards: [
      { ...ROBOTICS_CARDS[0], tag: "CLAVADO ROBÓTICO", title: "Clavado robótico de palets", text: "Primeros sistemas de clavado robótico desarrollados para mejorar velocidad, precisión y consistencia." },
      { ...ROBOTICS_CARDS[1], tag: "REPARACIÓN ROBÓTICA", title: "Reparación robótica de palets", text: "Soluciones de reparación asistida por robot para hacer el proceso más rápido, seguro y estandarizado." },
      { ...ROBOTICS_CARDS[2], tag: "MANIPULACIÓN ROBÓTICA", title: "Manipulación automatizada de palets", text: "Sistemas robóticos para mover, posicionar y procesar palets de forma eficiente dentro de líneas de producción." },
    ],
    topfoilHistory: [
      { ...TOPFOIL_HISTORY[0], title: "Foil para palets Nonstop" },
      { ...TOPFOIL_HISTORY[1], title: "Topfoil añade valor al palet" },
    ],
  },
  sv: {
    label: "Historisk innovation",
    heading: "Robotik i pallindustrin - för 25 år sedan",
    badge: "Tidigt 2000-tal · Robotspikning · Reparationsautomation · Pallhantering",
    intro:
      "Redan i början av 2000-talet var Jointec bland de första att introducera robotik i pallproduktion och pallreparation. Från robotiserad pallspikning till automatiserad reparation och hantering hjälpte installationerna producenter att öka hastighet, jämnhet och säkerhet långt innan robotik blev vanligt i branschen.",
    topfoilLabel: "Värde adderat sedan 1993",
    topfoilHeading: "Foliering av Nonstop-pallar för krävande industrikunder.",
    topfoilText:
      "År 1993 förstod Jointec tillsammans med kunder vikten av att addera värde direkt till pallen. De välkända Nonstop-pallarna användes av pappersbruk och andra industrikunder, vilket flyttade skyddsfolieringen in i pallproduktionen.",
    closing: "Decennier av automationserfarenhet - fortfarande inbyggd i varje Jointec-lösning.",
    cta: "Utforska utrustning",
    roboticsCards: [
      { ...ROBOTICS_CARDS[0], tag: "ROBOTSPIKNING", title: "Robotiserad pallspikning", text: "Tidiga robotiserade spiksystem utvecklade för bättre hastighet, precision och jämnhet." },
      { ...ROBOTICS_CARDS[1], tag: "ROBOTREPARATION", title: "Robotiserad pallreparation", text: "Robotassisterade reparationslösningar för snabbare, säkrare och mer standardiserad pallreparation." },
      { ...ROBOTICS_CARDS[2], tag: "ROBOTISK HANTERING", title: "Automatiserad pallhantering", text: "Robotsystem för att flytta, positionera och bearbeta pallar effektivt i produktionslinjer." },
    ],
    topfoilHistory: [
      { ...TOPFOIL_HISTORY[0], title: "Foliering av Nonstop-pallar" },
      { ...TOPFOIL_HISTORY[1], title: "Topfoil adderar värde till pallen" },
    ],
  },
};

COPY.de = {
  ...COPY.en,
  label: "Historische Innovation",
  heading: "Robotik in der Palettenindustrie - vor 25 Jahren",
  badge: "Frühe 2000er · Robotisches Nageln · Reparaturautomation · Palettenhandling",
  intro:
    "Bereits Anfang der 2000er Jahre gehörte Jointec zu den ersten Unternehmen, die Robotik in die Palettenproduktion und -reparatur brachten. Diese Anlagen erhöhten Geschwindigkeit, Konsistenz und Sicherheit lange bevor Robotik in der Branche üblich wurde.",
  topfoilLabel: "Wertschöpfung seit 1993",
  topfoilHeading: "Folierung von Nonstop-Paletten für anspruchsvolle Industriekunden.",
  topfoilText:
    "1993 erkannte Jointec gemeinsam mit Kunden, wie wichtig es ist, der Palette direkt Wert hinzuzufügen. Die bekannten Nonstop-Paletten wurden von Papierwerken und anderen Industriekunden eingesetzt und brachten die Schutzfolierung direkt in die Palettenproduktion.",
  closing: "Jahrzehnte Automationserfahrung - bis heute in jeder Jointec-Lösung.",
  cta: "Ausrüstung entdecken",
};

COPY.fr = {
  ...COPY.en,
  label: "Innovation historique",
  heading: "La robotique dans l’industrie de la palette - il y a 25 ans",
  badge: "Début des années 2000 · Clouage robotisé · Réparation automatisée · Manutention de palettes",
  intro:
    "Dès le début des années 2000, Jointec faisait partie des premières entreprises à introduire la robotique dans la production et la réparation de palettes. Ces installations ont aidé les producteurs à améliorer vitesse, régularité et sécurité bien avant que la robotique devienne courante.",
  topfoilLabel: "Ajouter de la valeur depuis 1993",
  topfoilHeading: "Filmage des palettes Nonstop pour clients industriels exigeants.",
  topfoilText:
    "En 1993, avec ses clients, Jointec a compris l’importance d’ajouter de la valeur directement à la palette. Les palettes Nonstop étaient utilisées par des papeteries et d’autres clients industriels, intégrant la protection directement dans la production.",
  closing: "Des décennies d’expérience en automatisation, toujours intégrées dans chaque solution Jointec.",
  cta: "Explorer l’équipement",
};

export default function HistoricalInnovation() {
  const { i18n } = useTranslation();
  const copy = COPY[i18n.resolvedLanguage || i18n.language] || COPY.en;

  return (
    <section className="bg-brand-light py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.label}
            </p>
            <h2 className="mt-5 text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl">
              {copy.heading}
            </h2>
            <p className="mt-5 inline-flex rounded-full border border-brand-dark/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-dark/58">
              {copy.badge}
            </p>
          </div>
          <div className="border-l-2 border-brand-accent bg-white p-6 text-base leading-8 text-brand-dark/72 shadow-sm">
            {copy.intro}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {copy.roboticsCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl border border-brand-dark/8 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-panel"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-brand-dark/8 bg-brand-dark">
                <video
                  src={card.video}
                  poster={card.poster}
                  className="h-full w-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-12 rounded-full bg-brand-accent" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  {card.tag}
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-dark">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-dark/68">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-brand-dark/8 bg-white p-6 shadow-sm sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                {copy.topfoilLabel}
              </p>
              <h3 className="mt-3 text-2xl font-light tracking-[-0.02em] text-brand-dark">
                {copy.topfoilHeading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-dark/68">
                {copy.topfoilText}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.topfoilHistory.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-brand-dark/8 bg-brand-dark">
                  <video
                    src={item.video}
                    className="aspect-[4/3] w-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <p className="bg-white px-4 py-3 text-sm font-semibold text-brand-dark">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-brand-dark/72">
            {copy.closing}
          </p>
          <a href="/machines" className="secondary-button w-fit px-5 py-2.5 text-xs">
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
