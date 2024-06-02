import type { NewDestination } from "@/server/db/helpers";

export const novaPolarisStation: NewDestination = {
  name: "Nova Polaris Station",
  slug: "nova-polaris-station",
  description:
    "A dazzling space station orbiting the North Star, serving as a navigational hub for deep space explorers. Known for its stunning views of the Milky Way and rich cultural heritage.",
  location: "Orbit around Polaris",
  coordinates: "0°0'N, 0°0'E",
  distanceFromEarth: "4,500 light-years away",
  travelTime: "6 months",
  attractions: [
    "Zero-gravity dance halls",
    "Museum of cosmic navigation",
    "Star-mapping observatories",
  ],
  amenities: [
    "Exotic restaurants",
    "Luxury accommodation pods",
    "Daily space tours",
  ],
  heroImage: "skywalker/destinations/nova polaris/otfgm8uqmgkgoggouiyx",
  imageUrls: [],
  climate: "Controlled space environment",
  gravity: "Artificial Gravity Hubs",
  safetyRating: "A+",
  visitorRating: "4.7",
  visitorReviews: [
    "An unforgettable journey!",
    "The heart of the galaxy beats strongest here.",
  ],
  averageCostPerDay: 5000,
  bookingStatus: "Available",
  popularActivities: [
    "Astrophotography sessions",
    "Celestial navigation courses",
  ],
  seasonalVariations: "Special events during galactic alignments",
  accessibility: "Facilities for all species and mobility levels",
  researchFacilities: "Advanced astro-labs",
  culturalSignificance: "Site of the Polaris Peace Accords",
  historicalEvents: [
    "First manned mission to Andromeda launched",
    "Terran-Plutonian disputes resolved",
  ],
  planet: {
    name: "Polaris",
    slug: "polaris",
    image: "skywalker/planets/oqlfjlw3dyqhx55jr1xw",
  },
};
