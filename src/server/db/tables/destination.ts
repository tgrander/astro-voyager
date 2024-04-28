import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  jsonb,
  numeric,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { createTable } from "@/server/db/create-table";

export const destinations = createTable(
  "destinations",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description").notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    coordinates: varchar("coordinates", { length: 100 }).notNull(),
    distanceFromEarth: bigint("distance_from_earth", {
      mode: "number",
    }).notNull(),
    travelTime: varchar("travel_time", { length: 100 }).notNull(),
    attractions: jsonb("attractions").notNull(),
    amenities: jsonb("amenities").notNull(),
    imageUrls: jsonb("image_urls").notNull(),
    virtualTourUrl: varchar("virtual_tour_url", { length: 255 }),
    climate: varchar("climate", { length: 255 }),
    gravity: numeric("gravity").notNull(),
    safetyRating: varchar("safety_rating", { length: 50 }),
    visitorReviews: jsonb("visitor_reviews"),
    averageCostPerDay: numeric("average_cost_per_day", {
      precision: 10,
      scale: 2,
    }),
    bookingStatus: varchar("booking_status", { length: 50 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    popularActivities: jsonb("popular_activities"),
    seasonalVariations: text("seasonal_variations"),
    accessibility: text("accessibility"),
    researchFacilities: text("research_facilities"),
    culturalSignificance: text("cultural_significance"),
    historicalEvents: jsonb("historical_events"),
  },
  (destinations) => ({
    destinationIndex: index("destination_idx").on(destinations.id),
  }),
);

// If there is a specific way to handle relations or additional functionality, it should be defined here.
