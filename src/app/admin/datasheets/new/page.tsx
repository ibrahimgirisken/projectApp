'use client'
import DatasheetForm from '@/features/datasheet/components/datasheetForm'
import { useRouter } from 'next/navigation'

export default function DatasheetAdd() {
    const router = useRouter()
    return (
        <>
            <h2>Datasheet Ekleme Sayfası</h2>
            <DatasheetForm onSuccess={() => {
                console.log("Datasheet eklendi")
                router.push('/admin/datasheets')
            }} />
        </>
    )
}
