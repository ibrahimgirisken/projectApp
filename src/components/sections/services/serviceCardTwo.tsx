import { ServiceDataType } from "@/db/serviceOneData"
import Image from "next/image"
import Link from "next/link"

const ServiceCardTwo = ({ service, width, height }: { service: ServiceDataType; width:number; height:number }) => {
    return (
        <div className="service-card-items">
            <div className="service-image">
                <Image width={width} height={height} sizes="100vw" src={service.image} alt="service-img" />
            </div>
            <div className="icon-2">
                <Image width={45} height={45} src={service.icon} alt="img" />
            </div>
            <div className="service-content">
                <div className="icon">
                    <Image width={46} height={46} src={service.icon} alt="img" />
                </div>
                <h4>
                    <Link href={service.link}>{service.title}</Link>
                </h4>
                <p>{service.description}</p>
                <Link href={service.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardTwo