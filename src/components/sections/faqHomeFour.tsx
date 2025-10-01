import { faqDataTwo } from "@/db/faqData"
import SectionTitle from "../ui/sectionTitle"
import Image from "next/image"

const FaqHomeFour = ({ className }: { className?: string }) => {
    return (
        <section className={`faq-section-2 fix section-padding ${className}`}>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="faq-image">
                                <Image width={636} height={606} sizes="100vw" src="/img/faq/faq-2.png" alt="faq-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content style-2">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>Request A Quote</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Request A Quote talk about how we can help you reduce your energy</SectionTitle.Title>
                                </SectionTitle>
                                <div className="faq-accordion mt-4 mt-md-0">
                                    <div className="accordion" id="accordion">
                                        {faqDataTwo.map((faq) => (
                                            <div
                                                key={faq.id}
                                                className={`accordion-item mb-3 wow slideUp`}
                                                data-delay={faq.delay}
                                            >
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${faq.expanded ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.id}`}
                                                        aria-expanded={faq.expanded}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div
                                                    id={faq.id}
                                                    className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`}
                                                    data-bs-parent="#accordion"
                                                >
                                                    <div className="accordion-body">{faq.answer}</div>
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

export default FaqHomeFour