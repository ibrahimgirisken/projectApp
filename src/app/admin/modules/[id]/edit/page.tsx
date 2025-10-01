'use client'
import ModuleForm from '@/features/module/components/ModuleForm';
import { useModulesById } from '@/features/module/hooks/useModules';
import { useParams, useRouter } from 'next/navigation';
import { Spinner } from 'react-bootstrap';

export default function ModuleEdit() {
    const router = useRouter()
    const { id } = useParams();
    const { data: module, isLoading, error } = useModulesById(id as string);
    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Modul Düzenleme</h2>
            {module && (
                <ModuleForm initialData={module} onSuccess={
                    () => {
                        console.log("Modül Güncellendi"),
                            router.push("/admin/modules")
                    }
                } />
            )}
        </>
    )
}
