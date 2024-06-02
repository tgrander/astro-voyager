import type { NewDestination } from "@/server/db/helpers";
import { auroraArboretum } from "../aurora-arboretum";

const destinations = [
  {
    name: "Sapphire Shores",
    slug: "sapphire-shores",
    description:
      "Sapphire Shores is a breathtaking beach with crystal-clear blue waters and sparkling sand that glimmers under the twin suns, perfect for relaxation and water sports.",
    heroImage: "skywalker/destinations/sapphire_shores",
    planet: {
      name: "Aquarion",
      slug: "aquarion",
      image: "",
    },
  },
  {
    name: "Neptune's Haven",
    slug: "neptunes-haven",
    description:
      "This unique amphibious city, built both above and below the water, features underwater domes and floating platforms, offering a harmonious blend of aquatic and terrestrial lifestyles.",
    heroImage: "skywalker/destinations/neptunes_haven",
    planet: {
      name: "Aquarion",
      slug: "aquarion",
      image: "",
    },
  },
  {
    name: "Mystic Falls",
    slug: "mystic-falls",
    description:
      "Located in a secluded part of Aquarion, Mystic Falls features waterfalls that seem to float before cascading into a luminous pool, surrounded by lush, exotic flora.",
    heroImage: "skywalker/destinations/mystic_falls",
    planet: {
      name: "Aquarion",
      slug: "aquarion",
      image: "",
    },
  },
  {
    name: "Coral Labyrinths",
    slug: "coral-labyrinths",
    description:
      "Explore the Coral Labyrinths, a natural underwater maze teeming with colorful coral formations and vibrant marine life, ideal for diving and adventure.",
    heroImage: "skywalker/destinations/coral_labyrinths",
    planet: {
      name: "Aquarion",
      slug: "aquarion",
      image: "",
    },
  },
];

const imageUrls = [
  "skywalker/destinations/saraphis/cards/yzicewmfz9p3pah07hhx",
  "skywalker/destinations/saraphis/cards/f2z25wuoyql91jbaimza",
  "skywalker/destinations/saraphis/cards/lmxt3vocwtio8uaohieb",
  "skywalker/destinations/saraphis/cards/rulotc6tkp2ow5wgpkbb",
];

export const data: NewDestination[] = destinations
  .map((dest) => ({
    ...auroraArboretum,
    ...dest,
  }))
  .map((d) => ({
    ...d,
    imageUrls,
  }));
