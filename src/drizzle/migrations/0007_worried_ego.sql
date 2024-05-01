ALTER TABLE "astro_planets" ALTER COLUMN "diameter" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "astro_planets" ALTER COLUMN "gravity" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "astro_planets" ADD COLUMN "hero_image" text;