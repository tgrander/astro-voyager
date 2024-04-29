import type { NewSpaceCraft } from "@/server/db/helpers";

export const titanSubmersible: NewSpaceCraft = {
  name: "Titan Submersible",
  slug: "titan-submersible",
  type: "Amphibious Vehicle",
  destinations: ["titans-echo-caverns"],
  capacity: 8,
  pricePerDay: 4000,
  reviewScore: 4.7,
  imageUrl: "https://example.com/images/titan_submersible_main.jpg",
  heroImage: "https://example.com/images/titan_submersible_hero.jpg",
  virtualTourUrl: "https://example.com/virtual_tours/titan_submersible",
  dimensions: {
    length: 12,
    width: 4,
    height: 4,
    weight: 10000,
  },
  crewDetails: {
    captain: "Captain Eva Stark",
    officers: [
      "Hydrodynamic Engineer Tomás Riviera",
      "Marine Biologist Nina Zhao",
    ],
  },
  amenities: {
    standard: [
      "Methane-resistant materials",
      "Sub-surface communication systems",
      "Emergency ascent capabilities",
    ],
    premium: [
      "Sonar mapping",
      "Thermal imaging cameras",
      "Luxury passenger cabin with viewing windows",
    ],
  },
  operationalHistory:
    "Deployed to Titan in 2154 for its unique ability to explore both above and beneath the moon’s methane lakes.",
  technologySpecs: {
    propulsion:
      "Hybrid jet and turbine engines for underwater and surface travel",
    navigation: "Submersible sonar and radar systems",
    specialFeatures: [
      "Methane conversion for fuel",
      "Automated scientific sample collection",
    ],
  },
  onboardActivities:
    "Submarine tours of methane rivers, ice caving on Titan’s surface, and deep-water biology studies.",
  environmentalImpact:
    "Designed to operate cleanly using Titan's methane as fuel, reducing the need for energy transport from Earth.",
  status: "Available",
  hostId: "host789",
  captainId: "capt789",
  popularActivities: [
    "Exploring submerged ice formations",
    "Observing native marine life",
  ],
  seasonalVariations:
    "Operational year-round, equipped for Titan’s extreme seasonal shifts.",
  accessibility: "All areas accessible via pressure-regulated pathways.",
  researchFacilities: "Equipped with state-of-the-art marine research labs.",
  culturalSignificance:
    "Played a key role in the first manned missions to Titan’s sub-surface oceans.",
  historicalEvents: [
    "First successful sub-ice dive",
    "Discovery of bioluminescent organisms in Titan’s depths",
  ],
};
