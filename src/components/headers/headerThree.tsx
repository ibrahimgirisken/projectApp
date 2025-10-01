'use client'
import Link from "next/link"
import Navbar from "./navbar"
import TopHeaderTwo from "./topHeaderTwo"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Image from "next/image"

const HeaderThree = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <TopHeaderTwo />
            <div id="header-sticky" className={`header-3 ${isSticky ? 'sticky' : ''}`}>
                <div className="plane-shape">
                    <Image width={115} height={71} sizes="100vw" src="/img/plane.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link href="/" className="header-logo">
                                        <Image width={170} height={43} sizes="100vw" src="/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />
                                <div className="header-button">
                                    <Link href="/contact" className="theme-btn bg-white">
                                        <span>
                                            get A Quote
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

export default HeaderThree