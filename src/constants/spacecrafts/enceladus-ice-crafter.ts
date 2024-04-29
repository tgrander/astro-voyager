import type { NewSpaceCraft } from "@/server/db/helpers";

export const enceladusIceCrafter: NewSpaceCraft = {
  name: "Enceladus IceCrafter",
  slug: "enceladus-icecrafter",
  type: "Ice Explorer",
  destinations: ["celestial-falls-of-enceladus"],
  capacity: 15,
  pricePerDay: 3800,
  reviewScore: 4.8,
  heroImage: "skywalker/enceladus-ice-crafter_rtao1u",
  dimensions: {
    length: 25,
    width: 8,
    height: 8,
    weight: 18000,
  },
  crewDetails: {
    captain: "Captain Nora Khaled",
    officers: ["Engineer Alexei Petrov", "Geologist Emily Wong"],
  },
  amenities: {
    standard: [
      "Heated hulls",
      "Geothermal energy harnessing",
      "Basic medical facilities",
    ],
    premium: [
      "Ice drilling and sampling equipment",
      "Submersible support vehicles",
      "Luxury heated cabins",
    ],
  },
  operationalHistory:
    "Commissioned in 2153, specifically designed for icy moon expeditions, particularly Enceladus.",
  technologySpecs: {
    propulsion: "Thermal jet engines",
    navigation: "Under-ice sonar navigation",
    specialFeatures: [
      "Quick-melt technology",
      "Automated ice sample analyzers",
    ],
  },
  onboardActivities:
    "Ice fishing expeditions, cryovolcano tours, and scientific workshops on ice dynamics.",
  environmentalImpact:
    "Designed to operate without leaving trace chemicals or waste, maintaining the pristine environment.",
  status: "Available",
  hostId: "host020",
  captainId: "capt020",
  popularActivities: ["Exploring ice fissures", "Studying geothermal vents"],
  seasonalVariations:
    "Operational throughout the Enceladian year, designed to handle seasonal extremes in temperature and ice activity.",
  accessibility:
    "Features advanced navigational aids and safety systems suitable for all passengers, including adaptive interfaces for enhanced mobility.",
  researchFacilities:
    "Includes top-tier scientific labs equipped for in-depth geological and biological analyses.",
  culturalSignificance:
    "First of its kind to provide live streaming of deep ice expeditions to a global audience, promoting planetary science.",
  historicalEvents: [
    "First successful mission to drill into Enceladus’s sub-surface ocean",
    "Discovered new forms of microbial life beneath the ice",
  ],
};
