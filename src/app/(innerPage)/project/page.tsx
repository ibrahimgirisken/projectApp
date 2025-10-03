import PageTitle from "@/components/sections/pageTitle"
import { PageTranslation } from "@/features/page/types/page"

const Project = ({translate}:{translate:PageTranslation}) => {
    return (
        <>
            <PageTitle title={translate.pageTitle} currentPage={translate.pageTitle} />
            <section className="project-section section-padding fix">
                <div className="container">
                </div>
            </section>
        </>
    )
}

export default Project