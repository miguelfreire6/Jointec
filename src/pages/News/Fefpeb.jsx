import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  FEFPEB_DEMO_MAILTO,
  FEFPEB_MACHINES,
  KARL_PHONE_HREF,
  KARL_PHONE_LABEL,
  PRIVATE_VISIT_MAILTO,
} from "../../data/fefpeb";

const SEO_DESCRIPTION =
  "Jointec will be at the 73rd FEFPEB Congress in Båstad, Sweden, 30 September - 2 October 2026. See CAPE lines in operation and Jointec's new Block Production Line during the industrial visit on 1 October.";

const COPY = {
  en: {
    title: "Jointec at the FEFPEB Congress 2026",
    date: "30 September - 2 October 2026 · Båstad, Sweden",
    headline: "Jointec at the FEFPEB Congress 2026 in Båstad, Sweden",
    intro:
      "Jointec will be present at the 73rd FEFPEB Congress, one of the most important meeting points for the European pallet and wood packaging industry.",
    body:
      "During the industrial visit on 1 October, customers can see multiple CAPE lines in operation and Jointec's new BLOCK PRODUCTION LINE demonstrated at the industrial site. At the congress in Båstad, Jointec will also discuss MICRODRYER and NONSTOP & TOPFOIL PALLET as new solutions for producers who want to add more value to the pallet. These two solutions will be presented at the congress, but will not be running at the industrial site.",
    machineTexts: [
      "Turn recycled wood into profitable pallet blocks directly on site. A complete production solution for companies looking to reuse wood material, reduce dependency on external block suppliers and create value from returned pallets and wood packaging.",
      "A compact drying solution for improving moisture control, material consistency and production stability. Designed for producers who need reliable material preparation in a practical industrial setup.",
      "A production solution designed to improve pallet handling, reduce interruptions and support efficient topfoil application in industrial pallet production.",
    ],
    visitTitle: "Want to see our solutions for the pallet industry?",
    visitText:
      "For customers who want to see the solutions outside the FEFPEB schedule, Jointec can arrange a separate visit to the demonstration site. We can coordinate pickup from Copenhagen and plan the visit according to the equipment and production topics most relevant to your company.",
    demo: "Book a Demonstration Visit",
    private: "Arrange a Visit Outside FEFPEB",
    call: "Call Karl:",
    visitFefpeb: "Visit fefpeb.eu ↗",
  },
  es: {
    title: "Jointec en el Congreso FEFPEB 2026",
    date: "30 de septiembre - 2 de octubre de 2026 · Båstad, Suecia",
    headline: "Jointec en el Congreso FEFPEB 2026 en Båstad, Suecia",
    intro:
      "Jointec estará presente en el 73.º Congreso FEFPEB, uno de los puntos de encuentro más importantes para la industria europea del palet y el embalaje de madera.",
    body:
      "Durante la visita industrial del 1 de octubre, los clientes podrán ver varias líneas CAPE en operación y la nueva BLOCK PRODUCTION LINE de Jointec en demostración en el sitio industrial. En el congreso de Båstad, Jointec también hablará de MICRODRYER y NONSTOP & TOPFOIL PALLET como nuevas soluciones para productores que quieren añadir más valor al palet. Estas dos soluciones se presentarán en el congreso, pero no estarán en funcionamiento en el sitio industrial.",
    machineTexts: [
      "Convierta madera reciclada en bloques de palet rentables directamente en el sitio. Una solución completa para reutilizar material de madera, reducir dependencia de proveedores externos y crear valor a partir de palets y embalajes retornados.",
      "Una solución compacta de secado para mejorar el control de humedad, la consistencia del material y la estabilidad de producción.",
      "Una solución de producción diseñada para mejorar la manipulación del palet, reducir interrupciones y apoyar una aplicación eficiente de topfoil.",
    ],
    visitTitle: "¿Quiere ver nuestras soluciones para la industria del palet?",
    visitText:
      "Para clientes que quieran ver las soluciones fuera del programa de FEFPEB, Jointec puede organizar una visita separada al sitio de demostración. Podemos coordinar recogida desde Copenhague y planificar la visita según los equipos y temas de producción más relevantes para su empresa.",
    demo: "Reservar una visita de demostración",
    private: "Organizar una visita fuera de FEFPEB",
    call: "Llamar a Karl:",
    visitFefpeb: "Visitar fefpeb.eu ↗",
  },
  sv: {
    title: "Jointec på FEFPEB-kongressen 2026",
    date: "30 september - 2 oktober 2026 · Båstad, Sverige",
    headline: "Jointec på FEFPEB-kongressen 2026 i Båstad",
    intro:
      "Jointec kommer att vara på plats vid den 73:e FEFPEB-kongressen, en av de viktigaste mötesplatserna för Europas pall- och träemballageindustri.",
    body:
      "Under industribesöket den 1 oktober kan kunder se flera CAPE-linjer i drift och Jointecs nya BLOCK PRODUCTION LINE demonstrerad på industrianläggningen. På kongressen i Båstad kommer Jointec också att prata om MICRODRYER och NONSTOP & TOPFOIL PALLET som nya lösningar för producenter som vill addera mer värde till pallen. Dessa två lösningar presenteras på kongressen, men körs inte på industrianläggningen.",
    machineTexts: [
      "Gör återvunnet trä till lönsamma pallklotsar direkt på plats. En komplett produktionslösning för företag som vill återanvända trämaterial, minska beroendet av externa klotsleverantörer och skapa värde av returpallar och träemballage.",
      "En kompakt torklösning för bättre fuktkontroll, materialkonsistens och produktionsstabilitet.",
      "En produktionslösning utvecklad för bättre pallhantering, färre avbrott och effektiv topfoil-applicering i industriell pallproduktion.",
    ],
    visitTitle: "Vill du se våra lösningar för pallindustrin?",
    visitText:
      "För kunder som vill se lösningarna utanför FEFPEB-programmet kan Jointec ordna ett separat besök till demonstrationsanläggningen. Vi kan koordinera upphämtning från Köpenhamn och planera besöket efter den utrustning och de produktionsfrågor som är mest relevanta för ert företag.",
    demo: "Boka ett demonstrationsbesök",
    private: "Ordna besök utanför FEFPEB",
    call: "Ring Karl:",
    visitFefpeb: "Besök fefpeb.eu ↗",
  },
};

COPY.de = {
  ...COPY.en,
  title: "Jointec auf dem FEFPEB-Kongress 2026",
  date: "30. September - 2. Oktober 2026 · Båstad, Schweden",
  headline: "Jointec auf dem FEFPEB-Kongress 2026 in Båstad, Schweden",
  intro:
    "Jointec wird auf dem 73. FEFPEB-Kongress vertreten sein, einem der wichtigsten Treffpunkte der europäischen Paletten- und Holzverpackungsindustrie.",
  body:
    "Beim Industriebesuch am 1. Oktober können Kunden mehrere CAPE-Linien in Betrieb sehen und Jointecs neue BLOCK PRODUCTION LINE am Industriestandort erleben. Auf dem Kongress in Båstad wird Jointec außerdem MICRODRYER und NONSTOP & TOPFOIL PALLET als neue Lösungen für Produzenten vorstellen, die der Palette mehr Wert verleihen möchten. Diese beiden Lösungen werden auf dem Kongress präsentiert, laufen jedoch nicht am Industriestandort.",
  machineTexts: [
    "Recyclingholz direkt vor Ort in profitable Palettenblöcke umwandeln. Eine komplette Produktionslösung für Unternehmen, die Holzmaterial wiederverwenden, externe Lieferabhängigkeiten reduzieren und Wert aus retournierten Paletten und Holzverpackungen schaffen möchten.",
    "Eine kompakte Trocknungslösung zur Verbesserung von Feuchtekontrolle, Materialkonsistenz und Produktionsstabilität.",
    "Eine Produktionslösung zur Verbesserung des Palettenhandlings, Reduzierung von Unterbrechungen und effizienten Topfoil-Applikation in industrieller Palettenproduktion.",
  ],
  visitTitle: "Möchten Sie unsere Lösungen für die Palettenindustrie sehen?",
  visitText:
    "Für Kunden, die die Lösungen außerhalb des FEFPEB-Programms sehen möchten, kann Jointec einen separaten Besuch am Demonstrationsstandort organisieren. Wir können die Abholung in Kopenhagen koordinieren und den Besuch nach den für Ihr Unternehmen relevantesten Ausrüstungs- und Produktionsthemen planen.",
  demo: "Demonstrationsbesuch buchen",
  private: "Besuch außerhalb der FEFPEB vereinbaren",
  call: "Karl anrufen:",
  visitFefpeb: "fefpeb.eu besuchen ↗",
};

COPY.fr = {
  ...COPY.en,
  title: "Jointec au congrès FEFPEB 2026",
  date: "30 septembre - 2 octobre 2026 · Båstad, Suède",
  headline: "Jointec au congrès FEFPEB 2026 à Båstad, Suède",
  intro:
    "Jointec sera présent au 73e congrès FEFPEB, l’un des rendez-vous les plus importants pour l’industrie européenne de la palette et de l’emballage bois.",
  body:
    "Lors de la visite industrielle du 1er octobre, les clients pourront voir plusieurs lignes CAPE en fonctionnement et la nouvelle BLOCK PRODUCTION LINE de Jointec en démonstration sur le site industriel. Au congrès de Båstad, Jointec présentera également MICRODRYER et NONSTOP & TOPFOIL PALLET comme nouvelles solutions pour les producteurs qui souhaitent ajouter plus de valeur à la palette. Ces deux solutions seront présentées au congrès, mais ne fonctionneront pas sur le site industriel.",
  machineTexts: [
    "Transformer le bois recyclé en blocs de palettes rentables directement sur site. Une solution complète pour réutiliser la matière bois, réduire la dépendance aux fournisseurs externes et créer de la valeur à partir de palettes et emballages bois retournés.",
    "Une solution de séchage compacte pour améliorer le contrôle de l’humidité, la régularité matière et la stabilité de production.",
    "Une solution de production conçue pour améliorer la manutention des palettes, réduire les interruptions et soutenir une application topfoil efficace en production industrielle.",
  ],
  visitTitle: "Vous souhaitez voir nos solutions pour l’industrie de la palette ?",
  visitText:
    "Pour les clients qui souhaitent voir les solutions en dehors du programme FEFPEB, Jointec peut organiser une visite séparée du site de démonstration. Nous pouvons coordonner le transfert depuis Copenhague et planifier la visite selon les équipements et sujets de production les plus pertinents pour votre entreprise.",
  demo: "Réserver une visite de démonstration",
  private: "Organiser une visite hors FEFPEB",
  call: "Appeler Karl :",
  visitFefpeb: "Visiter fefpeb.eu ↗",
};

export default function FefpebNewsPage() {
  const { i18n } = useTranslation();
  const copy = COPY[i18n.resolvedLanguage || i18n.language] || COPY.en;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = copy.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", SEO_DESCRIPTION);
  }, [copy.title]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img src="/images/onsite_line_cad.webp" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/65" />
        </div>
        <div className="section-shell relative py-20 sm:py-28">
          <img
            src="/images/fefpeb-congress-2026.jpg"
            alt="FEFPEB and Swedish Wood"
            className="mb-8 w-full max-w-[260px] rounded-xl bg-white p-3"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {copy.date}
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-light leading-[1.03] tracking-[-0.035em] sm:text-6xl">
            {copy.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <p className="max-w-3xl text-base leading-8 text-brand-dark/74">
            {copy.body}
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {FEFPEB_MACHINES.map((machine, index) => (
              <article key={machine.name} className="rounded-2xl border border-brand-dark/8 bg-brand-light p-6">
                <h2 className="text-lg font-semibold tracking-[-0.01em]">{machine.name}</h2>
                <p className="mt-4 text-sm leading-7 text-brand-dark/72">
                  {copy.machineTexts[index]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 sm:py-24">
        <div className="section-shell">
          <h2 className="text-3xl font-light tracking-[-0.02em]">{copy.visitTitle}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-dark/72">
            {copy.visitText}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={FEFPEB_DEMO_MAILTO} className="primary-button">{copy.demo}</a>
            <a href={PRIVATE_VISIT_MAILTO} className="secondary-button">{copy.private}</a>
            <a href={KARL_PHONE_HREF} className="secondary-button">{copy.call} {KARL_PHONE_LABEL}</a>
            <a href="https://www.fefpeb.eu/" target="_blank" rel="noopener noreferrer" className="secondary-button">
              {copy.visitFefpeb}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
