import HeaderThree from '@/components/headers/headerThree'
import Footer from '@/components/sections/footer'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderThree />
            {children}
            <Footer/>
        </>
    )
}

export default layout