import type { api } from "@/trpc/server";

////////////////////////////////////////
// Spacecrafts
////////////////////////////////////////
type SpacecraftSearchArrayPromise = ReturnType<typeof api.spacecraft.search>;
export type SpacecraftsSearch = Awaited<SpacecraftSearchArrayPromise>;
export type SpacecraftSearch = SpacecraftsSearch extends (infer U)[]
  ? U
  : never;

////////////////////////////////////////
// Destinations
////////////////////////////////////////
type DestinationsSearchArrayPromise = ReturnType<typeof api.destination.search>;
export type DestinationsSearch = Awaited<DestinationsSearchArrayPromise>;
export type DestinationSearch = DestinationsSearch extends (infer U)[]
  ? U
  : never;
