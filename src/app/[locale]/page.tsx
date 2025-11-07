import React from 'react'
import AboutFour from '@/components/sections/about/aboutFour'
import AchievementTwo from '@/components/sections/achievements/achievementTwo'
import BlogsFour from '@/components/sections/blogs/blogsFour'
import FaqHomeFour from '@/components/sections/faqHomeFour'
import HeroFour from '@/components/sections/heros/heroFour'
import PartnersTwo from '@/components/sections/partners/partnersTwo'
import ProjectsFour from '@/components/sections/projects/projectsFour'
import ServicesFour from '@/components/sections/services/servicesFour'
import TeamesFour from '@/components/sections/teames/teamesFour'
import TestimonialFour from '@/components/sections/testimonials/testimonialFour'
export default function HomePage() {
  return (
    <>
    <HeroFour />
    <PartnersTwo />
    <ServicesFour />
    <AboutFour />
    <ProjectsFour />
    <TeamesFour />
    <TestimonialFour />
    <AchievementTwo className='section-padding pt-0' />
    <FaqHomeFour className='pt-0'/>
    <BlogsFour />
    </>
  )
}
