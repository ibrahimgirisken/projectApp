import { teamMembersThreeData } from "@/db/teamMembersThreeData"
import TeamCardTwo from "./teamCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import Link from "next/link"
import Image from "next/image"

const TeamesThree = () => {
    return (
        <section id="team" className="team-section-3 fix section-padding section-bg">
            <div className="line-shape">
                <Image width={465} height={605} sizes="100vw" src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <Image width={366} height={395} sizes="100vw" src="/img/team/mask-shape-2.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Team Members</SectionTitle.SubTitle>
                        <SectionTitle.Title>Our Dedicated Team <br /> Members</SectionTitle.Title>
                    </SectionTitle>
                    <Link href="/team" className="theme-btn wow slideUp" data-delay=".5">
                        All Member
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    {teamMembersThreeData.slice(0, 4).map((member) => (
                        <div
                            key={member.id}
                            className={`col-xl-3 col-lg-4 col-md-6 wow slideUp`}
                            data-delay={member.delay}
                        >
                            <TeamCardTwo member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TeamesThree