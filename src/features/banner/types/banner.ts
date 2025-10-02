export interface BannerTranslation {
  langCode: string;
  url: string;
  title: string;
  content: string;
}

export interface Banner {
  id: string;
  desktopImage: string;
  tableteImage: string;
  mobileImage: string;
  desktopVideo: string;
  mobileVideo: string;
  order: number;
  status: boolean;
  bannerTranslations: BannerTranslation[];
}
