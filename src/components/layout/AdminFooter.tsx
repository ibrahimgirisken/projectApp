import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function AdminFooter() {
  return (
    <>
      <footer>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container className='text-center'>
            <h6 className='text-white'>
              Copyright © 2025 Your Company. All rights reserved.
            </h6>
          </Container>
        </Navbar>
      </footer>
    </>)
} 