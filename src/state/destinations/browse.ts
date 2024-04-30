import { create } from "zustand";

interface BrowseDestinationsStore {
  selectedDestination: string | null; // Destination slug
  setSelectedDestination: (slug: string) => void;
}

export const useBrowseDestinationsStore = create<BrowseDestinationsStore>(
  (set) => ({
    selectedDestination: null,
    setSelectedDestination: (slug) => set({ selectedDestination: slug }),
  }),
);
