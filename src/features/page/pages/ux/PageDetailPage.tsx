'use client';

import React from 'react'
import { usePagesByUrl } from '@/features/page/hooks/usePages';
import Project from '@/components/pages/project/page';

export default function PageDetail({slug,locale}:{slug:string,locale:string}) {
      const { data: page, isLoading, error } = usePagesByUrl(slug);
  

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Ürün bulunamadı.</div>;

    const translation = page?.pageTranslations.find(t => t.langCode==locale);
      if (!translation) return <div>Bu sayfa için {locale} çevirisi bulunamadı.</div>;
  return (
    <>
      <Project translate={translation}/>
       {translation && (
        <>
          <h2>{translation.title}</h2>
          <p>{translation.brief}</p>
          <div dangerouslySetInnerHTML={{ __html: translation.content }} />
        </>
      )}
    </>
  )
}
