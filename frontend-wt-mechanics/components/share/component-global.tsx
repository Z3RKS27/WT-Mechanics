import { Product } from "@/types/product"

interface Global {
    product: Product;
}

const ComponentGlobal = (props: Global) => {
    const { product } = props;

    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {product.taste}
            </p>
        </div>
    )
}

export default ComponentGlobal;