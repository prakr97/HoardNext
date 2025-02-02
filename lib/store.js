import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)

        if (existingItem) {
          set({
            items: currentItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)),
          })
        } else {
          set({ items: [...currentItems, item] })
        }
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),
      total: () => {
        const items = get().items
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
)

