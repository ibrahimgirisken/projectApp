import { ServiceDataType } from "@/db/serviceOneData";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, className }: { service: ServiceDataType; className?: string }) => {
    return (
        <div className={`service-box-items ${className}`}>
            <div className="icon">
                <Image width={45} height={45} sizes="100vw" src={service.icon} alt="icon-img" />
            </div>
            <div className="content">
                <h4>
                    <Link href={service.link}>
                        {service.title}
                    </Link>
                </h4>
                <p>
                    {service.description}
                </p>
                <Link href={service.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard