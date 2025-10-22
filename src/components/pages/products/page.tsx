'use client';
import { useProducts } from '@/features/product/hooks/useProducts';
import { Row, Col, Card } from 'react-bootstrap';
// 'Product' ve diğer tiplerin tanımlarının doğru olduğunu varsayıyoruz
import { Product, ProductTranslation } from '@/features/product/types/product';
import { useLocale, useTranslations } from 'next-intl';
import { Page, PageTranslation } from '@/features/page/types/page';
import PageTitle from '@/components/sections/pageTitle';
import Link from 'next/link';
import { usePathname, notFound } from 'next/navigation'; // notFound eklendi

// Opsiyonel: Hata tipi için daha iyi bir tanım
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
  const t = useTranslations('Products'); // Ürün çevirileri
  const d = useTranslations('Others'); // Diğer metinler (detay, bulunamadı vb.)
  const pathname = usePathname();

  // 1. Erken Dönüşler (Yükleme & Hata)
  if (isLoading) return <div>{d('loading') ?? 'Ürünler yükleniyor...'}</div>;
  if (error) {
    const errorMessage = (error as CustomError)?.message;
    console.error('Ürün Yükleme Hatası:', error);
    return (
      <div className="container py-5 text-center">
        <h2>{d('errorTitle') ?? 'Bir hata oluştu.'}</h2>
        <p>{d('errorMessage') ?? 'Ürün listesi yüklenemedi. Lütfen daha sonra tekrar deneyin.'}</p>
        {/* Opsiyonel olarak geliştiriciye yönelik hata kodu gösterilebilir */}
        {errorMessage && <small className="text-muted">Hata Kodu: {errorMessage}</small>}
      </div>
    );
  }

  // Sayfa başlığını daha güvenli bir şekilde hesaplama
  const pageTranslation = page?.pageTranslations?.find((pt) => pt.langCode === locale) ?? translation;

  const pageTitle = pageTranslation?.pageTitle 
    ?? pageTranslation?.title 
    ?? t('title');

  // Detay görünümü kontrolü
  const isDetail = Array.isArray(slug) && slug.length > 1;
  const detailSlug = isDetail ? slug[1] : null;

  // Detay Ürününü Bulma
  const detailProduct: Product | null = isDetail
    ? products.find((p: Product) =>
        p.productTranslations?.some(
          (tr) => tr.langCode === locale && tr.url === detailSlug
        )
      ) ?? null
    : null;

  // -------- Detay Görünüm (Detail View) --------
  if (isDetail) {
    if (!detailProduct) {
      // 2. Next.js notFound() fonksiyonunu kullanarak 404 döndür
      // Bu, otomatik olarak en yakın not-found.tsx dosyasını render eder ve 404 durum kodu verir.
      notFound();
    }

    // Detay görünümü için çeviriyi bulma
    const tr = detailProduct!.productTranslations?.find((x) => x.langCode === locale) as ProductTranslation | undefined;
    
    // 3. Başlık hesaplamasını bir değişkene atayarak tekrarı azaltma
    const detailName = tr?.name ?? detailProduct!.code ?? t('title');

    return (
      <>
        {/* Revize edilmiş başlık kullanımı */}
        <PageTitle title={detailName} currentPage={detailName} />

        <section className="project-section section-padding fix">
          <div className="container">
            <Row>
              <Col md={6}>
                <Card className="mb-4">
                  <Card.Img
                    src={detailProduct!.image1 ?? '/placeholder.jpg'}
                    alt={detailName}
                  />
                </Card>
              </Col>
              <Col md={6}>
                <h1 className="h3 mb-2">{tr?.name ?? detailProduct!.code}</h1>
                {tr?.brief && <p className="mb-3">{tr.brief}</p>}
                {/* Buraya daha fazla detay (description, özellikler vb.) eklenebilir. */}
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
  }

  // -------- Liste Görünüm (List View) --------
  return (
    <>
      <PageTitle title={pageTitle} currentPage={pageTitle} />

      <section className="project-section section-padding fix">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">{t('listTitle') ?? t('title')}</h2> {/* Liste başlığı için ayrı bir çeviri kullanmak daha iyi olabilir. */}
          <Row xs={1} md={3} className="g-4">
            {products.map((product: Product) => {
              const data = product.productTranslations?.find((t) => t.langCode === locale);
              
              // Çeviri verisi olmayan ürünleri listeleme
              if (!data) return null;

              const href = `${pathname}/${data.url}`; // locale’li URL

              return (
                <Col key={product.id}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={product.image1 ?? '/placeholder.jpg'} alt={data.name} />
                    <Card.Body>
                      <Card.Title className="mb-1">{product.code}</Card.Title>
                      <Card.Subtitle className="text-muted mb-2">{data.name}</Card.Subtitle>
                      {data.brief && <Card.Text>{data.brief}</Card.Text>}
                      <Link href={href} className="btn btn-primary">
                        {d('detail') ?? 'Detay'}
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {products.length === 0 && (
              <div className="alert alert-info mt-4">{d('noProducts') ?? 'Gösterilecek ürün bulunmamaktadır.'}</div>
          )}
        </div>
      </section>
    </>
  );
}