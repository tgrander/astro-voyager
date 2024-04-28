import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  integer,
  json,
  jsonb,
  pgEnum,
  real,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "../create-table";

export const spacecraftTypesEnum = pgEnum("spacecraft_type", [
  "Long-range Cruiser", // For Stellar Explorer and similar vessels
  "Rugged Explorer", // For Io SandRider and similar rugged terrain vehicles
  "Mining Shuttle", // For Asteroid Nomad and similar mining operations
  "Explorer", // General category for exploration oriented spacecraft
  "Cloud Cruiser", // For Neptune Nimbus and Venus Cloud Cruiser
  "Ice Explorer", // For Enceladus IceCrafter and similar cold environment vehicles
  "Space Station", // For Orbit Haven and stationary orbiting platforms
  "FTL Cruiser", // For Galactic Pioneer and fast-travel interstellar missions
  "Aerostat", // For aerostatic vehicles like Venusian Serenity
  "Quantum Yacht", // For Quantum Leap and ultra-luxury, high-tech space yachts
  "Heat-resistant Shuttle", // For Mercury Beachcomber designed for extreme heat environments
  "High-altitude Aircraft", // For Venus Cloud Cruiser and similar high-altitude vehicles
  "Agricultural and Scientific Research Vessel", // For Nebula Harvester
  "Luxury Rover", // For Mars Cliffhanger, a luxury exploration vehicle on Mars
  "FTL Starship", // For Interstellar Gateway, capable of faster-than-light travel
  "Amphibious Vehicle", // For Titan Submersible and similar water/land capable vehicles
  "Orbital Station Transfer", // For Aurora Orbiter and other spacecraft specializing in orbital transfers
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
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    type: spacecraftTypesEnum("type").notNull(),
    destinations: text("destinations")
      .array()
      .notNull()
      .$default(() => []), // array of destination IDs
    capacity: bigint("capacity", { mode: "number" }).notNull(),
    pricePerDay: integer("price_per_day").notNull(),
    reviewScore: real("review_score"),
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
    popularActivities: jsonb("popular_activities").notNull(),
    seasonalVariations: text("seasonal_variations"),
    accessibility: text("accessibility"),
    researchFacilities: text("research_facilities"),
    culturalSignificance: text("cultural_significance"),
    historicalEvents: jsonb("historical_events"),

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
