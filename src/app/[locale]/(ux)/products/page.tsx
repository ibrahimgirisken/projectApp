'use client';
import { useProducts } from '@/features/product/hooks/useProducts'
import { Row, Col, Card } from 'react-bootstrap';
import  Product  from '@/features/product/types/product';
import { useLocale, useTranslations } from 'next-intl';

function UXProductsPage() {
    const locale = useLocale();
    const { data: products = [], error } = useProducts();
    const t = useTranslations();

    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.productTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((product: Product) => {
                    const translation = product.productTranslations.find(
                        (t) => t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;
                    return (
                        <Col key={product.id}>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{product.code}</Card.Title>
                                    <Card.Title>{translation.name}</Card.Title>
                                    <Card.Text>{translation.brief}</Card.Text>
                                    <a className='btn btn-primary' href={`products/${translation.url}`}>{t('other.details')}</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default UXProductsPage;
