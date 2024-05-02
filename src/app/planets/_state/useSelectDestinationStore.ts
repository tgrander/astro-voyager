import { create } from "zustand";

import type { PlanetSearch } from "@/api/types";

type Destination = PlanetSearch["destinations"] extends (infer U)[] ? U : never;

interface CardSliderState {
  selectedDestination: Destination | null;
  setSelectedDestination: (destination: Destination) => void;
}

export const useSelectDestinationStore = create<CardSliderState>((set) => ({
  selectedDestination: null,
  setSelectedDestination: (destination) =>
    set({ selectedDestination: destination }),
}));
