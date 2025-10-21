'use client'
import PageTitle from "@/components/sections/pageTitle"
import { Page, PageTranslation } from "@/features/page/types/page"
import { useLocale, useTranslations } from "next-intl";
    
interface PageProps{
        page:Page;
        translation:PageTranslation;
 }

    const StaticPage = ({page,translation}:PageProps) => {
    const locale = useLocale();
    const t = useTranslations("Pages");
    const pageTranslation = translation || page?.pageTranslations.find(t => t.langCode === locale);
    const pageTitle = (pageTranslation as any)?.pageTitle || (pageTranslation as any)?.name || t('title');
    return (
        <>
           <PageTitle title={pageTitle} currentPage={pageTitle} />
           
           <section className="project-section section-padding fix">
               <div className="container">
                   {/* Buraya sayfanın açıklama içeriği (brief/content) gelebilir */}
               </div>
           </section>
        </>
    )
}

export default StaticPage