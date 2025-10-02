export interface SettingTranslation {
  langCode: string;
  title: string;
  metaDescription: string;
}

export interface Setting {
  id: string;
  whiteLogo: string;
  blackLogo: string;
  telephone: string;
  email: string;
  address: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
  youtube: string;
  googlePlus: string;
  googleAnalytics: string;
  googleRecaptcha: string;
  googleTagManager: string;
  googleSiteVerification: string;
  googleMaps: string;
  status: boolean;
  settingTranslations: SettingTranslation[];
}
