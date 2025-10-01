import PageTitle from "@/components/sections/pageTitle"
import Image from "next/image"
import Link from "next/link"

const TeamDetails = () => {
    return (
        <>
            <PageTitle currentPage="Team Details" title="Team Details" />
            <section className="team-details-section fix section-padding">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-5">
                                <div className="team-details-image">
                                    <Image width={526} height={590} sizes="100vw" src="/img/team/details.jpg" alt="team-img" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="team-details-content">
                                    <div className="details-info">
                                        <h3>Kathryn Murphy</h3>
                                        <span>Software Engineer</span>
                                    </div>
                                    <p className="mt-3">
                                        Mauris sapien neque, placerat ut dolor nec, egestas tincidunt felis. Sed in ornare quam, finibus dui aliquam justo duis eros quam, semper at libero sed, vehicula the  consequat arcu. In ornare, enim at egestas bibendum, ligula ante congue arcu, sed ornare sem nulla is nec magna. Morbi faucibus.
                                    </p>
                                    <div className="progress-area mt-4">
                                        <div className="progress-wrap">
                                            <div className="pro-items">
                                                <div className="pro-head">
                                                    <h6 className="title">
                                                        Web Development
                                                    </h6>
                                                    <span className="point">
                                                        90%
                                                    </span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-value" />
                                                </div>
                                            </div>
                                            <div className="pro-items">
                                                <div className="pro-head">
                                                    <h6 className="title">
                                                        Technology Consultant
                                                    </h6>
                                                    <span className="point">
                                                        95%
                                                    </span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-value style-two" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-icon">
                                        <span>Social Media:</span>
                                        <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link href="#" className="active"><i className="fa-brands fa-twitter" /></Link>
                                        <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                        <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-single-history pt-5">
                            <div className="title">
                                <h3>Solar Background</h3>
                            </div>
                            <h5 className="pt-5">Diploma in Web Design <span>2012 - 2014</span></h5>
                            <p className="mt-3">
                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the is quis nostrud vitae exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit The is ipsum dolor sit amet consectetur nulla adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat..
                            </p>
                            <h5 className="pt-5">Degree in UI/UX Design <span>2015 - 2016 </span></h5>
                            <p className="mt-3">
                                Duis ac ligula vel enim vehicula semper. Praesent diam enim, ultricies sed pharetra in, vestibulum eget elit. Praesent condimentum, eros vitae feugiat faucibus, elit arcu commodo orci, et sodales orci lacus vel urna. Nullam sodales rhoncus nulla, quis gravida mauris blandit ut. Cras a massa non neque faucibus porta id et leo. Nunc sit amet volutpat libero. Maecenas aliquet blandit libero sit amet efficitur. Nam mauris nisi,
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TeamDetails