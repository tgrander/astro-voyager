import type { NewSpaceCraft } from "@/server/db/helpers";

export const ioSandRider: NewSpaceCraft = {
  name: "Io SandRider",
  slug: "io-sandrider",
  type: "Rugged Explorer",
  destinations: ["silica-sands-of-io"],
  capacity: 12,
  pricePerDay: 3500,
  reviewScore: 4.9,
  imageUrl: "https://example.com/images/io_sandrider_main.jpg",
  heroImage: "https://example.com/images/io_sandrider_hero.jpg",
  virtualTourUrl: "https://example.com/virtual_tours/io_sandrider",
  dimensions: {
    length: 10,
    width: 5,
    height: 3,
    weight: 8000,
  },
  crewDetails: {
    captain: "Captain Max Orion",
    officers: ["Geology Expert Lisa Tran", "Survival Specialist Raj Patel"],
  },
  amenities: {
    standard: [
      "Reinforced hull",
      "Storm navigation system",
      "Emergency shelters",
    ],
    premium: [
      "High-traction landing gear",
      "Automated geological sampling tools",
      "Weather adaptation modules",
    ],
  },
  operationalHistory:
    "Designed specifically for Io’s harsh terrain and electrical storms, commissioned in 2152.",
  technologySpecs: {
    propulsion: "All-terrain thrust modules",
    navigation: "Enhanced topographical mappers",
    specialFeatures: [
      "Electrical storm prediction AI",
      "Quick-deploy shelters",
    ],
  },
  onboardActivities:
    "Storm chasing tours, geological sample collection, and photography expeditions.",
  environmentalImpact:
    "Features a zero-emission power system and uses local materials for emergency repairs to minimize environmental footprint.",
  status: "Available",
  hostId: "host456",
  captainId: "capt456",
  popularActivities: [
    "Exploring silica sand dunes",
    "Electrical storm observation",
  ],
  seasonalVariations:
    "Best visited during Io’s dry season when electrical storms are most frequent.",
  accessibility:
    "Equipped with advanced navigation systems to ensure safety in harsh conditions.",
  researchFacilities:
    "Onboard labs for analyzing geological samples in real-time.",
  culturalSignificance:
    "First spacecraft to use local Io materials for in-situ repairs.",
  historicalEvents: [
    "Survived a record-breaking electrical storm in 2153",
    "Discovered new silica composition",
  ],
};
