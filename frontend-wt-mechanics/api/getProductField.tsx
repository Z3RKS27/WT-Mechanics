import {  ResultFilterTypes } from "@/types/filters"
import { useEffect, useState } from "react"

export function useGetProductField() {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product?populate=*`
    const [result, setResult] = useState<ResultFilterTypes | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(URL)
                const json = await res.json()

                const filters: ResultFilterTypes = {
                    schema: {
                        taste: {
                            enum: json.data.schema.attributes.taste.enum
                        }
                    }
                }

                setResult(filters)
                setLoading(false)
            } catch (error: any) {
                setError(error?.message || "Error")
                setLoading(false)
            }
        })()
    }, [URL])

    return { result, loading, error }
}
