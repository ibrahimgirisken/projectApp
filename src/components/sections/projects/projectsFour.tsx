'use client'
import { projectsFourData } from "@/db/projectsFourData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectCard from "./projectCard"
import SectionTitle from "@/components/ui/sectionTitle"

const ProjectsFour = () => {
    return (
        <section id="projects" className="project-section fix section-padding pt-0 mt-4">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>latest project</SectionTitle.SubTitle>
                    <SectionTitle.Title>Our Latest Work</SectionTitle.Title>
                </SectionTitle>
            </div>
            <Swiper
                spaceBetween={30}
                speed={1500}
                loop
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-3",
                    clickable: true,
                }}
                breakpoints={{
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    650: {
                        slidesPerView: 2,
                    },

                    575: {
                        slidesPerView: 1,
                    },

                    0: {
                        slidesPerView: 1,
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                {projectsFourData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard project={project} height={457} width={457} className="style-2" isIconShow={false} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default ProjectsFour