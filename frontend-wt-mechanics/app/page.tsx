import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarruselTextBanner from "@/components/carrusel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarruselTextBanner />
      <FeaturedProducts />
      <BannerDiscount/>
      <ChooseCategory/>
      <BannerProduct/>
    </main>

  );
}
