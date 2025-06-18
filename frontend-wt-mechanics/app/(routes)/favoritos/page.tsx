"use client"

import { useFavoritosProducts } from "@/hooks/use-favoritos";
import Favoritos from "./components/item-product-favoritos";

export default function Page() {
    const { lovedItems } = useFavoritosProducts();

    return(
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">Favoritos</h1>

            <div>
                <div>
                    {lovedItems.length === 0 && <p>No hay productos en favoritos</p>}
                    <ul>
                        {lovedItems.map((items) => (
                            <Favoritos key={items.id} product={items}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}