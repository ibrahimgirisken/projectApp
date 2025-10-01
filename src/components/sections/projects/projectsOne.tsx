'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { projectsOneData } from "@/db/projectsOneData";
import { Autoplay, Pagination } from "swiper/modules";
import ProjectCard from "./projectCard";

const ProjectsOne = () => {
    return (
        <section id="projects" className="project-section section-padding pt-0 fix">
            <Swiper
                spaceBetween={30}
                speed={1500}
                loop={true}
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
                {projectsOneData.map((project) => (
                    <SwiperSlide key={project.id}>
                      <ProjectCard project={project} height={457} width={457} iconCalss="icon"/>
                    </SwiperSlide>
                ))}
                <div className="swiper-dot-2">
                    <div className="dot-3" />
                </div>
            </Swiper>
        </section >

    )
}

export default ProjectsOne