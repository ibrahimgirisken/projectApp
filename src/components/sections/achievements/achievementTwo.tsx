'use client'
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievementData = [
    {
        id: 1,
        icon: '/img/achievement-icon/01.svg',
        count: 6561,
        description: 'Satisfied Clients',
        delay: '.3',
    },
    {
        id: 2,
        icon: '/img/achievement-icon/02.svg',
        count: 600,
        description: 'Finished Projects',
        delay: '.5',
    },
    {
        id: 3,
        icon: '/img/achievement-icon/03.svg',
        count: 250,
        description: 'Skilled Experts',
        delay: '.7',
    },
    {
        id: 4,
        icon: '/img/achievement-icon/04.svg',
        count: 590,
        description: 'Media Posts',
        delay: '.9',
    },
];


const AchievementTwo = ({ achievementWrapperClass, className }: { achievementWrapperClass?: string, className?: string }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });
    return (
        <section className={`achievement-section-2 fix ${className}`}>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass}`}>
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className="text-white">achievement</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">Powering the Future with the Renew</SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" ref={ref}>
                        {achievementData.map((item) => (
                            <div
                                key={item.id}
                                className="counter-items wow slideUp"
                                data-delay={item.delay}
                            >
                                <div className="icon">
                                    <Image width={50} height={50} sizes="100vw" src={item.icon} alt="icon-img" />
                                </div>
                                <div className="content">
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={item.count} /></span>+
                                        </h2>
                                    }
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementTwo