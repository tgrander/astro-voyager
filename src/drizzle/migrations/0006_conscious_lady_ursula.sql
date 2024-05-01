CREATE TABLE IF NOT EXISTS "astro_planets" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(300) NOT NULL,
	"description" text NOT NULL,
	"type" varchar(100) NOT NULL,
	"location" varchar(255) NOT NULL,
	"distance_from_sun" bigint NOT NULL,
	"orbital_period" numeric(10, 2) NOT NULL,
	"rotation_period" numeric(10, 2) NOT NULL,
	"diameter" text NOT NULL,
	"climate" varchar(100) NOT NULL,
	"gravity" numeric(5, 2) NOT NULL,
	"moons" jsonb NOT NULL,
	"ring_system" boolean NOT NULL,
	"image_urls" jsonb NOT NULL,
	"discovery_date" date NOT NULL,
	"discovered_by" varchar(255) NOT NULL,
	"notable_features" text NOT NULL,
	"habitability" varchar(100) NOT NULL,
	"atmosphere" jsonb NOT NULL,
	"status" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE "astro_destinations" ADD COLUMN "visitor_ratings" text;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "planets_idx" ON "astro_planets" ("id");