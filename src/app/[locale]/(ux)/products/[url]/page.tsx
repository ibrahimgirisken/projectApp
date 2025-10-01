'use client';

import { Container } from 'react-bootstrap';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useProductById } from '@/features/product/hooks/useProducts';

export default function ProductDetailPage() {
  const params = useParams();
  const rawUrl = params?.url;
  const url = Array.isArray(rawUrl) ? rawUrl[0] : rawUrl;
  const locale = useLocale();
  const { data: product, isLoading, error } = useProductById(url as string);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) {
    return <p>Bir hata oluştu.</p>;
  }
  if (!product) return <div>Ürün bulunamadı.</div>;

  const translation = product.productTranslations.find(t => t.langCode.startsWith(locale));

  return (
    <Container>
      <h1>{product.code}</h1>
      {translation && (
        <>
          <h2>{translation.name}</h2>
          <p>{translation.brief}</p>
          <div dangerouslySetInnerHTML={{ __html: translation.content }} />
        </>
      )}
    </Container>
  );
}
