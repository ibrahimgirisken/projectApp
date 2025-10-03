'use client';

import { usePagesByUrlAndLang } from '../hooks/usePages';
import Project from '@/app/(innerPage)/project/page';

export default function ProductDetailPage({ slug, locale }: { slug: string; locale: string }) {

    const { data: page, isLoading, error } = usePagesByUrlAndLang(slug, locale);



    if (isLoading) return <div>Yükleniyor...</div>;
    if (!page) return <div>Ürün bulunamadı.</div>;

    const translation = page.pageTranslations.find(t => t.langCode.startsWith(locale));

    return (
        <>
            <Project/>
            <h1>{page.id}</h1>
            {translation && (
                <>
                    <h2>{translation.title}</h2>
                    <p>{translation.brief}</p>
                    <div dangerouslySetInnerHTML={{ __html: translation.content }} />
                </>
            )}
        </>
    );
}
