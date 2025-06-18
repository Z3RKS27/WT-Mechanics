import ComponentGlobal from "@/components/share/component-global";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useFavoritosProducts } from "@/hooks/use-favoritos";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";


export type InfoProductProps = {
    product: Product
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props
    const { addItem } = useCart();
    const { addToFavoritos} = useFavoritosProducts();

    return (
        <div className="px-6">
            <div className="justifu-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.productName}</h1>
                <ComponentGlobal product={product}/>
            </div>
            <Separator className="my-4"/>
            <p>{product.description}</p>
            <Separator className="my-4"/>
            <p className="my-4 text-2xl text-center">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-[120px]" onClick={() => addItem(product)}>Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" 
                onClick={() => addToFavoritos(product)}/>

            </div>
        </div>
    )
}

export default InfoProduct;