'use client'

import { usePages } from "@/features/page/hooks/usePages"
import Link from "next/link"
import { Button, Spinner, Table } from "react-bootstrap"

export default function PageList() {
    const { data: pages = [], isLoading, error } = usePages();

    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }

    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Sayfa Listesi</h2>
                <Link href="/admin/pages/new">
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
                        {pages.map((page, index) => {
                            const trLang = page.pageTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={page.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.title}</td>
                                    <td>{trLang?.pageTitle}</td>
                                    <td>{page.order}</td>
                                    <td>{page.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/pages/${page.id}/edit`}>
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
