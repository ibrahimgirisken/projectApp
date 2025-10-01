import AboutThree from "@/components/sections/about/aboutThree"
import AchievementTwo from "@/components/sections/achievements/achievementTwo"
import BlogsThree from "@/components/sections/blogs/blogsThree"
import HeroThree from "@/components/sections/heros/heroThree"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsThree from "@/components/sections/projects/projectsThree"
import ServicesThree from "@/components/sections/services/servicesThree"
import TeamesThree from "@/components/sections/teames/teamesThree"
import TestimonialThree from "@/components/sections/testimonials/testimonialThree"
import WorkProcess from "@/components/sections/workProcess"

const HomeThree = () => {
  return (
    <>
        <HeroThree/>
        <AboutThree/>
        <PartnersOne className="pt-0"/>
        <ServicesThree/>
        <WorkProcess/>
        <AchievementTwo achievementWrapperClass="style-2" className="section-bg-2"/>
        <ProjectsThree/>
        <MarqueTwo className="section-padding"/>
        <TeamesThree/>
        <TestimonialThree/>
        <BlogsThree/>
    </>
  )
}

export default HomeThree