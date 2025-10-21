'use client'
import PageTitle from "@/components/sections/pageTitle"
import { PageTranslation } from "@/features/page/types/page"

const StaticPage = ({translation}:{translation:PageTranslation}) => {
    return (
        <>
            <PageTitle title={translation.pageTitle} currentPage={translation.pageTitle} />
            <section className="project-section section-padding fix">
                <div className="container">
                </div>
            </section>
        </>
    )
}

export default StaticPage