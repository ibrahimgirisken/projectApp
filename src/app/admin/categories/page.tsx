'use client'
import { useCategories } from '@/features/category/hooks/useCategory'
import Link from 'next/link'
import { Button, Spinner, Table } from 'react-bootstrap'

export default function CategoryList() {

    const { data: categories = [], isLoading, error } = useCategories();

    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Kategori Listesi</h2>
                <Link href="/admin/categories/new">
                    <Button variant="primary">Yeni Kategori Ekle</Button>
                </Link>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Görsel</th>
                            <th>Ad (TR)</th>
                            <th>Sıra</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => {
                            const trLang = category.categoryTranslations.find(t => t.langCode === 'tr')
                            return (
                                <tr key={category.id}>
                                    <td>{index + 1}</td>
                                    <td>{category.image1}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{category.order}</td>
                                    <td>{category.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/categories/${category.id}/edit`}>
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
