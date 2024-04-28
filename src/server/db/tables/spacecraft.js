"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacecrafts = exports.spacecraftStatusEnum = exports.spacecraftTypesEnum = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var pg_core_1 = require("drizzle-orm/pg-core");
var create_table_1 = require("@/server/db/create-table");
exports.spacecraftTypesEnum = (0, pg_core_1.pgEnum)("spacecraft_type", [
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
]);
exports.spacecraftStatusEnum = (0, pg_core_1.pgEnum)("spacecraft_status", [
    "Available",
    "Maintenance",
    "Booked",
    "Retired",
]);
exports.spacecrafts = (0, create_table_1.createTable)("spacecrafts", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }).notNull(),
    type: (0, exports.spacecraftTypesEnum)("type").notNull(),
    destinations: (0, pg_core_1.text)("destinations")
        .array()
        .notNull()
        .$default(function () { return []; }), // array of destination IDs
    capacity: (0, pg_core_1.bigint)("capacity", { mode: "number" }).notNull(),
    pricePerDay: (0, pg_core_1.integer)("price_per_day").notNull(),
    reviewScore: (0, pg_core_1.real)("review_score"),
    imageUrl: (0, pg_core_1.text)("image_url"),
    heroImage: (0, pg_core_1.text)("hero_image"),
    virtualTourUrl: (0, pg_core_1.text)("virtual_tour_url"),
    dimensions: (0, pg_core_1.json)("dimensions")
        .$type()
        .notNull(),
    crewDetails: (0, pg_core_1.json)("crew_details")
        .$type()
        .notNull(),
    amenities: (0, pg_core_1.json)("amenities")
        .$type()
        .notNull(),
    operationalHistory: (0, pg_core_1.text)("operational_history"),
    technologySpecs: (0, pg_core_1.json)("technology_specs")
        .$type()
        .notNull(),
    onboardActivities: (0, pg_core_1.text)("onboard_activities"),
    environmentalImpact: (0, pg_core_1.varchar)("environmental_impact", { length: 500 }),
    status: (0, exports.spacecraftStatusEnum)("status").notNull(),
    hostId: (0, pg_core_1.varchar)("host_id", { length: 36 }).notNull(),
    captainId: (0, pg_core_1.varchar)("captain_id", { length: 36 }),
    popularActivities: (0, pg_core_1.jsonb)("popular_activities").notNull(),
    seasonalVariations: (0, pg_core_1.text)("seasonal_variations"),
    accessibility: (0, pg_core_1.text)("accessibility"),
    researchFacilities: (0, pg_core_1.text)("research_facilities"),
    culturalSignificance: (0, pg_core_1.text)("cultural_significance"),
    historicalEvents: (0, pg_core_1.jsonb)("historical_events"),
    // Date fields
    createdAt: (0, pg_core_1.timestamp)("created_at")
        .default((0, drizzle_orm_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"]))))
        .notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
        .default((0, drizzle_orm_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"]))))
        .notNull(),
}, function (spacecrafts) { return ({
    spacecraftIndex: (0, pg_core_1.index)("spacecraft_idx").on(spacecrafts.id),
}); });
var templateObject_1, templateObject_2;
