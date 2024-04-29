import type { api } from "@/trpc/server";

////////////////////////////////////////
// USE CASES
////////////////////////////////////////
type SpacecraftSearchArrayPromise = ReturnType<typeof api.spacecraft.search>;
export type SpacecraftsSearch = Awaited<SpacecraftSearchArrayPromise>;
export type SpacecraftSearch = SpacecraftsSearch extends (infer U)[]
  ? U
  : never;
