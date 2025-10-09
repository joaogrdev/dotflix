import type { CartMovie } from "@/types/CartMovie";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = {
  cartItems: CartMovie[];
  addItem: (item: CartMovie) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addItem: (item) => {
        const existingItem = get().cartItems.find((i) => i.id === item.id);
        if (existingItem) throw new Error("Item já adicionado ao carrinho.");
        set({ cartItems: [{ ...item }, ...get().cartItems] });
      },

      removeItem: (id) => {
        const existingItem = get().cartItems.find((i) => i.id === id);
        if (!existingItem) throw new Error("Item não encontrado no carrinho.");
        set({
          cartItems: get().cartItems.filter((i) => i.id !== id),
        });
      },

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
