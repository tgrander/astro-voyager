import { publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

////////////////////////
// TYPES
////////////////////////
export const searchDestinationsSchema = z
  .object({
    fromDate: z.string().optional(), // Dates as ISO string (could also use z.date() if Date objects are preferred)
    toDate: z.string().optional(),
    priceMin: z.number().optional(),
    priceMax: z.number().optional(),
    amenities: z.array(z.string()).optional(), // List of amenity IDs required
    page: z.number().optional(), // Pagination support
  })
  .strict();

export type SearchDestinations = z.infer<typeof searchDestinationsSchema>;

////////////////////////
// ROUTE HANDLER
////////////////////////
export const search = publicProcedure
  .input(searchDestinationsSchema.optional())
  .query(async ({ ctx }) => {
    const results = await ctx.db.query.destinations.findMany();

    return results;
  });
