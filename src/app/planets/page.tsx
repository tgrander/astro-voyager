import { PlanetCard } from "@/common/planet";
import { api } from "@/trpc/server";

import { ImageCardSlider } from "./_page/image-slider";

export default async function PlanetsPage() {
  const planets = await api.planet.search();

  return (
    <div className="flex h-full flex-col">
      <h1>Planets Page</h1>

      <div className="flex items-center justify-start gap-10">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>

      <div>
        <ImageCardSlider />
      </div>
    </div>
  );
}
