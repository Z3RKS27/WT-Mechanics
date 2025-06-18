import ComponentGlobal from "@/components/share/component-global";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useFavoritosProducts } from "@/hooks/use-favoritos";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface FavoritosProps {
    product: Product;
}

const Favoritos = (props: FavoritosProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeFromFavoritos } = useFavoritosProducts();
    const { addItem } = useCart();


    const addToCheckOut = () => {
        addItem(product);
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)}>
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt="favorite"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                    <div>
                        <h2 className="text-lg font-bold">{product.productName}</h2>
                        <p className="font-bold">{formatPrice(product.price)}</p>
                        <ComponentGlobal product={product}/>
                        <Button className="mt-5 rounded-full cursor-pointer" onClick={addToCheckOut}>Añadir al carrito</Button>
                    </div>
                    <div>
                        <button className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-1 hover:scale-110 transition")}></button>
                        <X size={20} onClick={() => removeFromFavoritos(product.id)} className="cursor-pointer"/>
                    </div>
                </div>
        </li>
    )
}

export default Favoritos;

/*<div className="flex items-center justify-between gap-3">
                            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                                {product.taste}
                            </p>
                        </div>*/