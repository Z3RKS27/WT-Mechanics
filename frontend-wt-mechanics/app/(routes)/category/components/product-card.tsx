import { Product } from "@/types/product2";
import IconButton from "@/components/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  return (
    <Link href={`/product/${product.slug}`} className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.taste}
        </p>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
        <CarouselContent>
          {product.images?.map((image) => (
            <CarouselItem key={image.id} className="group">
              <Image width={400} height={250}
                src={image.url.startsWith("http") ? image.url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="image"
                className="rounded-xl cover"
              />
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton onClick={() => router.push(`/product/${product.slug}`)} icon={<Expand size={20} className="text-gray-700" />} />
                  <IconButton onClick={() => console.log("product")} icon={<ShoppingCart size={20} className="text-gray-700" />} />

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-xl text-center color-black">{product.productName}</p>
      <p className="font-bold text-center">{formatPrice(product.price)}</p>
    </Link>
  );
};

export default ProductCard;
