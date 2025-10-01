'use client'

import { useState } from 'react'
import { Navbar, Offcanvas, Nav, Button } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ResponsiveSidebar() {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  const toggle = () => setShow(!show)
  const isActive = (href: string) => pathname === href

  const dashboardPath = `/admin/dashboard`;
  const productsPath = `/admin/products`;
  const categoriesPath = `/admin/categories`;
  const pagesPath = `/admin/pages`;
  const brandsPath = `/admin/brands`;
  const modulesPath = `/admin/modules`;
  const bannersPath = `/admin/banners`;
  const datasheetsPath = `/admin/datasheets`;
  const homesPath = `/admin/homes`;
  const settingsPath = `/admin/settings/AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA/edit`;
  const langsPath = `/admin/langs`;
  const translationsPath = `/admin/translations`;
  const usersPath = `/admin/users`;
  const permissionsPath = `/admin/permissions`;

  const links = [
    { href: dashboardPath, label: `Yönetim Paneli` },
    { href: productsPath, label: `Ürünler` },
    { href: categoriesPath, label: `Kategoriler` },
    { href: pagesPath, label: `Sayfalar` },
    { href: brandsPath, label: `Markalar` },
    { href: modulesPath, label: `Modüller` },
    { href: bannersPath, label: `Banner` },
    { href: datasheetsPath, label: `Datasheet` },
    { href: homesPath, label: `Anasayfa İçerik` },
    { href: settingsPath, label: `Genel Ayarlar` },
    { href: langsPath, label: `Dil Ayarları` },
    { href: translationsPath, label: `Dil İçerikleri` },
    { href: usersPath, label: `Kullanıcılar` },
    { href: permissionsPath, label: `Kullanıcı Yetki İzinleri` },
  ]

  return (
    <>
      {/* Üst menü (mobilde görünür) */}
      <Navbar bg="light" className="d-md-none px-0">
        <Button variant="outline-primary" onClick={toggle}>
          ☰ Menü
        </Button>
        <Navbar.Brand className="ms-2">Admin Panel</Navbar.Brand>
      </Navbar>

      {/* Sabit sidebar (desktop) */}
      <div className="d-none d-md-flex flex-column bg-light p-3" style={{ width: 200, minHeight: '100vh' }}>
        <h5 className="mb-4">Admin Panel</h5>
        <Nav className="flex-column">
          {links.map((link) => (
            <Nav.Link
              key={link.href}
              as={Link}
              href={link.href}
              active={isActive(link.href)}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Offcanvas (mobil) */}
      <Offcanvas show={show} onHide={toggle} className="d-md-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menü</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                as={Link}
                href={link.href}
                active={isActive(link.href)}
                onClick={toggle}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}
