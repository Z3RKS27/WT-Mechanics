"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarruselTop = [
    {
        id: 1,
        title: "Mantenimiento Preventivo",
        descripcion: "Evita fallas mayores realizando mantenimientos periódicos a tu vehículo.",
        link: "#mantenimiento-preventivo"
    },
    {
        id: 2,
        title: "Diagnóstico Computarizado",
        descripcion: "Detectamos cualquier falla en tu auto con tecnología de punta.",
        link: "#diagnostico-computarizado"
    },
    {
        id: 3,
        title: "Reparación de Frenos",
        descripcion: "Seguridad total con nuestro servicio especializado en frenos.",
        link: "#reparacion-frenos"
    },
    {
        id: 4,
        title: "Servicio de Suspensión",
        descripcion: "Conduce cómodo y seguro con nuestra revisión y ajuste de suspensión.",
        link: "#servicio-suspension"
    }
]


const CarruselTextBanner = () => {
    const router = useRouter();;

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 2500 //ms
                })
            ]}>
                <CarouselContent>
                {dataCarruselTop.map(({id, title, descripcion, link}) => (
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-0 bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{descripcion}</p>
                                </CardContent>
                            </Card>
                                
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarruselTextBanner;