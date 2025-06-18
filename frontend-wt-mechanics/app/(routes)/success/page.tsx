"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter();
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <img src="logo.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">En breve, nuestro equipo se pondra en contacto contigo para poder ofrecerte la mejor calidad de nuestro servicio</p>
                    <p className="my-3">Gracias por confiar en nosotros y preferir nuestro servicio</p>
                    <p className="my-3"></p>

                    <Button className="w-full sm:w-auto cursor-pointer" onClick={() => router.push("/")}>Volver al inicio</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;