// utils/getImageUrl.ts

import { Image } from "@/types/product";

export const getImageUrl = (image?: Image ): string => {
  if (!image?.url) {
    return ""; // Imagen por defecto (asegúrate de tenerla en /public)
  }
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`;
};
