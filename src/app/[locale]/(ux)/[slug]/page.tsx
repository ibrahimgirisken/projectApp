'use client'
import { PageTypeComponents } from '@/components/PageTypeComponents'
import { usePages } from '@/features/page/hooks/usePages'
import { Page, PageTranslation } from '@/features/page/types/page'
import { useLocale } from 'next-intl'
import React from 'react'

export default function RoutePage({ params }: { params: { slug: string } }) {
    
    // **********************************
    // 1. Hook Çağrıları (Her zaman en üstte ve koşulsuz)
    // **********************************
    const { slug } = params
    const { data: pages, isLoading, error } = usePages()
    const langCode = useLocale(); // useLocale artık koşulsuz çağrılıyor

    // **********************************
    // 2. Erken Çıkışlar
    // **********************************
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Hata oluştu</div>

    // URL'den gelen slug ile sayfayı bulun
    const page: Page | undefined = pages?.find(p =>
        p.pageTranslations.some(t => t.url === slug)
    )

    if (!page) return <div>Sayfa bulunamadı</div>

    // Sayfanın pageType'ına karşılık gelen bileşeni çekin
    const ContentComponent = PageTypeComponents[page.pageType];
    
    // GEREKSİZ İF BLOĞU KALDIRILDI: if(page.pageType=="Static") { }

    if (!ContentComponent) {
        return <div>Hata: Tanımlanmamış Sayfa Tipi: {page.pageType}</div>;
    }
    
    // İlgili dile ait çeviri verisini bulun
    const translation: PageTranslation | undefined = page.pageTranslations.find(
        l => l.langCode === langCode
    );

    // **********************************
    // 3. Prop Hazırlığı
    // **********************************

    // translationProp, PageTranslation veya undefined olabilir. Başlangıçta undefined.
    let translationProp: PageTranslation | undefined = undefined; 
    
    // Sadece 'static' sayfalarda ve çeviri verisi varsa, translationProp'u ata
    // NOT: TypeScript'te case-sensitivity önemlidir ('static' vs "Static"). 
    if (page.pageType === 'static' && translation) {
        translationProp = translation;
    }
    
    return (
        <>
            <ContentComponent
                // DÜZELTME: Component'e sadece pageType stringini değil, tüm Page objesini gönderin.
                page={page} 
                
                // translationProp, yukarıdaki koşula göre ya PageTranslation ya da undefined olacaktır.
                translation={translationProp} 
            />
        </>
    )
}