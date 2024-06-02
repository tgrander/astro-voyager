import {
  Atom,
  Baby,
  Heart,
  LucideIcon,
  Microscope,
  Mountain,
  Palette,
  Star,
  TreePalm,
} from "lucide-react";

export type Experience = {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
};

export const experiences: Experience[] = [
  {
    value: "adventure",
    label: "Adventure",
    icon: Mountain,
    description:
      "Experience thrilling adventures such as hiking on alien terrains, skydiving on gas giants, and exploring uncharted territories.",
  },
  {
    value: "relaxation",
    label: "Relaxation",
    icon: TreePalm,
    description:
      "Enjoy relaxing activities like spa treatments in zero-gravity, leisurely space cruises, and serene retreats on distant moons.",
  },
  {
    value: "scientific-exploration",
    label: "Scientific Exploration",
    icon: Microscope,
    description:
      "Participate in scientific missions, explore alien biospheres, and contribute to groundbreaking research and discoveries.",
  },
  {
    value: "cultural-immersion",
    label: "Cultural Immersion",
    icon: Palette,
    description:
      "Immerse yourself in the rich cultures of alien civilizations, enjoy interstellar festivals, and experience diverse art and cuisine.",
  },
  {
    value: "luxury",
    label: "Luxury",
    icon: Star,
    description:
      "Indulge in luxurious space travels with high-end amenities, gourmet dining, and exclusive accommodations with stunning views.",
  },
  {
    value: "family-friendly",
    label: "Family-friendly",
    icon: Baby,
    description:
      "Enjoy family-oriented activities and destinations that cater to all ages, offering educational and entertaining experiences.",
  },
  {
    value: "romantic",
    label: "Romantic",
    icon: Heart,
    description:
      "Plan a romantic getaway in space with scenic views, intimate settings, and unique experiences perfect for couples.",
  },
  {
    value: "scientific-research",
    label: "Scientific Research",
    icon: Atom,
    description:
      "Engage in intensive scientific research projects, access state-of-the-art labs, and work with leading scientists across the galaxy.",
  },
];
