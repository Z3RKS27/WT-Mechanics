import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Key } from "react";


interface CarouselProductProps{
    images: {
            map: any;
            id: number;
            url: string;
    }
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props
    console.log(images)
    return(
        <div className="sm: px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image: { id: Key | null | undefined; url: any; }) => (
                        <CarouselItem key={image.id}>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} 
                        alt="Image product" className="rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}

export default CarouselProduct;