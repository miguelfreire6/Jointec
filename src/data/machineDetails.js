/**
 * Per-machine deep content for the dedicated /machines/:slug pages.
 * Image paths point at WebP files in /public/images/.
 */
export const MACHINE_DETAILS = {
  "klotsproduktionslinje": {
    slug: "klotsproduktionslinje",
    hero_image: "/images/klots_extrusion.webp",
    gallery: [
      { src: "/images/blocks_stacked.webp",      caption: "klotsproduktionslinje.gallery.blocks" },
      { src: "/images/block_pyramid.webp",       caption: "klotsproduktionslinje.gallery.detail" },
      { src: "/images/block_on_machine.webp",    caption: "klotsproduktionslinje.gallery.fixture" },
      { src: "/images/klots_warehouse.webp",     caption: "klotsproduktionslinje.gallery.warehouse" },
    ],
    spec_keys: [
      "block_dimensions",
      "throughput",
      "footprint",
      "power",
      "controls",
      "lead_time",
      "territory",
    ],
  },
  "plastning-nonstop": {
    slug: "plastning-nonstop",
    hero_image: "/images/finished_pallets.webp",
    gallery: [
      { src: "/images/finished_pallets.webp",     caption: "plastning_nonstop.gallery.line" },
      { src: "/images/production_line.webp",      caption: "plastning_nonstop.gallery.controls" },
    ],
    spec_keys: [
      "wrap_mode",
      "throughput",
      "film",
      "footprint",
      "controls",
      "lead_time",
      "territory",
    ],
  },
  "topfoil-pallet": {
    slug: "topfoil-pallet",
    hero_image: "/images/pallet_green_blocks.webp",
    gallery: [
      { src: "/images/pallet_green_blocks.webp",  caption: "topfoil_pallet.gallery.finished" },
      { src: "/images/beams_packaged.webp",       caption: "topfoil_pallet.gallery.packaging" },
    ],
    spec_keys: [
      "application",
      "foil_source",
      "foil_grade",
      "throughput",
      "footprint",
      "lead_time",
      "territory",
    ],
  },
};

export const MACHINE_ORDER = [
  "klotsproduktionslinje",
  "plastning-nonstop",
  "topfoil-pallet",
];
