import { destinationsRouter } from "@/server/api/routers/destinations";
import { planetsRouter } from "@/server/api/routers/planets";
import { spacecraftsRouter } from "@/server/api/routers/spacecrafts";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  spacecraft: spacecraftsRouter,
  destination: destinationsRouter,
  planet: planetsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
