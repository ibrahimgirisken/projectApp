'use client'
import DatasheetForm from "@/features/datasheet/components/datasheetForm"
import { useDatasheetById } from "@/features/datasheet/hooks/useDatasheet"
import { useParams, useRouter } from "next/navigation"

export default function DatasheetEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: datasheet, isLoading, error } = useDatasheetById(id as string);
    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }

    return (
        <>
            <h2>Ürün Düzenleme</h2>
            {datasheet && (
                <DatasheetForm initialData={datasheet}
                    onSuccess={() => {
                        console.log("Datasheet Güncellendi"),
                            router.push('/admin/datasheets')
                    }}
                />
            )}
        </>
    )
}
