import { create } from "zustand";

export type SortBy = "alphabetical" | "price" | "rating";

type State = {
  sortBy: SortBy;
  actions: {
    setSortBy: (sortBy: SortBy) => void;
  };
};

export const useSortStore = create<State>((set) => ({
  sortBy: "price",
  actions: {
    setSortBy: (sortBy) => set({ sortBy }),
  },
}));
