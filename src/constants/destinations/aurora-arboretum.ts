import type { NewDestination } from "@/server/db/helpers";

export const auroraArboretum: NewDestination = {
  name: "Aurora Arboretum",
  slug: "aurora-arboretum",
  description:
    "A zero-gravity botanical garden with a panoramic view of Earth’s aurora borealis.",
  location: "Orbit around Earth's Magnetic North Pole",
  coordinates: "Geomagnetic North",
  distanceFromEarth: "Orbiting directly above the Earth",
  travelTime: "1 hour from Earth surface shuttle",
  attractions: [
    "Guided meditation sessions",
    "Aurora photography workshops",
    "Exhibition of rare, off-world flora",
  ],
  amenities: ["Meditation pods", "Photo studio", "Educational center"],
  heroImage: "skywalker/destinations/leixmoythzbilyh6l4dk",
  planetImage: "skywalker/planets/c5seuo0awpmwudl0kdp9",
  imageUrls: [],
  climate: "Controlled environment",
  gravity: "Zero gravity",
  safetyRating: "A+",
  visitorReviews: [
    "Floating among the flowers with the aurora overhead was magical!",
    "The best place to unwind and learn.",
  ],
  averageCostPerDay: 3000,
  bookingStatus: "Available",
  popularActivities: ["Zero-gravity yoga", "Botanical studies"],
  seasonalVariations: "Auroras are most vibrant during solar maximum",
  accessibility: "Fully accessible for all visitor types",
  researchFacilities: "Advanced Botanical Research Labs",
  culturalSignificance: "A beacon of peace and scientific inquiry",
  historicalEvents: ["Founded by GEAL in 2185", "Opened to the public in 2190"],
};
