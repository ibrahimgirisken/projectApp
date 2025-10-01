import Image from "next/image"
import SectionTitle from "../ui/sectionTitle"

const ChooseUs = () => {
    return (
        <section className="choose-us-section fix section-padding">
            <div className="choose-shape">
                <img src="/img/choose/shape.png" alt="shape-img" />
            </div>
            <div className="bottom-shape">
                <img src="/img/choose/bottom-shape.png" alt="shape-img" />
            </div>
            <div className="arrow-shape-1 bounce-x">
                <img src="/img/choose/arrow-shape-1.png" alt="shape-img" />
            </div>
            <div className="circle-shape">
                <img src="/img/choose/circle.png" alt="shape-img" />
            </div>
            <div className="line-shape">
                <img src="/img/choose/line-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="choose-us-image wow slideUp" data-delay=".4">
                                <Image width={421} height={570} sizes="100vw" src="/img/choose/01.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="choose-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>WHY CHOOSE US</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Harnessing The Sun <br />The Bright Choice For Future</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    It is a long established fact that a reader will be distracted the readable <br /> content of a page when looking at layout the point.
                                </p>
                                <div className="choose-list-area">
                                    <ul className="choose-list wow slideUp" data-delay=".7">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Branding and design Identity
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Web site Marketing Solutions
                                        </li>
                                    </ul>
                                    <ul className="choose-list wow slideUp" data-delay=".9">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            24/7 system Monitoring
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            unlimited Download Data
                                        </li>
                                    </ul>
                                </div>
                                <div className="progress-wrap">
                                    <div className="pro-items wow slideUp" data-delay=".5">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Startup Consultancy
                                            </h6>
                                            <span className="point">
                                                86%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value" />
                                        </div>
                                    </div>
                                    <div className="pro-items wow slideUp" data-delay=".7">
                                        <div className="pro-head">
                                            <h6 className="title">
                                                Smart AI Soultions
                                            </h6>
                                            <span className="point">
                                                92%
                                            </span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-value style-two" />
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

export default ChooseUs