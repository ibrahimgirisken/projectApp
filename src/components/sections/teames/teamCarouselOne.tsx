'use client'
import { teamMembersThreeData } from "@/db/teamMembersThreeData"
import TeamCardTwo from "./teamCardTwo"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

const TeamCarouselOne = () => {
  return (
    <section className="team-section-4 fix section-padding">
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
          {teamMembersThreeData.map((member) => (
            <SwiperSlide
              key={member.id}
            >
              <TeamCardTwo member={member} />
            </SwiperSlide>
          ))}
          <div className="swiper-dot-2">
            <div className="dot-2" />
          </div>
        </Swiper>
      </div>
    </section>

  )
}

export default TeamCarouselOne