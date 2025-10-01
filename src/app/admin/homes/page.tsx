'use client'

import { useHomes } from "@/features/home/hooks/useHomes"
import Link from "next/link"
import { Button, Spinner, Table } from "react-bootstrap"

export default function HomeList() {
    const { data: homes = [], isLoading, error } = useHomes();


    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Anasayfa İçerikleri Listesi</h2>
                <Link href="/admin/homes/new">
                    <Button variant="primary">Yeni Sayfa Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Kod</th>
                            <th>Ad (TR)</th>
                            <th>Sıra</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {homes.map((data, index) => {
                            const trLang = data.homeTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={data.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.title}</td>
                                    <td>{trLang?.url}</td>
                                    <td>{data.order}</td>
                                    <td>{data.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/homes/${data.id}/edit`}>
                                            <Button variant="warning" size="sm" className="me-2">
                                                Düzenle
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
