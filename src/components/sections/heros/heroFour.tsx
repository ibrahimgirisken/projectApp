'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Link from "next/link"
import { motion } from "motion/react"

const heroSlides = [
    {
        image: '/img/hero/hero-7.jpg',
        title: 'We Provide our clients Best Solar Services',
        description: 'Transmds is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi',
        link: '/',
    },
    {
        image: '/img/hero/hero-5.jpg',
        title: 'We Provide our clients Best Solar Services',
        description: 'Transmds is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi',
        link: '/',
    },
    {
        image: '/img/hero/hero-9.jpg',
        title: 'We Provide our clients Best Solar Services',
        description: 'Transmds is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi',
        link: '/',
    },
]



const HeroFour = () => {
    return (
        <section className="hero-section hero-1">
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
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {(({ isActive }) => (
                            <>
                                <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-8">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                className="hero-content"
                                            >
                                                <motion.h1
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.3,
                                                        ease: 'linear',
                                                    }}
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.5,
                                                        ease: 'linear',
                                                    }}
                                                    style={{ maxWidth: '820px' }}
                                                >
                                                    {slide.description}
                                                </motion.p>
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    whileInView={{ y: isActive ? '0' : 20, opacity: isActive ? 1 : 0 }}
                                                    transition={{
                                                        duration: .5,
                                                        delay: 0.7,
                                                        ease: 'linear',
                                                    }}
                                                    className="hero-button"
                                                >
                                                    <Link href={slide.link} className="theme-btn theme-color-2" data-animation="slideUp" data-delay="1.7">
                                                        <span>Learn More <i className="fas fa-chevron-right" /></span>
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
        </section>

    )
}

export default HeroFour