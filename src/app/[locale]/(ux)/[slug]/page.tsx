'use client'
import { PageTypeComponents } from '@/components/PageTypeComponents'
import { usePages } from '@/features/page/hooks/usePages'
import { Page, PageTranslation } from '@/features/page/types/page'
import { useLocale } from 'next-intl'
import React from 'react'


export default function RoutePage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const { data: pages, isLoading, error } = usePages()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Hata oluştu</div>

    const langCode = useLocale();

    // URL'den gelen slug ile sayfayı bul
    const page: Page | undefined = pages?.find(p =>
        p.pageTranslations.some(t => t.url === slug)
    )
    
    if (!page) return <div>Sayfa bulunamadı</div>
    
    
    // 2. pageType'a karşılık gelen bileşeni dinamik olarak haritadan çekin
    const ContentComponent = PageTypeComponents[page.pageType];

    // Eğer bileşen haritada tanımlı değilse hata verin
    if (!ContentComponent) {
        return <div>Hata: Tanımlanmamış Sayfa Tipi: {page.pageType}</div>;
    }
    const translation=page.pageTranslations.find(l=>l.langCode==langCode);
    // 3. Bileşeni render edin ve gerekli verileri (page, translation) prop olarak aktarın
    return (
        <>
            {/* ContentComponent bir React bileşen değişkenidir. 
              JSX içinde büyük harfli etiket olarak kullanılabilir.
            */}
            <ContentComponent 
                page={page.pageType} 
                translation={translation} // Ek bilgi: slug'ı da göndermek faydalı olabilir
            />
        </>
    )
}