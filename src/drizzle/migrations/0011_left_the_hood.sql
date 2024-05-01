DO $$ BEGIN
 CREATE TYPE "celestial_type" AS ENUM('Terrestrial Planet', 'Gas Giant', 'Ice Giant', 'Dwarf Planet', 'Moon', 'Star', 'Variable Star', 'Nebula', 'Quasar', 'Black Hole', 'Asteroid', 'Comet', 'Artificial');
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
ALTER TABLE "astro_planets" ALTER COLUMN "type" SET DATA TYPE celestial_type;--> statement-breakpoint
ALTER TABLE "astro_planets" ALTER COLUMN "climate" SET DATA TYPE varchar(300);--> statement-breakpoint
ALTER TABLE "astro_planets" ALTER COLUMN "habitability" SET DATA TYPE varchar(300);--> statement-breakpoint
ALTER TABLE "astro_planets" ALTER COLUMN "status" SET DATA TYPE planet_status;