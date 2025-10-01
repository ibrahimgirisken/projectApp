'use client'
import SettingForm from "@/features/setting/components/SettingForm"
import { useSettingById } from "@/features/setting/hooks/useSetting"
import { useParams, useRouter } from "next/navigation"

export default function SettingEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: setting, isLoading, error } = useSettingById(id as string);
    return (
        <>
            <h2>Ayarları Düzenle</h2>
            {setting && (
                <SettingForm initialData={setting}
                    onSuccess={() => {
                        console.log("Ayarlar Güncellendi"),
                            router.push('/admin')
                    }}
                />
            )}
        </>
    )
}
