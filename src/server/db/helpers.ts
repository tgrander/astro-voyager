import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";

import * as schema from "./schema";

export const db = drizzle(sql, { schema });

////////////////////////
// TYPES
////////////////////////
export type NewSpaceCraft = typeof schema.spacecrafts.$inferInsert;
export type NewDestination = typeof schema.destinations.$inferInsert;
export type NewPlanet = typeof schema.planets.$inferInsert;

////////////////////////
// HELPERS
////////////////////////
// Insert SpaceCraft
export async function insertSpaceCraft(spaceCraft: NewSpaceCraft) {
  return await db.insert(schema.spacecrafts).values(spaceCraft).returning();
}
// Insert Destination
export async function insertDestination(destination: NewDestination) {
  return await db.insert(schema.destinations).values(destination).returning();
}
// Insert Planet
export async function insertPlanet(planet: NewPlanet) {
  return await db.insert(schema.planets).values(planet).returning();
}
