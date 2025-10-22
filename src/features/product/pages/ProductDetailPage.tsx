import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Product, ProductTranslation } from '../types/product'
import { useLocale } from 'next-intl';
import PageTitle from '@/components/sections/pageTitle';

export default function ProductDetailPage({ params }: { params: Product }) {
  const locale = useLocale();
  const langData = params!.productTranslations?.find((x) => x.langCode === locale) as ProductTranslation;
  const detailName = langData?.name ?? params!.code;
  const imgPath = ('/uploads/products/' + params!.image1);
  return (
        <section className="project-section section-padding fix">
          <div className="container">
                <Row>
                  <Col md={6}>
                    <Card className="mb-4">
                      <Card.Img
                        src={imgPath}
                        alt={detailName}
                      />
                    </Card>
                  </Col>
                  <Col md={6}>
                    <h1 className="h3 mb-2">{langData?.name ?? params!.code}</h1>
                    {langData?.brief && <p className="mb-3">{langData.brief}</p>}
                  </Col>
              </Row>
          </div>
        </section>
  )
}
