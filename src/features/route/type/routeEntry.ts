export type RouteEntry = {
  path: string;
  component: React.FC<{ params: any }>;
  layout: 'ux' | 'admin';
  hasSlug: boolean;
  i18nKey?: string;
};
