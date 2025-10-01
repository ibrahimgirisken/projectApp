import HeaderFour from '@/components/headers/headerFour'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderFour />
      <Container>
        {children}
      </Container>
    </>
  )
}
