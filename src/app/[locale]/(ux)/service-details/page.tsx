import PageTitle from "@/components/sections/pageTitle"
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import Image from "next/image"

const faq = [
    {
        question: "Where should I incorporate my business?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
        delay: ".3"
    },
    {
        question: "How long should a business plan be?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
        delay: ".5"
    },
    {
        question: "What is included in your services?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
        delay: ".7",
        expanded: true
    },
    {
        question: "What type of company is measured?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
        delay: ".7"
    }
]
const ServiceDetails = () => {
    return (
        <>
            <PageTitle title="Services Details" currentPage="Services Details" />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1">
                                <ServiceSidebar />
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image">
                                        <Image width={856} height={529} sizes="100vw" src="/img/service/details-1.jpg" alt="img" />
                                    </div>
                                    <div className="details-content">
                                        <h3>Markel Office Space Cleaning</h3>
                                        <p className="mt-3">
                                            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                        </p>
                                        <p className="mt-3">
                                            lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.
                                        </p>
                                        <div className="details-video-items">
                                            <ServiceDetailsVideoPopup/>
                                            <div className="content">
                                                <h4>Benefits With Our Service</h4>
                                                <p> Fusce is eleifend porta arcu In hac <br /> habitasse the platea thelorem</p>
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
                                                        unlimited Download Data
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                        </p>
                                        <div className="image-area">
                                            <div className="row g-4">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <Image width={416} height={345} sizes="100vw" src="/img/service/details-2.jpg" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <Image width={416} height={345} sizes="100vw" src="/img/service/details-3.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Most Comment Question?</h3>
                                        <p className="mt-3">
                                            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada.
                                        </p>
                                    </div>
                                    <div className="faq-content style-3">
                                        <div className="faq-accordion">
                                            <div className="accordion" id="accordion">
                                                {faq.map((item, index) => (
                                                    <div className={`accordion-item mb-3 wow slideUp`} data-delay={item.delay} key={index}>
                                                        <h5 className="accordion-header">
                                                            <button className={`accordion-button ${item.expanded ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded={item.expanded ? "true" : "false"} aria-controls={`faq${index}`}>
                                                                {item.question}
                                                            </button>
                                                        </h5>
                                                        <div id={`faq${index}`} className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                {item.answer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default ServiceDetails