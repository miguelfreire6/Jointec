import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";
import { CUSTOMER_CASES, PRIVATE_VISIT_MAILTO } from "../../data/cases";

const SEO_DESCRIPTION =
  "Selected examples of Jointec equipment and value-adding pallet solutions operating at customer sites in Finland, Sweden and Norway.";

const MAP_PINS = [
  {
    id: "kotka-finland",
    site: "Kotka",
    country: "Finland",
    equipment: ["Nonstop & Topfoil Pallet", "CAPE pallet nailing line"],
    cta: "View Kotka Site",
    lat: 60.4664,
    lon: 26.9458,
  },
  {
    id: "asljunga-sweden",
    site: "Åsljunga",
    country: "Sweden",
    equipment: ["Block Production Line", "CAPE Tandem Line"],
    cta: "View Åsljunga Site",
    lat: 56.315,
    lon: 13.374,
    offset: { x: 12, y: -12 },
  },
  {
    id: "bodo-norway",
    site: "Bodø",
    country: "Northern Norway",
    equipment: ["Block Production Line", "Closed-loop pallet block production"],
    cta: "View Bodø Site",
    lat: 67.2804,
    lon: 14.4049,
  },
  {
    id: "klippan-sweden",
    site: "Klippan",
    country: "Sweden",
    equipment: ["Jointec solution / pallet industry equipment"],
    cta: "View Klippan Site",
    lat: 56.1356,
    lon: 13.1309,
    offset: { x: -12, y: 14 },
  },
  {
    id: "norrkoping-sweden",
    site: "Norrköping",
    country: "Sweden",
    equipment: ["MicroDryer", "Pallet production equipment"],
    cta: "View Norrköping Site",
    lat: 58.5877,
    lon: 16.1924,
  },
];

const PAGE_COPY = {
  en: {
    seoTitle: "Customer Cases | Jointec Equipment in Operation",
    mapEyebrow: "Operating sites",
    mapTitle: "Jointec Solutions in Operation Across the Nordic Region",
    mapIntro:
      "Explore selected operating sites where Jointec equipment, value-adding pallet solutions, and CAPE lines are installed and running in real production environments.",
    mapHelp: "Click a site on the map to learn more about the installed solution.",
    heroEyebrow: "Selected Customer Sites",
    heroTitle: "See Jointec Equipment in Real Production",
    heroText:
      "Selected examples of Jointec and CAPE equipment currently operating at customer sites across the Nordic region. These cases show how our solutions perform in real industrial environments — from pallet production to closed-loop block manufacturing.",
    privateVisit: "Arrange a Private Visit",
    viewExamples: "View Example Sites",
    examplesEyebrow: "Operating references",
    examplesTitle: "Example Sites",
    examplesText: "Explore selected operating sites by equipment type and location.",
    viewSitePrefix: "View",
    viewSiteSuffix: " Site",
    why: "Why this site matters",
    capeLine: "CAPE pallet nailing line",
    capeLineText: "Operating together with Jointec’s Nonstop & Topfoil Pallet solution.",
    ctaEyebrow: "Private reference visits",
    ctaTitle: "Want to See Equipment in Operation?",
    ctaText:
      "Private visits can be arranged for serious buyers who want to see selected Jointec and CAPE equipment operating in real production environments. Contact Jointec to discuss which site is most relevant for your production needs.",
    ctaSubtext:
      "Visits are coordinated individually depending on equipment type, customer location, site availability and production schedule.",
    callKarl: "Call CEO Karl: +46 70 633 97 17",
  },
  es: {
    seoTitle: "Referencias de clientes | Equipos Jointec en operación",
    mapEyebrow: "Sitios en operación",
    mapTitle: "Soluciones Jointec en operación en la región nórdica",
    mapIntro:
      "Explore sitios seleccionados donde equipos Jointec, soluciones de palets que añaden valor y líneas CAPE están instalados y funcionando en entornos reales de producción.",
    mapHelp: "Haga clic en un sitio del mapa para conocer la solución instalada.",
    heroEyebrow: "Sitios de clientes seleccionados",
    heroTitle: "Vea equipos Jointec en producción real",
    heroText:
      "Ejemplos seleccionados de equipos Jointec y CAPE actualmente en operación en sitios de clientes en la región nórdica. Estos casos muestran cómo funcionan nuestras soluciones en entornos industriales reales: desde producción de palets hasta fabricación circular de bloques.",
    privateVisit: "Organizar una visita privada",
    viewExamples: "Ver sitios de ejemplo",
    examplesEyebrow: "Referencias en operación",
    examplesTitle: "Sitios de ejemplo",
    examplesText: "Explore sitios operativos seleccionados por tipo de equipo y ubicación.",
    viewSitePrefix: "Ver sitio de",
    viewSiteSuffix: "",
    why: "Por qué este sitio es importante",
    capeLine: "Línea de clavado de palets CAPE",
    capeLineText: "Funciona junto con la solución Nonstop & Topfoil Pallet de Jointec.",
    ctaEyebrow: "Visitas privadas a referencias",
    ctaTitle: "¿Quiere ver equipos en operación?",
    ctaText:
      "Se pueden organizar visitas privadas para compradores serios que quieran ver equipos Jointec y CAPE operando en entornos reales de producción. Contacte con Jointec para analizar qué sitio es más relevante para sus necesidades.",
    ctaSubtext:
      "Las visitas se coordinan individualmente según el tipo de equipo, la ubicación del cliente, la disponibilidad del sitio y el programa de producción.",
    callKarl: "Llamar al CEO Karl: +46 70 633 97 17",
  },
  sv: {
    seoTitle: "Kundreferenser | Jointec-utrustning i drift",
    mapEyebrow: "Anläggningar i drift",
    mapTitle: "Jointec-lösningar i drift i Norden",
    mapIntro:
      "Utforska utvalda anläggningar där Jointec-utrustning, värdeskapande pallösningar och CAPE-linjer är installerade och körs i verkliga produktionsmiljöer.",
    mapHelp: "Klicka på en plats på kartan för att läsa mer om den installerade lösningen.",
    heroEyebrow: "Utvalda kundanläggningar",
    heroTitle: "Se Jointec-utrustning i verklig produktion",
    heroText:
      "Utvalda exempel på Jointec- och CAPE-utrustning som är i drift hos kunder i Norden. Dessa referenser visar hur våra lösningar fungerar i verkliga industrimiljöer — från pallproduktion till cirkulär blocktillverkning.",
    privateVisit: "Boka ett privat besök",
    viewExamples: "Visa exempelanläggningar",
    examplesEyebrow: "Referenser i drift",
    examplesTitle: "Exempelanläggningar",
    examplesText: "Utforska utvalda driftanläggningar efter utrustningstyp och plats.",
    viewSitePrefix: "Visa",
    viewSiteSuffix: "-anläggning",
    why: "Varför anläggningen är viktig",
    capeLine: "CAPE pallspikningslinje",
    capeLineText: "I drift tillsammans med Jointecs Nonstop & Topfoil Pallet-lösning.",
    ctaEyebrow: "Privata referensbesök",
    ctaTitle: "Vill du se utrustning i drift?",
    ctaText:
      "Privata besök kan ordnas för seriösa köpare som vill se utvald Jointec- och CAPE-utrustning i verkliga produktionsmiljöer. Kontakta Jointec för att diskutera vilken anläggning som passar dina produktionsbehov.",
    ctaSubtext:
      "Besök koordineras individuellt beroende på utrustningstyp, kundens plats, anläggningens tillgänglighet och produktionsschema.",
    callKarl: "Ring VD Karl: +46 70 633 97 17",
  },
  de: {
    seoTitle: "Kundenreferenzen | Jointec-Ausrüstung in Betrieb",
    mapEyebrow: "Standorte in Betrieb",
    mapTitle: "Jointec-Lösungen in der nordischen Region in Betrieb",
    mapIntro:
      "Entdecken Sie ausgewählte Standorte, an denen Jointec-Ausrüstung, wertsteigernde Palettenlösungen und CAPE-Linien installiert sind und in realer Produktion laufen.",
    mapHelp: "Klicken Sie auf einen Standort auf der Karte, um mehr über die installierte Lösung zu erfahren.",
    heroEyebrow: "Ausgewählte Kundenstandorte",
    heroTitle: "Jointec-Ausrüstung in realer Produktion",
    heroText:
      "Ausgewählte Beispiele von Jointec- und CAPE-Ausrüstung, die an Kundenstandorten in der nordischen Region in Betrieb ist. Diese Fälle zeigen, wie unsere Lösungen in industriellen Umgebungen funktionieren — von der Palettenproduktion bis zur geschlossenen Blockfertigung.",
    privateVisit: "Privaten Besuch vereinbaren",
    viewExamples: "Beispielstandorte ansehen",
    examplesEyebrow: "Referenzen in Betrieb",
    examplesTitle: "Beispielstandorte",
    examplesText: "Entdecken Sie ausgewählte Betriebsstandorte nach Ausrüstungstyp und Standort.",
    viewSitePrefix: "Standort ansehen:",
    viewSiteSuffix: "",
    why: "Warum dieser Standort wichtig ist",
    capeLine: "CAPE Palettennagellinie",
    capeLineText: "In Betrieb zusammen mit Jointecs Nonstop & Topfoil Pallet-Lösung.",
    ctaEyebrow: "Private Referenzbesuche",
    ctaTitle: "Möchten Sie Ausrüstung in Betrieb sehen?",
    ctaText:
      "Private Besuche können für ernsthafte Käufer organisiert werden, die ausgewählte Jointec- und CAPE-Ausrüstung in realer Produktion sehen möchten. Kontaktieren Sie Jointec, um den passenden Standort zu besprechen.",
    ctaSubtext:
      "Besuche werden individuell nach Ausrüstungstyp, Kundenstandort, Verfügbarkeit und Produktionsplan koordiniert.",
    callKarl: "CEO Karl anrufen: +46 70 633 97 17",
  },
  fr: {
    seoTitle: "Références clients | Équipement Jointec en fonctionnement",
    mapEyebrow: "Sites en fonctionnement",
    mapTitle: "Solutions Jointec en fonctionnement dans la région nordique",
    mapIntro:
      "Explorez des sites sélectionnés où les équipements Jointec, les solutions palettes à valeur ajoutée et les lignes CAPE sont installés et fonctionnent en production réelle.",
    mapHelp: "Cliquez sur un site sur la carte pour en savoir plus sur la solution installée.",
    heroEyebrow: "Sites clients sélectionnés",
    heroTitle: "Voir l’équipement Jointec en production réelle",
    heroText:
      "Exemples sélectionnés d’équipements Jointec et CAPE actuellement en fonctionnement chez des clients dans la région nordique. Ces cas montrent comment nos solutions fonctionnent dans des environnements industriels réels — de la production de palettes à la fabrication de blocs en boucle fermée.",
    privateVisit: "Organiser une visite privée",
    viewExamples: "Voir les sites d’exemple",
    examplesEyebrow: "Références en fonctionnement",
    examplesTitle: "Sites d’exemple",
    examplesText: "Explorez des sites en fonctionnement par type d’équipement et localisation.",
    viewSitePrefix: "Voir le site de",
    viewSiteSuffix: "",
    why: "Pourquoi ce site est important",
    capeLine: "Ligne de clouage de palettes CAPE",
    capeLineText: "Fonctionne avec la solution Nonstop & Topfoil Pallet de Jointec.",
    ctaEyebrow: "Visites privées de références",
    ctaTitle: "Vous voulez voir l’équipement en fonctionnement ?",
    ctaText:
      "Des visites privées peuvent être organisées pour les acheteurs sérieux qui souhaitent voir des équipements Jointec et CAPE fonctionner en production réelle. Contactez Jointec pour déterminer le site le plus pertinent.",
    ctaSubtext:
      "Les visites sont coordonnées individuellement selon le type d’équipement, la localisation du client, la disponibilité du site et le programme de production.",
    callKarl: "Appeler le CEO Karl : +46 70 633 97 17",
  },
};

const CASE_TRANSLATIONS = {
  es: {
    "kotka-finland": {
      location: "Kotka, Finlandia",
      label: "Sitio destacado · Finlandia",
      title: "Nonstop & Topfoil Pallet en operación",
      summary:
        "Un sitio de producción en Kotka, Finlandia, que opera una clavadora de palets CAPE — una línea compacta, flexible y de cambio rápido — junto con la solución Nonstop & Topfoil Pallet de Jointec.",
      additional:
        "El sitio opera una clavadora de palets CAPE — una de las líneas de producción de palets más compactas, flexibles y rápidas del mercado. También opera la solución Nonstop & Topfoil Pallet de Jointec.",
      why: [
        "Demuestra Nonstop & Topfoil Pallet en producción diaria",
        "Muestra manipulación eficiente de palets y aplicación de topfoil",
        "Incluye una línea de clavado CAPE compacta y flexible",
        "Relevante para productores que buscan mejorar el flujo de producción y la flexibilidad de cambio",
        "Sitio de referencia sólido para producción moderna de palets",
      ],
      visitLabel: "Solicitar visita al sitio de Kotka",
    },
    "asljunga-sweden": {
      location: "Åsljunga, Suecia",
      label: "Sitio destacado · Suecia",
      title: "Block Production Line y CAPE Tandem Line en operación",
      summary:
        "Un sitio operativo en Åsljunga donde la Block Production Line está instalada junto con la Tandem Line de CAPE, mostrando una configuración más amplia de producción de palets.",
      text:
        "Este sitio en Åsljunga, Suecia, es una referencia importante donde la Block Production Line de Jointec opera junto con la Tandem Line de CAPE.",
      additional:
        "La configuración muestra cómo la producción de bloques puede conectarse con equipos avanzados de producción de palets.",
      why: [
        "Demuestra la Block Production Line en operación",
        "Muestra integración con CAPE Tandem Line",
        "Relevante para clientes interesados en combinar producción de bloques con producción avanzada de palets",
        "Buen ejemplo de una configuración amplia de producción de palets",
        "Referencia sólida para clientes que consideran equipos Jointec y CAPE",
      ],
      visitLabel: "Solicitar visita al sitio de Åsljunga",
    },
    "bodo-norway": {
      location: "Bodø, norte de Noruega",
      label: "Noruega",
      title: "Producción circular de bloques en una ubicación remota",
      summary:
        "Un ejemplo remoto en el norte de Noruega donde los bloques de palets se producen directamente en el sitio, reduciendo la dependencia del transporte.",
      text:
        "Este sitio en Bodø, norte de Noruega, muestra por qué la producción de bloques en el propio sitio es importante. En una ubicación remota, la Block Production Line permite al cliente producir bloques directamente en sus instalaciones.",
      additional:
        "En lugar de transportar bloques largas distancias, el sitio puede crear bloques localmente a partir de madera reciclada. Esto apoya un modelo de producción circular y reduce la dependencia logística.",
      why: [
        "Muestra la Block Production Line operando en una ubicación remota del norte",
        "Demuestra producción de bloques de palets en el sitio",
        "Apoya el uso circular de madera reciclada",
        "Reduce la dependencia del transporte externo de bloques",
        "Ejemplo sólido para clientes alejados de proveedores o rutas logísticas principales",
        "Relevante para productores que desean mayor control sobre su suministro de bloques",
      ],
      visitLabel: "Solicitar visita al sitio de Bodø",
    },
    "klippan-sweden": {
      location: "Klippan, Suecia",
      label: "Suecia",
      title: "Block Production Line en operación",
      summary: "Un sitio sueco donde la Block Production Line puede verse en producción real.",
      text:
        "Este sitio en Klippan, Suecia, es un ejemplo de la Block Production Line de Jointec operando en producción real y disponible para visitas mediante acuerdo.",
      why: [
        "Demuestra la Block Production Line en un entorno de producción sueco",
        "Relevante para clientes interesados en fabricación de bloques de palets",
        "Muestra cómo la madera reciclada puede convertirse en bloques utilizables",
        "Adecuado para visitantes que quieren ver el proceso en acción",
      ],
      visitLabel: "Solicitar visita al sitio de Klippan",
    },
    "norrkoping-sweden": {
      location: "Norrköping, Suecia",
      label: "Suecia",
      title: "MicroDryer en operación",
      summary:
        "Un sitio sueco donde MicroDryer se utiliza para apoyar la preparación del material, el control de humedad y la consistencia de producción.",
      text: "Este sitio en Norrköping, Suecia, es un ejemplo de MicroDryer de Jointec en un entorno real de producción.",
      why: [
        "Demuestra el rendimiento de MicroDryer en uso industrial",
        "Relevante para productores que trabajan con material sensible a la humedad",
        "Apoya una mejor consistencia del material",
        "Ayuda a estabilizar el proceso antes del procesamiento posterior",
      ],
      visitLabel: "Solicitar visita al sitio de Norrköping",
    },
  },
  sv: {
    "kotka-finland": {
      location: "Kotka, Finland",
      label: "Utvald anläggning · Finland",
      title: "Nonstop & Topfoil Pallet i drift",
      summary: "En produktionsanläggning i Kotka, Finland, med en CAPE pallspikningsmaskin och Jointecs Nonstop & Topfoil Pallet-lösning.",
      additional: "Anläggningen kör en CAPE pallspikningsmaskin — en kompakt, flexibel linje med snabb omställning — samt Jointecs Nonstop & Topfoil Pallet-lösning.",
      why: ["Visar Nonstop & Topfoil Pallet i daglig produktion", "Visar effektiv pallhantering och topfoil-applicering", "Inkluderar en kompakt och flexibel CAPE pallspikningslinje", "Relevant för producenter som vill förbättra produktionsflöde och omställningsflexibilitet", "Stark referensanläggning för modern pallproduktion"],
      visitLabel: "Begär besök till Kotka-anläggningen",
    },
    "asljunga-sweden": {
      location: "Åsljunga, Sverige",
      label: "Utvald anläggning · Sverige",
      title: "Block Production Line och CAPE Tandem Line i drift",
      summary: "En anläggning i Åsljunga där Block Production Line är installerad tillsammans med CAPE Tandem Line.",
      text: "Denna anläggning i Åsljunga är en viktig referens där Jointecs Block Production Line körs tillsammans med CAPE Tandem Line.",
      additional: "Upplägget visar hur blockproduktion kan kopplas till avancerad pallproduktionsutrustning.",
      why: ["Visar Block Production Line i drift", "Visar integration med CAPE Tandem Line", "Relevant för kunder som vill kombinera blockproduktion med avancerad pallproduktion", "Bra exempel på ett bredare pallproduktionsupplägg", "Stark referens för kunder som överväger Jointec och CAPE"],
      visitLabel: "Begär besök till Åsljunga-anläggningen",
    },
    "bodo-norway": {
      location: "Bodø, Nordnorge",
      label: "Norge",
      title: "Cirkulär blockproduktion på avlägsen plats",
      summary: "Ett nordnorskt exempel där pallblock produceras direkt på plats, vilket minskar transportberoendet.",
      text: "Denna anläggning i Bodø visar varför lokal blockproduktion är viktig. På en avlägsen plats gör Block Production Line det möjligt att producera pallblock direkt på den egna anläggningen.",
      additional: "I stället för att transportera block långa sträckor kan anläggningen skapa block lokalt av återvunnet trä.",
      why: ["Visar Block Production Line i drift på en nordlig plats", "Demonstrerar lokal pallblocksproduktion", "Stödjer cirkulär användning av återvunnet trä", "Minskar beroendet av extern blocktransport", "Starkt exempel för kunder långt från leverantörer", "Relevant för producenter som vill ha bättre kontroll över blockförsörjningen"],
      visitLabel: "Begär besök till Bodø-anläggningen",
    },
    "klippan-sweden": {
      location: "Klippan, Sverige",
      label: "Sverige",
      title: "Block Production Line i drift",
      summary: "En svensk anläggning där Block Production Line kan ses i verklig produktion.",
      text: "Denna anläggning i Klippan är ett exempel på Jointecs Block Production Line i verklig produktion.",
      why: ["Visar Block Production Line i svensk produktionsmiljö", "Relevant för kunder intresserade av pallblockstillverkning", "Visar hur återvunnet trä kan bli användbara pallblock", "Passar besökare som vill se processen i drift"],
      visitLabel: "Begär besök till Klippan-anläggningen",
    },
    "norrkoping-sweden": {
      location: "Norrköping, Sverige",
      label: "Sverige",
      title: "MicroDryer i drift",
      summary: "En svensk anläggning där MicroDryer används för materialberedning, fuktkontroll och produktionsstabilitet.",
      text: "Denna anläggning i Norrköping är ett exempel på Jointecs MicroDryer i verklig produktion.",
      why: ["Visar MicroDryer i industriell användning", "Relevant för producenter med fuktkänsligt material", "Stödjer bättre materialkonsistens", "Hjälper till att stabilisera processen före vidare bearbetning"],
      visitLabel: "Begär besök till Norrköping-anläggningen",
    },
  },
};

CASE_TRANSLATIONS.de = {
  "kotka-finland": {
    location: "Kotka, Finnland",
    label: "Ausgewählter Standort · Finnland",
    title: "Nonstop & Topfoil Pallet in Betrieb",
    summary:
      "Ein Produktionsstandort in Kotka, Finnland, mit einer CAPE Palettennagelmaschine und Jointecs Nonstop & Topfoil Pallet-Lösung.",
    additional:
      "Der Standort betreibt eine CAPE Palettennagelmaschine — eine kompakte, flexible Linie mit schnellem Formatwechsel — sowie Jointecs Nonstop & Topfoil Pallet-Lösung.",
    why: [
      "Zeigt Nonstop & Topfoil Pallet in täglicher Produktion",
      "Zeigt effizientes Palettenhandling und Topfoil-Applikation",
      "Umfasst eine kompakte und flexible CAPE Palettennagellinie",
      "Relevant für Produzenten, die Produktionsfluss und Umrüstflexibilität verbessern möchten",
      "Starker Referenzstandort für moderne Palettenproduktion",
    ],
    visitLabel: "Besuch am Standort Kotka anfragen",
  },
  "asljunga-sweden": {
    location: "Åsljunga, Schweden",
    label: "Ausgewählter Standort · Schweden",
    title: "Block Production Line und CAPE Tandem Line in Betrieb",
    summary:
      "Ein Betriebsstandort in Åsljunga, an dem die Block Production Line gemeinsam mit CAPEs Tandem Line installiert ist.",
    text:
      "Dieser Standort in Åsljunga ist eine wichtige Referenz, an der Jointecs Block Production Line zusammen mit CAPEs Tandem Line läuft.",
    additional:
      "Die Installation zeigt, wie Blockproduktion mit fortschrittlicher Palettenproduktionsausrüstung verbunden werden kann.",
    why: [
      "Zeigt die Block Production Line in Betrieb",
      "Zeigt die Integration mit CAPE Tandem Line",
      "Relevant für Kunden, die Blockproduktion mit moderner Palettenproduktion kombinieren möchten",
      "Gutes Beispiel für einen breiteren Produktionsaufbau",
      "Starke Referenz für Kunden, die Jointec- und CAPE-Ausrüstung prüfen",
    ],
    visitLabel: "Besuch am Standort Åsljunga anfragen",
  },
  "bodo-norway": {
    location: "Bodø, Nordnorwegen",
    label: "Norwegen",
    title: "Geschlossene Blockproduktion an einem abgelegenen Standort",
    summary:
      "Ein Beispiel aus Nordnorwegen, bei dem Palettenblöcke direkt vor Ort produziert werden und die Transportabhängigkeit sinkt.",
    text:
      "Dieser Standort in Bodø zeigt, warum Blockproduktion vor Ort wichtig ist. An einem abgelegenen Standort ermöglicht die Block Production Line, Palettenblöcke direkt am eigenen Standort zu produzieren.",
    additional:
      "Statt Blöcke über lange Strecken zu transportieren, kann der Standort Blöcke lokal aus Recyclingholz herstellen. Das unterstützt ein Kreislaufmodell und reduziert logistische Abhängigkeit.",
    why: [
      "Zeigt Block Production Line an einem nördlichen Standort in Betrieb",
      "Demonstriert Palettenblockproduktion vor Ort",
      "Unterstützt die Kreislaufnutzung von Recyclingholz",
      "Reduziert Abhängigkeit von externem Blocktransport",
      "Starkes Beispiel für Kunden abseits großer Logistikrouten",
      "Relevant für Produzenten, die mehr Kontrolle über ihre Blockversorgung wollen",
    ],
    visitLabel: "Besuch am Standort Bodø anfragen",
  },
  "klippan-sweden": {
    location: "Klippan, Schweden",
    label: "Schweden",
    title: "Block Production Line in Betrieb",
    summary: "Ein schwedischer Betriebsstandort, an dem die Block Production Line in realer Produktion zu sehen ist.",
    text:
      "Dieser Standort in Klippan ist ein Beispiel für Jointecs Block Production Line in realer Produktion.",
    why: [
      "Zeigt Block Production Line in schwedischer Produktionsumgebung",
      "Relevant für Kunden mit Interesse an Palettenblockfertigung",
      "Zeigt, wie Recyclingholz zu nutzbaren Palettenblöcken wird",
      "Geeignet für Besucher, die den Prozess in Betrieb sehen möchten",
    ],
    visitLabel: "Besuch am Standort Klippan anfragen",
  },
  "norrkoping-sweden": {
    location: "Norrköping, Schweden",
    label: "Schweden",
    title: "MicroDryer in Betrieb",
    summary:
      "Ein schwedischer Standort, an dem MicroDryer Materialvorbereitung, Feuchtekontrolle und Produktionsstabilität unterstützt.",
    text: "Dieser Standort in Norrköping zeigt Jointecs MicroDryer in realer Produktion.",
    why: [
      "Zeigt MicroDryer-Leistung im industriellen Einsatz",
      "Relevant für Produzenten mit feuchtigkeitsempfindlichem Material",
      "Unterstützt bessere Materialkonsistenz",
      "Hilft, den Prozess vor der Weiterverarbeitung zu stabilisieren",
    ],
    visitLabel: "Besuch am Standort Norrköping anfragen",
  },
};

CASE_TRANSLATIONS.fr = {
  "kotka-finland": {
    location: "Kotka, Finlande",
    label: "Site présenté · Finlande",
    title: "Nonstop & Topfoil Pallet en fonctionnement",
    summary:
      "Un site de production à Kotka, en Finlande, avec une machine de clouage de palettes CAPE et la solution Nonstop & Topfoil Pallet de Jointec.",
    additional:
      "Le site exploite une machine de clouage de palettes CAPE — une ligne compacte, flexible et à changement rapide — ainsi que la solution Nonstop & Topfoil Pallet de Jointec.",
    why: [
      "Montre Nonstop & Topfoil Pallet en production quotidienne",
      "Montre une manutention efficace des palettes et l’application du topfoil",
      "Inclut une ligne de clouage CAPE compacte et flexible",
      "Pertinent pour les producteurs qui veulent améliorer le flux et la flexibilité",
      "Site de référence solide pour la production moderne de palettes",
    ],
    visitLabel: "Demander une visite du site de Kotka",
  },
  "asljunga-sweden": {
    location: "Åsljunga, Suède",
    label: "Site présenté · Suède",
    title: "Block Production Line et CAPE Tandem Line en fonctionnement",
    summary:
      "Un site en fonctionnement à Åsljunga où la Block Production Line est installée avec la Tandem Line de CAPE.",
    text:
      "Ce site à Åsljunga est une référence importante où la Block Production Line de Jointec fonctionne avec la Tandem Line de CAPE.",
    additional:
      "La configuration montre comment la production de blocs peut être connectée à un équipement avancé de production de palettes.",
    why: [
      "Montre la Block Production Line en fonctionnement",
      "Montre l’intégration avec CAPE Tandem Line",
      "Pertinent pour les clients qui veulent combiner production de blocs et production avancée de palettes",
      "Bon exemple d’une configuration de production plus large",
      "Référence solide pour les clients qui évaluent Jointec et CAPE",
    ],
    visitLabel: "Demander une visite du site d’Åsljunga",
  },
  "bodo-norway": {
    location: "Bodø, nord de la Norvège",
    label: "Norvège",
    title: "Production de blocs en boucle fermée dans un site isolé",
    summary:
      "Un exemple du nord de la Norvège où les blocs de palettes sont produits directement sur site, réduisant la dépendance au transport.",
    text:
      "Ce site à Bodø montre pourquoi la production de blocs sur site est importante. Dans une zone isolée, la Block Production Line permet au client de produire les blocs directement dans son propre site.",
    additional:
      "Au lieu de transporter les blocs sur de longues distances, le site peut produire localement des blocs à partir de bois recyclé. Cela soutient un modèle circulaire et réduit la dépendance logistique.",
    why: [
      "Montre la Block Production Line en fonctionnement dans une zone nordique",
      "Démontre la production de blocs de palettes sur site",
      "Soutient l’utilisation circulaire du bois recyclé",
      "Réduit la dépendance au transport externe de blocs",
      "Exemple solide pour les clients éloignés des fournisseurs",
      "Pertinent pour les producteurs qui veulent mieux contrôler leur approvisionnement en blocs",
    ],
    visitLabel: "Demander une visite du site de Bodø",
  },
  "klippan-sweden": {
    location: "Klippan, Suède",
    label: "Suède",
    title: "Block Production Line en fonctionnement",
    summary: "Un site suédois où la Block Production Line peut être vue en production réelle.",
    text:
      "Ce site à Klippan est un exemple de Block Production Line Jointec fonctionnant en production réelle.",
    why: [
      "Montre la Block Production Line dans un environnement de production suédois",
      "Pertinent pour les clients intéressés par la fabrication de blocs de palettes",
      "Montre comment le bois recyclé peut devenir des blocs utilisables",
      "Adapté aux visiteurs qui veulent voir le processus en action",
    ],
    visitLabel: "Demander une visite du site de Klippan",
  },
  "norrkoping-sweden": {
    location: "Norrköping, Suède",
    label: "Suède",
    title: "MicroDryer en fonctionnement",
    summary:
      "Un site suédois où MicroDryer soutient la préparation matière, le contrôle de l’humidité et la stabilité de production.",
    text: "Ce site à Norrköping est un exemple de MicroDryer Jointec en production réelle.",
    why: [
      "Montre les performances de MicroDryer en usage industriel",
      "Pertinent pour les producteurs travaillant avec des matériaux sensibles à l’humidité",
      "Soutient une meilleure régularité matière",
      "Aide à stabiliser le processus avant l’étape suivante",
    ],
    visitLabel: "Demander une visite du site de Norrköping",
  },
};

function getLanguageCopy(language) {
  return PAGE_COPY[language] || PAGE_COPY.en;
}

function getTranslatedCases(language) {
  const translations = CASE_TRANSLATIONS[language] || {};
  return CUSTOMER_CASES.map((site) => ({ ...site, ...(translations[site.id] || {}) }));
}

const MAP_ZOOM = 5;
const MAP_TILE_SIZE = 256;
const MAP_BOUNDS = {
  north: 69.9,
  south: 54.35,
  west: 3.6,
  east: 32.6,
};

function projectMercator(lat, lon, zoom = MAP_ZOOM) {
  const scale = MAP_TILE_SIZE * 2 ** zoom;
  const sinLat = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lon + 180) / 360) * scale,
    y:
      (0.5 -
        Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) *
      scale,
  };
}

function positionInBounds(lat, lon) {
  const nw = projectMercator(MAP_BOUNDS.north, MAP_BOUNDS.west);
  const se = projectMercator(MAP_BOUNDS.south, MAP_BOUNDS.east);
  const point = projectMercator(lat, lon);

  return {
    left: `${((point.x - nw.x) / (se.x - nw.x)) * 100}%`,
    top: `${((point.y - nw.y) / (se.y - nw.y)) * 100}%`,
  };
}

function getMapTiles() {
  const nw = projectMercator(MAP_BOUNDS.north, MAP_BOUNDS.west);
  const se = projectMercator(MAP_BOUNDS.south, MAP_BOUNDS.east);
  const xStart = Math.floor(nw.x / MAP_TILE_SIZE);
  const xEnd = Math.floor(se.x / MAP_TILE_SIZE);
  const yStart = Math.floor(nw.y / MAP_TILE_SIZE);
  const yEnd = Math.floor(se.y / MAP_TILE_SIZE);
  const tiles = [];

  for (let x = xStart; x <= xEnd; x += 1) {
    for (let y = yStart; y <= yEnd; y += 1) {
      tiles.push({
        key: `${x}-${y}`,
        src: `https://tile.openstreetmap.org/${MAP_ZOOM}/${x}/${y}.png`,
        left: `${(((x * MAP_TILE_SIZE) - nw.x) / (se.x - nw.x)) * 100}%`,
        top: `${(((y * MAP_TILE_SIZE) - nw.y) / (se.y - nw.y)) * 100}%`,
        width: `${(MAP_TILE_SIZE / (se.x - nw.x)) * 100}%`,
        height: `${(MAP_TILE_SIZE / (se.y - nw.y)) * 100}%`,
      });
    }
  }

  return tiles;
}

function NordicOperatingMap({ copy, cases }) {
  const [activePin, setActivePin] = useState("kotka-finland");
  const tiles = useMemo(() => getMapTiles(), []);
  const translatedPins = MAP_PINS.map((pin) => {
    const site = cases.find((item) => item.id === pin.id);
    return {
      ...pin,
      site: site?.location?.split(",")[0] || pin.site,
      country: site?.location?.split(",").slice(1).join(",").trim() || pin.country,
      equipment: site?.machines || pin.equipment,
      cta: `${copy.viewSitePrefix} ${site?.location?.split(",")[0] || pin.site}${copy.viewSiteSuffix}`,
    };
  });
  const activeSite = translatedPins.find((pin) => pin.id === activePin) || translatedPins[0];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              {copy.mapEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
              {copy.mapTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-dark/72">
              {copy.mapIntro}
            </p>
            <p className="mt-5 rounded-2xl border border-brand-dark/8 bg-brand-light p-4 text-sm font-semibold text-brand-dark/72">
              {copy.mapHelp}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-brand-dark/8 bg-brand-light shadow-sm">
            <div
              className="relative h-[460px] overflow-hidden bg-[#e7ecef] sm:h-[620px]"
              role="application"
              aria-label="Interactive map of Nordic operating sites"
            >
              <div className="absolute inset-0">
                {tiles.map((tile) => (
                  <img
                    key={tile.key}
                    src={tile.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute max-w-none select-none opacity-90 grayscale-[30%] saturate-[65%]"
                    style={{
                      left: tile.left,
                      top: tile.top,
                      width: tile.width,
                      height: tile.height,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-white/10" />
              </div>

              <div className="absolute inset-0 z-10">
                {translatedPins.map((pin) => (
                  <div
                    key={pin.id}
                    className="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    style={{
                      ...positionInBounds(pin.lat, pin.lon),
                      marginLeft: pin.offset?.x || 0,
                      marginTop: pin.offset?.y || 0,
                    }}
                    onMouseEnter={() => setActivePin(pin.id)}
                  >
                    <a
                      href={`#${pin.id}`}
                      aria-label={`View ${pin.site}, ${pin.country} operating site - ${pin.equipment.join(" and ")}.`}
                      className="relative h-10 w-10 rounded-full outline-none"
                      onFocus={() => setActivePin(pin.id)}
                      onClick={() => setActivePin(pin.id)}
                    >
                      <span className="absolute inset-0 rounded-full bg-brand-accent/25 transition group-hover:scale-125 group-focus-visible:scale-125" />
                      <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-accent shadow-lg ring-2 ring-brand-dark/12" />
                      <span className="sr-only">{pin.cta}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="absolute left-4 right-4 top-4 z-20 rounded-2xl border border-brand-dark/10 bg-white/95 p-4 shadow-panel backdrop-blur sm:left-auto sm:right-5 sm:top-5 sm:w-72">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  {activeSite.country}
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-brand-dark">
                  {activeSite.site}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-5 text-brand-dark/68">
                  {activeSite.equipment.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${activeSite.id}`}
                  className="mt-4 inline-flex rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
                >
                  {activeSite.cta}
                </a>
              </div>

              <div className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-brand-dark/60 shadow-sm">
                Map data © OpenStreetMap contributors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteMediaGrid({ media }) {
  if (!media?.length) return null;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {media.map((item, index) => (
        <figure
          key={item.src}
          className={`overflow-hidden rounded-3xl border border-brand-dark/8 bg-white shadow-sm ${
            index === 0 && media.length > 2 ? "sm:col-span-2" : ""
          }`}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              aria-label={item.alt}
              className="aspect-video w-full bg-brand-dark object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          )}
        </figure>
      ))}
    </div>
  );
}

export default function CasesPage() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "en";
  const copy = getLanguageCopy(language);
  const cases = useMemo(() => getTranslatedCases(language), [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = copy.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", SEO_DESCRIPTION);
  }, [copy.seoTitle]);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <NordicOperatingMap copy={copy} cases={cases} />

      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img src="/images/production_line.webp" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/92 to-brand-dark/58" />
        </div>
        <div className="section-shell relative py-20 sm:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {copy.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
            {copy.heroText}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={PRIVATE_VISIT_MAILTO} className="primary-button">{copy.privateVisit}</a>
            <a href="#example-sites" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent">
              {copy.viewExamples}
            </a>
          </div>
        </div>
      </section>

      <section id="example-sites" className="bg-brand-light py-20 sm:py-28">
        <div className="section-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">{copy.examplesEyebrow}</p>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.03em] sm:text-5xl">{copy.examplesTitle}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-dark/70">{copy.examplesText}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-6">
            {cases.map((site) => (
              <article key={site.id} className={`group overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-panel ${site.featured ? "border-brand-accent/30 lg:col-span-3" : "border-brand-dark/8 lg:col-span-2"}`}>
                <div className="aspect-[16/9] overflow-hidden bg-brand-dark">
                  <img
                    src={site.overviewImage}
                    alt=""
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${site.rotateOverview ? "-rotate-90 scale-[1.38]" : ""}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-accent">{site.label}</p>
                  <h3 className="mt-3 text-2xl font-light tracking-[-0.02em]">{site.location}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {site.machines.map((machine) => <span key={machine} className="rounded-full bg-brand-light px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-dark/70">{machine}</span>)}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-brand-dark/68">{site.summary}</p>
                  <a href={`#${site.id}`} className="secondary-button mt-5 px-5 py-2.5 text-xs">{copy.viewSitePrefix} {site.location.split(",")[0]}{copy.viewSiteSuffix}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="section-shell space-y-20 sm:space-y-28">
          {cases.map((site, index) => (
            <article id={site.id} key={site.id} className="scroll-mt-28 border-t border-brand-dark/10 pt-10">
              <div className="grid gap-12 lg:grid-cols-[0.56fr_0.44fr]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                    {String(index + 1).padStart(2, "0")} · {site.location}
                  </p>
                  <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em]">{site.title}</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {site.machines.map((machine) => <span key={machine} className="rounded-full bg-brand-light px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark/72 ring-1 ring-brand-dark/10">{machine}</span>)}
                  </div>
                  {site.text ? <p className="mt-6 text-base leading-8 text-brand-dark/74">{site.text}</p> : null}
                  {site.additional ? <p className="mt-4 text-base leading-8 text-brand-dark/74">{site.additional}</p> : null}
                  <a href={site.mailto} className="primary-button mt-7">{site.visitLabel}</a>
                </div>
                <div className="rounded-3xl border border-brand-dark/8 bg-brand-light p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">{copy.why}</p>
                  <ul className="mt-5 space-y-3">
                    {site.why.map((point) => <li key={point} className="flex gap-3 text-sm leading-7 text-brand-dark/72"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{point}</li>)}
                  </ul>
                </div>
              </div>
              {site.video ? (
                <div className="mt-8 overflow-hidden rounded-3xl border border-brand-dark/8 bg-brand-dark">
                  <div className="flex flex-col gap-4 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                        {copy.capeLine}
                      </p>
                      <p className="mt-1 text-sm font-medium text-brand-dark/70">
                        {copy.capeLineText}
                      </p>
                    </div>
                    <img
                      src="/images/cape-logo-color-positive.svg"
                      alt="CAPE"
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </div>
                  <video
                    src={site.video}
                    poster={site.videoPoster}
                    className="aspect-video w-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              ) : null}
              <SiteMediaGrid media={site.media} />
            </article>
          ))}
        </div>
      </section>

      <MachineUpdatesSignup sourcePage="Cases" />

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="section-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">{copy.ctaEyebrow}</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">{copy.ctaText}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/62">{copy.ctaSubtext}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={PRIVATE_VISIT_MAILTO} className="primary-button">{copy.privateVisit}</a>
            <a href="tel:+46706339717" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent">{copy.callKarl}</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
