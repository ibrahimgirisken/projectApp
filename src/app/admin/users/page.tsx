'use client';

import { useUserByParams } from '@/features/user/hooks/useUser';
import Link from 'next/link';
import { Button, Spinner, Table } from 'react-bootstrap';

export default function UserList() {
    const { data, isLoading, error } = useUserByParams('Page=0&Size=5');

    const users = data?.users ?? [];                // <-- güvenli
    const total = data?.totatlUserCount ?? 0;       // (opsiyonel) toplam sayım

    if (isLoading) return <Spinner animation="border" />;
    if (error) return <p>Veriler yüklenirken bir hata oluştu.</p>;

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Kullanıcı Listesi ({total})</h2>
                <Link href="/admin/users/new">
                    <Button variant="primary">Yeni Kullanıcı Ekle</Button>
                </Link>
            </div>

            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>İsim & Soyisim</th>
                            <th>Kullanıcı Adı</th>
                            <th>E-Posta Adresi</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.nameSurname}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link href={`/admin/users/${user.id}/edit`}>
                                        <Button variant="warning" size="sm" className="me-2">
                                            Düzenle
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center">Kayıt bulunamadı.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
