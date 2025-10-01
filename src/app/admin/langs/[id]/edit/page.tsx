'use client'
import LangForm from '@/features/lang/components/LangForm'
import { useLangById } from '@/features/lang/hooks/useLang'
import { useParams, useRouter } from 'next/navigation'

export default function BrandEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: lang, isLoading, error } = useLangById(id as string)
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Dil Düzenleme</h2>
            {lang && (
                <LangForm initialData={lang}
                    onSuccess={() => {
                        console.log("Dil Güncellendi"),
                            router.push('/admin/langs')
                    }} />
            )}
        </>
    )
}
