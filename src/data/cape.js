export const CAPE_INQUIRY_MAILTO =
  "mailto:info@jointec.se?subject=CAPE%20Machinery%20Inquiry&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20CAPE%20machinery.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AMachine%20or%20category%20of%20interest%3A%0A%0ABest%20regards%2C";

export const CAPE_AGENT_MAILTO =
  "mailto:info@jointec.se?subject=CAPE%20Machinery%20Inquiry&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20CAPE%20machinery%20through%20Jointec.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AMachine%20or%20category%20of%20interest%3A%0A%0ABest%20regards%2C";

export const CAPE_USED_MAILTO =
  "mailto:info@jointec.se?subject=Used%20or%20Refurbished%20CAPE%20Machinery&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20used%20or%20refurbished%20CAPE%20machinery.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AMachine%20type%20of%20interest%3A%0A%0ABest%20regards%2C";

const requestMachineMailto = (name) =>
  `mailto:info@jointec.se?subject=${encodeURIComponent(`CAPE Machine Inquiry - ${name}`)}&body=${encodeURIComponent(`Hello Jointec,\n\nI am interested in the CAPE ${name}.\n\nCompany:\nName:\nCountry:\nPhone:\nProduction need:\n\nBest regards,`)}`;

const makeMachine = (name, description) => ({
  name,
  description,
  mailto: requestMachineMailto(name),
});

export const CAPE_CATEGORIES = [
  {
    slug: "pallet-machinery",
    title: "Pallet Machinery",
    pageTitle: "CAPE Pallet Machinery",
    seoTitle: "CAPE Pallet Machinery | Jointec",
    description: "Stand-alone machines and complete production lines for pallet manufacturing.",
    intro:
      "CAPE pallet machinery includes stand-alone machines and complete production lines for efficient pallet production, from semi-automatic systems to advanced automated lines.",
    machines: [
      makeMachine("CP110 No.1 Pallet Nailing Machine", "Industrial pallet nailing equipment for reliable production output."),
      makeMachine("CP110 No.2 Pallet Nailing Machine", "A pallet nailing solution for automated production workflows."),
      makeMachine("CPA Pallet Nailing Machine", "Pallet assembly machinery for efficient industrial production."),
      makeMachine("CPE Deck Nailing Machine", "Automated deck nailing equipment for pallet production lines."),
      makeMachine("AMS Top Board Feeding System", "Automated feeding system for consistent top board handling."),
      makeMachine("ATG Block Feeder", "Block feeding equipment designed to support stable production flow."),
      makeMachine("ATAG Composite Block Feeding System", "Automated composite block feeding for integrated pallet lines."),
      makeMachine("APP1 Pallet & Deck Stacker", "Automated stacking equipment for finished pallets and decks."),
      makeMachine("APR Pallet Stacker", "Pallet stacking machinery for streamlined end-of-line handling."),
      makeMachine("BMT1 Corner Cutting Module", "Corner cutting module for pallet finishing operations."),
      makeMachine("BMX Chamfering Module", "Chamfering module for automated pallet finishing."),
      makeMachine("BMM1 Burn Branding Module", "Burn branding equipment for integrated pallet marking."),
    ],
  },
  {
    slug: "sawmill-machinery",
    title: "Sawmill Machinery",
    pageTitle: "CAPE Sawmill Machinery",
    seoTitle: "CAPE Sawmill Machinery | Jointec",
    description:
      "Automated machinery and production lines for cutting, stacking and preparing timber for pallet and wood packaging production.",
    intro:
      "CAPE sawmill machinery supports automated timber preparation, cutting, stacking and material handling for pallet and wood packaging production.",
    machines: [
      makeMachine("Board Cutting Systems", "Automated systems for preparing boards for downstream production."),
      makeMachine("Stringer Cutting Systems", "Industrial cutting systems for repeatable stringer preparation."),
      makeMachine("Timber Stacking Systems", "Automated stacking systems for efficient timber handling."),
      makeMachine("Timber Handling Conveyors", "Conveyor solutions for reliable material flow through production."),
      makeMachine("Custom Sawmill Production Lines", "Integrated production concepts adapted to facility and output needs."),
    ],
  },
  {
    slug: "cable-drum-machinery",
    title: "Cable Drum Machinery",
    pageTitle: "CAPE Cable Drum Machinery",
    seoTitle: "CAPE Cable Drum Machinery | Jointec",
    description: "Production machinery and lines for manufacturing wooden cable drums.",
    intro:
      "CAPE cable drum machinery is designed for the industrial production of wooden cable drums, with solutions for efficient assembly, handling and production flow.",
    machines: [
      makeMachine("Cable Drum Production Lines", "Integrated lines for industrial wooden cable drum production."),
      makeMachine("Drum Assembly Systems", "Assembly equipment designed for efficient drum manufacturing."),
      makeMachine("Flange Production Systems", "Production systems for wooden cable drum flanges."),
      makeMachine("Cable Drum Handling Systems", "Handling equipment for smoother movement through production."),
    ],
  },
  {
    slug: "stackers-handling",
    title: "Stackers & Handling",
    pageTitle: "CAPE Stackers & Handling Systems",
    seoTitle: "CAPE Stackers & Handling Systems | Jointec",
    description: "Automated stackers, conveyors and handling systems for efficient production flow.",
    intro:
      "CAPE stackers, conveyors and handling systems help automate production flow, reduce manual handling and improve efficiency around pallet and wood packaging machinery.",
    machines: [
      makeMachine("Automatic Pallet Stackers", "Automated stacking equipment for finished pallet handling."),
      makeMachine("Deck Stackers", "Stacking systems for pallet decks and component flow."),
      makeMachine("Chain Conveyors", "Industrial chain conveyors for controlled production movement."),
      makeMachine("Roller Conveyors", "Roller conveyor systems for efficient material transfer."),
      makeMachine("Exit Conveyors", "End-of-line conveyors for completed production output."),
      makeMachine("Production Line Handling Systems", "Integrated handling concepts adapted to production flow."),
    ],
  },
  {
    slug: "used-refurbished",
    title: "Used & Refurbished",
    pageTitle: "Used & Refurbished Machinery",
    seoTitle: "Used & Refurbished CAPE Machinery | Jointec",
    description: "Used and refurbished machines, when available, prepared for continued industrial use.",
    intro:
      "Jointec can present available used or refurbished CAPE machinery when machines are available. Availability changes over time, so customers should contact Jointec directly for current options.",
    machines: [],
  },
];

export const CAPE_CATEGORY_MAP = Object.fromEntries(
  CAPE_CATEGORIES.map((category) => [category.slug, category]),
);

const CATEGORY_TRANSLATIONS = {
  es: {
    "pallet-machinery": {
      title: "Equipos para palets",
      pageTitle: "Equipos CAPE para palets",
      description: "Máquinas independientes y líneas completas para la fabricación de palets.",
      intro:
        "Los equipos CAPE para palets incluyen máquinas independientes y líneas completas para una producción eficiente, desde sistemas semiautomáticos hasta líneas automatizadas avanzadas.",
    },
    "sawmill-machinery": {
      title: "Equipos para aserraderos",
      pageTitle: "Equipos CAPE para aserraderos",
      description: "Maquinaria y líneas automatizadas para cortar, apilar y preparar madera.",
      intro:
        "Los equipos CAPE para aserraderos apoyan la preparación, el corte, el apilado y la manipulación automatizada de madera para producción de palets y embalajes de madera.",
    },
    "cable-drum-machinery": {
      title: "Equipos para tambores de cable",
      pageTitle: "Equipos CAPE para tambores de cable",
      description: "Maquinaria y líneas para fabricar tambores de cable de madera.",
      intro:
        "Los equipos CAPE para tambores de cable están diseñados para producción industrial, con soluciones de montaje, manipulación y flujo de producción eficiente.",
    },
    "stackers-handling": {
      title: "Apilado y manipulación",
      pageTitle: "Apiladores y sistemas de manipulación CAPE",
      description: "Apiladores, transportadores y sistemas de manipulación automatizados.",
      intro:
        "Los sistemas de apilado, transporte y manipulación CAPE automatizan el flujo de producción, reducen trabajo manual y mejoran la eficiencia.",
    },
    "used-refurbished": {
      title: "Usado y reacondicionado",
      pageTitle: "Equipos usados y reacondicionados",
      description: "Máquinas usadas y reacondicionadas, cuando están disponibles, preparadas para uso industrial.",
      intro:
        "Jointec puede presentar equipos CAPE usados o reacondicionados cuando hay disponibilidad. Las opciones cambian, por lo que conviene contactar directamente con Jointec.",
    },
  },
  sv: {
    "pallet-machinery": {
      title: "Pallutrustning",
      pageTitle: "CAPE pallutrustning",
      description: "Fristående maskiner och kompletta linjer för palltillverkning.",
      intro:
        "CAPE pallutrustning omfattar fristående maskiner och kompletta produktionslinjer för effektiv pallproduktion, från halvautomatiska system till avancerade automatiserade linjer.",
    },
    "sawmill-machinery": {
      title: "Sågverksutrustning",
      pageTitle: "CAPE sågverksutrustning",
      description: "Automatiserad utrustning och produktionslinjer för kapning, stapling och beredning av trä.",
      intro:
        "CAPE sågverksutrustning stödjer automatiserad träberedning, kapning, stapling och materialhantering för pall- och träemballageproduktion.",
    },
    "cable-drum-machinery": {
      title: "Kabeltrumsutrustning",
      pageTitle: "CAPE kabeltrumsutrustning",
      description: "Produktionsutrustning och linjer för tillverkning av träkabeltrummor.",
      intro:
        "CAPE kabeltrumsutrustning är utvecklad för industriell produktion av träkabeltrummor med lösningar för montering, hantering och produktionsflöde.",
    },
    "stackers-handling": {
      title: "Stapling och hantering",
      pageTitle: "CAPE staplings- och hanteringssystem",
      description: "Automatiska staplare, transportörer och hanteringssystem för effektivt produktionsflöde.",
      intro:
        "CAPE staplare, transportörer och hanteringssystem automatiserar produktionsflödet, minskar manuellt arbete och förbättrar effektiviteten.",
    },
    "used-refurbished": {
      title: "Begagnat och renoverat",
      pageTitle: "Begagnad och renoverad utrustning",
      description: "Begagnade och renoverade maskiner, när de finns tillgängliga, för fortsatt industriell användning.",
      intro:
        "Jointec kan presentera begagnad eller renoverad CAPE-utrustning när maskiner finns tillgängliga. Tillgången varierar, så kontakta Jointec för aktuella alternativ.",
    },
  },
  de: {
    "pallet-machinery": {
      title: "Palettenausrüstung",
      pageTitle: "CAPE Palettenausrüstung",
      description: "Einzelmaschinen und komplette Linien für die Palettenfertigung.",
      intro:
        "CAPE Palettenausrüstung umfasst Einzelmaschinen und komplette Produktionslinien für effiziente Palettenproduktion, von halbautomatischen Systemen bis zu fortschrittlichen automatisierten Linien.",
    },
    "sawmill-machinery": {
      title: "Sägewerksausrüstung",
      pageTitle: "CAPE Sägewerksausrüstung",
      description: "Automatisierte Ausrüstung und Produktionslinien zum Schneiden, Stapeln und Vorbereiten von Holz.",
      intro:
        "CAPE Sägewerksausrüstung unterstützt automatisierte Holzvorbereitung, Zuschnitt, Stapelung und Materialhandling für Paletten- und Holzverpackungsproduktion.",
    },
    "cable-drum-machinery": {
      title: "Kabeltrommel-Ausrüstung",
      pageTitle: "CAPE Kabeltrommel-Ausrüstung",
      description: "Produktionsmaschinen und Linien für Holz-Kabeltrommeln.",
      intro:
        "CAPE Kabeltrommel-Ausrüstung ist für die industrielle Produktion von Holzkabeltrommeln ausgelegt, mit Lösungen für Montage, Handling und Produktionsfluss.",
    },
    "stackers-handling": {
      title: "Stapeln und Handling",
      pageTitle: "CAPE Stapel- und Handlingsysteme",
      description: "Automatische Stapler, Förderer und Handlingsysteme für effizienten Produktionsfluss.",
      intro:
        "CAPE Stapel-, Förder- und Handlingsysteme automatisieren den Produktionsfluss, reduzieren manuelle Arbeit und verbessern die Effizienz.",
    },
    "used-refurbished": {
      title: "Gebraucht und überholt",
      pageTitle: "Gebrauchte und überholte Ausrüstung",
      description: "Gebrauchte und überholte Maschinen, sofern verfügbar, für weiteren industriellen Einsatz.",
      intro:
        "Jointec kann verfügbare gebrauchte oder überholte CAPE-Maschinen vorstellen. Die Verfügbarkeit ändert sich, daher sollten Kunden Jointec direkt kontaktieren.",
    },
  },
  fr: {
    "pallet-machinery": {
      title: "Équipement pour palettes",
      pageTitle: "Équipement CAPE pour palettes",
      description: "Machines autonomes et lignes complètes pour la fabrication de palettes.",
      intro:
        "L’équipement CAPE pour palettes comprend des machines autonomes et des lignes complètes pour une production efficace, des systèmes semi-automatiques aux lignes automatisées avancées.",
    },
    "sawmill-machinery": {
      title: "Équipement de scierie",
      pageTitle: "Équipement CAPE de scierie",
      description: "Équipements et lignes automatisés pour couper, empiler et préparer le bois.",
      intro:
        "L’équipement CAPE de scierie soutient la préparation, la coupe, l’empilage et la manutention automatisés du bois pour la production de palettes et d’emballages bois.",
    },
    "cable-drum-machinery": {
      title: "Équipement pour tourets de câble",
      pageTitle: "Équipement CAPE pour tourets de câble",
      description: "Machines et lignes de production pour fabriquer des tourets de câble en bois.",
      intro:
        "L’équipement CAPE pour tourets de câble est conçu pour la production industrielle, avec des solutions d’assemblage, de manutention et de flux de production.",
    },
    "stackers-handling": {
      title: "Empilage et manutention",
      pageTitle: "Systèmes CAPE d’empilage et de manutention",
      description: "Empileurs, convoyeurs et systèmes de manutention automatisés.",
      intro:
        "Les systèmes CAPE d’empilage, de convoyage et de manutention automatisent le flux de production, réduisent le travail manuel et améliorent l’efficacité.",
    },
    "used-refurbished": {
      title: "Occasion et reconditionné",
      pageTitle: "Équipement d’occasion et reconditionné",
      description: "Machines d’occasion et reconditionnées, lorsqu’elles sont disponibles, préparées pour un usage industriel.",
      intro:
        "Jointec peut présenter des machines CAPE d’occasion ou reconditionnées lorsqu’elles sont disponibles. La disponibilité change, il est donc préférable de contacter Jointec directement.",
    },
  },
};

export function getCapeCategories(language = "en") {
  const translations = CATEGORY_TRANSLATIONS[language] || {};
  return CAPE_CATEGORIES.map((category) => ({
    ...category,
    ...(translations[category.slug] || {}),
  }));
}

export function getCapeCategoryMap(language = "en") {
  return Object.fromEntries(getCapeCategories(language).map((category) => [category.slug, category]));
}
