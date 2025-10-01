'use client'
import { useModules } from '@/features/module/hooks/useModules'
import PageForm from '@/features/page/components/PageForm'
import { useRouter } from 'next/navigation'

export default function PageAdd() {
    const router = useRouter()
    const { data: modules = [] } = useModules();
    return (
        <>
            <h2>Sayfa Ekleme</h2>
            <PageForm moduleList={modules} onSuccess={() => {
                console.log("Sayfa eklendi")
                router.push('/admin/pages')
            }} />
        </>
    )
}
