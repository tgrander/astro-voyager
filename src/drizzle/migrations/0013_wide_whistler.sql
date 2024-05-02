DO $$ BEGIN
 CREATE TYPE "planet_species" AS ENUM('Alien', 'Human');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "astro_planets" ADD COLUMN "species" "planet_species" NOT NULL;