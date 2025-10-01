'use client'
import TranslateForm from '@/features/translate/components/TranslateForm'
import { useTranslationById } from '@/features/translate/hooks/useTranslations'
import { useParams, useRouter } from 'next/navigation'

export default function TranslationEdit() {

    const router = useRouter()
    const { id } = useParams()
    const { data: translation, isLoading, error } = useTranslationById(id as string)
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Dil Değer Düzenleme</h2>
            {translation && (
                <TranslateForm initialData={translation}
                    onSuccess={() => {
                        console.log("Dil Değeri Güncellendi"),
                            router.push('/admin/translations')
                    }}
                />
            )}
        </>
    )
}
