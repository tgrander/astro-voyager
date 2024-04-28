import type { NewDestination } from "@/server/db/helpers";

export const interstellarGateway: NewDestination = {
  name: "Interstellar Gateway",
  description:
    "A grand terminal floating between star systems, serving as a hub for interstellar travel, commerce, and diplomacy.",
  location: "Orbiting a dormant quasar",
  coordinates: "Galactic Sector: Z-Alpha-9",
  distanceFromEarth: "4500 Light Years",
  travelTime: "Varies with portal technology",
  attractions: [
    "Portal complexes",
    "Quasar energy exhibits",
    "Galactic diplomacy centers",
  ],
  amenities: ["Trade markets", "Conference centers", "Cultural exhibits"],
  imageUrls: [
    "https://example.com/images/interstellar_gateway_main.jpg",
    "https://example.com/images/interstellar_gateway_overview.jpg",
  ],
  virtualTourUrl: "https://example.com/virtual_tours/interstellar_gateway",
  climate: "Controlled environmental conditions",
  gravity: "Adjustable gravity fields",
  safetyRating: "AAA",
  visitorReviews: [
    "A crossroads of culture and technology.",
    "The heart of the galactic community.",
  ],
  averageCostPerDay: 10000,
  bookingStatus: "Open",
  popularActivities: [
    "Portal technology demonstrations",
    "Quasar energy workshops",
  ],
  seasonalVariations: "None",
  accessibility: "Fully accessible to all species and mobility types",
  researchFacilities: "Advanced astrophysics labs",
  culturalSignificance: "Symbol of galactic unity",
  historicalEvents: [
    "Site of the first galactic peace treaty",
    "First use of commercial portal technology",
  ],
};
