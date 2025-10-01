'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { testimonialsTwoData } from "@/db/testimonialsTwoData";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "./testimonialCard";
import SectionTitle from "@/components/ui/sectionTitle";

const TestimonialTwo = () => {
    return (
        <section className="tesimonial-section-2 pb-0 section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/bg.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle className="text-white">Testimonials</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">Here is Some Clients<br />Feedbacks</SectionTitle.Title>
                    </SectionTitle>
                    <div className="array-button wow slideUp" data-delay=".5">
                        <button className="array-prev border-white"><i className="fa fa-arrow-right" /></button>
                        <button className="array-next"><i className="fa fa-arrow-left" /></button>
                    </div>
                </div>
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
                            <TestimonialCard testimonial={testimonial}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section >

    )
}

export default TestimonialTwo