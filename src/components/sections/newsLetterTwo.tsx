import Link from "next/link"

const NewsLetterTwo = () => {
    return (
        <div className="cta-banner-2 section-padding">
            <div className="container">
                <div className="cta-wrapper-2">
                    <div className="author-icon">
                        <div className="icon">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div className="content">
                            <span>Call Us Now</span>
                            <h4>
                                <Link href="tel:+2085550112">+208-555-0112</Link>
                            </h4>
                        </div>
                    </div>
                    <h3>
                        Renewable energy that<br /> benefits everyone
                    </h3>
                    <Link href="/contact" className="theme-btn bg-white">
                        get A Quote
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterTwo