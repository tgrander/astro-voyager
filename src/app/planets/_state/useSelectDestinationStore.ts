import { create } from "zustand";

// Define a type for the slice of state that the CardSlider will use
interface CardSliderState {
  selectedCard: string; // ID of the selected card
  setSelectedCard: (id: string) => void; // Function to update the selected card
}

// Create a Zustand store with the state and functions
export const useSelectDestinationStore = create<CardSliderState>((set) => ({
  selectedCard: "c1", // Initial state: ID of the initially selected card
  setSelectedCard: (id: string) => set({ selectedCard: id }),
}));
