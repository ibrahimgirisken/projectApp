'use client'
import { blogPostsThreeData } from "@/db/blogPostsThreeData"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { Autoplay, Navigation } from "swiper/modules"
import BlogCard from "./blogCard"
import SectionTitle from "@/components/ui/sectionTitle"

const BlogsThree = () => {
    return (
        <section id="blog" className="news-section-3 fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Latest Blog</SectionTitle.SubTitle>
                        <SectionTitle.Title>Our Latest Blog</SectionTitle.Title>
                    </SectionTitle>
                    <div className="array-button">
                        <button className="array-prev"><i className="fa fa-arrow-right" /></button>
                        <button className="array-next"><i className="fa fa-arrow-left" /></button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    speed={1500}
                    loop
                    autoplay={{
                        delay: 2000,
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
                            slidesPerView: 2,
                        },

                        575: {
                            slidesPerView: 1,
                        },

                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {blogPostsThreeData.map((news) => (
                        <SwiperSlide key={news.id}>
                            <BlogCard news={news} width={410} height={266} className={'style-2'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >

    )
}

export default BlogsThree