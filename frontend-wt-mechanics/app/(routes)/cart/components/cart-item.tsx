import ComponentGlobal from "@/components/share/component-global";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Images from "@/components/share/image-general";

interface CartItemProps {
    product: Product;
}

const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeItem } = useCart();

    return (
        <li className="flex py-6 border-b">
            <Images product={product} />
            {/*<div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt="Product"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>*/}
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <ComponentGlobal product={product} />
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id_product)} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem;