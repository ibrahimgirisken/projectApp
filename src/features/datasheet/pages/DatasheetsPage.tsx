'use client';

import { Row, Col, Card } from 'react-bootstrap';
import { getUseTranslationsSafe } from '@/i18n/getUseTranslationsSafe';
import { Datasheet } from '../types/datasheet';
import { useDatasheetsByLang } from '../hooks/useDatasheet';

export default function DatasheetsPage({ locale }: { locale: string }) {
    const { data: datasheets, isLoading, error } = useDatasheetsByLang(locale);
    const t = getUseTranslationsSafe();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.productTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {datasheets?.map((datasheet: Datasheet) => {
                    const translation = datasheet.datasheetTranslations.find((t) =>
                        t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;

                    return (
                        <Col key={datasheet.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{datasheet.code}</Card.Title>
                                    <Card.Title>{translation.name}</Card.Title>
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

