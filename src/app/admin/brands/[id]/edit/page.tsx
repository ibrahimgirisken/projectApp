'use client'
import BrandForm from '@/features/brand/components/BrandForm'
import { useBrandById } from '@/features/brand/hooks/useBrand'
import { useParams, useRouter } from 'next/navigation'

export default function BrandEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: brand, isLoading, error } = useBrandById(id as string);
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Marka Düzenleme</h2>
            {brand && (
                <BrandForm initialData={brand}
                    onSuccess={() => {
                        console.log("Marka Güncellendi"),
                            router.push('/admin/brands')
                    }} />
            )}
        </>
    )
}