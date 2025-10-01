'use client'
import ModuleForm from '@/features/module/components/ModuleForm';
import { useRouter } from 'next/navigation'

export default function ModuleAdd() {
    const router = useRouter();

    return (
        <>
            <h2>Modul Ekleme Sayfası</h2>
            <ModuleForm onSuccess={() => {
                console.log("Module eklendi")
                router.push('/admin/modules')
            }} />
        </>
    )
}
