import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
        <div className="mt-4 text-center">
            <p className="text-xl">Sumergete en una experiencia exquisita</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">Los mejores servicios</h4>
            <p className="my-2 text-xl">Ven y comprueba la calidad de nuestros servicios</p>
            <Link href="/shop" className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[350px] bg-cover lg:h-[900px] bg-[url('/logo.jpg')] bg-center mt-5"/>
        </>
    )
}

export default BannerProduct;