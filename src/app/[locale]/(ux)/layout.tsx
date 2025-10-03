import React from 'react'
import LayoutShell from './layoutshell'

export default function UXLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <LayoutShell>
        {children}
    </LayoutShell>
    </>
  )
}
