import { ContentLayout } from "@/common/layout/content-layout";
import { api } from "@/trpc/server";

import { ImageCardSlider } from "./_page/image-slider";
import { PlanetsSelectList } from "./_page/planet-select-list";

export default async function PlanetsPage() {
  const planets = await api.planet.search();

  return (
    <div className="relative flex min-h-screen flex-grow flex-col">
      <ContentLayout className="h-full">
        <PlanetsSelectList planets={planets}></PlanetsSelectList>
        <ContentLayout className="relative h-full">
          <ImageCardSlider />
        </ContentLayout>
      </ContentLayout>
    </div>
  );
}
