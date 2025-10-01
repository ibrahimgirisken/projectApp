'use client'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

export default function UXFooter() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <>
      <footer className="bg-gray-900 text-white py-4 mt-8">
        <Container>
          © {year ?? ''} CW Enerji
        </Container>
      </footer>
    </>
  )
}
