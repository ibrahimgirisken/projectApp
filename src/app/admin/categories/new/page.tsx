'use client'
import CategoryForm from '@/features/category/components/CategoryForm'
import { useRouter } from 'next/navigation'

export default function CategoryAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Kategori Ekleme Sayfası</h2>
            <CategoryForm onSuccess={() => {
                console.log("Kategori Eklendi")
                router.push('/admin/categories')
            }} />
        </>
    )
}
