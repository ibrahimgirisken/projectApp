import SectionTitle from "@/components/ui/sectionTitle"
import { SuHands } from "@/lib/icons"
import AboutVideoPopup from "./aboutVideoPopup"
import Link from "next/link"
import Image from "next/image"

const AboutThree = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="about-image">
                                <div className="shape-image">
                                    <Image width={351} height={339} sizes="100vw" src="/img/about/shape.png" alt="shape-img" />
                                </div>
                                <div className="circle-shape">
                                    <Image width={138} height={138} sizes="100vw" src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <Image width={636} height={586} sizes="100vw" src="/img/about/05.png" alt="about-img" />
                                <AboutVideoPopup/>
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
                                            <i className="fa-solid fa-check" />
                                            Branding and design Identity
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Web site Marketing Solutions
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Unlimited Download Data
                                        </li>
                                    </ul>
                                    <div className="icon-items">
                                        <div className="icon">
                                           <SuHands/>
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <span className="count">6,561</span>+
                                            </h2>
                                            <span>Satisfied Clients</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow slideUp" data-delay=".8">
                                        <Link href="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                    <div className="author-icon wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div className="content">
                                            <span>Call Us Now</span>
                                            <h5>
                                                <Link href="tel:+2085550112">+208-555-0112</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutThree