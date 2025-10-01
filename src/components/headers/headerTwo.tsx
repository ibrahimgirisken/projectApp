'use client'
import Link from "next/link"
import TopHeaderOne from "./topHeaderOne"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Image from "next/image"

const HeaderTwo = () => {
    const [isSticky] = useSticky()
    return (
        <header className="header-section-2">
            <TopHeaderOne className="top-style-2" wrapperClass="style-2" />
            <div id="header-sticky" className={`header-2 ${isSticky ? 'sticky' : ''}`}>
                <div className="main-logo">
                    <Link href="/">
                        <Image width={170} height={43} sizes="100vw" src="/img/logo/white-logo-2.svg" alt="logo-image" />
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-none">
                                <Link href="/" className="header-logo">
                                    <Image width={170} height={43} sizes="100vw" src="/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchPopup />
                                <div className="header-button">
                                    <Link href="/contact" className="theme-btn">
                                        <span>
                                            free Consultancy
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderTwo