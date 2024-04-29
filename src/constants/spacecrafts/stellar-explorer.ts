import type { NewSpaceCraft } from "@/server/db/helpers";

export const stellarExplorer: NewSpaceCraft = {
  name: "Stellar Explorer",
  slug: "stellar-explorer",
  type: "Long-range Cruiser",
  destinations: ["nova-polaris-station", "quantum-quay"],
  capacity: 150,
  pricePerDay: 5000,
  reviewScore: 4.8,
  heroImage: "skywalker/stellar-explorer_ylqqvo",
  dimensions: {
    length: 320,
    width: 145,
    height: 80,
    weight: 210000,
  },
  crewDetails: {
    captain: "Captain Jane Doe",
    officers: ["First Officer John Smith", "Science Officer Ada Lovelace"],
  },
  amenities: {
    standard: [
      "Cosmic radiation shielding",
      "Standard meal service",
      "Basic medical facility",
    ],
    premium: [
      "Observatory dome",
      "Zero-gravity gym",
      "AI-guided educational tours",
    ],
  },
  operationalHistory:
    "Launched in 2140, has completed over 50 successful deep space missions.",
  technologySpecs: {
    propulsion: "Hyperdrive system",
    navigation: "Quantum astrogation panel",
    specialFeatures: ["Self-healing hull material", "Energy recycling system"],
  },
  onboardActivities:
    "Star-mapping workshops, astrophotography sessions, and celestial navigation courses.",
  environmentalImpact:
    "Uses sustainable energy sources to minimize carbon footprint in space.",
  status: "Available",
  hostId: "host123",
  captainId: "capt123",
  popularActivities: [
    "Star-gazing from the observatory",
    "Educational spacewalks",
  ],
  seasonalVariations:
    "Operates all year round, with special missions during meteor showers.",
  accessibility:
    "Equipped with facilities for individuals with limited mobility.",
  researchFacilities:
    "Contains state-of-the-art labs for cosmic studies and experimental physics.",
  culturalSignificance:
    "Known as the pioneer vessel of the modern space tourism era.",
  historicalEvents: [
    "First vessel to navigate the outer comet belt",
    "Hosted the interstellar peace treaty summit in 2145",
  ],
};
