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
          "m-1 h-[50px] w-[50px] flex-shrink-0 border-none",
          "cursor-pointer rounded-full opacity-40",
          {
            "neon-pink opacity-100": isSelected,
          },
        )}
      >
        <CldImage
          src={planet.heroImage ?? ""}
          alt={planet.name}
          height={100}
          width={100}
          className={cn("h-[100px] w-full object-cover", {
            "rounded-full": isSelected,
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
