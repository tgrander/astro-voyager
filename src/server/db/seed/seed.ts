import { insertSpaceCraftsData } from "@/db/seed/spacecrafts";

// Main function
async function main() {
  console.log("Seeding started 🚀");

  // Insert spacecrafts
  await insertSpaceCraftsData();

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
