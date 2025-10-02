export interface HomeTranslation {
  langCode: string;
  url: string;
  title: string;
  content: string;
  additionalData: string;
}
export interface Home {
  id: string;
  contentType: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  video: string;
  order: number;
  status: boolean;
  homeTranslations: HomeTranslation[];
}
