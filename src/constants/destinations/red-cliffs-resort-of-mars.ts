import type { NewDestination } from "@/server/db/helpers";

export const redCliffsResortOfMars: NewDestination = {
  name: "Red Cliffs Resort of Mars",
  slug: "red-cliffs-resort-of-mars",
  description:
    "Luxury resort nestled on the edge of Mars’ Grand Canyon, with breathtaking views of the Martian landscape.",
  location: "Valles Marineris, Mars",
  coordinates: "14°S, 59°W",
  distanceFromEarth: "54.6 million km away",
  travelTime: "6 months",
  attractions: ["Cliffside villas", "Guided canyon tours", "Orbital skydiving"],
  amenities: [
    "Luxury spa",
    "Gourmet restaurants",
    "Private balconies with views",
  ],
  heroImage: "skywalker/destinations/resort-on-mars/ubysijowsnwv4lsbpyiy",
  imageUrls: [],
  climate: "Controlled indoor climate; harsh outside",
  gravity: "Low Martian Gravity",
  safetyRating: "A",
  visitorReviews: [
    "The view was literally out of this world!",
    "Skydiving into the canyon was exhilarating!",
  ],
  averageCostPerDay: 7000,
  bookingStatus: "Available",
  popularActivities: ["Extreme sports events", "Cultural festivals"],
  seasonalVariations: "Less visible due to constant resort climate control",
  accessibility:
    "Highly accessible with adjustments for low-gravity conditions",
  researchFacilities: "Geological Research Outpost",
  culturalSignificance: "Symbol of Martian settlement and luxury",
  historicalEvents: [
    "Founded as a miner's refuge in 2085",
    "Transformed into a resort in 2130",
  ],
  planet: {
    name: "Mars",
    image: "skywalker/planets/bazxdxubljac3u6oibrn",
  },
};
