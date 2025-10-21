import PageTitle from "@/components/sections/pageTitle"
import Image from "next/image"

const ProjectDetails = () => {
    return (
        <>
            <PageTitle title="Project Details" currentPage="Project Details" />
            <section className="Project-details-section fix section-padding">
                <div className="container">
                    <div className="project-details-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-details-items">
                                    <div className="details-image">
                                        <img src="/img/project/details.jpg" alt="img" />
                                    </div>
                                    <div className="row g-4 justify-content-between">
                                        <div className="col-lg-7">
                                            <div className="details-content pt-5">
                                                <h3>Project Information</h3>
                                                <p>
                                                    Nulla faucibus malesuada. In placerat feugiat eros ac tempor. Integer euismod massa sapien, et consequat enim laoreet et. Nulla sit amet nisi dapibus, gravida turpis sit amet, accumsan nisl. Fusce vel semper risus. Morbi congue eros sagittis, sodales turpis venenatis, iaculis dui. Proin ac purus sed nibh dapibus neque. scelerisque sed quis ante.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="project-catagory">
                                                <h3>Project Info: </h3>
                                                <ul>
                                                    <li>
                                                        Client:
                                                        <span>Ralph Edwards</span>
                                                    </li>
                                                    <li>
                                                        Category:
                                                        <span>IT Management</span>
                                                    </li>
                                                    <li>
                                                        Location:
                                                        <span>Landon</span>
                                                    </li>
                                                    <li>
                                                        Share:
                                                        <span>
                                                            <i className="fa-brands fa-facebook-f me-3" />
                                                            <i className="fa-brands fa-instagram me-3" />
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-content pt-3">
                                        <h3>Scope of Project</h3>
                                        <p>
                                            Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.
                                        </p>
                                    </div>
                                    <div className="row g-4 pt-5">
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <ul className="list">
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-circle-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="details-content pt-5">
                                        <h3>The Result of Project</h3>
                                        <p>
                                            Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.
                                        </p>
                                    </div>
                                    <div className="row g-4 pt-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumb">
                                                <Image width={636} height={402} sizes="100vw" src="/img/project/details-2.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="thumb">
                                                <Image width={636} height={402} sizes="100vw" src="/img/project/details-3.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="preview-area">
                                    <div className="preview-item">
                                        <Image width={62} height={62} sizes="100vw" src="/img/project/p-1.png" alt="img" />
                                        <div className="content">
                                            <h3>Preview</h3>
                                            <p>Analytic Solutions</p>
                                        </div>
                                    </div>
                                    <div className="preview-item">
                                        <div className="content text-right">
                                            <h3>Next</h3>
                                            <p>Software Development</p>
                                        </div>
                                        <Image width={62} height={62} sizes="100vw" src="/img/project/p-2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProjectDetails