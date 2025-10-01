import SectionTitle from "@/components/ui/sectionTitle"
import { teamMembersTwoData } from "@/db/teamMembersTwoData"
import Image from "next/image"
import Link from "next/link"

const TeamesTwo = ({ isTitleShow }: { isTitleShow: boolean }) => {
    return (
        <section id="team" className="team-section-2 section-padding bg-cover" style={{ backgroundImage: 'url("/img/team/bg.jpg")' }}>
            <div className="container">
                {
                    isTitleShow &&
                    <div className="section-title-area">
                        <SectionTitle>
                            <SectionTitle.SubTitle>expert team</SectionTitle.SubTitle>
                            <SectionTitle.Title>our expert team</SectionTitle.Title>
                        </SectionTitle>
                        <Link href="/team" className="theme-btn wow slideUp" data-delay=".5">
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                }
                <div className="row">
                    {teamMembersTwoData.map((member) => (
                        <div
                            key={member.id}
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay={member.delay}
                        >
                            <div className="team-card-items">
                                <div className="team-image">
                                    <Image width={416} height={301} sizes="100vw" src={member.image} alt="team-img" />
                                    <div className="social-profile">
                                        <span className="plus-btn">
                                            <i className="fas fa-share-alt" />
                                        </span>
                                        <ul>
                                            {
                                                member.socialLinks.map(({ icon, link }) => (
                                                    <li key={icon}>
                                                        <Link href={link}>
                                                            <i className={icon} />
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h3>
                                        <Link href="/team-details">{member.name}</Link>
                                    </h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TeamesTwo