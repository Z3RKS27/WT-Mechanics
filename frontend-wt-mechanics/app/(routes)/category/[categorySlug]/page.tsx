"use client"

import { useParams } from "next/navigation";
import { useGetProductsByCategory } from "@/api/getCategoryProduct";
import ProductCard from "../components/product-card";
import { Separator } from "@/components/ui/separator";
import FilterControlsCategory from "./filter-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import { useState } from "react";
import { Product } from "@/types/product2";

const Page = () => {
    const params = useParams();
    const categorySlug = params?.categorySlug as string;
    const { result: products, loading } = useGetProductsByCategory(categorySlug);

    const [FilterOrigin, setFilterOrigin] = useState("")

    console.log(FilterOrigin)

    const filteredProducts = products !== null && !loading && (
        FilterOrigin === '' ? products : products.filter((product) => product.taste === FilterOrigin)
    )

    console.log(filteredProducts)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {products !== null && !loading && (
                <h1 className="text-3xl font-medium">Servicios: {products[0].category.categoryName}</h1>
            )}
            <Separator />

            <div className="sm:flex sm:justify-between">
                <FilterControlsCategory setFilterOrigin={setFilterOrigin} />

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {Array.isArray(filteredProducts) && !loading && (
                        filteredProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                    {Array.isArray(filteredProducts) && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro</p>
                    )}

                </div>
            </div>

        </div>
    );
};

export default Page;
