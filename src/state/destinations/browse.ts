import { create } from "zustand";

import type { DestinationSearch } from "@/api/types";

interface BrowseDestinationsStore {
  selectedDestination: DestinationSearch | null; // Destination slug
  setSelectedDestination: (destination: DestinationSearch) => void;
}

export const useBrowseDestinationsStore = create<BrowseDestinationsStore>(
  (set) => ({
    selectedDestination: null,
    setSelectedDestination: (slug) => set({ selectedDestination: slug }),
  }),
);
