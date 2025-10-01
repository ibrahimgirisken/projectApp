import SectionTitle from "@/components/ui/sectionTitle"
import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup"
import Link from "next/link"
import Image from "next/image"

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <Image width={46} height={45} src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3><span className="count">6,561</span>+</h3>
                  </div>
                </div>
                <AboutRoundedTextVideoPopup/>
                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/01.jpg")' }}>
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <Image width={249} height={272} sizes="100vw" src="/img/about/02.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title> Welcome To Solaren Solar Power Energy System</SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  Solar companies can offer solar panels, inverters, batteries, and other related services to help individuals businesses transition to energy sources businesses transition to energy sources and sustainable energy alternative.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <Image width={36} height={36} src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Reliability and Performance</h4>
                      <p>
                        Lorem ipsum dolor sit amet cut co sect. Proin viverra
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <Image width={36} height={36} src="/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>BrightSun Support</h4>
                      <p>
                        Lorem ipsum dolor sit amet cut co sect. Proin viverra
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link href="/about" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <Image width={56} height={56} sizes="100vw" src="/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>Ronald Richards</h6>
                      <p>Co, Founder</p>
                    </div>
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

export default AboutOne