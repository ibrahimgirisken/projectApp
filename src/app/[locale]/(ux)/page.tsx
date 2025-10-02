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
import React from 'react';

export default async function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
        <HeroThree/>
    </>
  );
}
