"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50 relative bg-white shadow-md border rounded-md" >
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href={"/"}
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md">

                    <div className="mt-4 mb-2 text-lg font-medium">
                      WT Mechanics
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      WT Mechanics es tu aliado confiable en el mundo automotriz. Encontrá los mejores servicios, repuestos y accesorios para mantener tu auto en óptimas condiciones. Calidad, atención profesional y compra 100% online, ¡todo en un solo lugar!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios aromatizantes, alfombrillas, soportes, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50 relative bg-white shadow-md border rounded-md" >
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/accesorios">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mantenimiento Preventivo",
    href: "/category/mantenimiento-preventivo",
    description:
      "Servicios programados que se realizan de forma periódica para evitar fallas y alargar la vida útil del vehículo, como el cambio de aceite, revisión de frenos y líquidos.",
  },
  {
    title: "Mantenimiento Correctivo",
    href: "/category/mantenimiento-correctivo",
    description:
      "Reparaciones que se realizan una vez que el vehículo presenta una falla, incluyendo arreglos de motor, frenos, suspensión, o transmisión.",
  },
  {
    title: "Mantenimiento Predictivo",
    href: "/category/mantenimiento-predictivo",
    description:
      "Uso de tecnología y sensores para anticipar fallas antes de que ocurran. Permite planificar intervenciones con base en el estado real de los componentes.",
  },
  {
    title: "Mantenimiento Proactivo",
    href: "/category/mantenimiento-proactivo",
    description:
      "Acciones basadas en datos históricos, experiencia y análisis de fallas comunes para anticiparse a problemas, incluso sin síntomas visibles.",
  },
  {
    title: "Otros Servicios",
    href: "/category/otros",
    description:
      "Servicios adicionales como lavado, personalización, asistencia vial, trámites legales, instalación de accesorios, entre otros no clasificados como mantenimiento directo.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
