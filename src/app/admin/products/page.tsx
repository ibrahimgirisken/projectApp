'use client'

import { useProducts } from "@/features/product/hooks/useProducts"
import ProductTranslation from "@/features/product/types/product";
import Link from "next/link"
import { Button, Spinner, Table } from "react-bootstrap"

export default function ProductList() {
    const { data: products = [], isLoading, error } = useProducts();
    if (isLoading) {
        return <Spinner animation="border" />
    }
    if (error) {
        return <p>Veriler yüklenirken bir hata oluştu.</p>;
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Ürün Listesi</h2>
                <Link href="/admin/products/new">
                    <Button variant="primary">Yeni Ürün Ekle</Button>
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
                        {products.map((product, index) => {
                            const trLang = product.productTranslations.find((t:ProductTranslation) => t.langCode === 'tr')
                            return (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.code}</td>
                                    <td>{trLang?.name}</td>
                                    <td>{product.order}</td>
                                    <td>{product.status ? 'Aktif' : 'Pasif'}</td>
                                    <td>
                                        <Link href={`/admin/products/${product.id}/edit`}>
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
        </>
    )
}
