import {
  Building2,
  Cloud,
  Eclipse,
  Flower,
  History,
  LucideIcon,
  Moon,
  Mountain,
  Orbit,
  Pickaxe,
  Route,
  Snowflake,
  Sparkles,
  Telescope,
  Torus,
} from "lucide-react";

export type Destination = {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
};

export const destinations: Destination[] = [
  {
    value: "kepler-186f",
    label: "Kepler-186f",
    icon: Eclipse,
    description:
      "Known for its Earth-like qualities, this exoplanet offers lush landscapes, vibrant oceans, and diverse ecosystems.",
  },
  {
    value: "proxima-centauri-b",
    label: "Proxima Centauri b",
    icon: Mountain,
    description:
      "Located in the habitable zone of Proxima Centauri, this planet features stunning, rugged terrain with towering mountains and deep valleys.",
  },
  {
    value: "jupiters-cloud-cities",
    label: "Jupiter’s Cloud Cities",
    icon: Cloud,
    description:
      "Floating habitats in the upper atmosphere of Jupiter, where travelers can experience the beauty of swirling gas clouds and lightning storms.",
  },
  {
    value: "saturns-rings",
    label: "Saturn’s Rings",
    icon: Torus,
    description:
      "Stay in luxury hotels built into the rings of Saturn, offering breathtaking views of the planet and its moons.",
  },
  {
    value: "lunar-base-alpha",
    label: "Lunar Base Alpha",
    icon: Moon,
    description:
      "A well-established colony on Earth’s Moon, featuring research labs, residential areas, and tourist attractions.",
  },
  {
    value: "europa-ice-caves",
    label: "Europa Ice Caves",
    icon: Snowflake,
    description:
      "Beneath the icy surface of Jupiter’s moon Europa lies a network of caves filled with liquid water.",
  },
  {
    value: "alpha-centauri-prime",
    label: "Alpha Centauri Prime",
    icon: Building2,
    description:
      "A bustling metropolis on a planet orbiting Alpha Centauri, known for its rich cultural diversity and advanced technology.",
  },
  {
    value: "vega-station",
    label: "Vega Station",
    icon: Orbit,
    description:
      "A large space station orbiting the star Vega, serving as a major trading and cultural hub.",
  },
  {
    value: "ceres-mining-colony",
    label: "Ceres Mining Colony",
    icon: Pickaxe,
    description:
      "Located on the dwarf planet Ceres within the asteroid belt, this colony offers tours of its mining operations and educational exhibits.",
  },
  {
    value: "pallas-observatory",
    label: "Pallas Observatory",
    icon: Telescope,
    description:
      "An astronomical observatory on the asteroid Pallas, providing unparalleled views of the stars and galaxies.",
  },
  {
    value: "gliese-581g",
    label: "Gliese 581g",
    icon: Flower,
    description:
      "A planet with a unique atmosphere and stunning natural formations, including crystal forests and bioluminescent flora.",
  },
  {
    value: "the-horsehead-nebula",
    label: "The Horsehead Nebula",
    icon: Sparkles,
    description:
      "A space tourism destination where travelers can witness the majestic beauty of the Horsehead Nebula up close.",
  },
  {
    value: "mars-historical-park",
    label: "Mars Historical Park",
    icon: History,
    description:
      "Experience the history of human exploration on Mars with tours of the original landing sites and interactive museums.",
  },
  {
    value: "the-milky-way-heritage-trail",
    label: "The Milky Way Heritage Trail",
    icon: Route,
    description:
      "A guided tour through significant locations in the galaxy that played pivotal roles in the history of space exploration.",
  },
];
