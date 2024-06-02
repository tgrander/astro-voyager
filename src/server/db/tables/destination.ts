import {
  index,
  integer,
  jsonb,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "../create-table";
import { sql } from "drizzle-orm";

interface Planet {
  slug: string;
  name: string;
  image: string;
}

export const destinations = createTable(
  "destinations",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 155 }).notNull().unique(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description").notNull(),
    planet: jsonb("planet").$type<Planet>().notNull(),
    distanceFromEarth: varchar("distance_from_earth", {
      length: 255,
    }).notNull(),
    travelTime: varchar("travel_time", { length: 100 }).notNull(),
    attractions: jsonb("attractions").notNull(),
    heroImage: text("hero_image"), // Cloudinary public ID
    imageUrls: jsonb("image_urls").$type<string[]>().notNull(),
    climate: varchar("climate", { length: 255 }),
    gravity: varchar("gravity", { length: 255 }).notNull(),
    safetyRating: varchar("safety_rating", { length: 50 }),
    visitorRating: text("visitor_ratings"),
    visitorReviews: jsonb("visitor_reviews"),
    averageCostPerDay: integer("average_cost_per_day").notNull(),
    popularActivities: jsonb("popular_activities"),
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
  (destinations) => ({
    destinationIndex: index("destination_idx").on(destinations.id),
  }),
);
