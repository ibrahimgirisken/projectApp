'use client'
import { useLangs } from '@/features/lang/hooks/useLang';
import Link from 'next/link';
import { Button, Spinner, Table } from 'react-bootstrap';

export default function LangList() {
    const { data: langs = [], isLoading, error } = useLangs();
    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Dil Listesi</h2>
                <Link href="/admin/langs/new">
                    <Button variant="primary">Yeni Dil Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dil Kodu</th>
                            <th>Başlık</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {langs.map((lang, index) => {
                            return (
                                <tr key={lang.id}>
                                    <td>{index + 1}</td>
                                    <td>{lang.langCode}</td>
                                    <td>{lang.title}</td>
                                    <td>
                                        <Link href={`/admin/langs/${lang.id}/edit`}>
                                            <Button variant="warning" size="sm" className="me-2">
                                                Düzenle
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody >
                </Table >
            </div >
        </>
    )
}
