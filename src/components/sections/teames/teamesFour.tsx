import SectionTitle from "@/components/ui/sectionTitle"
import { teamMembersFourData } from "@/db/teamMembersFourData"
import Image from "next/image"
import Link from "next/link"

const TeamesFour = () => {
    return (
        <section id="team" className="team-section-4 fix section-padding pt-0">
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
                    {teamMembersFourData.map((member) => (
                        <div
                            key={member.id}
                            className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
                            data-delay={member.delay}
                        >
                            <div className="team-box-items">
                                <div className="team-image">
                                    <Image width={334} height={334} sizes="100vw" src={member.image} alt="team-img" />
                                </div>
                                <div className="team-content">
                                    <h3>
                                        <Link href="/team-details">{member.name}</Link>
                                    </h3>
                                    <p>{member.role}</p>
                                    <div className="social-icon d-flex align-items-center">
                                        {
                                            member.socialLinks.map(({ icon, link }) => (
                                                <Link key={icon} href={link}>
                                                    <i className={icon} />
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TeamesFour