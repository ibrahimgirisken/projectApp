import { TeamMemberDataType } from "@/db/teamMembersOneData"
import Image from "next/image"
import Link from "next/link"

const TeamCardTwo = ({ member }: { member: TeamMemberDataType }) => {
    return (
        <div className="single-team-items">
            <div className="team-image">
                <Image width={306} height={280} sizes="100vw" src={member.image} alt="team-img" />
                <div className="social-profile">
                    <ul>
                        {
                            member.socialLinks.map(({icon, link}) => (
                                <li key={icon}>
                                    <Link href={link}>
                                        <i className={icon} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                    </span>
                </div>
            </div>
            <div className="team-content text-center">
                <h3>
                    <Link href="/team-details">{member.name}</Link>
                </h3>
                <p>{member.role}</p>
            </div>
        </div>
    )
}

export default TeamCardTwo