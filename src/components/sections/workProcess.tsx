import { workProcessData } from "@/db/workProcessData"
import SectionTitle from "../ui/sectionTitle"
import Image from "next/image"

const WorkProcess = () => {
    return (
        <section className="work-process-section fix section-padding pt-0">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Our Process</SectionTitle.SubTitle>
                    <SectionTitle.Title>Our Work Process</SectionTitle.Title>
                </SectionTitle>
                <div className="process-work-wrapper">
                    <div className="line-shape">
                        <Image width={880} height={121} sizes="100vw" src="/img/process/linepng.png" alt="img" />
                    </div>
                    <div className="row">
                        {workProcessData.map((process, index) => (
                            <div key={process.id} className="col-xl-3 col-lg-4 col-md-6">
                                <div className={`work-process-items text-center  d-flex ${index % 2 === 0 ? 'flex-column' : 'flex-xl-column-reverse flex-column'}`} >
                                    <div className={`icon`}>
                                        <Image width={45} height={45} src={process.icon} alt="img" />
                                        <h6 className="number">{process.id}</h6>
                                    </div>
                                    <div className={`content ${process.style || ''}`}>
                                        <h4>{process.title}</h4>
                                        <p>{process.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WorkProcess