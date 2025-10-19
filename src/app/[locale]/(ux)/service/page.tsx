import PageTitle from "@/components/sections/pageTitle"
import ServiceCard from "@/components/sections/services/serviceCard"
import { serviceOneData } from "@/db/serviceOneData"

const Service = () => {
    return (
        <>
            <PageTitle title="Services" currentPage="Services" />
            <section className="service-section fix section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow slideUp">Services We Offer</span>
                        <h2 className="wow slideUp" data-delay=".3">
                            Provide Comprehensive Ecological<br /> Service
                        </h2>
                    </div>
                    <div className="service-wrapper mb-0">
                        <div className="row">
                            {
                                serviceOneData.map((service) => (
                                    <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-delay=".3">
                                        <ServiceCard service={service} className="box-shadow" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service