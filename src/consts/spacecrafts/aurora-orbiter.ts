import type { NewSpaceCraft } from "@/server/db/helpers";

export const auroraOrbiter: NewSpaceCraft = {
  name: "Aurora Orbiter",
  type: "Orbital Station Transfer",
  capacity: 20,
  pricePerDay: 2500,
  reviewScore: 4.6,
  imageUrl: "https://example.com/images/aurora_orbiter_main.jpg",
  heroImage: "https://example.com/images/aurora_orbiter_hero.jpg",
  virtualTourUrl: "https://example.com/virtual_tours/aurora_orbiter",
  dimensions: {
    length: 30,
    width: 10,
    height: 10,
    weight: 20000,
  },
  crewDetails: {
    captain: "Captain Leo Grant",
    officers: ["Pilot Maya Jensen", "Astronomer Sarah Chen"],
  },
  amenities: {
    standard: [
      "Solar energy propulsion",
      "Luxury accommodations",
      "Advanced life support systems",
    ],
    premium: [
      "Aurora monitoring instruments",
      "Zero-gravity art studios",
      "Gourmet space cuisine",
    ],
  },
  operationalHistory:
    "Launched in 2150, has safely transported over 5,000 passengers to various orbital platforms.",
  technologySpecs: {
    propulsion: "Ion thrusters with solar boost",
    navigation: "AI-assisted stellar navigation",
    specialFeatures: [
      "Artificial gravity lounges",
      "Automated emergency return",
    ],
  },
  onboardActivities:
    "Art workshops, celestial photography courses, and aurora observation events.",
  environmentalImpact:
    "Fully recyclable waste systems and uses clean energy sources.",
  status: "Available",
  hostId: "host010",
  captainId: "capt010",
  popularActivities: [
    "Spacewalks under the aurora",
    "Interactive astronomy sessions",
  ],
  seasonalVariations:
    "Best during peak aurora seasons, though operates year-round.",
  accessibility:
    "Fully accessible for all passenger needs, including those with limited mobility.",
  researchFacilities:
    "Equipped with observatories for both professional and amateur astronomers.",
  culturalSignificance:
    "Known as the gateway for artists and scientists to experience space firsthand.",
  historicalEvents: [
    "Hosted the first zero-gravity art exhibition",
    "Was part of the Lunar Gateway Project",
  ],
};
