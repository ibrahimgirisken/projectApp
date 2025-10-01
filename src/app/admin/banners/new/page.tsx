'use client'
import BannerForm from '@/features/banner/components/BannerForm'
import { useRouter } from 'next/navigation'

export default function CategoryAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Banner Ekleme Sayfası</h2>
            <BannerForm onSuccess={() => {
                console.log("Banner Eklendi")
                router.push('/admin/banners')
            }} />
        </>
    )
}
