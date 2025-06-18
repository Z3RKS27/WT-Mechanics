import { Menu } from "lucide-react";
import MenuList from "./menu-list";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () =>{
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href={"/categories/mantenimiento-preventivo"} className="block">Mantenimiento Preventivo</Link>
                <Link href={"/categories/mantenimiento-correctivo"} className="block">Mantenimiento Correctivo</Link>
                <Link href={"/categories/mantenimiento-predictivo"} className="block">Mantenimiento Predictivo</Link>
                <Link href={"/categories/mantenimiento-proactivo"} className="block">Mantenimiento Proactivo</Link>
                <Link href={"/categories/otros"} className="block">Otros Servicios</Link>

            </PopoverContent>
        </Popover>
    )
}

export default ItemsMenuMobile;