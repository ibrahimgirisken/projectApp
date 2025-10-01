'use client'
import React, { useState } from 'react';
import { teamMembersOneData } from "@/db/teamMembersOneData";
import SectionTitle from '@/components/ui/sectionTitle';
import Link from "next/link"

const TeamesOne = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent, index: number) => {
        setHoveredIndex(index);
        const targetElement = event.currentTarget as HTMLDivElement;
        const contentBox = targetElement.getBoundingClientRect();
        const dx = event.clientX - contentBox.left;
        const dy = event.clientY - contentBox.top;
        setCursorPosition({ x: dx, y: dy });
        console.log(event.clientX)
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <section id="team" className="team-section section-padding pt-0 section-bg-2">
            <div className="line-shape">
                <img src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <img src="/img/team/mask-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle className='text-white'>
                            EXPERT PEOPLE
                        </SectionTitle.SubTitle>
                        <SectionTitle.Title className='text-white'>
                            Dedicated Team Members
                        </SectionTitle.Title>
                    </SectionTitle>
                    <Link href="/team" className="theme-btn hover-white wow slideUp" data-delay=".5">
                        All Member
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="team-wrapper">
                    {teamMembersOneData.map((member, index) => (
                        <div
                            className="team-items bor-bottom pt-0 wow slideUp"
                            data-delay={member.delay}
                            key={member.id}
                            onMouseMove={(event) => handleMouseMove(event, index)}
                            onMouseLeave={handleMouseLeave}
                            style={{ position: 'relative' }}
                        >
                            <div className="team-title">
                                <span>{member.role}</span>
                                <h4>
                                    <Link href="/team-details">{member.name}</Link>
                                </h4>
                            </div>
                            <p style={{ maxWidth: '232px' }}>{member.description}</p>
                            <div
                                className="team-hover d-none d-md-block bg-cover"
                                style={{
                                    position: 'absolute',
                                    backgroundImage: `url(${member.image})`,
                                    transform: hoveredIndex === index ? `translate(${cursorPosition.x}px, ${cursorPosition.y}px) rotate(0)` : 'none'
                                }}
                            />
                            <div className="social-profile">
                                <ul>
                                    {
                                        member.socialLinks.map(({ icon, link }) =>
                                            <li key={icon}><Link href={link}><i className={icon} /></Link></li>
                                        )
                                    }
                                </ul>
                                <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamesOne;