import type { NewSpaceCraft } from "@/server/db/helpers";

export const interstellarGateway: NewSpaceCraft = {
  name: "Interstellar Gateway",
  slug: "interstellar-gateway",
  type: "FTL Starship",
  destinations: ["galactic-gateway", "starforge-station"],
  capacity: 100,
  pricePerDay: 8000,
  reviewScore: 4.95,
  heroImage: "skywalker/interstellar-gateway_heme1v",
  dimensions: {
    length: 300,
    width: 50,
    height: 50,
    weight: 50000,
  },
  crewDetails: {
    captain: "Captain Nora Spectra",
    officers: ["Chief Engineer Malik Rostam", "Science Officer Dr. Jun Li"],
  },
  amenities: {
    standard: [
      "Warp drive",
      "Quantum entanglement communication",
      "Enhanced radiation shields",
    ],
    premium: [
      "Multi-species habitation modules",
      "Zero-gravity entertainment zones",
      "Holodeck",
    ],
  },
  operationalHistory:
    "Launched in 2150, it has served as the primary vessel for missions beyond the solar system, facilitating numerous first contacts and scientific breakthroughs.",
  technologySpecs: {
    propulsion: "Warp drive capable of exceeding the speed of light",
    navigation:
      "Star chart navigation system with real-time cosmic event tracking",
    specialFeatures: [
      "Interstellar teleportation deck",
      "Automated medical bays with species-specific adaptations",
    ],
  },
  onboardActivities:
    "Intergalactic cultural exchanges, astrobiology workshops, and stargazing symposiums.",
  environmentalImpact:
    "Utilizes clean energy sources such as antimatter and dark energy, maintaining minimal impact on visited ecosystems.",
  status: "Available",
  hostId: "host900",
  captainId: "capt900",
  popularActivities: [
    "Interstellar safari",
    "Quantum mechanics demonstrations",
  ],
  seasonalVariations:
    "Operates continuously, with missions scheduled based on galactic alignments.",
  accessibility:
    "Designed to accommodate various life forms from different gravity and atmospheric conditions.",
  researchFacilities:
    "Equipped with laboratories that can simulate a variety of environmental conditions for experiments.",
  culturalSignificance:
    "Known as the vanguard of human exploration into the unknown reaches of the universe.",
  historicalEvents: [
    "First successful journey to another galaxy",
    "Hosted peace talks between multiple alien civilizations",
  ],
};
