import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  decimal,
  index,
  jsonb,
  pgEnum,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "../create-table";

interface Moon {
  name: string;
  description: string;
}

interface AtmosphericComposition {
  oxygenLevel?: number | null;
  carbonDioxide?: number | null;
  nitrogen?: number | null;
  hydrogen?: number | null;
  methane?: number | null;
  helium?: number | null;
  traceGases?: number | null;
  waterVapor?: number | null;
}

export const celestialTypeEnum = pgEnum("celestial_type", [
  "Terrestrial Planet",
  "Gas Giant",
  "Ice Giant",
  "Dwarf Planet",
  "Moon",
  "Star",
  "Variable Star",
  "Nebula",
  "Quasar",
  "Black Hole",
  "Asteroid",
  "Comet",
  "Artificial", // Assuming this refers to artificial celestial bodies like space stations
] as const);

export const planetStatusEnum = pgEnum("planet_status", [
  "Open for Visits",
  "Open for Observation",
  "Research Only",
  "Restricted",
  "Closed",
] as const);

export const planetSpeciesEnum = pgEnum("planet_species", [
  "Alien",
  "Human",
  "Robotic",
  "Hybrid",
  "Unknown",
] as const);

export const planets = createTable(
  "planets",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 300 }).notNull(),
    description: text("description").notNull(),
    type: celestialTypeEnum("type").notNull(),
    species: planetSpeciesEnum("species").notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    distanceFromSun: text("distance_from_sun").notNull(),
    orbitalPeriod: decimal("orbital_period", {
      precision: 10,
      scale: 2,
    }),
    rotationPeriod: decimal("rotation_period", {
      precision: 10,
      scale: 2,
    }),
    diameter: bigint("diameter", { mode: "number" }).notNull(),
    climate: varchar("climate", { length: 300 }).notNull(),
    gravity: decimal("gravity", { precision: 5, scale: 2 }),
    moons: jsonb("moons").$type<Moon[]>().notNull(),
    ringSystem: boolean("ring_system").notNull(),
    heroImage: text("hero_image"), // Cloudinary public ID
    imageUrls: jsonb("image_urls").$type<string[]>().notNull(),
    discoveryDate: text("discovery_date").notNull(),
    discoveredBy: varchar("discovered_by", { length: 255 }).notNull(),
    notableFeatures: text("notable_features").notNull(),
    habitability: varchar("habitability", { length: 300 }).notNull(),
    atmosphere: jsonb("atmosphere").$type<AtmosphericComposition>().notNull(),
    status: planetStatusEnum("status").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (planets) => ({
    planetsIndex: index("planets_idx").on(planets.id),
  }),
);
