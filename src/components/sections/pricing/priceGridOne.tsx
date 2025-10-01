import { pricingData } from "@/db/pricingData"
import PriceCard from "./priceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import Image from "next/image"

const PriceGridOne = () => {
    return (
        <section className="pricing-section section-bg fix section-padding">
            <div className="left-shape">
                <Image width={364} height={517} sizes="100vw" src="/img/pricing-left-shape.png" alt="shape-img" />
            </div>
            <div className="right-shape">
                <Image width={393} height={395} sizes="100vw" src="/img/pricing-right-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <div className="pricing-wrapper">
                    <div className="section-title-area">
                        <SectionTitle>
                            <SectionTitle.SubTitle>Our Pricing</SectionTitle.SubTitle>
                            <SectionTitle.Title>Choose Your Best Offer</SectionTitle.Title>
                        </SectionTitle>
                        <ul className="nav" role="tablist">
                            <li className="nav-item wow slideUp" data-delay=".3" role="presentation">
                                <a href="#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                    Monthly
                                </a>
                            </li>
                            <li className="nav-item wow slideUp" data-delay=".5" role="presentation">
                                <a href="#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                    Yearly
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                            <div className="row">
                                {pricingData.map((plan) => <PriceCard key={plan.id} plan={plan} />)}
                            </div>
                        </div>
                        <div id="yearly" className="tab-pane fade" role="tabpanel">
                            <div className="row">
                                {pricingData.map((plan) => <PriceCard key={plan.id} plan={plan} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PriceGridOne
