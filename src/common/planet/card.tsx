"use client";

import React from "react";

import { useSelectPlanetStore } from "@/app/planets/_state/useSelectPlanetStore";
import { CldImage } from "@/common/image";
import { cn } from "@/utils";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import type { PlanetSearch } from "@/api/types";
interface Props {
  planet: PlanetSearch;
}

export function PlanetCard({ planet }: Props) {
  const { selectedPlanet, setSelectedPlanet, hoveredPlanet, setHoveredPlanet } =
    useSelectPlanetStore();

  const isSelected = selectedPlanet?.id === planet.id;
  const isHovered = hoveredPlanet?.id === planet.id;

  return (
    <div onClick={() => setSelectedPlanet(planet)}>
      <Card
        isFooterBlurred={true}
        radius="lg"
        className={cn(
          "m-1 h-[75px] w-[75px] flex-shrink-0 border-none",
          "cursor-pointer",
          {
            "border-2 border-white": isSelected,
          },
        )}
      >
        <CldImage
          src={planet.heroImage ?? ""}
          alt={planet.name}
          height={150}
          width={150}
          className={cn("h-[150px] w-full object-cover", {
            "rounded-full border-2 border-white": isSelected,
          })}
        />
        <CardBody>
          <p>{planet.name}</p>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
