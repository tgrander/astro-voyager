import type { NewSpaceCraft } from "@/server/db/helpers";

export const nebulaHarvester: NewSpaceCraft = {
  name: "Nebula Harvester",
  type: "Agricultural and Scientific Research Vessel",
  capacity: 30,
  pricePerDay: 6000,
  reviewScore: 4.9,
  imageUrl: "https://example.com/images/nebula_harvester_main.jpg",
  heroImage: "https://example.com/images/nebula_harvester_hero.jpg",
  virtualTourUrl: "https://example.com/virtual_tours/nebula_harvester",
  dimensions: {
    length: 50,
    width: 15,
    height: 15,
    weight: 25000,
  },
  crewDetails: {
    captain: "Captain Zoe Quin",
    officers: [
      "Chief Agronomist Theo Rios",
      "Environmental Scientist Dr. Lee Chang",
    ],
  },
  amenities: {
    standard: [
      "Controlled environment agriculture modules",
      "Radiation protection",
      "Comprehensive medical bay",
    ],
    premium: [
      "Fluid dynamics optimized systems",
      "Automated nutrient delivery systems",
      "Luxury living quarters",
    ],
  },
  operationalHistory:
    "Since its commissioning in 2151, the Nebula Harvester has been at the forefront of agricultural research in space, particularly focusing on sustainable practices in zero-gravity environments.",
  technologySpecs: {
    propulsion: "Eco-friendly ion propulsion",
    navigation: "Advanced astro-navigation suite",
    specialFeatures: [
      "Biome stabilization technology",
      "Recycling water and air purification systems",
    ],
  },
  onboardActivities:
    "Hydroponic gardening workshops, sustainability seminars, and cooking classes with freshly grown ingredients.",
  environmentalImpact:
    "Designed with closed-loop ecological systems to minimize waste and maximize resource efficiency.",
  status: "Available",
  hostId: "host123",
  captainId: "capt123",
  popularActivities: [
    "Zero-gravity farming techniques",
    "Genetic modification debates",
  ],
  seasonalVariations:
    "Operates year-round, with different crops cycled according to a meticulously planned schedule.",
  accessibility:
    "Fully equipped to accommodate all needs, with adaptations for various physical abilities.",
  researchFacilities:
    "State-of-the-art laboratories designed for a wide range of botanical and ecological studies.",
  culturalSignificance:
    "Instrumental in pioneering the field of space-based agroecology.",
  historicalEvents: [
    "First successful harvest of a genetically modified crop adapted for Martian soil",
    "Hosted the interstellar botanical symposium",
  ],
};
