'use client'
import ProductForm from "@/features/product/components/ProductForm"
import { useProductById } from "@/features/product/hooks/useProducts";
import { useCategories } from "@/features/category/hooks/useCategory";
import { useBrands } from "@/features/brand/hooks/useBrand";
import { useParams, useRouter } from "next/navigation"

export default function ProductEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: product, isLoading, error } = useProductById(id as string);
    const { data: brands = [] } = useBrands();
    const { data: categories = [] } = useCategories();
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Ürün Düzenleme</h2>
            {product && (
                <ProductForm initialData={product} categoryList={categories} brandList={brands}
                    onSuccess={() => {
                        console.log("Ürün Güncellendi"),
                            router.push('/admin/products')
                    }}
                />
            )}
        </>
    )
}