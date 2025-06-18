import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "@/types/product";
import { toast } from "sonner"

interface useFavoritosProductsType {
    lovedItems: Product[];
    addToFavoritos: (product: Product) => void;
    removeFromFavoritos: (id: number) => void;
}


export const useFavoritosProducts = create(persist<useFavoritosProductsType>((set, get) => ({
    lovedItems: [],
    addToFavoritos: (product: Product) => {
        const currentFavoritos = get().lovedItems;
        const existingProduct = currentFavoritos.find((item) => item.id === product.id);

        if (existingProduct) {
            return toast("El producto ya está añadido a favoritos ❤️");
        }
        set({ lovedItems: [...get().lovedItems, product] });
        toast.success("Producto añadido a favoritos ❤️");

    },
    removeFromFavoritos: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] });
        toast.success("Producto eliminado de favoritos ❤️");
    }

}), {
    name: "favoritos-products-storage",
    storage: createJSONStorage(() => localStorage),
}))