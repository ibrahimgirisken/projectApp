export interface TranslateValue {
  langCode: string;
  value: string;
}

export interface TranslateKey {
  id: string;
  key: string;
  description: string;
  translations: TranslateValue[];
}
