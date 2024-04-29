import type { NewSpaceCraft } from "@/server/db/helpers";

export const venusCloudCruiser: NewSpaceCraft = {
  name: "Venus Cloud Cruiser",
  slug: "venus-cloud-cruiser",
  type: "High-altitude Aircraft",
  destinations: ["luminous-lagoon-of-venus"],
  capacity: 20,
  pricePerDay: 5500,
  reviewScore: 4.9,
  heroImage: "skywalker/venus-cloud-cruiser_hc9slm",
  dimensions: {
    length: 18,
    width: 10,
    height: 8,
    weight: 15000,
  },
  crewDetails: {
    captain: "Captain Felix Rivera",
    officers: [
      "Atmospheric Scientist Dr. Amy Tang",
      "Guest Relations Officer Marco Santini",
    ],
  },
  amenities: {
    standard: [
      "Acid-resistant coatings",
      "Buoyancy control systems",
      "Advanced life support",
    ],
    premium: [
      "Atmospheric energy conversion systems",
      "Floating gardens",
      "Panoramic observatory for sky viewing",
    ],
  },
  operationalHistory:
    "Custom-built for operation in Venus’ harsh upper atmosphere, in service since 2155, known for its smooth rides above the clouds.",
  technologySpecs: {
    propulsion: "Hybrid air-breathing engines",
    navigation: "Cloud-top radar mapping",
    specialFeatures: [
      "Automated atmospheric data collection",
      "External environment adaptation technology",
    ],
  },
  onboardActivities:
    "Botanical tours, cloud fishing excursions, and atmospheric phenomena studies.",
  environmentalImpact:
    "Features systems designed to minimize chemical emissions and maximize energy efficiency.",
  status: "Available",
  hostId: "host789",
  captainId: "capt789",
  popularActivities: [
    "Venusian sunrise and sunset views",
    "High-altitude cloud hopping",
  ],
  seasonalVariations:
    "Best visited during the Venusian spring when cloud patterns are most stable.",
  accessibility:
    "Fully equipped with adaptive technologies to cater to a diverse range of passenger needs.",
  researchFacilities:
    "Contains several onboard labs designed for atmospheric research and botanical studies.",
  culturalSignificance:
    "Played a crucial role in advancing our understanding of Venusian weather patterns.",
  historicalEvents: [
    "First manned aircraft to continuously operate in Venus' upper atmosphere for over a year",
    "Documented previously unobserved weather patterns",
  ],
};
