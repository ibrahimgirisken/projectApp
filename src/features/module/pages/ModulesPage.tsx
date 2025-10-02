'use client';
import React from 'react'
import { useModulesByLang } from '../hooks/useModules';
import { getUseTranslationsSafe } from '@/i18n/getUseTranslationsSafe';
import { Card, Col, Row } from 'react-bootstrap';
import { Module } from '../types/module';

export default function UXModulesPage({ locale }: { locale: string }) {
    const { data: modules, isLoading, error } = useModulesByLang(locale);
    const t = getUseTranslationsSafe();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error:{error.message}</div>
    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">{t('other.productTitle')}</h1>
            <Row xs={1} md={3} className="g-4">
                {modules?.map((module: Module) => {
                    const translation = module.moduleTranslations.find((t) =>
                        t.langCode.startsWith(locale)
                    );
                    if (!translation) return null;

                    return (
                        <Col key={module.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{module.id}</Card.Title>
                                    <Card.Title>{translation.name}</Card.Title>
                                    <a
                                        className="btn btn-primary"
                                        href={`/${t('route.modules')}/${module.id}`}
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
    )
}
