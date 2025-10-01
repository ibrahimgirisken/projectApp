import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import Link from "next/link"

const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
                        <SectionTitle.Title>Provide Comprehensive<br /> Ecological Service</SectionTitle.Title>
                    </SectionTitle>
                    <Link href="/service" className="theme-btn">
                        See all Services
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <div className="row">
                    {serviceThreeData.slice(0, 4).map((service) => (
                        <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                            <ServiceCardTwo service={service} width={305} height={180} />
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetterTwo />
        </section>

    )
}

export default ServicesThree