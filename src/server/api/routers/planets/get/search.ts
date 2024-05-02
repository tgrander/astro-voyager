import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";

////////////////////////
// TYPES
////////////////////////
export const searchPlanetsInput = z.object({}).strict().optional();

export type SearchPlanets = z.infer<typeof searchPlanetsInput>;

////////////////////////
// ROUTE HANDLER
////////////////////////
export const search = publicProcedure
  .input(searchPlanetsInput)
  .query(async ({ ctx }) => {
    const results = await ctx.db.transaction(async (db) => {
      const planets = await db.query.planets.findMany();

      const destinations = await db.query.destinations.findMany();

      return planets.map((planet) => {
        const planetDestinations = destinations.filter(
          (destination) => destination.planet.slug === planet.slug,
        );

        return {
          ...planet,
          destinations: planetDestinations,
        };
      });
    });

    return results;
  });
