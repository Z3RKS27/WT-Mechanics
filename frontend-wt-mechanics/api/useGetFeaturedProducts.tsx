"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product, ProductResponse } from "@/types/product";

export const useGetFeaturedProducts = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=images`;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get<ProductResponse>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=images`
        );

        // Accedemos al array de productos:
        const productsData = response.data.data;

        setProducts(productsData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { result: products, loading, error };
};
