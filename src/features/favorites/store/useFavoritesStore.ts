import type { FavoriteMovie } from "@/types/FavoriteMovie";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesStore = {
  favorites: FavoriteMovie[];
  addFavorite: (item: FavoriteMovie) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (item) => {
        const existingItem = get().favorites.find((i) => i.id === item.id);
        if (existingItem) throw new Error("Item já adicionado aos favoritos.");
        set({ favorites: [{ ...item }, ...get().favorites] });
      },

      removeFavorite: (id) => {
        const existingItem = get().favorites.find((i) => i.id === id);
        if (!existingItem)
          throw new Error("Item não encontrado nos favoritos.");
        set({
          favorites: get().favorites.filter((i) => i.id !== id),
        });
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites-storage",
    }
  )
);
