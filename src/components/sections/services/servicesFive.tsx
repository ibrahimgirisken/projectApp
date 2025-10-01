'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { serviceThreeData } from "@/db/serviceThreeData"
import ServiceCardTwo from "./serviceCardTwo"
import { Autoplay, Pagination } from "swiper/modules"

const ServicesFive = () => {
    return (
        <section id="services" className="service-section-3 fix section-padding">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    speed={1500}
                    loop
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".dot-2",
                        clickable: true,
                    }}

                    breakpoints={{
                        1199: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {
                        serviceThreeData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <ServiceCardTwo service={service} height={178} width={300} />
                            </SwiperSlide>
                        ))
                    }
                    <div className="swiper-dot-2">
                        <div className="dot-2" />
                    </div>
                </Swiper>
            </div>
        </section >

    )
}

export default ServicesFive