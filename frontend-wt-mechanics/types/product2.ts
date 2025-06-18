export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type ImageFormats = {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
};

export type Image = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Category = {
  id: number;
  categoryName: string;
  slug: string;
};

export type Product = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  taste?: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  mainImage?: { url: string };
  images: Image[];
  category: Category;
};

export type ProductResponse = {
  data: Product[];
};
