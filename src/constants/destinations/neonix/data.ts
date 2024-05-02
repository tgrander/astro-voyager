import type { NewDestination } from "@/server/db/helpers";
import { auroraArboretum } from "../aurora-arboretum";

const destinations = [
  {
    name: "The Grid",
    slug: "the-grid",
    description:
      "The central neural network hub of Neonix, where data streams visualize the pulse of the entire planet. The Grid is both a tourist attraction and a sanctuary for tech priests.",
    heroImage: "skywalker/destinations/the_grid",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
  {
    name: "Vice District",
    slug: "vice-district",
    description:
      "The neon-soaked Vice District is the epicenter of adult entertainment on Neonix, where the night never ends and the pleasures are as artificial as they are exhilarating. Known for its luxurious pleasure dens and immersive VR experiences that push the boundaries of fantasy and reality.",
    heroImage: "skywalker/destinations/vice_district",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
  {
    name: "Neon Bazaar",
    slug: "neon-bazaar",
    description:
      "A sprawling marketplace known for its dizzying array of cybernetic mods and tech gadgets, frequented by hackers, mercenaries, and thrill-seekers.",
    heroImage: "skywalker/destinations/neon_bazaar",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
  {
    name: "Android Alley",
    slug: "android-alley",
    description:
      "A notorious backstreet in Neonix where androids outnumber humans, known for its underground fight clubs and neon-soaked bars.",
    heroImage: "skywalker/destinations/android_alley",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
  {
    name: "Echo Plaza",
    slug: "echo-plaza",
    description:
      "Echo Plaza is the cultural heart of Neonix, featuring holographic art installations and live performances that blend human and android talents.",
    heroImage: "skywalker/destinations/echo_plaza",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
  {
    name: "Synthetix Tower",
    slug: "synthetix-tower",
    description:
      "The towering headquarters of Synthetix, the corporation that founded Neonix. It's a monument to corporate power and a frequent target for rebels.",
    heroImage: "skywalker/destinations/synthetix_tower",
    planet: {
      name: "Neonix",
      slug: "neonix",
      image: "",
    },
  },
];

export const data: NewDestination[] = destinations.map((dest) => ({
  ...auroraArboretum,
  ...dest,
}));
