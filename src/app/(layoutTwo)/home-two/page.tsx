import AboutTwo from "@/components/sections/about/aboutTwo"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import BlogsTwo from "@/components/sections/blogs/blogsTwo"
import ChooseUs from "@/components/sections/chooseUs"
import HomeContactOne from "@/components/sections/contact/homeContactOne"
import HeroTwo from "@/components/sections/heros/heroTwo"
import MarqueThree from "@/components/sections/marques/marqueThree"
import Offer from "@/components/sections/offer"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsTwo from "@/components/sections/projects/projectsTwo"
import ServicesTwo from "@/components/sections/services/servicesTwo"
import TeamesTwo from "@/components/sections/teames/teamesTwo"
import TestimonialTwo from "@/components/sections/testimonials/testimonialTwo"

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <ServicesTwo/>
      <AboutTwo/>
      <MarqueThree/>
      <Offer/>
      <ProjectsTwo/>
      <PartnersOne/>
      <TeamesTwo isTitleShow={true}/>
      <ChooseUs/>
      <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2"/>
      <HomeContactOne/>
      <TestimonialTwo/>
      <BlogsTwo/>
    </>
  )
}

export default HomeTwo