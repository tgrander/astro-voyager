import { sql } from "drizzle-orm";
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

export const destinations = createTable(
  "destinations",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 155 }).notNull().unique(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description").notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    coordinates: varchar("coordinates", { length: 100 }).notNull(),
    distanceFromEarth: varchar("distance_from_earth", {
      length: 255,
    }).notNull(),
    travelTime: varchar("travel_time", { length: 100 }).notNull(),
    attractions: jsonb("attractions").notNull(),
    amenities: jsonb("amenities").notNull(),
    heroImage: text("hero_image"), // Cloudinary public ID
    planetImage: text("planet_image"), // Cloudinary public ID
    imageUrls: jsonb("image_urls").notNull(),
    virtualTourUrl: varchar("virtual_tour_url", { length: 255 }),
    climate: varchar("climate", { length: 255 }),
    gravity: varchar("gravity", { length: 255 }).notNull(),
    safetyRating: varchar("safety_rating", { length: 50 }),
    visitorReviews: jsonb("visitor_reviews"),
    averageCostPerDay: integer("average_cost_per_day").notNull(),
    bookingStatus: varchar("booking_status", { length: 50 }).notNull(),
    popularActivities: jsonb("popular_activities"),
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
  (destinations) => ({
    destinationIndex: index("destination_idx").on(destinations.id),
  }),
);
