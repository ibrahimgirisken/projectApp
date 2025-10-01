'use client'
import UserForm from '@/features/user/component/UserForm'
import { useUserById } from '@/features/user/hooks/useUser'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function UserEdit() {
    const router = useRouter()
    const { id } = useParams()
    const { data: user, isLoading, error } = useUserById(id as string)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Hata: {error.message}</div>
    }
    return (
        <>
            <h2>Kullanıcı Düzenleme</h2>
            {user &&
                <UserForm initialData={user} onSuccess={() => {
                    console.log("Kullanıcı Güncellendi"),
                        router.push("/admin/users")
                }} />
            }
        </>
    )
}
