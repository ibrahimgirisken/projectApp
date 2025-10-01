export interface ProductTranslation {
  langCode: string;
  name: string;
  url: string;
  title: string;
  brief: string;
  pageTitle: string;
  metaDescription: string;
  content: string;
}

export interface Product {
  id: string;
  code: string;
  brandId: string | null;
  categoryId: string | null;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  video: string;
  order: number;
  status: boolean;
  productTranslations: ProductTranslation[];
}
