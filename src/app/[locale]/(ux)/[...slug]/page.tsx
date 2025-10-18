import resolveRouteKey from '@/utils/resolveRouteKey';
import ProductList from '@/features/product/pages/ProductsPage';
import ProductDetail from '@/features/product/pages/ProductDetailPage';
import PageDetailPage from '@/features/page/pages/ux/PageDetailPage';
import { useLocale, useTranslations } from 'next-intl';

export default function UXRouter(props: { params: { locale: string; slug?: string[] } }) {
  const { slug = [] } = props.params;

  // next-intl hooks
  const locale = useLocale();
  const t = useTranslations('Navigation');

  const translatedRoutes = {
    products: t('products'),
    categories: t('categories'),
    projects: t('projects'),
    pages: t('pages'),
  };

  const routeSegment = slug[0];
  const detailSegment = slug[1];
  const routeKey = resolveRouteKey(routeSegment, translatedRoutes);

  if (!routeKey && slug.length === 1 && routeSegment) {
    return <PageDetailPage slug={routeSegment} locale={locale} />;
  }

  if (detailSegment) {
    switch (routeKey) {
      case 'products':
        return <ProductDetail slug={detailSegment} locale={locale} />;
      case 'pages':
        return <PageDetailPage slug={detailSegment} locale={locale} />;
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
    }
    return <div>404 Not Found</div>;
}
