import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { Product } from "@/types/product"
import { toast } from "sonner"

interface CartStore{
    items: Product[],
    addItem: (data: Product) => void,
    removeItem: (id: number) => void,
    removeAll: () => void,
}

export const useCart = create(persist<CartStore>((set, get) =>({
    items: [],
    addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if(existingItem){
            toast.warning("Producto ya agregado")   
            return;
        }

        set({
            items: [...get().items, data],
        })
        toast.success("Producto agregado")
    },

    removeItem: (id: number) => {
        set({
            items: [...get().items.filter((item) => item.id !== id)],
        })
        toast.success("Producto eliminado")
    },

    removeAll: () => set({ items: [] }),
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
})) 