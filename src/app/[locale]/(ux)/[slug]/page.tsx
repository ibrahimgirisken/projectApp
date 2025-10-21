'use client'
import { PageTypeComponents } from '@/components/PageTypeComponents'
import { usePages } from '@/features/page/hooks/usePages'
import { Page, PageTranslation } from '@/features/page/types/page'
import { useLocale } from 'next-intl'
import React from 'react'

export default function RoutePage({ params }: { params: { slug: string } }) {
    
    const { slug } = params
    const { data: pages, isLoading, error } = usePages()
    const langCode = useLocale();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Hata oluştu</div>

    const page: Page | undefined = pages?.find(p =>
        p.pageTranslations.some(t => t.url === slug)
    )

    if (!page) return <div>Sayfa bulunamadı</div>

    const ContentComponent = PageTypeComponents[page.pageType];
    
    if (!ContentComponent) {
        return <div>Hata: Tanımlanmamış Sayfa Tipi: {page.pageType}</div>;
    }
    
    const translation: PageTranslation | undefined = page.pageTranslations.find(
        l => l.langCode === langCode
    );

    let translationProp: PageTranslation | undefined = undefined; 
    if (page.pageType === 'static' && translation) {
        translationProp = translation;
    }
    return (
        <>
            <ContentComponent
                page={page} 
                translation={translationProp} 
            />
        </>
    )
}