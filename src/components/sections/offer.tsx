import { SuAndroid, SuApple, SuBoost, SuInternet, SuSmartWatch, SuTV } from "@/lib/icons"
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";

const offerItems = [
    { id: 1, icon: <SuInternet />, title: 'Website', isActive: false, delay: '.2' },
    { id: 2, icon: <SuAndroid />, title: 'Power', isActive: false, delay: '.4' },
    { id: 3, icon: <SuApple />, title: 'Pane', isActive: true, delay: '.6', },
    { id: 4, icon: <SuSmartWatch />, title: 'Solar Watch', isActive: false, delay: '.8' },
    { id: 5, icon: <SuTV />, title: 'Solar Tv', isActive: false, delay: '.9' },
    { id: 6, icon: <SuBoost />, title: 'IOT', isActive: false, delay: '.9' },
];

const Offer = () => {
    return (
        <section className="offer-section fix section-bg-2 section-padding">
            <div className="line-shape">
                <Image width={465} height={605} sizes="100vw" src="/img/team/line-shape.png" alt="shape-img" />
            </div>
            <div className="mask-shape">
                <Image width={343} height={610} sizes="100vw" src="/img/team/mask-shape.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Our offering</SectionTitle.SubTitle>
                    <SectionTitle.Title className="text-white">Harnessing The Sun The Bright <br />Choice For Future</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {offerItems.map((item) => (
                        <div
                            key={item.id}
                            className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 wow slideUp `}
                            data-delay={item.delay}
                        >
                            <div className={`offer-items ${item.isActive ? 'active' : ''}`}>
                                <div className="shape-top">
                                    <Image width={40} height={40} src="/img/shape/offer-top.png" alt="shape-img" />
                                </div>
                                <div className="shape-bottom">
                                    <Image width={40} height={40} src="/img/shape/offer-bottom.png" alt="shape-img" />
                                </div>
                                <div className="icon">{item.icon}</div>
                                <div className="content">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Offer