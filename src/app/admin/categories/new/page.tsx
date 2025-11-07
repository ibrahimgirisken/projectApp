'use client'
import CategoryForm from '@/features/category/components/CategoryForm'
import { useCategories } from '@/features/category/hooks/useCategory'
import { useRouter } from 'next/navigation'

export default function CategoryAdd() {
    const router = useRouter()
    const {data:categories=[]}=useCategories();
    return (
        <>
            <h2>Kategori Ekleme Sayfası</h2>
            <CategoryForm categoryList={categories} onSuccess={() => {
                console.log("Kategori Eklendi")
                router.push('/admin/categories')
            }} />
        </>
    )
}
