'use client'
import UserForm from '@/features/user/component/UserForm'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function UserAdd() {
    const router = useRouter()

    return (
        <>
            <h2>Kullanıcı Ekleme Sayfası</h2>
            <UserForm onSuccess={() => {
                console.log("Kullanıcı Eklendi")
                router.push('/admin/users')
            }} />
        </>
    )
}
