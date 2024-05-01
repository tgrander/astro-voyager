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
    const results = await ctx.db.query.planets.findMany();

    return results;
  });
