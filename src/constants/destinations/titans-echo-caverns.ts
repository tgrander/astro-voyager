import type { NewDestination } from "@/server/db/helpers";

export const titansEchoCaverns: NewDestination = {
  name: "Titan's Echo Caverns",
  slug: "titans-echo-caverns",
  description:
    "An extensive network of subterranean caves filled with liquid methane and ethane, echoing with the sounds of distant Titanian thunderstorms.",
  location: "Titan, Saturn's Moon",
  coordinates: "15°S, 75°E",
  distanceFromEarth: "1.2 billion kilometers away",
  travelTime: "7 years",
  attractions: [
    "Submarine tours",
    "Sound meditation retreats",
    "Bio-luminescent wildlife tours",
  ],
  amenities: [
    "Submarine rental",
    "Meditation retreat centers",
    "Guided wildlife tours",
  ],
  heroImage: "skywalker/destinations/titans-caverns/hbf0jkdapghq0xewx9lj",
  imageUrls: [],
  climate: "Subterranean liquid methane",
  gravity: "Variable Gravity Caves",
  safetyRating: "A",
  visitorRating: "4.6",
  visitorReviews: [
    "The submarine tour was like visiting another world!",
    "A profound experience during the sound retreat.",
  ],
  averageCostPerDay: 4500,
  bookingStatus: "Available",
  popularActivities: ["Underwater exploration", "Acoustic therapy sessions"],
  seasonalVariations: "Thunderstorms peak during Titan’s equinox",
  accessibility: "Adapted equipment for all mobility needs",
  researchFacilities: "Titan Subterranean Research Station",
  culturalSignificance:
    "Protected as a heritage site under the Titan Heritage Foundation",
  historicalEvents: [
    "Discovery by Calista Zheng in 2094",
    "Designation as a protected site in 2101",
  ],
  planet: {
    name: "Saturn",
    slug: "saturn",
    image: "skywalker/planets/ofwlgtac1sanltemy0db",
  },
};
