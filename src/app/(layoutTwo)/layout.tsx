import HeaderTwo from '@/components/headers/headerTwo'
import Footer from '@/components/sections/footer'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderTwo />
            {children}
            <Footer/>
        </>
    )
}

export default layout