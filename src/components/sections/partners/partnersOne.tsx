'use client'
import { partnetsOneData } from "@/db/partnersOneData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import Image from "next/image";
const PartnersOne = ({ className }: { className?: string }) => {
    return (
        <div className={`brand-section fix section-padding ${className}`}>
            <div className="container">
                <div className="brand-wrapper">
                    <h6 className="text-center wow slideUp" data-delay=".3">1k + Brands Trust Us</h6>
                    <Swiper
                        breakpoints={{
                            1199: {
                                slidesPerView: 5,
                            },
                            991: {
                                slidesPerView: 4,
                            },
                            767: {
                                slidesPerView: 3,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        spaceBetween={30}
                        speed={1300}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {
                            partnetsOneData.map(({ id, img }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className="brand-image">
                                            <Image width={153} height={44} sizes="100vw" src={img} alt="brand-img" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default PartnersOne