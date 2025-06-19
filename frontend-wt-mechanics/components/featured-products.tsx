"use client";

import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import SkeletonSchema from "./skeletonSchema";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

const FeaturedProducts = () => {
  const { result, loading, error } = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();


  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl py-8 mx-auto sm:py-16 sm:px-6">
      <h3 className="px-4 text-3xl font-semibold text-center text-gray-800 sm:pb-12 dark:text-white">
        Servicios destacados
      </h3>

      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {result.map((product) => {
            if (!product) return null;

            const { id, productName, images } = product;

            const firstImageUrl =
              images && images.length > 0
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`
                : "/no-image.png";

            return (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <Image
                        src={firstImageUrl}
                        alt={productName}
                        className="object-cover w-full h-64 rounded-xl bg-gray-50"
                        width={300}
                        height={300}
                      />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                                <IconButton onClick={() => router.push(`product/${product.slug}`)} 
                                icon={<Expand size={20} className="text-gray-700" />} />
                                <IconButton onClick={() => addItem(product)}
                                icon={<ShoppingCart size={20} className="text-gray-700" />} />
                                
                            </div>
                        </div>    
                        
                    </CardContent>
                    <h3 className="font-bold py-4 px-2 text-center">{product.productName}</h3>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
