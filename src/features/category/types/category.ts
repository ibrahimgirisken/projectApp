export interface CategoryTranslation {
  langCode: string;
  name: string;
  title: string;
  url: string;
  brief: string;
  metaDescription: string;
}

export interface Category {
  id: string;
  image1: string;
  parentId: string | null;
  children: string[];
  status: boolean;
  order: number;
  categoryTranslations: CategoryTranslation[];
}
