// env variables
import dotenv from "dotenv";

import { db } from "./index";
import { destinations, spacecrafts } from "./schema";

dotenv.config({ path: "./.env" });

export type NewSpaceCraft = typeof spacecrafts.$inferInsert;
export type NewDestination = typeof destinations.$inferInsert;

export async function insertSpaceCraft(spaceCraft: NewSpaceCraft) {
  return await db.insert(spacecrafts).values(spaceCraft).returning();
}

export async function insertDestination(destination: NewDestination) {
  return await db.insert(destinations).values(destination).returning();
}
