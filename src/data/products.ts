import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    // ring 01
    id: 1,
    slug: "sol-ring",
    name: "Sol Ring",

    category: "rings",
    material: "gold",

    price: "€180",

    description:
      "Organic sculptural gold ring inspired by water-worn surfaces, sunlight reflections and soft natural textures.",

    image: "/images/products/ring_01/ring_01.png",

    hoverImage:
      "/images/products/ring_01/ring_01_worn.png",

    gallery: [
      "/images/products/ring_01/ring_01.png",
      "/images/products/ring_01/ring_01_worn.png",
      "/images/products/ring_01/ring_01_detail.png",
      "/images/products/ring_01/ring_01_micro.png",
    ],
  },

  {
    // earrings 01
    id: 2,
    slug: "luna-earrings",
    name: "Luna Earrings",

    category: "earrings",
    material: "gold",

    price: "€220",

    description:
      "Textured sculptural earrings with soft reflective surfaces and organic forms inspired by flowing movement.",

    image: "/images/products/earring_01/earrings_01.png",

    // hoverImage: "/images/products/earring_01/earrings_01_worn.png",

    gallery: [
      "/images/products/earring_01/earrings_01.png",
      "/images/products/earring_01/earrings_01_worn.png",
      "/images/products/earring_01/earrings_01_shooting.png",
      "/images/products/earring_01/earrings_01_ice.png",
    ],
  },

  {
    // ring 02
    id: 3,
    slug: "mare-ring",
    name: "Mare Ring",

    category: "rings",
    material: "silver",

    price: "€190",

    description:
      "A fluid silver ring shaped with soft asymmetry and inspired by tides, erosion and sculptural minimalism.",

    image: "/images/products/ring_02/ring_02.png",

    hoverImage:
      "/images/products/ring_02/ring_02_worn.png",

    gallery: [
      "/images/products/ring_02/ring_02.png",
      "/images/products/ring_02/ring_02_worn.png",
      "/images/products/ring_02/ring_02_water.png",
      "/images/products/ring_02/ring_02_ice.png",
    ],
  },

  {
    // necklace 01
    id: 4,
    slug: "aure-necklace",
    name: "Aure Necklace",

    category: "necklaces",
    material: "gold",

    price: "€240",

    description:
      "Minimal sculptural necklace inspired by warm light, organic balance and tactile forms.",

    image: "/images/products/necklace_01/necklace_01.png",

    // hoverImage: "/images/products/necklace_01/necklace_01_worn.png",

    gallery: [
      "/images/products/necklace_01/necklace_01.png",
    ],
  },

  {
    // earrings 02
    id: 5,
    slug: "sol-earrings",
    name: "Sol Earrings",

    category: "earrings",
    material: "gold",

    price: "€200",

    description:
      "Bold hammered earrings with warm metallic textures and fluid handcrafted silhouettes.",

    image: "/images/products/earring_02/earrings_02.png",

    // hoverImage: "/images/products/earring_02/earrings_02_worn.png",

    gallery: [
      "/images/products/earring_02/earrings_02.png",
    ],
  },

  {
    // ring 03
    id: 6,
    slug: "nema-ring",
    name: "Nema Ring",

    category: "rings",
    material: "silver",

    price: "€170",

    description:
      "Minimal silver statement ring with imperfect curves and a tactile handcrafted finish.",

    image: "/images/products/ring_03/ring_03.png",

    hoverImage:
      "/images/products/ring_03/ring_03_worn.png",

    gallery: [
      "/images/products/ring_03/ring_03.png",
      "/images/products/ring_03/ring_03_worn.png",
      "/images/products/ring_03/ring_03_detail.png",
      "/images/products/ring_03/ring_03_wornb.png",
    ],
  },

  {
    // ring 04
    id: 7,
    slug: "azul-ring",
    name: "Azul Ring",

    category: "rings",
    material: "gold",

    price: "€210",

    description:
      "Organic gold ring featuring a deep blue stone inspired by ocean reflections and vintage jewelry forms.",

    image: "/images/products/ring_04/ring_04.png",

    //hoverImage: "/images/products/ring_04/ring_04_worn.png",

    gallery: [
      "/images/products/ring_04/ring_04.png",
      "/images/products/ring_04/ring_04_worn.png",
      "/images/products/ring_04/ring_04_wornb.png",
    ],
  },

  {
    // bracelet 01
    id: 8,
    slug: "sorelle-bangles",
    name: "Sorelle Bangles",

    category: "bracelets",
    material: "mixed",

    price: "€280",

    description:
      "Chunky layered bangles blending glossy resin with sculptural metallic textures.",

    image: "/images/products/bangles/bangles_01.png",

    hoverImage:
      "/images/products/bangles/bangles_worn.png",

    gallery: [
      "/images/products/bangles/bangles_01.png",
      "/images/products/bangles/bangles_worn.png",
    ],
  },

  {
    // bracelet 02
    id: 9,
    slug: "tidal-cuff",
    name: "Tidal Cuff",

    category: "bracelets",
    material: "gold",

    price: "€150",

    description:
      "A bold sculptural cuff inspired by flowing water, erosion and warm golden light.",

    image: "/images/products/cuff/cuff_01.png",

    // hoverImage: "/images/products/cuff/cuff_worn.png",

    gallery: [
      "/images/products/cuff/cuff_01.png",
    ],
  },
];