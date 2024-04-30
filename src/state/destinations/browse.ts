import { create } from "zustand";

interface BrowseDestinationsStore {
  selectedDestination: string | null; // Destination slug
}

export const useBrowseDestinationsStore = create<BrowseDestinationsStore>(
  (set) => ({
    selectedDestination: null,
  }),
);
