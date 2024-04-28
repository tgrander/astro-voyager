import { insertDestinationsData } from "@/db/seed/destinations";
import { insertSpaceCraftsData } from "@/db/seed/spacecrafts";

// Main function
async function main() {
  console.log("Seeding started 🚀");

  // SPACECRAFTS
  await insertSpaceCraftsData();
  // DESTINATIONS
  await insertDestinationsData();

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
