import HeaderFour from '@/components/headers/headerFour'
import Footer from '@/components/sections/footer'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderFour />
            {children}
            <Footer/>
        </>
    )
}

export default layout