import React, { useEffect, useState } from 'react'
import { moduleService } from '../api/moduleService';
import { Module } from '../types/module';
import { Container } from 'react-bootstrap';

export default function ModulesDetailPage({ id, locale }: { id: string, locale: string }) {
    const [module, setModule] = useState<Module | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id || !locale) return;
        moduleService.getById(id)
            .then(setModule)
            .catch((err) => {
                console.error('Modül yok:', err);
                setModule(null);
            })
            .finally(() => setLoading(false));
    }, [id, locale]);

    if (loading) return <div>Yükleniyor...</div>
    if (!module) return <div>Modül bulunamadı.</div>

    const translation = module.moduleTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <Container>
            <h1>{translation?.name}</h1>
            {translation && (
                <>
                    <h2>{translation.name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: translation.moduleData }} />
                </>
            )}
        </Container>
    )
}

