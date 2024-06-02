import type { NewDestination } from "@/server/db/helpers";

export const celestialFallsOfEnceladus: NewDestination = {
  name: "Celestial Falls of Enceladus",
  slug: "celestial-falls-of-enceladus",
  description:
    "Spectacular geysers that shoot organic material hundreds of miles above the surface, creating temporary, shimmering ice rings around the moon.",
  distanceFromEarth: "1.5 billion kilometers away",
  travelTime: "7 years",
  attractions: [
    "Ice sculpting workshops",
    "Geyser surfing",
    "Frozen lakes fishing",
  ],
  heroImage: "skywalker/destinations/exjdxv9m8bi7jwwegkye",
  planet: {
    name: "Saturn",
    slug: "saturn",
    image: "skywalker/planets/ofwlgtac1sanltemy0db",
  },
  imageUrls: [],
  climate: "Sub-zero, icy",
  gravity: "Near-weightless Conditions",
  safetyRating: "A",
  visitorRating: "4.9",
  visitorReviews: [
    "Geyser surfing was like nothing I've ever done!",
    "The bioluminescent fishing was absolutely magical.",
  ],
  averageCostPerDay: 2000,
  popularActivities: [
    "Art and ice festivals",
    "Educational tours on geothermal activity",
  ],
  researchFacilities: "Enceladus Life Science Lab",
  culturalSignificance: "Hosts the annual Galactic Ice Art Festival",
  historicalEvents: [
    "First identified in 2077",
    "Converted to a tourist destination in 2115",
  ],
};
