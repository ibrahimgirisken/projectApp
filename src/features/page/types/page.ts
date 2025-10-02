export interface PageTranslation {
  langCode: string;
  title: string;
  url: string;
  pageTitle: string;
  brief: string;
  metaDescription: string;
  content: string;
}

export interface Page {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  order: number;
  status: boolean;
  moduleIds: string;
  pageTranslations: PageTranslation[];
}
