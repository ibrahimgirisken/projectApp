import { faqData } from "@/db/faqData"
import SectionTitle from "../ui/sectionTitle"
import Image from "next/image"

const FaqHomeOne = () => {
    return (
        <section className="faq-section fix section-padding">
            <div className="right-shape">
                <Image width={445} height={577} sizes="100vw" src="/img/faq/right-shape.png" alt="shape-img" />
            </div>
            <div className="faq-shape-box">
                <div className="faq-shape">
                    <Image width={847} height={950} sizes="100vw" src="/img/faq/shape.png" alt="shape-img" />
                </div>
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="faq-image">
                                <Image width={636} height={586} sizes="100vw" src="/img/faq/faq.png" alt="faq-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>See Our Faqs</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Frequently asked question</SectionTitle.Title>
                                </SectionTitle>
                                <div className="faq-accordion mt-4 mt-md-0">
                                    <div className="accordion" id="accordion">
                                        {faqData.map((faq) => (
                                            <div className="accordion-item mb-3 wow slideUp" data-delay={faq.delay} key={faq.id}>
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${faq.isOpen ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.id}`}
                                                        aria-expanded={faq.isOpen}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div id={faq.id} className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`} data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        {faq.answer}
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
        </section>

    )
}

export default FaqHomeOne