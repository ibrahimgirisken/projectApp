'use client';

import { Container } from 'react-bootstrap';
import React from 'react'
import { useProductsBySlugAndLang } from '../hooks/useProducts';

export default function ProductDetailPage({ slug, locale }: { slug: string; locale: string }) {
  const { data: product, isLoading, error } = useProductsBySlugAndLang(slug, locale);

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Ürün bulunamadı.</div>;

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
