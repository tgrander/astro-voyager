DO $$ BEGIN
 CREATE TYPE "spacecraft_status" AS ENUM('Available', 'Maintenance', 'Booked', 'Retired');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "spacecraft_type" AS ENUM('Long-range Cruiser', 'Rugged Explorer', 'Mining Shuttle', 'Explorer', 'Cloud Cruiser', 'Ice Explorer', 'Space Station', 'FTL Cruiser', 'Aerostat', 'Quantum Yacht', 'Heat-resistant Shuttle', 'High-altitude Aircraft', 'Agricultural and Scientific Research Vessel', 'Luxury Rover', 'FTL Starship', 'Amphibious Vehicle', 'Orbital Station Transfer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "celestial_type" AS ENUM('Terrestrial Planet', 'Gas Giant', 'Ice Giant', 'Dwarf Planet', 'Moon', 'Star', 'Variable Star', 'Nebula', 'Quasar', 'Black Hole', 'Asteroid', 'Comet', 'Artificial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "planet_species" AS ENUM('Alien', 'Human', 'Robotic', 'Hybrid', 'Unknown');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "planet_status" AS ENUM('Open for Visits', 'Open for Observation', 'Research Only', 'Restricted', 'Closed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "astro_destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(155) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"planet" jsonb NOT NULL,
	"distance_from_earth" varchar(255) NOT NULL,
	"travel_time" varchar(100) NOT NULL,
	"attractions" jsonb NOT NULL,
	"hero_image" text,
	"image_urls" jsonb NOT NULL,
	"climate" varchar(255),
	"gravity" varchar(255) NOT NULL,
	"safety_rating" varchar(50),
	"visitor_ratings" text,
	"visitor_reviews" jsonb,
	"average_cost_per_day" integer NOT NULL,
	"popular_activities" jsonb,
	"research_facilities" text,
	"cultural_significance" text,
	"historical_events" jsonb,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "astro_destinations_name_unique" UNIQUE("name"),
	CONSTRAINT "astro_destinations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "astro_spacecrafts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"type" "spacecraft_type" NOT NULL,
	"destinations" text[] NOT NULL,
	"capacity" bigint NOT NULL,
	"price_per_day" integer NOT NULL,
	"review_score" real,
	"image_url" text,
	"hero_image" text,
	"virtual_tour_url" text,
	"dimensions" json NOT NULL,
	"crew_details" json NOT NULL,
	"amenities" json NOT NULL,
	"operational_history" text,
	"technology_specs" json NOT NULL,
	"onboard_activities" text,
	"environmental_impact" varchar(500),
	"status" "spacecraft_status" NOT NULL,
	"host_id" varchar(36) NOT NULL,
	"captain_id" varchar(36),
	"popular_activities" jsonb NOT NULL,
	"seasonal_variations" text,
	"accessibility" text,
	"research_facilities" text,
	"cultural_significance" text,
	"historical_events" jsonb,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "astro_spacecrafts_name_unique" UNIQUE("name"),
	CONSTRAINT "astro_spacecrafts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "astro_planets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(300) NOT NULL,
	"description" text NOT NULL,
	"type" "celestial_type" NOT NULL,
	"species" "planet_species" NOT NULL,
	"location" varchar(255) NOT NULL,
	"distance_from_sun" text NOT NULL,
	"orbital_period" text,
	"rotation_period" text,
	"diameter" bigint NOT NULL,
	"climate" varchar(300) NOT NULL,
	"gravity" text,
	"moons" jsonb NOT NULL,
	"ring_system" boolean NOT NULL,
	"icon_image" text,
	"hero_image" text,
	"image_urls" jsonb NOT NULL,
	"discovery_date" text NOT NULL,
	"discovered_by" varchar(255) NOT NULL,
	"notable_features" text NOT NULL,
	"habitability" varchar(300) NOT NULL,
	"atmosphere" jsonb NOT NULL,
	"status" "planet_status" NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "destination_idx" ON "astro_destinations" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "spacecraft_idx" ON "astro_spacecrafts" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "planets_idx" ON "astro_planets" ("id");