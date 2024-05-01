import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  decimal,
  index,
  jsonb,
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

export const planets = createTable(
  "planets",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 300 }).notNull(),
    description: text("description").notNull(),
    type: varchar("type", { length: 100 }).notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    distanceFromSun: bigint("distance_from_sun", { mode: "number" }).notNull(),
    orbitalPeriod: decimal("orbital_period", {
      precision: 10,
      scale: 2,
    }),
    rotationPeriod: decimal("rotation_period", {
      precision: 10,
      scale: 2,
    }),
    diameter: bigint("diameter", { mode: "number" }).notNull(),
    climate: varchar("climate", { length: 100 }).notNull(),
    gravity: decimal("gravity", { precision: 5, scale: 2 }),
    moons: jsonb("moons").$type<Moon[]>().notNull(),
    ringSystem: boolean("ring_system").notNull(),
    heroImage: text("hero_image"), // Cloudinary public ID
    imageUrls: jsonb("image_urls").$type<string[]>().notNull(),
    discoveryDate: text("discovery_date").notNull(),
    discoveredBy: varchar("discovered_by", { length: 255 }).notNull(),
    notableFeatures: text("notable_features").notNull(),
    habitability: varchar("habitability", { length: 100 }).notNull(),
    atmosphere: jsonb("atmosphere").$type<AtmosphericComposition>().notNull(),
    status: varchar("status", { length: 100 }).notNull(),
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
