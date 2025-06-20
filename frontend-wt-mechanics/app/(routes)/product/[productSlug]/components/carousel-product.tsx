import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductProps {
  images: {
    id: number;
    url: string;
  }[];
}

const CarouselProduct = ({ images }: CarouselProductProps) => {
  return (
    <div className="relative flex items-center justify-center sm:px-16">
      <Carousel className="w-full max-w-md"> {/* Limita el ancho para centrar */}
        <CarouselContent className="flex items-center justify-center">
          {images.map((image) => (
            <CarouselItem key={image.id} className="flex justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="Image product"
                className="rounded-lg object-contain"
                width={400}
                height={250}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Posiciona botones más cerca de la imagen */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
