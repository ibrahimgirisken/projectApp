'use client'
import CategoryForm from '@/features/category/components/CategoryForm'
import { useCategoryById } from '@/features/category/hooks/useCategory'
import { useParams, useRouter } from 'next/navigation'

export default function CategoryEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: category, isLoading, error } = useCategoryById(id as string);
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Kategori Düzenleme</h2>
            {category && (
                <CategoryForm initialData={category}
                    onSuccess={() => {
                        console.log("Kategori Güncellendi"),
                            router.push('/admin/categories')
                    }} />
            )}
        </>
    )
}
