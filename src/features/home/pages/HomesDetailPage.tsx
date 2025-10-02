'use client';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Home } from '../types/home';
import { homeService } from '../api/homeService';

export default function HomeDetailPage({ slug, locale }: { slug: string; locale: string }) {

    const [home, setHome] = useState<Home | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug || !locale) return;

        homeService.getByUrlAndLang(slug, locale)
            .then(setHome)
            .catch((err) => {
                console.error('Sayfa getirilemedi:', err);
                setHome(null);
            })
            .finally(() => setLoading(false));
    }, [slug, locale]);


    if (loading) return <div>Yükleniyor...</div>;
    if (!home) return <div>Ürün bulunamadı.</div>;

    const translation = home.homeTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <Container>
            <h1>{home.id}</h1>
            {translation && (
                <>
                    <h2>{translation.title}</h2>
                    <p>{translation.url}</p>
                    <div dangerouslySetInnerHTML={{ __html: translation.content }} />
                </>
            )}
        </Container>
    );
}
