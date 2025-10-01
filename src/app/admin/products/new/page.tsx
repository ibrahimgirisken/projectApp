'use client'
import { useBrands } from '@/features/brand/hooks/useBrand'
import { useCategories } from '@/features/category/hooks/useCategory'
import ProductForm from '@/features/product/components/ProductForm'
import { useRouter } from 'next/navigation'

export default function ProductAdd() {
    const router = useRouter()
    const { data: categories = [] } = useCategories();
    const { data: brands = [] } = useBrands();

    return (
        <>
            <h2>Ürün Ekleme Sayfası</h2>
            <ProductForm categoryList={categories} brandList={brands} onSuccess={() => {
                console.log("Ürün eklendi")
                router.push('/admin/products')
            }} />
        </>
    )
}
