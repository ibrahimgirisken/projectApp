'use client'
import { serviceOneData } from "@/db/serviceOneData"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"
import { useTranslations } from "next-intl"

const ServicesFour = () => {
    const t = useTranslations('Products');
    return (
        <section id="services" className="service-section-3 section-padding pt-0">
            <div className="line-shape-2">
                <Image width={1916} height={781} sizes="100vw" src="/img/service/line-shape-2.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>{t('title')}</SectionTitle.SubTitle>
                    <SectionTitle.Title>{t('subtitle')}</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {
                        serviceOneData.slice(0, 4).map((service) => {
                            return (
                                <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-delay={service.delay}>
                                    <ServiceCard service={service} className={`style-3 mt-70 ${service.active ? 'active' : ''}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default ServicesFour