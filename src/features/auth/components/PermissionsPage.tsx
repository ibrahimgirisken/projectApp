import React, { useEffect, useState } from 'react'
import { ApplicationService } from '../types/ApplicationService'
import { fetchAllPermissions } from '../api/permissionsService';

export default function PermissionsPage() {
    const [permissions, setPermissions] = useState<ApplicationService[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllPermissions()
            .then(setPermissions)
            .finally(() => setLoading(false))
    }, []);
    if (loading) return <p>Yükleniyor...</p>;
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
