'use client'
import Link from "next/link"
import Navbar from "./navbar"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Image from "next/image"
import { Page } from "@/features/page/types/page";

const HeaderFour = ({menu}:{menu:Page[]}) => {
    const [isSticky] = useSticky()
    return (
        <header>
            <div id="header-sticky" className={`header-4 ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link href="/" className="header-logo">
                                        <Image width={170} height={43} sizes="100vw" src="/img/logo/white-logo.svg" alt="logo-img" />
                                    </Link>
                                    <Link href="/" className="header-logo-2">
                                        <Image width={170} height={43} sizes="100vw" src="/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar menu={menu}/>
                                        </nav>
                                    </div>
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

export default HeaderFour