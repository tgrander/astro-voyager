"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinations = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var pg_core_1 = require("drizzle-orm/pg-core");
var create_table_1 = require("@/server/db/create-table");
exports.destinations = (0, create_table_1.createTable)("destinations", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    description: (0, pg_core_1.text)("description").notNull(),
    location: (0, pg_core_1.varchar)("location", { length: 255 }).notNull(),
    coordinates: (0, pg_core_1.varchar)("coordinates", { length: 100 }).notNull(),
    distanceFromEarth: (0, pg_core_1.bigint)("distance_from_earth", {
        mode: "number",
    }).notNull(),
    travelTime: (0, pg_core_1.varchar)("travel_time", { length: 100 }).notNull(),
    attractions: (0, pg_core_1.jsonb)("attractions").notNull(),
    amenities: (0, pg_core_1.jsonb)("amenities").notNull(),
    imageUrls: (0, pg_core_1.jsonb)("image_urls").notNull(),
    virtualTourUrl: (0, pg_core_1.varchar)("virtual_tour_url", { length: 255 }),
    climate: (0, pg_core_1.varchar)("climate", { length: 255 }),
    gravity: (0, pg_core_1.numeric)("gravity").notNull(),
    safetyRating: (0, pg_core_1.varchar)("safety_rating", { length: 50 }),
    visitorReviews: (0, pg_core_1.jsonb)("visitor_reviews"),
    averageCostPerDay: (0, pg_core_1.numeric)("average_cost_per_day", {
        precision: 10,
        scale: 2,
    }),
    bookingStatus: (0, pg_core_1.varchar)("booking_status", { length: 50 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"]))))
        .notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"]))))
        .notNull(),
    popularActivities: (0, pg_core_1.jsonb)("popular_activities"),
    seasonalVariations: (0, pg_core_1.text)("seasonal_variations"),
    accessibility: (0, pg_core_1.text)("accessibility"),
    researchFacilities: (0, pg_core_1.text)("research_facilities"),
    culturalSignificance: (0, pg_core_1.text)("cultural_significance"),
    historicalEvents: (0, pg_core_1.jsonb)("historical_events"),
}, function (destinations) { return ({
    destinationIndex: (0, pg_core_1.index)("destination_idx").on(destinations.id),
}); });
var templateObject_1, templateObject_2;
// If there is a specific way to handle relations or additional functionality, it should be defined here.
