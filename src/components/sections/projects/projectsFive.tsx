'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import { projectsThreeData } from "@/db/projectsThreeData"
import ProjectCard from "./projectCard"

const ProjectsFive = () => {
    return (
        <section id="projects" className="project-section section-padding fix">
            <div className="container">
                <div className="project-wrapper ms-0">
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.dot-2',
                            clickable: true,
                        }}
                        breakpoints={{
                            1199: { slidesPerView: 3 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 2 },
                            650: { slidesPerView: 2 },
                            575: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        {projectsThreeData.map((project) => (
                            <SwiperSlide key={project.id}>
                               <ProjectCard project={project} width={410} height={396} className="style-2 mt-0" iconCalss="arrow-icon"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-dot-2">
                        <div className="dot-2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsFive