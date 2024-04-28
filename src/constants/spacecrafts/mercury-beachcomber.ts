import type { NewSpaceCraft } from "@/server/db/helpers";

export const mercuryBeachcomber: NewSpaceCraft = {
  name: "Mercury Beachcomber",
  type: "Heat-resistant Shuttle",
  capacity: 10,
  pricePerDay: 4200,
  reviewScore: 4.7,
  imageUrl: "https://example.com/images/mercury_beachcomber_main.jpg",
  heroImage: "https://example.com/images/mercury_beachcomber_hero.jpg",
  virtualTourUrl: "https://example.com/virtual_tours/mercury_beachcomber",
  dimensions: {
    length: 15,
    width: 6,
    height: 5,
    weight: 12000,
  },
  crewDetails: {
    captain: "Captain Rita Moreno",
    officers: [
      "Heat Resistance Specialist Kyle Xu",
      "Navigation Officer Elsie Weber",
    ],
  },
  amenities: {
    standard: [
      "Cooling systems",
      "Solar reflectors",
      "Heat-shielded passenger cabin",
    ],
    premium: [
      "Sand mobility enhancements",
      "Automated mineral mapping tools",
      "Luxury survival suits",
    ],
  },
  operationalHistory:
    "Engineered specifically for Mercury’s extreme conditions; launched in 2153 and has completed numerous successful tours.",
  technologySpecs: {
    propulsion: "Solar-powered hybrid engines",
    navigation: "High-temperature resistant GPS",
    specialFeatures: ["Self-cleaning solar panels", "Emergency cooling pods"],
  },
  onboardActivities:
    "Sunrise and sunset viewing events, guided mineral hunts, and heat-resistance workshops.",
  environmentalImpact:
    "Utilizes recycled heat energy and has minimal environmental footprint on Mercury.",
  status: "Available",
  hostId: "host678",
  captainId: "capt678",
  popularActivities: [
    "Navigating Mercury's 'hot poles'",
    "Interactive geological mapping",
  ],
  seasonalVariations:
    "Operates during Mercury's longer twilight periods for optimal temperatures.",
  accessibility:
    "Designed with heat-resistant materials that ensure a comfortable environment for all guests.",
  researchFacilities:
    "Equipped with the latest in planetary geology research tools.",
  culturalSignificance:
    "First commercial shuttle designed for extreme planetary conditions.",
  historicalEvents: [
    "Set a record for closest approach to Mercury's sun-facing side",
    "Discovered new metallic compounds in Mercury's soil",
  ],
};
