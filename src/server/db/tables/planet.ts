import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  decimal,
  index,
  jsonb,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "../create-table";

interface Moon {
  name: string;
  diameter: number;
}

interface AtmosphericComposition {
  component: string;
  percentage: number;
}

export const planets = createTable(
  "planets",
  {
    id: uuid("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 300 }).notNull(),
    description: text("description").notNull(),
    type: varchar("type", { length: 100 }).notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    distanceFromSun: text("distance_from_sun").notNull(),
    orbitalPeriod: decimal("orbital_period", {
      precision: 10,
      scale: 2,
    }).notNull(),
    rotationPeriod: decimal("rotation_period", {
      precision: 10,
      scale: 2,
    }).notNull(),
    diameter: text("diameter").notNull(),
    climate: varchar("climate", { length: 100 }).notNull(),
    gravity: decimal("gravity", { precision: 5, scale: 2 }).notNull(),
    moons: jsonb("moons").$type<Moon[]>().notNull(),
    ringSystem: boolean("ring_system").notNull(),
    atmosphere: jsonb("atmosphere").$type<AtmosphericComposition[]>().notNull(),
    imageUrls: jsonb("image_urls").$type<string[]>().notNull(),
    discoveryDate: date("discovery_date").notNull(),
    discoveredBy: varchar("discovered_by", { length: 255 }).notNull(),
    notableFeatures: text("notable_features").notNull(),
    habitability: varchar("habitability", { length: 100 }).notNull(),
    status: varchar("status", { length: 100 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (planets) => ({
    planetsIndex: index("planets_idx").on(planets.id),
  }),
);
