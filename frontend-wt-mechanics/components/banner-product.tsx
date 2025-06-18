import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
        <div className="mt-4 text-center">
            <p>Sumergete en una experiencia exquisita</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">Los mejores servicios</h4>
            <p className="my-2 text-lg">Ven y comprueba la calidad de nuestros servicios</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[350px] bg-cover lg:h-[900px] bg-[url('/logo.jpg')] bg-center mt-5"/>
        </>
    )
}

export default BannerProduct;