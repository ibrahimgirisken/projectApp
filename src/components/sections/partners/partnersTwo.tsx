'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { Autoplay } from "swiper/modules";

const brandImages = [
    "/img/brand/01.png",
    "/img/brand/02.png",
    "/img/brand/03.png",
    "/img/brand/04.png",
    "/img/brand/01.png",
    "/img/brand/02.png",
    "/img/brand/03.png",
];
const PartnersTwo = () => {
    return (
        <div className="brand-section-2 fix section-padding">
            <div className="container">
                <div className="brand-wrapper-2">
                    <Swiper
                        spaceBetween={30}
                        speed={1300}
                        loop
                        centeredSlides
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
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
                        modules={[Autoplay]}
                    >
                        {brandImages.map((imageSrc, index) => (
                            <SwiperSlide key={index}>
                                <div className="brand-img">
                                    <img src={imageSrc} alt={`Brand ${index + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div >

    )
}

export default PartnersTwo