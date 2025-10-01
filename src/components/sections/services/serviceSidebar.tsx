import Link from "next/link";

const services = [
    { name: 'Cleaning Solution', link: '/service-details' },
    { name: 'Plumbing Solution', link: '/service-details' },
    { name: 'Air Conditioning', link: '/service-details', active: true },
    { name: 'Electricity Solution', link: '/service-details' },
    { name: 'Mechanic Solution', link: '/service-details' },
];

const openingHours = [
    { day: 'Mon - Sat', time: '10.00 AM - 4.00 PM' },
    { day: 'Sun', time: '09.00 AM - 4.00 PM' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Emergency', time: '24 hours' },
];

const ServiceSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>All Services</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index} className={service.active ? 'active' : ''}>
                                <Link href={service.link}>{service.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Opening Hours</h3>
                </div>
                <div className="opening-category">
                    <ul>
                        {openingHours.map((hour, index) => (
                            <li key={index}>
                                <i className="fa-regular fa-clock" />
                                {hour.day}: {hour.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("/img/service/post.jpg")' }}>
                <div className="contact-text">
                    <div className="icon">
                        <i className="fa-solid fa-phone" />
                    </div>
                    <h4>Need Help? Call Here</h4>
                    <h5>
                        <Link href="tel:+2085550112">+208-555-0112</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;