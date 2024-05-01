import { planetData } from "@/constants";
import { planets } from "@/db/schema";
import { db } from "@/db/seed/db";

export async function insertPlanetData() {
  console.log("Inserting planets data 🚀");

  const inserted = await db
    .transaction(async (db) => {
      await Promise.all(
        planetData.map((planet) =>
          db.insert(planets).values(planet).returning(),
        ),
      );
    })
    .catch((err) => {
      console.error("Error inserting planets data: ", err);
      throw err;
    });

  console.log("Planets data inserted 🪐");
  return inserted;
}
