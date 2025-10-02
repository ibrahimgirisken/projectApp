'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { getUseTranslationsSafe } from '@/i18n/getUseTranslationsSafe';
import { Home } from '../types/home';
import { useHomesByLang } from '../hooks/useHomes';

export default function HomePage({ locale }: { locale: string }) {
    const { data: homes, isLoading, error } = useHomesByLang(locale);
    const t = getUseTranslationsSafe();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.pageTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {homes?.map((home: Home) => {
                    const translation = home.homeTranslations.find((t) =>
                        t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;

                    return (
                        <Col key={home.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{translation.title}</Card.Title>
                                    <Card.Title>{translation.url}</Card.Title>
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