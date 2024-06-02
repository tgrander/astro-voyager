import type { NewDestination } from "@/server/db/helpers";
import { destinations } from "./new/data";

export const destinationsData: NewDestination[] = [...destinations] as const;
