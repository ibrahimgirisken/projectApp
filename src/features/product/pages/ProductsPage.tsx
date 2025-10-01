'use client';

import { useProductsByLang } from '@/features/product/hooks/useProducts';
import { Row, Col, Card } from 'react-bootstrap';
import { Product } from '@/features/product/types/product';
import { getUseTranslationsSafe } from '@/i18n/getUseTranslationsSafe';

export default function UXProductsPage({ locale }: { locale: string }) {
  const { data: products, isLoading, error } = useProductsByLang(locale);
  const t = getUseTranslationsSafe();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">{t('other.productTitle')}</h1>
      <Row xs={1} md={3} className="g-4">
        {products?.map((product: Product) => {
          const translation = product.productTranslations.find((t) =>
            t.langCode.startsWith(locale)
          );
          if (!translation) return null;

          return (
            <Col key={product.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{product.code}</Card.Title>
                  <Card.Title>{translation.name}</Card.Title>
                  <Card.Text>{translation.brief}</Card.Text>
                  <a
                    className="btn btn-primary"
                    href={`/${t('route.products')}/${translation.url}`}
                  >
                    {t('other.details')}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

