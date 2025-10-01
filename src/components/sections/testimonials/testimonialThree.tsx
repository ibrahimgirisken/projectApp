'use client'
import { testimonialsTwoData } from "@/db/testimonialsTwoData"
import { Swiper, SwiperSlide } from "swiper/react"
import TestimonialCard from "./testimonialCard"
import { Autoplay, Navigation } from "swiper/modules"
import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"

const TestimonialThree = () => {
    return (
        <section className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
            <div className="line-shape">
                <Image width={465} height={605} sizes="100vw" src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <Image width={343} height={610} sizes="100vw" src="/img/team/mask-shape.png" alt="shape-img" />
            </div>
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle className="text-white">Testimonials</SectionTitle.SubTitle>
                    <SectionTitle.Title className="text-white">Here is Some Clients<br />Feedbacks</SectionTitle.Title>
                </SectionTitle>
                <Swiper
                    speed={1500}
                    loop={true}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    breakpoints={{
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 1,
                        },

                        575: {
                            slidesPerView: 1,
                        },

                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {testimonialsTwoData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    )
}

export default TestimonialThree