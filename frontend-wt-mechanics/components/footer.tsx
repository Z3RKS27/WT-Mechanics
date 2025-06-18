import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id: "1",
        name: "Sobre Nosotros",
        href: "#",
    },
    {
        id: "2",
        name: "Productos",
        href: "#",
    },
    {
        id: "3",
        name: "Mi cuenta",
        href: "#",
    },
    {
        id: "4",
        name: "Política de privacidad",
        href: "#",
    }

]


const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 mf:py-8">
                <div className="sm:flex sm:items-center sm: justify-between">
                    <p>
                        <span className="font-bold">
                            WT Mechanics
                        </span>
                    </p>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.href} className="hover:underline me-4 md:me-6">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                <span className="block text-sm text-gray-500 sm:text-center dark:texte-gray-400">
                    &copy; 2025 
                    <Link href="#">WT Mechanics.</Link> Todos los derechos reservados.
                </span>
            </div>
        </footer>
    )
}

export default Footer;