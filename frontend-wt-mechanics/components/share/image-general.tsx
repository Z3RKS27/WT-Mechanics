import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ImagesProps {
  product: Product;
}

const Images = (props: ImagesProps) => {
  const { product } = props;
  const router = useRouter();

  const imageUrl = product.images[0]?.url;
  const resolvedUrl = imageUrl?.startsWith("http")
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`;

  return (
    <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
      {imageUrl && (
        <Image
          width={250}
          height={150}
          src={resolvedUrl}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
        />
      )}
    </div>
  );
};

export default Images;
