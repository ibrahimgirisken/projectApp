'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Link from "next/link"
import { motion } from "motion/react"
import { useBanner } from "@/features/banner/hooks/useBanner"
import { useLocale } from "next-intl"

const HeroFour = () => {
    const { data: banners = [], error } = useBanner();
    const locale = useLocale();
    if (error) return <div>Menü yüklenirken hata oluştu.</div>;
    const resolveBannerSrc = (img?: string) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  return `/uploads/banners/${img}`;
};
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
                {banners.map((slide, index) => {
                    const langData = slide.bannerTranslations.find((t) => t.langCode === locale);
                    slide.bannerTranslations?.[0];
                    return (
                        <SwiperSlide key={index}>
                            {(({ isActive }) => (
                                <>
                                    <div className="hero-image bg-cover" style={{ backgroundImage: `url(${resolveBannerSrc(slide.desktopImage)})` }} />
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
                                                        {langData?.title}
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
                                                        {langData?.content}
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
                                                        <Link
                                                            href={langData?.url ?? "#"}
                                                            className="theme-btn theme-color-2"
                                                            data-animation="slideUp"
                                                            data-delay="1.7"
                                                        >
                                                            <span>
                                                                {langData?.title ?? "Learn More"} <i className="fas fa-chevron-right" />
                                                            </span>      </Link>

                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>

    )
}

export default HeroFour