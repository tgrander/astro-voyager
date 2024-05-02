import { ContentLayout } from "@/common/layout/content-layout";
import { PlanetCard } from "@/common/planet";
import { api } from "@/trpc/server";

import { ImageCardSlider } from "./_page/image-slider";

export default async function PlanetsPage() {
  const planets = await api.planet.search();

  return (
    <div className="relative flex min-h-screen flex-grow flex-col">
      <ContentLayout className="h-full">
        <div className="relative flex items-center justify-start gap-10">
          {planets.map((planet) => (
            <PlanetCard key={planet.id} planet={planet} />
          ))}
        </div>
        <ContentLayout className="relative h-full">
          <ImageCardSlider />
        </ContentLayout>
      </ContentLayout>
    </div>
  );
}
