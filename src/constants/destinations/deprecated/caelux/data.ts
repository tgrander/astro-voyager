import type { NewDestination } from "@/server/db/helpers";
import { auroraArboretum } from "../aurora-arboretum";

const destinations = [
  {
    name: "Quantum Falls",
    slug: "quantum-falls",
    description:
      "A magnificent artificial waterfall where thousands of tons of water cascade over a quantum-generated cliff, glowing with energy-infused droplets.",
    heroImage: "skywalker/destinations/quantum_falls",
    planet: {
      name: "Caelux",
      slug: "caelux",
      image: "",
    },
  },
  {
    name: "Skyline Arboretum",
    slug: "skyline-arboretum",
    description:
      "Explore this massive sky-high garden that floats above the city, featuring exotic flora from across the galaxy, maintained by advanced climate control technologies.",
    heroImage: "skywalker/destinations/skyline_arboretum",
    planet: {
      name: "Caelux",
      slug: "caelux",
      image: "",
    },
  },
  {
    name: "Interstellar Bazaar",
    slug: "interstellar-bazaar",
    description:
      "A vibrant marketplace that never sleeps, filled with holographic stalls and neon lights, offering goods from every corner of the universe.",
    heroImage: "skywalker/destinations/neon_bazaar",
    planet: {
      name: "Caelux",
      slug: "caelux",
      image: "",
    },
  },
  {
    name: "Celestial Observatory",
    slug: "celestial-observatory",
    description:
      "Positioned on the highest peak of Caelux, this observatory offers unrivaled views of the cosmos, equipped with the most advanced telescopic technology.",
    heroImage: "skywalker/destinations/celestial_observatory",
    planet: {
      name: "Caelux",
      slug: "caelux",
      image: "",
    },
  },
  {
    name: "Echo Lagoons",
    slug: "echo-lagoons",
    description:
      "Secluded water bodies that emit luminescent glows and soothing sounds, known for their therapeutic properties and peaceful ambiance.",
    heroImage: "skywalker/destinations/echo_lagoons",
    planet: {
      name: "Caelux",
      slug: "caelux",
      image: "",
    },
  },
];

export const data: NewDestination[] = destinations.map((dest) => ({
  ...auroraArboretum,
  ...dest,
}));
