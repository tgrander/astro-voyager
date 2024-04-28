import { destinationsData } from "@/constants";
import { destinations } from "@/db/schema";
import { db } from "@/db/seed/db";

export async function insertDestinationsData() {
  console.log("Inserting destinations data 🗺️");

  const inserted = await db
    .transaction(async (db) => {
      await Promise.all(
        destinationsData.map((destination) =>
          db.insert(destinations).values(destination).returning(),
        ),
      );
    })
    .catch((err) => {
      console.error("Error inserting destinations data: ", err);
      throw err;
    });

  console.log("Destinations data inserted ✅");
  return inserted;
}
