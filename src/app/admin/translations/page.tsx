'use client'
import { useTranslations } from '@/features/translate/hooks/useTranslations'
import Link from "next/link"
import { Button, Spinner, Table } from 'react-bootstrap'

export default function TranslationList() {
    const { data: translations = [], isLoading, error } = useTranslations();
    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <p>Bir hata oluştu.</p>;
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Dil Değer İçerik Listeleri</h2>
                <Link href="/admin/translations/new">
                    <Button variant="primary">Yeni Dil Değeri Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dil Kodu</th>
                            <th>Dil Anahtar Değeri</th>
                            <th>Dil İçerik</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {translations.map((translate, index) => {
                            const trLang = translate.translations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={translate.id}>
                                    <td>{index + 1}</td>
                                    <td>{trLang?.langCode}</td>
                                    <td>{translate.key}</td>
                                    <td>{trLang?.value}</td>
                                    <td>
                                        <Link href={`/admin/translations/${translate.id}/edit`}>
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
