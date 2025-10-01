import PageTitle from "@/components/sections/pageTitle"
import ProjectCard from "@/components/sections/projects/projectCard"
import { projectsFourData } from "@/db/projectsFourData"

const Project = () => {
    return (
        <>
            <PageTitle title="Project" currentPage="Project" />
            <section className="project-section section-padding fix">
                <div className="container">
                    <div className="row g-4">
                        {projectsFourData.map((project) => (
                            <div key={project.id} className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay={project.delay}>
                                <ProjectCard project={project} width={414} height={457} className="style-2" isIconShow={false}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project