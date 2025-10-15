'use client';
import HeaderFour from '@/components/headers/headerFour'
import Footer from '@/components/sections/footer'
import { usePagesByLang } from '@/features/page/hooks/usePages'
import { useLocale } from 'next-intl';
import React from 'react'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const locale = useLocale();
    const { data: menu = [], isLoading, error } = usePagesByLang(locale);

    if (isLoading) return <div>Menü yükleniyor…</div>;
    if (error) return <div>Menü yüklenirken hata oluştu.</div>;
    return (
        <>
            <HeaderFour menu={menu} locale={locale} />
            {children}
            <Footer menu={menu}/>
        </>
    )
}
