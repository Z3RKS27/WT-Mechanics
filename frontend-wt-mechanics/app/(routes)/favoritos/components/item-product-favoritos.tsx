import ComponentGlobal from "@/components/share/component-global";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useFavoritosProducts } from "@/hooks/use-favoritos";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FavoritosProps {
  product: Product;
}

const Favoritos = ({ product }: FavoritosProps) => {
  const router = useRouter();
  const { removeFromFavoritos } = useFavoritosProducts();
  const { addItem } = useCart();

  const addToCheckOut = () => {
    addItem(product);
  };

  const imageUrl = product.images[0]?.url;
  const resolvedUrl = imageUrl?.startsWith("http")
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`;

  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/product/${product.slug}`)}>
        {imageUrl && (
          <Image
            width={240}
            height={240}
            src={resolvedUrl}
            alt="favorite"
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
          />
        )}
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <ComponentGlobal product={product} />
          <Button className="mt-5 rounded-full cursor-pointer" onClick={addToCheckOut}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-1 hover:scale-110 transition")}></button>
          <X size={20} onClick={() => removeFromFavoritos(product.id)} className="cursor-pointer" />
        </div>
      </div>
    </li>
  );
};

export default Favoritos;
