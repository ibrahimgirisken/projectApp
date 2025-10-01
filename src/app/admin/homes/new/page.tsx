'use client'
import HomeForm from '@/features/home/components/HomeForm'
import { useRouter } from 'next/navigation'

export default function HomeAdd() {
    const router = useRouter()

    return (
        <>
            <h2>Anasayfa İçerik Ekleme Sayfası</h2>
            <HomeForm onSuccess={() => {
                console.log("Sayfa eklendi")
                router.push('/admin/homes')
            }} />
        </>
    )
}
