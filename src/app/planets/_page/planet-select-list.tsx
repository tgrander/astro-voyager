"use client";

import { useEffect } from "react";

import { PlanetCard } from "@/common/planet";

import { useSelectPlanetStore } from "../_state/useSelectPlanetStore";

import type { PlanetsSearch } from "@/api/types";

interface Props {
  planets: PlanetsSearch;
}

export function PlanetsSelectList(props: Props) {
  const { selectedPlanet, setSelectedPlanet } = useSelectPlanetStore();

  useEffect(() => {
    if (selectedPlanet === null) {
      setSelectedPlanet(props.planets[0]!);
    }
  }, [selectedPlanet, setSelectedPlanet, props.planets]);

  return (
    <div className="relative flex items-center justify-start gap-10">
      {props.planets.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </div>
  );
}
