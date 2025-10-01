'use client'
import { useModules } from "@/features/module/hooks/useModules"
import PageForm from "@/features/page/components/PageForm"
import { usePageById } from "@/features/page/hooks/usePages"
import { useParams, useRouter } from "next/navigation"

export default function PageEdit() {
    const router = useRouter()
    const { id } = useParams()

    const { data: page, isLoading, error } = usePageById(id as string);
    const { data: modules = [] } = useModules();
    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Bir hata oluştu.</div>;

    return (
        <>
            <h2>Sayfa Düzenleme</h2>
            {page && (
                <PageForm initialData={page} moduleList={modules}
                    onSuccess={() => {
                        console.log("Sayfa Güncellendi"),
                            router.push('/admin/pages')
                    }}
                />
            )}
        </>
    )
}
