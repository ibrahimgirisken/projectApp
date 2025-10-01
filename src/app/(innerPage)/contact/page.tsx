import ContactAddress from "@/components/sections/contact/contactAddress"
import ContactForm from "@/components/sections/contact/contactForm"
import ContactMap from "@/components/sections/contact/contactMap"
import PageTitle from "@/components/sections/pageTitle"

const Contact = () => {
    return (
        <>
            <PageTitle currentPage="Contact Us" title="Contact Us" />
            <section className="contact-section fix section-padding">
                <div className="container">
                    <div className="contact-wrapper-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <ContactAddress />
                            </div>
                            <div className="col-lg-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMap />
        </>
    )
}

export default Contact