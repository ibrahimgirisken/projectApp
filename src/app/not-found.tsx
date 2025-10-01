
import PageTitle from "@/components/sections/pageTitle"
import Image from "next/image"
import Link from "next/link"

const Error = () => {
    return (
        <>
            <PageTitle currentPage="404" title="Page Not Found" />
            <section className="Error-section section-padding fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="error-items">
                                <div className="error-image">
                                    <Image width={966} height={580} sizes="100vw" src="/img/404.png" alt="img" />
                                </div>
                                <h2>
                                    Whoops! This Page got Lost <br />
                                    in converstion
                                </h2>
                                <Link href="/" className="theme-btn wow slideUp" data-delay=".8">
                                    Go Back Home
                                    <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Error