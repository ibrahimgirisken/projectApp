'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialsOneData } from "@/db/testimonialsOneData";
import { Autoplay, Pagination } from "swiper/modules";
const TestimonialOne = () => {
    return (
        <section className="testimonial-section section-padding fix">
            <div className="container">
                <div className="testimonial-wrapper">
                    <Swiper
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
                        modules={[Pagination, Autoplay]}
                    >
                        {testimonialsOneData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-items">
                                    <div
                                        className="tesimonial-image bg-cover"
                                        style={{ backgroundImage: `url(${testimonial.image})` }}
                                    >
                                        <div className="star">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <i className="fas fa-star" key={i} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-title">
                                            <span>{testimonial.title}</span>
                                            <h2>{testimonial.heading}</h2>
                                        </div>
                                        <p className="mt-3 mt-md-0">{testimonial.content}</p>
                                        <div className="author-details">
                                            <h5>{testimonial.author}</h5>
                                            <span>{testimonial.position}</span>
                                        </div>
                                    </div>
                                </div>
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

export default TestimonialOne