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
CREATE TABLE IF NOT EXISTS "astro_destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"location" varchar(255) NOT NULL,
	"coordinates" varchar(100) NOT NULL,
	"distance_from_earth" bigint NOT NULL,
	"travel_time" varchar(100) NOT NULL,
	"attractions" jsonb NOT NULL,
	"amenities" jsonb NOT NULL,
	"image_urls" jsonb NOT NULL,
	"virtual_tour_url" varchar(255),
	"climate" varchar(255),
	"gravity" numeric NOT NULL,
	"safety_rating" varchar(50),
	"visitor_reviews" jsonb,
	"average_cost_per_day" numeric(10, 2),
	"booking_status" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"popular_activities" jsonb,
	"seasonal_variations" text,
	"accessibility" text,
	"research_facilities" text,
	"cultural_significance" text,
	"historical_events" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "astro_spacecrafts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
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
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "destination_idx" ON "astro_destinations" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "spacecraft_idx" ON "astro_spacecrafts" ("id");