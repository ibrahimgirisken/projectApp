'use client';
import { Category } from '@/features/category/types/category';
import { categoryService } from '@/features/category/api/categoryService';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

export default function CategoryDetailPage({ params }: { params: { locale: string, slug: string } }) {
    const { locale, slug } = params;
    const [category, setCategory] = React.useState<Category>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        categoryService.getByUrlAndLang(slug as string, locale as string)
            .then(setCategory)
            .finally(() => setLoading(false));
    }, [slug, locale]);

    if (loading) return <div>Yükleniyor...</div>;
    if (!category) return <div>Kategori bulunamadı.</div>;

    const translation = category.categoryTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <>
            <h1>{category?.id}</h1>
            <Container>
                {category ? category.categoryTranslations.map((translation) => (
                    <div key={translation.langCode}>
                        <h2>{translation.brief}</h2>
                        <p>{translation.brief}</p>
                        <p>{translation.name}</p>
                    </div>
                )) : null}
            </Container>
        </>
    )
}
