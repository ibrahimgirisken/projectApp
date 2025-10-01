import resolveRouteKey from '@/utils/resolveRouteKey';

import ProductList from '@/features/product/pages/ProductsPage';
import ProductDetail from '@/features/product/pages/ProductDetailPage';
import { getSafeTranslations } from '@/i18n/getTranslationsSafe';

export default async function UXRouter(props: { params: { locale: string; slug?: string[] } }) {
  const { params } = props;
  const { locale, slug = [] } = await params;

  const t = await getSafeTranslations({ locale });

  const translatedRoutes = {
    products: await t('route.products'),
    categories: await t('route.categories'),
    projects: await t('route.projects'),
  };

  const routeSegment = slug[0];
  const detailSegment = slug[1]

  const routeKey = resolveRouteKey(routeSegment, translatedRoutes);

  if (!routeKey) return <div>404 Not Found</div>;

  if (detailSegment) {
    switch (routeKey) {
      case 'products':
        return <ProductDetail slug={detailSegment} locale={locale} />;
      case 'projects':
        return <div>Proje Detay</div>;
      default:
        return <div>Detay Sayfası Yok</div>;
    }
  }

  switch (routeKey) {
    case 'products':
      return <ProductList locale={locale} />;
    case 'projects':
      return <div>Projeler Listesi</div>;
    case 'categories':
      return <div>Kategoriler Listesi</div>;
    default:
      return <div>404 Not Found</div>;
  }
}
