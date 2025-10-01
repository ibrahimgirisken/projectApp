'use client'
import LangForm from '@/features/lang/components/LangForm'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LangAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Dil Ekleme Sayfası</h2>
            <LangForm onSuccess={() => {
                console.log("Dil Eklendi")
                router.push('/admin/langs')
            }} />
        </>
    )
}
