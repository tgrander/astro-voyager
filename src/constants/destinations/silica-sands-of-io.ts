import type { NewDestination } from "@/server/db/helpers";

export const silicaSandsOfIo: NewDestination = {
  name: "Silica Sands of Io",
  slug: "silica-sands-of-io",
  description:
    "Famous for its vast electric-blue silica sand dunes, created by intense volcanic activity and electric storms.",
  location: "Io, Jupiter's Moon",
  planet: {
    name: "Jupiter",
    image: "skywalker/planets/qc6m1xiecp7xeunagvsx",
  },
  coordinates: "18°N, 55°W",
  distanceFromEarth: "628 million kilometers away",
  travelTime: "1.5 years",
  attractions: [
    "Sand surfing",
    "Electric storm watching",
    "Volcanic spa treatments",
  ],
  amenities: ["Electro-sandboard rentals", "Volcanic spas", "Local bazaars"],
  heroImage: "skywalker/destinations/silica-sands/bjyzyzxexxtcgembbk1m",
  imageUrls: [],
  climate: "Extreme volcanic",
  gravity: "Reduced Gravity Fields",
  safetyRating: "B",
  visitorRating: "4.5",
  visitorReviews: [
    "The electric storms are like nothing else in the solar system!",
    "A thrilling and rejuvenating experience!",
  ],
  averageCostPerDay: 6500,
  bookingStatus: "Available",
  popularActivities: [
    "Electro-sandboarding competitions",
    "Storm photography workshops",
  ],
  seasonalVariations: `Storm season peaks during Jupiter’s closest approach to the sun`,
  accessibility: "Advanced mobility assistance available for all terrain types",
  researchFacilities: "Io Geologic and Atmospheric Research Center",
  culturalSignificance: "A melting pot of interplanetary cultures and cuisines",
  historicalEvents: [
    "Establishment of the first Io research outpost in 2080",
    "Host of the first interplanetary extreme sports event in 2120",
  ],
};
