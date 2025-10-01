'use client'
import { testimonialFourData } from "@/db/testimonialFourData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import 'swiper/css'
import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"

const TestimonialFour = () => {
    return (
        <section className="testimonial-section-4 fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/section-bg.jpg")' }}>
            <div className="container">
                <div className="testimonial-wrapper-2">
                    <div className="row">
                        <div className="col-lg-5 wow slideUp" data-delay=".4">
                            <div className="tesimonial-image">
                                <Image width={526} height={661} sizes="100vw" src="/img/testimonial/04.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="tesimonial-area">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Testimonials</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Here is Some Clients<br />Feedbacks</SectionTitle.Title>
                                </SectionTitle>
                                <Swiper
                                    speed={1500}
                                    loop
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
                                        1199: {
                                            slidesPerView: 3,
                                        },
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
                                    {testimonialFourData.map((testimonial) => (
                                        <SwiperSlide key={testimonial.id}>
                                            <div className="tesimonial-card-items">
                                                <div className="icon">
                                                    <Image width={45} height={45} src="/img/testimonial/quote.svg" alt="quote" />
                                                </div>
                                                <div className="star">
                                                    {[...Array(testimonial.stars)].map((_, i) => (
                                                        <i className="fas fa-star" key={i} />
                                                    ))}
                                                </div>
                                                <p>{testimonial.quote}</p>
                                                <div className="client-info-items">
                                                    <div className="thumb">
                                                        <Image width={60} height={60} sizes="100vw" src={testimonial.image} alt={testimonial.name} />
                                                    </div>
                                                    <div className="content">
                                                        <h4>{testimonial.name}</h4>
                                                        <p>{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default TestimonialFour