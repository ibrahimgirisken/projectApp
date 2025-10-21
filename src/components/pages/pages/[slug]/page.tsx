'use client'
import React from 'react'
import { usePages } from '@/features/page/hooks/usePages'
import { Page, PageTranslation } from '@/features/page/types/page'
import { useLocale } from 'next-intl'
import Project from '@/app/[locale]/(ux)/project/page';

export default function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { data: pages, isLoading, error } = usePages() // cache’lenmiş tüm sayfalar

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Hata oluştu</div>

  // URL’den gelen slug ile sayfayı bul
  const page: Page | undefined = pages?.find(p =>
    p.pageTranslations.some(t => t.url === slug)
  )

  if (!page) return <div>Sayfa bulunamadı</div>

  // Kullanıcı dilini seç (örneğin 'tr')
  const langCode = useLocale();
  const translation: PageTranslation | undefined = page.pageTranslations.find(
    t => t.langCode === langCode
  )

  if (!translation) return <div>Sayfa çevirisi bulunamadı</div>

  return (
   <>
   <Project translation={translation}  />;
   </>
  )
}
