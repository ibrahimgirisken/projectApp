export interface DatasheetTranslation {
  langCode: string;
  name: string;
  url: string;
  content: string;
  path: string;
}
export interface Datasheet {
  id: string;
  code: string;
  image1: string;
  order: number;
  status: boolean;
  datasheetTranslations: DatasheetTranslation[];
}
