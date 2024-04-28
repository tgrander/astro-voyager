import dotenv from "dotenv";

import { spacecraftsData } from "@/constants";
import { insertSpaceCraft } from "@/server/db/helpers";

// env variables
dotenv.config({ path: "./.env" });

// Check if DATABASE_URL is set
if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env");

// Main function
async function main() {
  console.log("Seeding started 🚀");

  // Insert spacecrafts
  await Promise.all(spacecraftsData.map((sc) => insertSpaceCraft(sc)));

  console.log("Seeding complete 🌱");
  process.exit(0);
}

// Run main function
main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
