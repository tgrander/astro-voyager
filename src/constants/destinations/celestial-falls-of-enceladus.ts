import type { NewDestination } from "@/server/db/helpers";

export const celestialFallsOfEnceladus: NewDestination = {
  name: "Celestial Falls of Enceladus",
  description:
    "Spectacular geysers that shoot organic material hundreds of miles above the surface, creating temporary, shimmering ice rings around the moon.",
  location: "Enceladus, Saturn's Moon",
  coordinates: "South Polar Region",
  distanceFromEarth: 1483000000,
  travelTime: "7 years",
  attractions: [
    "Ice sculpting workshops",
    "Geyser surfing",
    "Frozen lakes fishing",
  ],
  amenities: [
    "Art studios",
    "Surf equipment rental",
    "Bioluminescent fish stocked lakes",
  ],
  imageUrls: ["https://example.com/images/celestial_falls_enceladus.jpg"],
  virtualTourUrl: "https://example.com/virtual_tours/celestial_falls_enceladus",
  climate: "Sub-zero, icy",
  gravity: "0.113",
  safetyRating: "A",
  visitorReviews: [
    "Geyser surfing was like nothing I've ever done!",
    "The bioluminescent fishing was absolutely magical.",
  ],
  averageCostPerDay: 2000,
  bookingStatus: "Available",
  popularActivities: [
    "Art and ice festivals",
    "Educational tours on geothermal activity",
  ],
  seasonalVariations:
    "Geysers are most active during Saturn’s closest approach to the sun",
  accessibility: "Comprehensive access throughout the resort",
  researchFacilities: "Enceladus Life Science Lab",
  culturalSignificance: "Hosts the annual Galactic Ice Art Festival",
  historicalEvents: [
    "First identified in 2077",
    "Converted to a tourist destination in 2115",
  ],
};
