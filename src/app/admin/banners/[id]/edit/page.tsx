'use client'
import BannerForm from '@/features/banner/components/BannerForm'
import { useBannerById } from '@/features/banner/hooks/useBanner'
import { useParams, useRouter } from 'next/navigation'

export default function BannerEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: banner, isLoading, error } = useBannerById(id as string);
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Banner Düzenleme</h2>
            {banner && (
                <BannerForm initialData={banner}
                    onSuccess={() => {
                        console.log("Banner Güncellendi"),
                            router.push('/admin/banners')
                    }} />
            )}
        </>
    )
}
