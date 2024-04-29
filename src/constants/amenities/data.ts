import { z } from "zod";

const amenitySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
});

export type Amenity = z.infer<typeof amenitySchema>;

export const amenitiesData: Amenity[] = [
  {
    id: 1,
    name: "Acid-resistant coatings",
    description:
      "Protects spacecraft surfaces from harsh chemical environments.",
    category: "standard",
  },
  {
    id: 2,
    name: "Solar energy propulsion",
    description:
      "Provides efficient and sustainable propulsion using solar energy.",
    category: "standard",
  },
  {
    id: 3,
    name: "Cosmic radiation shielding",
    description:
      "Shields occupants from harmful cosmic rays and solar radiation.",
    category: "standard",
  },
  {
    id: 4,
    name: "All-terrain capability",
    description:
      "Enables navigation across diverse planetary surfaces and terrains.",
    category: "standard",
  },
  {
    id: 5,
    name: "Controlled environment agriculture modules",
    description:
      "Supports sustainable growth of crops in controlled conditions.",
    category: "standard",
  },
  {
    id: 6,
    name: "High-definition navigation cameras",
    description:
      "Offers precise and high-resolution imaging for navigation and exploration.",
    category: "standard",
  },
  {
    id: 7,
    name: "Storm navigation system",
    description:
      "Advanced systems for navigating through severe planetary storms.",
    category: "standard",
  },
  {
    id: 8,
    name: "Emergency shelters",
    description:
      "Provides safe havens in case of environmental hazards or failures.",
    category: "standard",
  },
  {
    id: 9,
    name: "Warp drive",
    description: "Facilitates faster-than-light travel between star systems.",
    category: "standard",
  },
  {
    id: 10,
    name: "Quantum entanglement communication",
    description:
      "Enables instant communication across infinite distances without delay.",
    category: "standard",
  },
  {
    id: 11,
    name: "Geothermal energy harnessing",
    description: "Utilizes planetary heat sources for energy production.",
    category: "standard",
  },
  {
    id: 12,
    name: "Zero-gravity art studios",
    description:
      "Creative spaces designed for art creation in zero-gravity environments.",
    category: "premium",
  },
  {
    id: 13,
    name: "Gourmet space cuisine",
    description:
      "Offers a high-end dining experience with dishes prepared by renowned space chefs.",
    category: "premium",
  },
  {
    id: 14,
    name: "Floating gardens",
    description:
      "Beautifully designed aerial gardens that use minimal gravity to float.",
    category: "premium",
  },
  {
    id: 15,
    name: "Panoramic observatory for sky viewing",
    description:
      "Provides expansive views of the cosmos through large-scale observatories.",
    category: "premium",
  },
  {
    id: 16,
    name: "Luxury passenger cabin with viewing windows",
    description:
      "Spacious and luxurious cabins equipped with large windows for spectacular views.",
    category: "premium",
  },
  {
    id: 17,
    name: "Observatory dome",
    description:
      "A dome-shaped observatory offering 360-degree views of the surrounding space.",
    category: "premium",
  },
  {
    id: 18,
    name: "AI-guided educational tours",
    description:
      "Interactive tours led by advanced AI, offering educational content about the surroundings.",
    category: "premium",
  },
  {
    id: 19,
    name: "Zero-gravity gym",
    description:
      "A gym equipped to handle physical fitness routines in a zero-gravity environment.",
    category: "premium",
  },
  {
    id: 20,
    name: "Luxury survival suits",
    description:
      "High-tech suits designed for comfort and survival in harsh space conditions.",
    category: "premium",
  },
  {
    id: 21,
    name: "Multi-species habitation modules",
    description:
      "Living modules designed to accommodate various alien species comfortably.",
    category: "premium",
  },
  {
    id: 22,
    name: "Holodeck",
    description:
      "An advanced virtual reality space where users can simulate virtually any experience.",
    category: "premium",
  },
];
