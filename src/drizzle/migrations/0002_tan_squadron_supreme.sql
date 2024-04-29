ALTER TABLE "astro_destinations" ALTER COLUMN "name" SET DATA TYPE varchar(155);--> statement-breakpoint
ALTER TABLE "astro_destinations" ALTER COLUMN "distance_from_earth" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "astro_destinations" ALTER COLUMN "gravity" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "astro_destinations" ADD COLUMN "slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "astro_destinations" ADD COLUMN "hero_image" text;--> statement-breakpoint
ALTER TABLE "astro_spacecrafts" ADD COLUMN "slug" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "astro_destinations" ADD CONSTRAINT "astro_destinations_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "astro_destinations" ADD CONSTRAINT "astro_destinations_slug_unique" UNIQUE("slug");--> statement-breakpoint
ALTER TABLE "astro_spacecrafts" ADD CONSTRAINT "astro_spacecrafts_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "astro_spacecrafts" ADD CONSTRAINT "astro_spacecrafts_slug_unique" UNIQUE("slug");