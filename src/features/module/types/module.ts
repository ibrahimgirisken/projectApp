export interface ModuleTranslation {
  langCode: string;
  name: string;
  moduleData: string;
}

export interface Module {
  id: string;
  contentType: string;
  image1: string;
  image2: string;
  image3: string;
  video: string;
  order: number;
  status: boolean;
  moduleTranslations: ModuleTranslation[];
}
