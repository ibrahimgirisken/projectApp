'use client'
import TranslateForm from '@/features/translate/components/TranslateForm'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TranslationAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Dil Değeri Ekleme Sayfası</h2>
            <TranslateForm onSuccess={() => {
                console.log("Dil değeri eklendi")
                router.push('/admin/translations')
            }} />
        </>
    )
}
