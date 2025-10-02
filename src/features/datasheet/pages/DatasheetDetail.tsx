'use client';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { datasheetService } from '../api/datasheetService';
import { Datasheet } from '../types/datasheet';

export default function DatasheetDetail({ slug, locale }: { slug: string; locale: string }) {

    const [datasheet, setDatasheet] = useState<Datasheet | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug || !locale) return;

        datasheetService.getByUrlAndLang(slug, locale)
            .then(setDatasheet)
            .catch((err) => {
                console.error('Ürün getirilemedi:', err);
                setDatasheet(null);
            })
            .finally(() => setLoading(false));
    }, [slug, locale]);


    if (loading) return <div>Yükleniyor...</div>;
    if (!datasheet) return <div>Ürün bulunamadı.</div>;

    const translation = datasheet.datasheetTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <Container>
            <h1>{datasheet.code}</h1>
            {translation && (
                <>
                    <h2>{translation.name}</h2>
                    <p>{translation.path}</p>
                    <div dangerouslySetInnerHTML={{ __html: translation.content }} />
                </>
            )}
        </Container>
    );
}
