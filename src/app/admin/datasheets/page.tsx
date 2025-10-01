'use client'

import { useDatasheets } from "@/features/datasheet/hooks/useDatasheet";
import Link from "next/link"
import { Button, Spinner, Table } from "react-bootstrap"

export default function DatasheetList() {
    const { data: datasheets = [], isLoading, error } = useDatasheets();
    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Datasheet Listesi</h2>
                <Link href="/admin/products/new">
                    <Button variant="primary">Yeni Datasheet Ekle</Button>
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
                        {datasheets.map((datasheet, index) => {
                            const trLang = datasheet.datasheetTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={datasheet.id}>
                                    <td>{index + 1}</td>
                                    <td>{datasheet.code}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{datasheet.order}</td>
                                    <td>{datasheet.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/datasheets/${datasheet.id}/edit`}>
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
