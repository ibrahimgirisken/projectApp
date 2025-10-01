'use client'
import { serviceOneData } from "@/db/serviceOneData"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import Link from "next/link"

const ServicesOne = () => {
  return (
    <section id="services" className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}>
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>
              Provide Comprehensive Ecological<br /> Service
            </SectionTitle.Title>
          </SectionTitle>
          <div className="array-button">
            <button className="array-prev"><i className="fa fa-arrow-right" /></button>
            <button className="array-next"><i className="fa fa-arrow-left" /></button>
          </div>
        </div>
        <div className="service-wrapper">
          <Swiper
            spaceBetween={30}
            speed={1500}
            loop
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
            modules={[Navigation]}
          >
            {serviceOneData.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="service-text wow slideUp" data-delay=".4">
            <h6>
              Solar Power System.  <Link href="/service">View Services </Link>
            </h6>
          </div>
        </div>
      </div >
    </section >

  )
}

export default ServicesOne