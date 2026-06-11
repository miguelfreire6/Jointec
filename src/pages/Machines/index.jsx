import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";
import { MACHINE_SOLUTIONS } from "../../data/machineDetails";

const PAGE_COPY = {
  en: {
    title: "Value-Adding Pallet Equipment and Solutions | Jointec",
    description:
      "Jointec helps pallet producers add value to every pallet through equipment and solutions for protection, automation, recycling, efficiency and smarter production.",
    heroEyebrow: "Adding value to the pallet since 1988",
    heroTitle: "Add value to every pallet.",
    heroText:
      "Since 1988, Jointec has helped pallet producers turn simple wooden pallets into smarter, more profitable products. We develop and supply equipment and solutions that improve production, reduce waste, protect goods, use material better and create more value from every pallet.",
    valueEyebrow: "Value-adding solutions",
    valueTitle: "Equipment that increases pallet value.",
    valueText:
      "Jointec solutions are not isolated technical products. Each one is developed to help pallet producers improve what the pallet does, how it is made, or how much value can be created from the material flow around it.",
    experienceEyebrow: "Real pallet industry experience",
    experienceTitle: "Built from production, repair, dismantling and installation work.",
    experienceText1:
      "Jointec has worked directly with pallet production since 1988, including pallet repair, dismantling, automation, installation, equipment development and customer support. That experience matters because value is created on the production floor, not in a catalogue.",
    experienceText2:
      "We help producers move from just producing pallets to creating pallets with higher value, better function and more efficient production behind them.",
    ctaTitle: "Want to add more value to your pallets?",
    ctaText:
      "Let’s discuss how Jointec can help you improve your pallet production, reduce waste, protect goods, use material better and create stronger margins.",
    contact: "Contact Us",
    visualComingSoon: "Machine visual coming soon",
  },
  es: {
    title: "Soluciones para añadir valor al palet | Jointec",
    description:
      "Jointec ayuda a productores de palets a añadir valor a cada palet mediante soluciones para protección, automatización, reciclaje, eficiencia y producción más inteligente.",
    heroEyebrow: "Añadiendo valor al palet desde 1988",
    heroTitle: "Añada valor a cada palet.",
    heroText:
      "Desde 1988, Jointec ayuda a productores de palets a convertir palets de madera sencillos en productos más inteligentes y rentables. Desarrollamos y suministramos equipos y soluciones que mejoran la producción, reducen residuos, protegen mercancías, aprovechan mejor el material y crean más valor en cada palet.",
    valueEyebrow: "Soluciones de valor añadido",
    valueTitle: "Soluciones que aumentan el valor del palet.",
    valueText:
      "Las soluciones de Jointec no son productos técnicos aislados. Cada una está desarrollada para ayudar a los productores a mejorar la función del palet, su proceso de fabricación o el valor que puede crearse a partir del flujo de material.",
    experienceEyebrow: "Experiencia real en la industria del palet",
    experienceTitle: "Basado en producción, reparación, desmontaje e instalación.",
    experienceText1:
      "Jointec trabaja directamente con la producción de palets desde 1988, incluyendo reparación, desmontaje, automatización, instalación, desarrollo de equipos y soporte al cliente. Esa experiencia importa porque el valor se crea en la planta, no en un catálogo.",
    experienceText2:
      "Ayudamos a los productores a pasar de simplemente fabricar palets a crear palets con mayor valor, mejor función y una producción más eficiente detrás.",
    ctaTitle: "¿Quiere añadir más valor a sus palets?",
    ctaText:
      "Hablemos de cómo Jointec puede ayudarle a mejorar su producción de palets, reducir residuos, proteger mercancías, aprovechar mejor el material y crear márgenes más sólidos.",
    contact: "Contactar",
    visualComingSoon: "Visual de la solución próximamente",
  },
  sv: {
    title: "Värdeskapande pallutrustning och lösningar | Jointec",
    description:
      "Jointec hjälper pallproducenter att addera värde till varje pall genom utrustning och lösningar för skydd, automation, återvinning, effektivitet och smartare produktion.",
    heroEyebrow: "Adderar värde till pallen sedan 1988",
    heroTitle: "Addera värde till varje pall.",
    heroText:
      "Sedan 1988 har Jointec hjälpt pallproducenter att göra enkla träpallar till smartare och mer lönsamma produkter. Vi utvecklar och levererar utrustning och lösningar som förbättrar produktionen, minskar spill, skyddar gods, använder material bättre och skapar mer värde i varje pall.",
    valueEyebrow: "Värdeskapande lösningar",
    valueTitle: "Utrustning som ökar pallens värde.",
    valueText:
      "Jointecs lösningar är inte isolerade tekniska produkter. Varje lösning är utvecklad för att hjälpa pallproducenter förbättra vad pallen gör, hur den tillverkas eller hur mycket värde som kan skapas ur materialflödet.",
    experienceEyebrow: "Verklig erfarenhet från pallindustrin",
    experienceTitle: "Byggt på produktion, reparation, demontering och installation.",
    experienceText1:
      "Jointec har arbetat direkt med pallproduktion sedan 1988, inklusive pallreparation, demontering, automation, installation, utrustningsutveckling och kundsupport. Den erfarenheten spelar roll eftersom värdet skapas på produktionsgolvet, inte i en katalog.",
    experienceText2:
      "Vi hjälper producenter att gå från att bara producera pallar till att skapa pallar med högre värde, bättre funktion och effektivare produktion bakom.",
    ctaTitle: "Vill du addera mer värde till dina pallar?",
    ctaText:
      "Låt oss diskutera hur Jointec kan hjälpa dig att förbättra pallproduktionen, minska spill, skydda gods, använda material bättre och skapa starkare marginaler.",
    contact: "Kontakta oss",
    visualComingSoon: "Maskinbild kommer snart",
  },
  de: {
    title: "Wertsteigernde Palettenausrüstung und Lösungen | Jointec",
    description:
      "Jointec hilft Palettenproduzenten, jeder Palette mehr Wert zu verleihen - mit Ausrüstung und Lösungen für Schutz, Automation, Recycling, Effizienz und intelligentere Produktion.",
    heroEyebrow: "Mehr Wert für die Palette seit 1988",
    heroTitle: "Mehr Wert für jede Palette.",
    heroText:
      "Seit 1988 hilft Jointec Palettenproduzenten, einfache Holzpaletten in intelligentere und profitablere Produkte zu verwandeln. Wir entwickeln und liefern Ausrüstung und Lösungen, die Produktion verbessern, Abfall reduzieren, Waren schützen, Material besser nutzen und mit jeder Palette mehr Wert schaffen.",
    valueEyebrow: "Wertsteigernde Lösungen",
    valueTitle: "Ausrüstung, die den Palettenwert erhöht.",
    valueText:
      "Jointec-Lösungen sind keine isolierten technischen Produkte. Jede Lösung wird entwickelt, um Palettenproduzenten dabei zu helfen, die Funktion der Palette, ihre Herstellung oder den Wert aus dem Materialfluss zu verbessern.",
    experienceEyebrow: "Echte Erfahrung aus der Palettenindustrie",
    experienceTitle: "Entwickelt aus Produktion, Reparatur, Demontage und Installation.",
    experienceText1:
      "Jointec arbeitet seit 1988 direkt mit der Palettenproduktion, einschließlich Palettenreparatur, Demontage, Automation, Installation, Ausrüstungsentwicklung und Kundensupport. Diese Erfahrung zählt, weil Wert in der Produktion entsteht, nicht im Katalog.",
    experienceText2:
      "Wir helfen Produzenten, nicht nur Paletten herzustellen, sondern Paletten mit höherem Wert, besserer Funktion und effizienterer Produktion zu schaffen.",
    ctaTitle: "Möchten Sie Ihren Paletten mehr Wert geben?",
    ctaText:
      "Lassen Sie uns besprechen, wie Jointec Ihre Palettenproduktion verbessern, Abfall reduzieren, Waren schützen, Material besser nutzen und stärkere Margen schaffen kann.",
    contact: "Kontakt aufnehmen",
    visualComingSoon: "Maschinenvisualisierung folgt",
  },
  fr: {
    title: "Équipements et solutions pour palettes à valeur ajoutée | Jointec",
    description:
      "Jointec aide les producteurs de palettes à ajouter de la valeur à chaque palette grâce à des équipements et solutions pour la protection, l’automatisation, le recyclage, l’efficacité et une production plus intelligente.",
    heroEyebrow: "Ajouter de la valeur à la palette depuis 1988",
    heroTitle: "Ajoutez de la valeur à chaque palette.",
    heroText:
      "Depuis 1988, Jointec aide les producteurs de palettes à transformer de simples palettes en bois en produits plus intelligents et plus rentables. Nous développons et fournissons des équipements et solutions qui améliorent la production, réduisent les déchets, protègent les marchandises, optimisent l’utilisation des matériaux et créent plus de valeur dans chaque palette.",
    valueEyebrow: "Solutions à valeur ajoutée",
    valueTitle: "Des équipements qui augmentent la valeur de la palette.",
    valueText:
      "Les solutions Jointec ne sont pas des produits techniques isolés. Chacune est développée pour aider les producteurs à améliorer la fonction de la palette, sa fabrication ou la valeur créée à partir du flux de matière.",
    experienceEyebrow: "Expérience réelle de l’industrie de la palette",
    experienceTitle: "Né de la production, de la réparation, du démantèlement et de l’installation.",
    experienceText1:
      "Jointec travaille directement avec la production de palettes depuis 1988, y compris la réparation, le démantèlement, l’automatisation, l’installation, le développement d’équipements et le support client. Cette expérience compte, car la valeur se crée sur le site de production, pas dans un catalogue.",
    experienceText2:
      "Nous aidons les producteurs à passer de la simple fabrication de palettes à la création de palettes à plus forte valeur, avec une meilleure fonction et une production plus efficace.",
    ctaTitle: "Vous voulez ajouter plus de valeur à vos palettes ?",
    ctaText:
      "Discutons de la manière dont Jointec peut améliorer votre production de palettes, réduire les déchets, protéger les marchandises, mieux utiliser les matériaux et renforcer vos marges.",
    contact: "Nous contacter",
    visualComingSoon: "Visuel de la solution à venir",
  },
};

const SOLUTION_VALUE = {
  en: {
    "block-production-line": {
      label: "Recycling and block value",
      text: "Turns recycled wood into pallet blocks, helping producers create a closed-loop system, reduce outside supply dependency and build new margin from returned material.",
      bestFor:
        "Pallet manufacturers and wood packaging producers working with returned pallets, crates and wood waste.",
      benefits: [
        "Converts recycled wood into pallet blocks",
        "Supports closed-loop production",
        "Reduces dependence on external suppliers",
        "Designed for continuous industrial output",
      ],
      cta: "Explore Block Production Line",
    },
    microdryer: {
      label: "Material quality and control",
      text: "Improves material consistency, moisture control and production reliability so recycled or variable wood material becomes easier to use in industrial production.",
      bestFor: "Producers who need more consistent material quality and improved production stability.",
      benefits: [
        "Improves material consistency",
        "Reduces moisture-related production issues",
        "Compact and efficient drying process",
      ],
      cta: "Explore Microdryer",
    },
    "nonstop-topfoil-pallet": {
      label: "Protection and customer value",
      text: "Adds protection and customer value directly into the pallet production line, creating a more complete pallet product with less manual work for the end user.",
      bestFor:
        "Pallet producers looking to increase efficiency, reduce interruptions and improve handling in production.",
      benefits: [
        "Supports continuous processing",
        "Reduces manual handling",
        "Improves production flow",
        "Suitable for industrial pallet operations",
      ],
      cta: "Explore Nonstop & Topfoil Pallet",
    },
  },
  es: {
    "block-production-line": {
      label: "Reciclaje y valor del bloque",
      text: "Convierte madera reciclada en tacos para palets, ayudando a crear un sistema de circuito cerrado, reducir la dependencia de proveedores externos y generar nuevo margen a partir de material retornado.",
      bestFor:
        "Productores de palets y embalaje de madera que trabajan con palets retornados, cajas y residuos de madera.",
      benefits: [
        "Convierte madera reciclada en tacos para palets",
        "Apoya la producción en circuito cerrado",
        "Reduce la dependencia de proveedores externos",
        "Diseñada para producción industrial continua",
      ],
      cta: "Ver Block Production Line",
    },
    microdryer: {
      label: "Calidad y control del material",
      text: "Mejora la consistencia del material, el control de humedad y la fiabilidad de producción para que la madera reciclada o variable sea más fácil de usar en producción industrial.",
      bestFor: "Productores que necesitan una calidad de material más constante y mayor estabilidad de producción.",
      benefits: [
        "Mejora la consistencia del material",
        "Reduce problemas de producción relacionados con la humedad",
        "Proceso de secado compacto y eficiente",
      ],
      cta: "Ver Microdryer",
    },
    "nonstop-topfoil-pallet": {
      label: "Protección y valor para el cliente",
      text: "Añade protección y valor para el cliente directamente en la línea de producción de palets, creando un producto más completo con menos trabajo manual para el usuario final.",
      bestFor:
        "Productores de palets que quieren aumentar la eficiencia, reducir interrupciones y mejorar el manejo en producción.",
      benefits: [
        "Apoya el procesamiento continuo",
        "Reduce la manipulación manual",
        "Mejora el flujo de producción",
        "Adecuada para operaciones industriales de palets",
      ],
      cta: "Ver Nonstop & Topfoil Pallet",
    },
  },
  sv: {
    "block-production-line": {
      label: "Återvinning och blockvärde",
      text: "Gör återvunnet trä till pallklossar och hjälper producenter att skapa ett slutet flöde, minska beroendet av externa leverantörer och skapa ny marginal från returmaterial.",
      bestFor: "Pallproducenter och träemballageföretag som arbetar med returpallar, lådor och träspill.",
      benefits: [
        "Omvandlar återvunnet trä till pallklossar",
        "Stödjer cirkulär produktion",
        "Minskar beroendet av externa leverantörer",
        "Utvecklad för kontinuerlig industriell produktion",
      ],
      cta: "Utforska Block Production Line",
    },
    microdryer: {
      label: "Materialkvalitet och kontroll",
      text: "Förbättrar materialets jämnhet, fuktkontroll och produktionssäkerhet så att återvunnet eller varierande trämaterial blir enklare att använda industriellt.",
      bestFor: "Producenter som behöver jämnare materialkvalitet och stabilare produktion.",
      benefits: [
        "Förbättrar materialets jämnhet",
        "Minskar fuktrelaterade produktionsproblem",
        "Kompakt och effektiv torkprocess",
      ],
      cta: "Utforska Microdryer",
    },
    "nonstop-topfoil-pallet": {
      label: "Skydd och kundvärde",
      text: "Adderar skydd och kundvärde direkt i pallproduktionen och skapar en mer komplett pallprodukt med mindre manuellt arbete för slutanvändaren.",
      bestFor: "Pallproducenter som vill öka effektivitet, minska stopp och förbättra hantering i produktion.",
      benefits: [
        "Stödjer kontinuerlig bearbetning",
        "Minskar manuell hantering",
        "Förbättrar produktionsflödet",
        "Passar industriella pallverksamheter",
      ],
      cta: "Utforska Nonstop & Topfoil Pallet",
    },
  },
  de: {
    "block-production-line": {
      label: "Recycling und Blockwert",
      text: "Verwandelt recyceltes Holz in Palettenklötze und hilft Produzenten, einen geschlossenen Kreislauf zu schaffen, externe Abhängigkeiten zu reduzieren und neue Marge aus Rücklaufmaterial zu gewinnen.",
      bestFor:
        "Palettenhersteller und Holzverpackungsproduzenten, die mit Rücklaufpaletten, Kisten und Holzabfällen arbeiten.",
      benefits: [
        "Verwandelt Recyclingholz in Palettenklötze",
        "Unterstützt Kreislaufproduktion",
        "Reduziert die Abhängigkeit von externen Lieferanten",
        "Für kontinuierliche industrielle Leistung ausgelegt",
      ],
      cta: "Block Production Line ansehen",
    },
    microdryer: {
      label: "Materialqualität und Kontrolle",
      text: "Verbessert Materialkonstanz, Feuchtekontrolle und Produktionszuverlässigkeit, damit recyceltes oder wechselndes Holzmaterial einfacher industriell genutzt werden kann.",
      bestFor: "Produzenten, die konstantere Materialqualität und stabilere Produktion benötigen.",
      benefits: [
        "Verbessert die Materialkonstanz",
        "Reduziert feuchtebedingte Produktionsprobleme",
        "Kompakter und effizienter Trocknungsprozess",
      ],
      cta: "Microdryer ansehen",
    },
    "nonstop-topfoil-pallet": {
      label: "Schutz und Kundenwert",
      text: "Integriert Schutz und Kundenwert direkt in die Palettenproduktion und schafft ein vollständigeres Palettenprodukt mit weniger manueller Arbeit für den Endnutzer.",
      bestFor:
        "Palettenproduzenten, die Effizienz steigern, Unterbrechungen reduzieren und das Handling in der Produktion verbessern möchten.",
      benefits: [
        "Unterstützt kontinuierliche Verarbeitung",
        "Reduziert manuelle Handhabung",
        "Verbessert den Produktionsfluss",
        "Geeignet für industrielle Palettenbetriebe",
      ],
      cta: "Nonstop & Topfoil Pallet ansehen",
    },
  },
  fr: {
    "block-production-line": {
      label: "Recyclage et valeur du bloc",
      text: "Transforme le bois recyclé en blocs pour palettes, aidant les producteurs à créer un système en boucle fermée, réduire leur dépendance aux fournisseurs externes et générer une nouvelle marge à partir de matériaux retournés.",
      bestFor:
        "Producteurs de palettes et d’emballages bois travaillant avec des palettes retournées, caisses et déchets de bois.",
      benefits: [
        "Transforme le bois recyclé en blocs pour palettes",
        "Soutient la production en boucle fermée",
        "Réduit la dépendance aux fournisseurs externes",
        "Conçue pour une production industrielle continue",
      ],
      cta: "Explorer Block Production Line",
    },
    microdryer: {
      label: "Qualité matière et contrôle",
      text: "Améliore la régularité de la matière, le contrôle de l’humidité et la fiabilité de production afin que le bois recyclé ou variable soit plus facile à utiliser industriellement.",
      bestFor: "Producteurs recherchant une qualité matière plus constante et une production plus stable.",
      benefits: [
        "Améliore la régularité de la matière",
        "Réduit les problèmes de production liés à l’humidité",
        "Processus de séchage compact et efficace",
      ],
      cta: "Explorer Microdryer",
    },
    "nonstop-topfoil-pallet": {
      label: "Protection et valeur client",
      text: "Ajoute protection et valeur client directement dans la ligne de production de palettes, créant un produit plus complet avec moins de travail manuel pour l’utilisateur final.",
      bestFor:
        "Producteurs de palettes qui souhaitent gagner en efficacité, réduire les interruptions et améliorer la manutention en production.",
      benefits: [
        "Soutient le traitement en continu",
        "Réduit la manutention manuelle",
        "Améliore le flux de production",
        "Adaptée aux opérations industrielles de palettes",
      ],
      cta: "Explorer Nonstop & Topfoil Pallet",
    },
  },
};

function MachineVisual({ machine, label }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
      {machine.image ? (
        <img
          src={machine.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-dark to-slate-700 px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            {label}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/55 via-transparent to-transparent" />
    </div>
  );
}

export default function MachinesPage() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const copy = PAGE_COPY[language] || PAGE_COPY.en;
  const solutionCopy = SOLUTION_VALUE[language] || SOLUTION_VALUE.en;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = copy.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", copy.description);
  }, [copy.description, copy.title]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="bg-brand-dark py-20 text-white sm:py-28">
        <div className="section-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {copy.heroEyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.03] tracking-[-0.035em] sm:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
            {copy.heroText}
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {MACHINE_SOLUTIONS.map((machine) => (
              <a
                key={machine.slug}
                href={`#${machine.slug}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-brand-accent hover:text-brand-accent"
              >
                {machine.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.valueEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.025em] sm:text-5xl">
              {copy.valueTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-dark/72">
              {copy.valueText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {MACHINE_SOLUTIONS.map((machine) => (
              <article
                key={machine.slug}
                id={machine.slug}
                className="group flex scroll-mt-28 flex-col overflow-hidden rounded-[1.75rem] border border-brand-dark/8 bg-white shadow-sm"
              >
                <MachineVisual machine={machine} label={copy.visualComingSoon} />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {machine.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-dark/72">
                    {solutionCopy[machine.slug].text}
                  </p>
                  <div className="mt-6 border-t border-brand-dark/8 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                      {solutionCopy[machine.slug].label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-brand-dark/72">
                      {solutionCopy[machine.slug].bestFor}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-brand-dark/72">
                    {solutionCopy[machine.slug].benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/machines/${machine.slug}`}
                    className="primary-button mt-7 inline-flex w-fit px-5 py-3 text-xs"
                  >
                    {solutionCopy[machine.slug].cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MachineUpdatesSignup sourcePage="Machines" />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.experienceEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.025em] sm:text-5xl">
              {copy.experienceTitle}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-brand-dark/72">
            <p>{copy.experienceText1}</p>
            <p>{copy.experienceText2}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-light tracking-[-0.02em]">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              {copy.ctaText}
            </p>
          </div>
          <a href="mailto:info@jointec.se" className="primary-button">
            {copy.contact}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
