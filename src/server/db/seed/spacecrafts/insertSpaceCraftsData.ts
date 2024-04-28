import { spacecraftsData } from "@/constants";
import { spacecrafts } from "@/db/schema";
import { db } from "@/db/seed/db";

export async function insertSpaceCraftsData() {
  console.log("Inserting spacecrafts data 🚀");

  const inserted = await db
    .transaction(async (db) => {
      await Promise.all(
        spacecraftsData.map((sc) =>
          db.insert(spacecrafts).values(sc).returning(),
        ),
      );
    })
    .catch((err) => {
      console.error("Error inserting spacecrafts data: ", err);
      throw err;
    });

  console.log("Spacecrafts data inserted 🛰️");
  return inserted;
}
