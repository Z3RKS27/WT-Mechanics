"use client"
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import Image from "next/image";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, loading, error } = useGetCategories();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Ocurrió un error: {error}</p>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8 text-center font-bold">Elige el servicio que buscas</h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {result?.map((category: CategoryType) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    >
                        <Image
                            width={250}
                            height={150}
                            src={category.mainImage.url.startsWith("http")
                                ? category.mainImage.url
                                : `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`
                            }
                            alt={category.categoryName}
                            className="w-[250px] h-[150px] transition duration-300 ease-in-out rounded-lg hover:scale-125 object-cover"
                        />
                        <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                            {category.categoryName}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ChooseCategory;
