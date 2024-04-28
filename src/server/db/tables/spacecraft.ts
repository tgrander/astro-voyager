import { relations, sql } from "drizzle-orm";
import {
  bigint,
  decimal,
  index,
  json,
  pgEnum,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "@/server/db/create-table";

export const spacecraftTypesEnum = pgEnum("spacecraft_type", [
  "Shuttle",
  "Luxury Cruiser",
  "Economy Shuttle",
  "Exploration Vessel",
] as const);

export const spacecraftStatusEnum = pgEnum("spacecraft_status", [
  "Available",
  "Maintenance",
  "Booked",
  "Retired",
] as const);

export const spacecrafts = createTable(
  "spacecrafts",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    type: spacecraftTypesEnum("type").notNull(),
    destinations: text("destinations")
      .array()
      .notNull()
      .$default(() => []), // array of destination IDs
    capacity: bigint("capacity", { mode: "number" }).notNull(),
    pricePerDay: decimal("price_per_day", {
      precision: 10,
      scale: 2,
    }).notNull(),
    reviewScore: decimal("review_score", { precision: 3, scale: 2 }),
    imageUrl: text("image_url"),
    heroImage: text("hero_image"),
    virtualTourUrl: text("virtual_tour_url"),
    dimensions: json("dimensions")
      .$type<{
        length: number;
        width: number;
        height: number;
        weight: number;
      }>()
      .notNull(),
    crewDetails: json("crew_details")
      .$type<{
        captain: string;
        officers: string[];
      }>()
      .notNull(),
    amenities: json("amenities")
      .$type<{
        standard: string[];
        premium: string[];
      }>()
      .notNull(),
    operationalHistory: text("operational_history"),
    technologySpecs: json("technology_specs")
      .$type<{
        propulsion: string;
        navigation: string;
        specialFeatures: string[];
      }>()
      .notNull(),
    onboardActivities: text("onboard_activities"),
    environmentalImpact: varchar("environmental_impact", { length: 500 }),
    status: spacecraftStatusEnum("status").notNull(),
    hostId: varchar("host_id", { length: 36 }).notNull(),
    captainId: varchar("captain_id", { length: 36 }),
    // Date fields
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (spacecrafts) => ({
    spacecraftIndex: index("spacecraft_idx").on(spacecrafts.id),
  }),
);
