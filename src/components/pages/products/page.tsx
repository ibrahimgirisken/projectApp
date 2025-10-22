'use client';
import { useProducts } from '@/features/product/hooks/useProducts';
import { Product} from '@/features/product/types/product';
import { useLocale, useTranslations } from 'next-intl';
import { Page, PageTranslation } from '@/features/page/types/page';
import PageTitle from '@/components/sections/pageTitle';
import { usePathname, notFound } from 'next/navigation';
import ProductDetailPage from '@/features/product/pages/ProductDetailPage';
import ProductsPage from '@/features/product/pages/ProductsPage';

interface CustomError extends Error {
  message: string;
}

interface ProductPageProps {
  page: Page;
  translation?: PageTranslation;
  slug: string[];
}

export default function ProductPage({ page, translation, slug }: ProductPageProps) {
  const locale = useLocale();
  const { data: products = [], error, isLoading } = useProducts();
  const t = useTranslations('Products');
  const d = useTranslations('Others');
  const pathname = usePathname();

  if (isLoading) return <div>{d('loading') ?? 'Ürünler yükleniyor...'}</div>;
  if (error) {
    const errorMessage = (error as CustomError)?.message;
    console.error('Ürün Yükleme Hatası:', error);
    return (
      <div className="container py-5 text-center">
        <h2>{d('errorTitle') ?? 'Bir hata oluştu.'}</h2>
        <p>{d('errorMessage') ?? 'Ürün listesi yüklenemedi. Lütfen daha sonra tekrar deneyin.'}</p>
        {errorMessage && <small className="text-muted">Hata Kodu: {errorMessage}</small>}
      </div>
    );
  }

  const pageTranslation = page?.pageTranslations?.find((pt) => pt.langCode === locale) ?? translation;
  const pageTitle = pageTranslation?.pageTitle
    ?? pageTranslation?.title
    ?? t('title');

  const isDetail = Array.isArray(slug) && slug.length > 1;
  const detailSlug = isDetail ? slug[1] : null;

  const detailProduct: Product | null = isDetail
    ? products.find((p: Product) =>
      p.productTranslations?.some(
        (tr) => tr.langCode === locale && tr.url === detailSlug
      )
    ) ?? null
    : null;

  if (isDetail) {
    if (!detailProduct) {
      notFound();
    }
    return (
      <>
        <PageTitle groupTitle={detailProduct.productTranslations[0].title} title={detailProduct.productTranslations[0].title} currentPage={detailProduct.code} />
        <ProductDetailPage params={detailProduct} />
      </>
    );
  }

  return (
    <>
      <PageTitle title={pageTitle} currentPage={pageTitle} />
      <section className="project-section section-padding fix">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">{t('title') ?? t('title')}</h2>
          <ProductsPage params={products}/>
          {products.length === 0 && (
            <div className="alert alert-info mt-4">{d('noProducts') ?? 'Gösterilecek ürün bulunmamaktadır.'}</div>
          )}
        </div>
      </section>
    </>
  );
}