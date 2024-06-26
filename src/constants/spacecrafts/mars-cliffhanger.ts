import type { NewSpaceCraft } from "@/server/db/helpers";

export const marsCliffhanger: NewSpaceCraft = {
  name: "Mars Cliffhanger",
  slug: "mars-cliffhanger",
  type: "Luxury Rover",
  destinations: ["red-cliffs-resort-of-mars"],
  capacity: 8,
  pricePerDay: 7500,
  reviewScore: 5.0,
  heroImage: "skywalker/mars-cliffhanger_ogb0dv",
  dimensions: {
    length: 12,
    width: 4,
    height: 3,
    weight: 9000,
  },
  crewDetails: {
    captain: "Captain Iris Sun",
    officers: ["Geologist Damon Hill", "Tour Guide Mira Rostova"],
  },
  amenities: {
    standard: [
      "All-terrain capability",
      "Advanced life support systems",
      "High-definition navigation cameras",
    ],
    premium: [
      "Panoramic viewing platforms",
      "Self-sustaining life support with luxury accommodations",
      "Gourmet Martian cuisine service",
    ],
  },
  operationalHistory:
    "Launched in 2152, designed to provide unparalleled luxury while exploring the Martian wilderness.",
  technologySpecs: {
    propulsion: "Electric powered all-terrain wheels",
    navigation: "AI-assisted terrain mapping",
    specialFeatures: [
      "Automatic weather adaptation systems",
      "Emergency underground shelters",
    ],
  },
  onboardActivities:
    "Red sands photography, Martian sunset watching, and geological excursions.",
  environmentalImpact:
    "Features electric propulsion to reduce emissions and a zero-waste recycling system.",
  status: "Available",
  hostId: "host456",
  captainId: "capt456",
  popularActivities: [
    "Climbing the Olympus Mons",
    "Exploring ancient riverbeds",
  ],
  seasonalVariations:
    "Optimized for operation during Martian spring and autumn to avoid extreme weather conditions.",
  accessibility:
    "Designed with luxury and comfort in mind, ensuring ease of mobility for all passengers.",
  researchFacilities:
    "Includes a mobile geology lab for in-depth analysis of Martian samples.",
  culturalSignificance:
    "Became a symbol of high-end interplanetary travel and exploration.",
  historicalEvents: [
    "First rover to ascend the northern face of Olympus Mons",
    "Discovered water traces in Valles Marineris",
  ],
};
