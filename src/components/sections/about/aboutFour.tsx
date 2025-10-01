import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"
import Link from "next/link"

const AboutFour = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover pt-0 mb-2">
            <div className="container">
                <div className="about-wrapper-2 style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-2 wow slideUp" data-delay=".4">
                                <Image width={633} height={568} sizes="100vw" src="/img/about/06.png" alt="about-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>ABOUT US</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Welcome To Solaren Solar Power Energy System</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.
                                </p>
                                <div className="icon-area wow slideUp" data-delay=".7">
                                    <ul className="list">
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Branding and design Identity
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Web site Marketing Solutions
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Unlimited Download Data
                                        </li>
                                    </ul>
                                    <ul className="list">
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Branding and design Identity
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Web site Marketing Solutions
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-circle-check" />
                                            Unlimited Download Data
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-button wow slideUp" data-delay=".9">
                                    <Link href="/about" className="theme-btn">
                                        Explore More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutFour