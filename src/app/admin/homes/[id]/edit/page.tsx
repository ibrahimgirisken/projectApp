'use client';

import { useHomeById } from "@/features/home/hooks/useHomes";
import HomeForm from "@/features/home/components/HomeForm";
import { useParams, useRouter } from "next/navigation";

export default function HomeEdit() {
    const router = useRouter();
    const { id } = useParams();
    const { data: home, isLoading, error } = useHomeById(id as string);

    if (isLoading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }

    return (
        <>
            <h2>Sayfa Düzenleme</h2>
            {home && (
                <HomeForm
                    initialData={home}
                    onSuccess={() => {
                        console.log("Sayfa Güncellendi");
                        router.push("/admin/homes");
                    }}
                />
            )}
        </>
    );
}
