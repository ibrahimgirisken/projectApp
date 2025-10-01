import { PriceDataType } from "@/db/pricingData"
import Link from "next/link"

const PriceCard = ({ plan }: { plan: PriceDataType }) => {
    return (
        <div
            className={`col-xl-4 col-lg-6 col-md-6 wow slideUp`}
            data-delay={plan.delay}
            key={plan.id}
        >
            <div className={`pricing-items ${plan.isActive ? 'active' : ''}`}>
                <div className="tag">
                    <h6>{plan.plan}</h6>
                </div>
                <div className="pricing-header">
                    <h2>{plan.price}</h2>
                    <span>{plan.frequency}</span>
                    <p>{plan.description}</p>
                </div>
                <ul className="pricing-list">
                    {plan.features.map((feature, i) => (
                        <li key={i}>
                            <i className="fa-solid fa-check" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="pricing-button">
                    <p>Up to 10 users + 1.99 per user</p>
                    <Link href={plan.buttonLink} className="pricing-btn mt-4">
                        {plan.buttonText}
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PriceCard