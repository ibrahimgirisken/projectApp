import AboutOne from '@/components/sections/about/aboutOne'
import AchievementOne from '@/components/sections/achievements/achievementOne'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import FaqHomeOne from '@/components/sections/faqHomeOne'
import HeroOne from '@/components/sections/heros/heroOne'
import MarqueOne from '@/components/sections/marques/marqueOne'
import MarqueTwo from '@/components/sections/marques/marqueTwo'
import NewsLetter from '@/components/sections/newsLetter'
import PartnersOne from '@/components/sections/partners/partnersOne'
import PriceGridOne from '@/components/sections/pricing/priceGridOne'
import ProjectsOne from '@/components/sections/projects/projectsOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import TeamesOne from '@/components/sections/teames/teamesOne'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'

const Home = () => {
  return (
    <>
      <HeroOne />
      <MarqueOne />
      <AboutOne />
      <PartnersOne className='pt-0' />
      <ServicesOne />
      <AchievementOne />
      <ProjectsOne />
      <MarqueTwo />
      <TestimonialOne />
      <TeamesOne />
      <PriceGridOne />
      <FaqHomeOne />
      <BlogsOne />
      <NewsLetter />
    </>
  )
}

export default Home