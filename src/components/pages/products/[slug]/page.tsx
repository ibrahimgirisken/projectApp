'use client';

import { Container } from 'react-bootstrap';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useProductsByUrl } from '@/features/product/hooks/useProducts';
import { ProductTranslation } from '@/features/product/types/product'; // Çeviri tipini import edin

export default function ProductDetailPage() {
  const params = useParams();
  const rawUrl = params?.url || params?.slug; // Rotanızdaki dinamik parametre adını kullanın
  const url = Array.isArray(rawUrl) ? rawUrl[0] : rawUrl;

  const locale = useLocale();
  const { data: product, error } = useProductsByUrl(url as string);

  if (error) {
    return <p>Bir hata oluştu.</p>;
  }
  if (!product) return <div>Ürün bulunamadı.</div>;

  const translation = product.productTranslations.find(
    (t: ProductTranslation) => t.langCode === locale
  );

  return (
    <Container>
      <h1>{product.code}</h1>
      {translation ? (
        <>
          <h2>{translation.name}</h2>
          <p>{translation.brief}</p>
          <div dangerouslySetInnerHTML={{ __html: translation.content }} />
        </>
      ) : (
        <p>Ürün çevirisi bulunamadı.</p>
      )}
    </Container>
  );
}