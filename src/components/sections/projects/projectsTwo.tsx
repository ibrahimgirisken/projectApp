'use client'
import { projectsTwoData } from "@/db/projectsTwoData"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ProjectCard from "./projectCard"
import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"

const ProjectsTwo = () => {
    return (
        <section id="projects" className="project-section-2 section-padding fix">
            <div className="left-shape">
                <Image width={873} height={395} sizes="100vw" src="/img/project/left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
                <Image width={419} height={517} sizes="100vw" src="/img/project/right-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>LATEST PROJECT</SectionTitle.SubTitle>
                        <SectionTitle.Title>Our Latest Project</SectionTitle.Title>
                    </SectionTitle>
                    <div className="array-button wow slideUp" data-delay=".5">
                        <button className="array-prev"><i className="fa fa-arrow-right" /></button>
                        <button className="array-next"><i className="fa fa-arrow-left" /></button>
                    </div>
                </div>
                <div className="project-wrapper">
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".dot-2",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".array-prev",
                            prevEl: ".array-next",
                        }}
                        breakpoints={{
                            1199: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 2,
                            },

                            575: {
                                slidesPerView: 1,
                            },

                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                    >

                        {projectsTwoData.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard project={project} height={488} width={505} className="style-2" iconCalss="icon" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </section >

    )
}

export default ProjectsTwo