import { useEffect, useState } from "react"
import { CategoryType } from "@/types/category"

export function useGetCategories() {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
    const [result, setResult] = useState<CategoryType[] | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(URL)
                const json = await res.json()

                const categories: CategoryType[] = json.data.map((item: any) => ({
                    id: item.id,
                    categoryName: item.categoryName,
                    slug: item.slug,
                    mainImage: {
                        url: item.mainImage?.url || 
                             item.mainImage?.formats?.thumbnail?.url || 
                             "/no-image.png"
                    }
                }));

                setResult(categories)
                setLoading(false)
            } catch (error: any) {
                setError(error?.message || "Error")
                setLoading(false)
            }
        })()
    }, [URL])

    return { result, loading, error }
}
