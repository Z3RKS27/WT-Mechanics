"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./item-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useFavoritosProducts } from "@/hooks/use-favoritos";

const Navbar = () => {
    const router = useRouter()
    const cart = useCart();
    const { lovedItems } = useFavoritosProducts();

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>WT 
                <span className="font-bold"> Mechanics</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap">
                { cart.items.length === 0 ? 
                    <ShoppingCart strokeWidth={1} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/cart")}/>
                    :(
                        <div className="flex gap-1" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer"></BaggageClaim>
                            <span>{cart.items.length}</span>
                        </div>
                ) }

                <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && `fill-black dark:fill-white`}`} 
                onClick={() => router.push("/favoritos")}></Heart>

                <User strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/usuario")}></User>

                <ToggleTheme/>
            </div>
        </div>
    )
}

export default Navbar;