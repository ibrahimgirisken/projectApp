import HeaderOne from '@/components/headers/headerOne'
import Footer from '@/components/sections/footer'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderOne />
            {children}
            <Footer/>
        </>
    )
}

export default layout