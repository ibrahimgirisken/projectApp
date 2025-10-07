import React from 'react'
import LayoutShell from './layoutShell'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <LayoutShell>
        {children}
    </LayoutShell>
    </>
  )
}
