"use client";

import type { PlanetsSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { ContentLayout } from "@/common/layout/content-layout";
import { cn } from "@/utils";

import { useSelectPlanetStore } from "../_state/useSelectPlanetStore";
import { ImageCardSlider } from "./image-slider";
import { PlanetsSelectList } from "./planet-select-list";

export function PlanetPageWrapper({ planets }: { planets: PlanetsSearch }) {
  const { selectedPlanet, hoveredPlanet } = useSelectPlanetStore();

  return (
    <div className="static flex min-h-screen flex-grow flex-col">
      {/* Planets List */}
      <ContentLayout className="z-50">
        <PlanetsSelectList planets={planets}></PlanetsSelectList>
      </ContentLayout>

      {/* Huge Planet Image */}
      {!!selectedPlanet && (
        <div className="absolute right-[-300px] top-[-300px] z-0">
          <CldImage
            height={1000}
            width={1000}
            src={selectedPlanet?.heroImage ?? ""}
            alt={selectedPlanet?.name ?? ""}
            className={cn("rounded-full object-cover")}
          />
        </div>
      )}

      <ContentLayout className="w-full lg:pt-24">
        <h1 className=" text-6xl">{selectedPlanet?.name}</h1>
      </ContentLayout>

      {/* Destinations */}
      <div className={cn("absolute inset-x-0 bottom-0")}>
        <ContentLayout className="w-full pb-12 lg:pt-24">
          <ImageCardSlider />
        </ContentLayout>
      </div>
    </div>
  );
}
