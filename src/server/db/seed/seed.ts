import dotenv from "dotenv";

import { spacecraftsData } from "@/consts/spacecrafts";

import { insertDestination, insertSpaceCraft } from "../helpers";

// env variables
dotenv.config({ path: "./.env" });

async function main() {
  console.log("Seeding started 🚀");

  // Insert spacecrafts
  await Promise.all(spacecraftsData.map((sc) => insertSpaceCraft(sc)));

  console.log("Seeding complete 🌱");
  process.exit(0);
}

main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
