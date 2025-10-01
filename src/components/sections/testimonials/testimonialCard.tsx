import { TestimonialType } from "@/db/testimonialsTwoData"
import Image from "next/image"

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
    return (
        <div className="testimonial-box-items">
            <div className="icon">
                <Image width={50} height={37} sizes="100vw" src={testimonial.icon} alt="icon-img" />
            </div>
            <div className="client-items">
                <div
                    className="client-image bg-cover"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div className="client-content">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="star">
                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                        ))}
                        {testimonial.stars % 1 !== 0 && (
                            <i className="fas fa-star color-text" />
                        )}
                    </div>
                </div>
            </div>
            <p>{testimonial.feedback}</p>
        </div>
    )
}

export default TestimonialCard