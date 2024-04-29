import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";

////////////////////////
// TYPES
////////////////////////
export const searchSpaceCraftsSchema = z
  .object({
    destinationSlug: z.number().optional(),
    fromDate: z.string().optional(), // Dates as ISO string (could also use z.date() if Date objects are preferred)
    toDate: z.string().optional(),
    typeId: z.string().optional(), // Spacecraft type, assuming a string identifier for type
    priceMin: z.number().optional(),
    priceMax: z.number().optional(),
    guests: z.number().optional(), // Number of guests that the spacecraft needs to accommodate
    amenities: z.array(z.string()).optional(), // List of amenity IDs required
    capacity: z.number().optional(), // Minimum capacity of the spacecraft
    page: z.number().optional(), // Pagination support
  })
  .strict();

export type SearchSpaceCrafts = z.infer<typeof searchSpaceCraftsSchema>;

////////////////////////
// ROUTE HANDLER
////////////////////////
export const search = publicProcedure
  .input(searchSpaceCraftsSchema.optional())
  .query(async ({ ctx }) => {
    const results = await ctx.db.query.spacecrafts.findMany();

    return results;
  });
