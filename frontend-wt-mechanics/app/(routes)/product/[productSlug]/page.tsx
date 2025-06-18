"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page () {
    const params = useParams()
    const { productSlug } = params;

    console.log(productSlug)

    const { result } : ResponseType = useGetProductBySlug(productSlug as string)

    if(result === null){
        return <SkeletonProduct/>
    }

    return (
        <div className="max-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div className="items-center">
                    <CarouselProduct images={result[0].images}/>
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]}/>
                </div>
            </div>
        </div>
    );
}