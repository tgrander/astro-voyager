import { createTRPCRouter } from "@/server/api/trpc";

import { search } from "./get/searchResults";

export const destinationsRouter = createTRPCRouter({
  search,
});
