import type { NewDestination } from "@/server/db/helpers";
import { auroraArboretum } from "../aurora-arboretum";

const destinations = [
  {
    name: "Stormwatch Spire",
    slug: "stormwatch-spire",
    description:
      "A towering observatory offering panoramic views of Seraphis' legendary electrical storms, providing both thrill and unparalleled beauty.",
    heroImage: "skywalker/destinations/stormwatch_spire",
    planet: {
      name: "Seraphis",
      slug: "seraphis",
      image: "",
    },
  },
  {
    name: "Nimbus Marina",
    slug: "nimbus-marina",
    description:
      "Floating above the cloud oceans, Nimbus Marina is a serene destination where visitors can sail on cloud vessels powered by atmospheric currents.",
    heroImage: "skywalker/destinations/nimbus_marina",
    planet: {
      name: "Seraphis",
      slug: "seraphis",
      image: "",
    },
  },
  {
    name: "The Arcadium",
    slug: "the-arcadium",
    description:
      "A sprawling entertainment complex where technology and art fuse to create experiences that stimulate all senses, under the glow of Seraphis' auroras.",
    heroImage: "skywalker/destinations/the_arcadium",
    planet: {
      name: "Seraphis",
      slug: "seraphis",
      image: "",
    },
  },
  {
    name: "Celestial Gardens",
    slug: "celestial-gardens",
    description:
      "These exotic botanical gardens feature bioluminescent plants and floating floral arrangements, making it a place of peace and natural wonder.",
    heroImage: "skywalker/destinations/celestial_gardens",
    planet: {
      name: "Seraphis",
      slug: "seraphis",
      image: "",
    },
  },
  {
    name: "Harmony Heights",
    slug: "harmony-heights",
    description:
      "Located on one of the highest platforms, Harmony Heights is a luxurious retreat that offers tranquility and stunning views across the turbulent clouds below.",
    heroImage: "skywalker/destinations/harmony_heights",
    planet: {
      name: "Seraphis",
      slug: "seraphis",
      image: "",
    },
  },
];

export const data: NewDestination[] = destinations.map((dest) => ({
  ...auroraArboretum,
  ...dest,
}));
