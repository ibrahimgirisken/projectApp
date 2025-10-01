import PartnersOne from "@/components/sections/partners/partnersOne"
import PageTitle from "@/components/sections/pageTitle"
import TeamCarouselOne from "@/components/sections/teames/teamCarouselOne"

const TeamCarousel = () => {
    return (
        <>
            <PageTitle title="Team Carousel" currentPage="Team Carousel" />
            <TeamCarouselOne />
            <PartnersOne className="pt-0"/>
        </>
    )
}

export default TeamCarousel