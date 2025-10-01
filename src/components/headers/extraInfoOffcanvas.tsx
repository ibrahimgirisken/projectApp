import { useState } from 'react';
import Link from "next/link"
import MobileMenuList from './mobileNavBar';
import Image from 'next/image';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <Image width={150} height={38} sizes='100vw' src="/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList/>
                            <p className="text d-none d-lg-block">
                                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fa fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Main Street, Melbourne, Australia</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="mailto:info@azent.com"><span className="mailto:info@example.com">info@example.com</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="#">Mod-friday, 09am -05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="tel:+11002345909">+11002345909</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fa-brands fa-x-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-youtube" /></Link>
                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );
};

export default ExtraInfoOffcanvas;