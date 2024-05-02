import { create } from "zustand";

import type { PlanetSearch } from "@/api/types";

interface PlanetSliderState {
  selectedPlanet: PlanetSearch | null;
  hoveredPlanet: PlanetSearch | null;
  setSelectedPlanet: (planet: PlanetSearch) => void;
  setHoveredPlanet: (planet: PlanetSearch) => void;
}

export const useSelectPlanetStore = create<PlanetSliderState>((set) => ({
  selectedPlanet: null,
  hoveredPlanet: null,

  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
  setHoveredPlanet: (planet) => set({ hoveredPlanet: planet }),
}));
