'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from "motion/react"
import Link from "next/link";

const heroSlides = [
    {
        id: 1,
        image: '/img/hero/hero-5.jpg',
        title: 'Powering the Future with Renewable',
        link: '/project-details',
    },
    {
        id: 2,
        image: '/img/hero/hero-6.jpg',
        title: 'Powering the Future with Renewable',
        link: '/project-details',
    },
    {
        id: 3,
        image: '/img/hero/hero-7.jpg',
        title: 'Powering the Future with Renewable',
        link: '/project-details',
    },
];
const HeroThree = () => {
    return (
        <section className="hero-section hero-3">
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <Swiper
                loop={true}
                slidesPerView={1}
                effect="fade"
                speed={3000}
                autoplay={{
                    delay: 7000,
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
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id} >

                        {(({ isActive }) => (
                            <>
                                <div
                                    className="hero-image bg-cover"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                className="hero-content text-center"
                                            >
                                                <motion.h1
                                                    className="text-white"
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.3,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                <motion.div
                                                    initial={{ y: 40, opacity: 0 }}
                                                    animate={{ y: isActive ? '0' : 40, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.5,
                                                        ease: 'linear',
                                                    }}
                                                    className="hero-button"
                                                >
                                                    <Link
                                                        href={slide.link}
                                                        className="theme-btn hover-white"
                                                    >
                                                        VIEW OUR PROJECTS
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >

    )
}

export default HeroThree