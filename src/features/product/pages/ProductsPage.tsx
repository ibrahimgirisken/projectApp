import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Product } from '../types/product';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function ProductsPage({ params }: { params: Product[] }) {
  const locale = useLocale();
  const d = useTranslations('Others');
  const pathname = usePathname();
  return (
    <Row xs={1} md={3} className="g-4">
      {params.map((product: Product) => {
        const imgPath = `/uploads/products/` + product.image1;
        const data = product.productTranslations?.find((t) => t.langCode === locale);
        if (!data) return null;
        const href = `${pathname}/${data.url}`;
        return (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={imgPath ?? '/placeholder.jpg'} alt={data.name} />
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
  )
}
