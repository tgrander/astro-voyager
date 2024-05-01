import { createTRPCRouter } from "@/server/api/trpc";

import { search } from "./get/search";

export const planetsRouter = createTRPCRouter({
  search,
});
