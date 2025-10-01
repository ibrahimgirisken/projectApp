'use client'
import Link from "next/link"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import TopHeaderOne from "./topHeaderOne"
import useSticky from "@/hooks/useSticky"
import Image from "next/image"

const HeaderOne = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <TopHeaderOne />
            <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''} `}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main style-2">
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
                                    <Link href="/contact" className="theme-btn">
                                        <span>
                                            get A Quote {' '}
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
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

export default HeaderOne