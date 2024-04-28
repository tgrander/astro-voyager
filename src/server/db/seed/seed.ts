// env variables
import dotenv from "dotenv";

import { db } from "../index";
import { destinations, spacecrafts } from "../schema";

dotenv.config({ path: "./.env" });

export type NewSpaceCraft = typeof spacecrafts.$inferInsert;
export type NewDestination = typeof destinations.$inferInsert;

async function main() {
  console.log("Seeding started 🚀");

  // Insert seed DB executions here

  console.log("Seeding complete 🌱");
  process.exit(0);
}

main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });

async function insertSpaceCraft(spaceCraft: NewSpaceCraft) {
  return await db.insert(spacecrafts).values(spaceCraft).returning();
}

async function insertDestination(destination: NewDestination) {
  return await db.insert(destinations).values(destination).returning();
}
