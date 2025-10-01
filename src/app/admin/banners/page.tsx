'use client'
import { useBanner } from '@/features/banner/hooks/useBanner';
import Link from 'next/link';
import { Button, Spinner, Table } from 'react-bootstrap';

export default function BannerList() {
  const { data: banners = [], isLoading, error } = useBanner();

  if (isLoading) {
    return <Spinner animation="border" />
  }
  if (error) {
    return <p>Veriler yüklenirken bir hata oluştu.</p>;
  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Banner Listesi</h2>
        <Link href="/admin/banners/new">
          <Button variant="primary">Yeni Banner Ekle</Button>
        </Link>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ad (TR)</th>
              <th>Sıra</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner, index) => {
              const trLang = banner.bannerTranslations.find(t => t.langCode === 'tr')
              return (
                <tr key={banner.id}>
                  <td>{index + 1}</td>
                  <td>{trLang?.title}</td>
                  <td>{banner.order}</td>
                  <td>{banner.status ? 'Aktif' : 'Pasif'}</td>
                  <td>
                    <Link href={`/admin/banners/${banner.id}/edit`}>
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
