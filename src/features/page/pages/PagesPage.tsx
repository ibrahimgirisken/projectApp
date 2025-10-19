'use client';

import { usePagesByLang } from '../hooks/usePages';
import { Row, Col, Card } from 'react-bootstrap';
import { Page } from '../types/page';
import { useTranslations } from 'next-intl';

export default function UXPage({ locale }: { locale: string }) {
    const { data: products, isLoading, error } = usePagesByLang(locale);
    const t = useTranslations('Navigation');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.pageTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {products?.map((page: Page) => {
                    const translation = page.pageTranslations.find((t) =>
                        t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;

                    return (
                        <Col key={page.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{translation.title}</Card.Title>
                                    <Card.Title>{translation.url}</Card.Title>
                                    <Card.Text>{translation.brief}</Card.Text>
                                    <a
                                        className="btn btn-primary"
                                        href={`/${t('products')}/${translation.url}`}
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