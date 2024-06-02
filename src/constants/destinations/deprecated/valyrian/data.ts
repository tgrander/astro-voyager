import type { NewDestination } from "@/server/db/helpers";
import { auroraArboretum } from "../aurora-arboretum";

const destinations = [
  {
    name: "Cascade Haven",
    slug: "cascade-haven",
    description:
      "Home to Valyrian's tallest waterfalls, these cascades drop from ancient, towering cliffs into crystal-clear lakes.",
    heroImage: "skywalker/destinations/cascade_haven",
    planet: {
      name: "Valyrian",
      slug: "valyrian",
      image: "",
    },
  },
  {
    name: "Skyward Isles",
    slug: "skyward-isles",
    description:
      "A group of floating islands that drift gently above the ocean, offering breathtaking views and unique wildlife.",
    heroImage: "skywalker/destinations/skyward_isles",
    planet: {
      name: "Valyrian",
      slug: "valyrian",
      image: "",
    },
  },
  {
    name: "Mystic Archway",
    slug: "mystic-archway",
    description:
      "This ancient stone archway is a portal to a serene, untouched valley surrounded by dense jungles and mystical aura.",
    heroImage: "skywalker/destinations/mystic_archway",
    planet: {
      name: "Valyrian",
      slug: "valyrian",
      image: "",
    },
  },
  {
    name: "Neptune's Mirror",
    slug: "neptunes-mirror",
    description:
      "An expansive lagoon surrounded by steep cliffs, with waters so clear they reflect the sky like a mirror.",
    heroImage: "skywalker/destinations/neptunes_mirror",
    planet: {
      name: "Valyrian",
      slug: "valyrian",
      image: "",
    },
  },
  {
    name: "Orbital Oasis",
    slug: "orbital-oasis",
    description:
      "A luxurious resort city that orbits around Valyrian, offering zero-gravity adventures and stellar panoramas.",
    heroImage: "skywalker/destinations/orbital_oasis",
    planet: {
      name: "Valyrian",
      slug: "valyrian",
      image: "",
    },
  },
];

export const data: NewDestination[] = destinations.map((dest) => ({
  ...auroraArboretum,
  ...dest,
}));
