import type { PlanetsSearch } from "@/api/types";

import { ContentLayout } from "@/common/layout/content-layout";

import { ImageCardSlider } from "./image-slider";
import { PlanetsSelectList } from "./planet-select-list";

export function PlanetPageWrapper({ planets }: { planets: PlanetsSearch }) {
  return (
    <div className="relative flex min-h-screen flex-grow flex-col">
      <ContentLayout>
        <PlanetsSelectList planets={planets}></PlanetsSelectList>
      </ContentLayout>
      <ContentLayout className="relative h-full">
        <ImageCardSlider />
      </ContentLayout>
    </div>
  );
}
