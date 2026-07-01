export const PRIVATE_VISIT_MAILTO =
  "mailto:info@jointec.se?subject=Private%20Visit%20to%20See%20Jointec%20Equipment&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20arranging%20a%20private%20visit%20to%20see%20one%20of%20your%20solutions%20in%20operation.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0ASolution%20of%20interest%3A%0APreferred%20location%20or%20site%3A%0A%0ABest%20regards%2C";

export const CUSTOMER_CASES = [
  {
    id: "kotka-finland",
    location: "Kotka, Finland",
    label: "Featured Site · Finland",
    featured: true,
    title: "Nonstop & Topfoil Pallet in Operation",
    machines: ["NONSTOP & TOPFOIL PALLET", "CAPE Pallet Nailing Machine"],
    summary:
      "A production site in Kotka, Finland, operating a CAPE pallet nailing machine — the most compact, flexible, and fast-changeover pallet production line available on the market — as well as Jointec’s Nonstop & Topfoil Pallet solution.",
    text: "",
    additional:
      "The site operates a CAPE pallet nailing machine — the market's most compact and flexible line — as well as Jointec’s Nonstop & Topfoil Pallet solution.",
    why: [
      "Demonstrates Nonstop & Topfoil Pallet in daily production",
      "Shows efficient pallet handling and topfoil application",
      "Includes a compact and flexible CAPE pallet nailing line",
      "Relevant for producers looking to improve production flow and changeover flexibility",
      "Strong reference site for modern pallet production",
    ],
    overviewImage: "/images/reference-kotka-cape-line.jpg",
    video: "/videos/kotka-cape-pallet-line.mp4",
    videoPoster: "/images/kotka-video-poster.png",
    media: [
      { type: "image", src: "/images/reference-kotka-cape-line.jpg", alt: "CAPE pallet nailing line at the Kotka operating site" },
      { type: "image", src: "/images/reference-kotka-cape-machine.jpg", alt: "CAPE pallet machinery operating at Kotka" },
      { type: "image", src: "/images/reference-kotka-small-big-pallet.jpg", alt: "Small and large pallets at the Kotka reference site" },
    ],
    gallery: ["Main site image", "Nonstop & Topfoil Pallet solution image", "CAPE pallet nailing line image", "Pallet production detail image"],
    visitLabel: "Request Visit to Kotka Site",
    mailto:
      "mailto:info@jointec.se?subject=Visit%20Request%20-%20Kotka%20Finland%20Operating%20Site&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20arranging%20a%20private%20visit%20to%20the%20Kotka%2C%20Finland%20site%20to%20see%20the%20Nonstop%20%26%20Topfoil%20Pallet%20solution%20and%20CAPE%20pallet%20nailing%20line.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AProduction%20interest%3A%0A%0ABest%20regards%2C",
  },
  {
    id: "asljunga-sweden",
    location: "Åsljunga, Sweden",
    label: "Featured Site · Sweden",
    featured: true,
    title: "Åsljunga Reference Site for the FEFPEB Industrial Visit",
    machines: ["Jointec equipment", "CAPE pallet production lines"],
    summary:
      "Åsljunga is one of the reference sites included in the FEFPEB industrial visit, where visitors can see several examples of equipment and production solutions delivered by Jointec over the years.",
    text:
      "Åsljunga is one of the reference sites included in the FEFPEB industrial visit, where visitors can see several examples of equipment and production solutions delivered by Jointec over the years.\n\nThe site gives a practical view of Jointec’s role in the pallet industry — from individual equipment and line integrations to complete production solutions. Visitors will also see pallet production lines from CAPE.",
    additional:
      "Together, the installation highlights how Jointec combines long industry experience, technical know-how and strong supplier partnerships to support modern pallet producers.",
    why: [
      "Included in the FEFPEB industrial visit",
      "Shows examples of Jointec equipment and production solutions delivered over the years",
      "Gives visitors a practical view of Jointec’s role in the pallet industry",
      "Highlights Jointec’s experience, technical know-how and supplier partnerships",
    ],
    overviewImage: "/images/reference-asljunga.jpg",
    media: [
      { type: "video", src: "/videos/reference-block-line-110.mp4", alt: "Åsljunga Block Production Line in operation" },
      {
        type: "video",
        src: "/videos/reference-asljunga-img-4783.mp4",
        poster: "/images/reference-asljunga-img-4783-poster.jpg",
        alt: "Åsljunga reference site equipment in operation",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/videos/reference-asljunga-img-8168.mp4",
        poster: "/images/reference-asljunga-img-8168-poster.jpg",
        alt: "Åsljunga reference site production equipment",
        orientation: "portrait",
      },
      {
        type: "video",
        src: "/videos/reference-asljunga-img-1479.mp4",
        poster: "/images/reference-asljunga-img-1479-poster.jpg",
        alt: "Åsljunga production line at the reference site",
      },
    ],
    gallery: ["Main site image", "Block Production Line image", "CAPE Tandem Line image", "Production flow image", "Finished pallet/block image"],
    visitLabel: "Request Visit to Åsljunga Site",
    mailto:
      "mailto:info@jointec.se?subject=Visit%20Request%20-%20%C3%85sljunga%20FEFPEB%20Reference%20Site&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20the%20%C3%85sljunga%2C%20Sweden%20reference%20site%20included%20in%20the%20FEFPEB%20industrial%20visit.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AProduction%20interest%3A%0A%0ABest%20regards%2C",
  },
  {
    id: "bodo-norway",
    location: "Bodø, Northern Norway",
    label: "Norway",
    title: "Closed-Loop Block Production in a Remote Location",
    machines: ["BLOCK PRODUCTION LINE"],
    summary:
      "A remote northern Norwegian example where pallet blocks are produced directly on site, reducing transport dependency and supporting a closed-loop production model.",
    text:
      "This site in Bodø, Northern Norway is a strong example of why on-site block production matters. In a remote location where transport can be expensive and logistically difficult, the Block Production Line allows the customer to produce pallet blocks directly at their own site.",
    additional:
      "Instead of transporting blocks over long distances, the site can create blocks locally from recycled wood material. This supports a closed-loop production model, reduces transport dependency and improves the environmental footprint without increasing transport cost.",
    why: [
      "Shows Block Production Line operating in a remote northern location",
      "Demonstrates on-site pallet block production",
      "Supports closed-loop use of recycled wood material",
      "Reduces dependency on external block transport",
      "Strong example for customers located far from suppliers or major logistics routes",
      "Relevant for producers who want better control over their own block supply",
    ],
    overviewImage: "/images/reference-bodo-cover.jpg",
    media: [
      { type: "image", src: "/images/reference-bodo-03.jpg", alt: "Recycled wood material at Bodø site" },
      { type: "video", src: "/videos/reference-bodo-7307.mp4", alt: "Bodø Block Production Line in operation" },
      { type: "image", src: "/images/reference-bodo-04.jpg", alt: "Bodø site production detail" },
      { type: "image", src: "/images/reference-bodo-05.jpg", alt: "Finished pallet block material at Bodø site" },
    ],
    visitLabel: "Request Visit to Bodø Site",
    mailto:
      "mailto:info@jointec.se?subject=Visit%20Request%20-%20Bod%C3%B8%20Block%20Production%20Line&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20arranging%20a%20private%20visit%20to%20the%20Bod%C3%B8%2C%20Norway%20site%20to%20see%20the%20Block%20Production%20Line%20in%20operation.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AProduction%20interest%3A%0A%0ABest%20regards%2C",
  },
  {
    id: "klippan-sweden",
    location: "Klippan, Sweden",
    label: "Sweden",
    title: "Block Production Line in Operation",
    machines: ["BLOCK PRODUCTION LINE"],
    summary:
      "A Swedish operating site where the Block Production Line can be seen in real production.",
    text:
      "This site in Klippan, Sweden is an example of Jointec’s Block Production Line operating in real production and available to see in action by arrangement.",
    why: [
      "Demonstrates Block Production Line in a Swedish production environment",
      "Relevant for customers interested in pallet block manufacturing",
      "Shows how recycled wood material can be turned into usable pallet blocks",
      "Suitable for visitors who want to see the process in action",
    ],
    overviewImage: "/images/reference-klippan-site.jpg",
    media: [
      { type: "image", src: "/images/reference-klippan-site.jpg", alt: "Klippan Block Production Line reference site" },
      { type: "video", src: "/videos/reference-klippan-site.mp4", alt: "Klippan Block Production Line in operation" },
    ],
    visitLabel: "Request Visit to Klippan Site",
    mailto:
      "mailto:info@jointec.se?subject=Visit%20Request%20-%20Klippan%20Block%20Production%20Line&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20arranging%20a%20private%20visit%20to%20the%20Klippan%2C%20Sweden%20site%20to%20see%20the%20Block%20Production%20Line%20in%20operation.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AProduction%20interest%3A%0A%0ABest%20regards%2C",
  },
  {
    id: "norrkoping-sweden",
    location: "Norrköping, Sweden",
    label: "Sweden",
    title: "Microdryer in Operation",
    machines: ["MICRODRYER"],
    summary:
      "A Swedish operating site where the Microdryer is used to support material preparation, moisture control and production consistency.",
    text:
      "This site in Norrköping, Sweden is an example of Jointec’s Microdryer operating in a real production environment.",
    why: [
      "Demonstrates Microdryer performance in industrial use",
      "Relevant for producers who want to dry IN LINE",
      "Supports improved material consistency",
      "Helps stabilize the production process before further processing",
    ],
    overviewImage: "/images/microdryer.jpg",
    media: [
      { type: "image", src: "/images/reference-norrkoping-01.jpg", alt: "Norrköping Microdryer operating site" },
      { type: "video", src: "/videos/reference-norrkoping-01.mp4", alt: "Norrköping Microdryer in operation" },
    ],
    visitLabel: "Request Visit to Norrköping Site",
    mailto:
      "mailto:info@jointec.se?subject=Visit%20Request%20-%20Norrk%C3%B6ping%20Microdryer%20Site&body=Hello%20Jointec%2C%0A%0AI%20am%20interested%20in%20arranging%20a%20private%20visit%20to%20the%20Norrk%C3%B6ping%2C%20Sweden%20site%20to%20see%20the%20Microdryer%20in%20operation.%0A%0ACompany%3A%0AName%3A%0ACountry%3A%0APhone%3A%0AProduction%20interest%3A%0A%0ABest%20regards%2C",
  },
];
