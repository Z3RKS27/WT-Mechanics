"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product, ProductResponse } from "@/types/product2";

export const useGetProductsByCategory = (categorySlug: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!categorySlug) return;

        const fetchProducts = async () => {
            try {
                const response = await axios.get<ProductResponse>(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[category][slug][$eq]=${categorySlug}&populate[images]=true&populate[category]=true`);

                setProducts(response.data.data);
            } catch (err: any) {
                setError(err.message || "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categorySlug]);

    return { result: products, loading, error };
};

export default useGetProductsByCategory;