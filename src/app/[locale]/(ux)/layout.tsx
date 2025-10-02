import HeaderFour from '@/components/headers/headerFour'
import Footer from '@/components/sections/footer'
import React from 'react'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderFour />
        {children}
      <Footer/>
    </>
  )
}
