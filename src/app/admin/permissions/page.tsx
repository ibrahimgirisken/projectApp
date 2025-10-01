'use client'
import { usePermissionsSingle } from "@/features/auth/hooks/usePermissions";
import { Spinner } from "react-bootstrap";

export default function PermissionsPage() {
    const { data: permissions = [], isLoading, error } = usePermissionsSingle();

    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (
        <>
            <h2>Yetkiler</h2>
            {permissions.map((service) => (
                <div key={service.name}>
                    <h4>{service.name}</h4>
                    <ul>
                        {service.actions.map((action) => (
                            <li key={action.code}>
                                <strong>{action.httpType}</strong> - {action.definition} ({action.code})
                            </li>
                        ))}
                    </ul>
                </div>

            ))}
        </>
    )
}
