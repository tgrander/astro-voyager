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
    <div className="static flex h-screen flex-grow flex-col">
      {/* Planets List */}
      <ContentLayout className="z-50 py-10">
        <PlanetsSelectList planets={planets}></PlanetsSelectList>
      </ContentLayout>

      {/* Huge Planet Image */}
      {!!selectedPlanet && (
        <div className="absolute inset-x-0 inset-y-0 z-0">
          <CldImage
            src={selectedPlanet?.heroImage ?? ""}
            alt={selectedPlanet?.name ?? ""}
            sizes="100vw"
            fill={true}
            className="h-full w-full object-cover"
            quality={100}
          />
        </div>
      )}

      <ContentLayout className="z-50 w-full lg:pt-24">
        <div className="">
          <h1 className="font-rift text-7xl font-semibold tracking-widest">
            {selectedPlanet?.name}
          </h1>
          <p className="text-foreground/60">{selectedPlanet?.description}</p>
        </div>
      </ContentLayout>

      {/* Destinations */}
      <div className={cn("absolute inset-x-0 bottom-0")}>
        <ContentLayout className="flex w-full flex-col justify-start gap-4 pb-12 lg:pt-24">
          <h3 className=" font-rift text-lg font-medium tracking-widest">
            Destinations
          </h3>
          <ImageCardSlider destinations={selectedPlanet?.destinations ?? []} />
        </ContentLayout>
      </div>
    </div>
  );
}
