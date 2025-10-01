'use client'
import BrandForm from '@/features/brand/components/BrandForm'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BrandAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Marka Ekleme Sayfası</h2>
            <BrandForm onSuccess={() => {
                console.log("Marka Eklendi")
                router.push('/admin/brands')
            }} />
        </>
    )
}
