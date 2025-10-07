import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import { Page } from "@/features/page/types/page";
import { useLocale, useTranslations } from "next-intl";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 7/24",
        value: "+208-555-0112",
        link: "tel:+2085550112",
    },
    {
        icon: <SuEmail />,
        label: "Make a Quote",
        value: "Solar@gmail.com",
        link: "mailto:infotech@gmail.com",
    },
    {
        icon: <SuLocation />,
        label: "Location",
        value: "4517 Washington ave.",
    },
];

const quickLinks = [
    { text: "Solar About", link: "/about" },
    { text: "Our Services", link: "/service" },
    { text: "Our Blogs", link: "/news" },
    { text: "FAQ’S", link: "/faq" },
    { text: "Contact Us", link: "/contact" },
];

const services = [
    { text: "Consultancy", link: "/service-details" },
    { text: "Solar System", link: "/service-details" },
    { text: "Solar Panel", link: "/service-details" },
    { text: "Style Guide", link: "/service-details" },
    { text: "License", link: "/service-details" },
];

const recentPosts = [
    {
        image: "/img/news/pp1.jpg",
        date: "20 Feb, 2025",
        title: "2021 Batterman Award honors Brad Burkhart",
        link: "/news-details",
    },
    {
        image: "/img/news/pp2.jpg",
        date: "15 Dec, 2025",
        title: "2021 Batterman Award honors Brad Burkhart",
        link: "/news-details",
    },
];

const Footer = ({ menu }: { menu: Page[] }) => {
    const locale = useLocale();
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link href={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <Image width={361} height={372} sizes="100vw" src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <Image width={170} height={43} sizes="100vw" src="/img/logo/white-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Phasellus ultricies aliquam volutpat ullamcorper laoreet
                                        neque, a lacinia curabitur lacinia mollis
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link href="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {menu.map((item) => {
                                        const trLang =
                                            item.pageTranslations?.find((t) => t.langCode === locale) ??
                                            item.pageTranslations?.find((t: any) => t.langCode === locale);

                                        return (
                                            <li key={item.id}>
                                                <Link href={`/${locale}/${trLang?.url}`}>
                                                    <i className="fa-solid fa-chevron-right" />
                                                    {trLang?.pageTitle}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Services</h3>
                                </div>
                                <ul className="list-area">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link href={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".7"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="recent-post-area">
                                    {recentPosts.map((post, index) => (
                                        <div
                                            key={index}
                                            className={`recent-post-items ${index === recentPosts.length - 1 ? "mb-0" : ""
                                                }`}
                                        >
                                            <div className="thumb">
                                                <Image width={62} height={80} sizes="100vw" src={post.image} alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        {post.date}
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href={post.link}>{post.title}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2025 by <Link href="index">Solar</Link>
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link href="contact">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link href="contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;