import dotenv from "dotenv";

import { spacecraftsData } from "@/consts/spacecrafts";

import { insertDestination, insertSpaceCraft } from "../helpers";

// env variables
dotenv.config({ path: "./.env" });

async function main() {
  console.log("Seeding started 🚀");

  // Insert seed DB executions here
  for (const spacecraft of spacecraftsData) {
    await insertSpaceCraft(spacecraft);
  }

  console.log("Seeding complete 🌱");
  process.exit(0);
}

main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
