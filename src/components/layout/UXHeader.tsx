'use client';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import { slugify } from '@/utils/slugify';
import { useLocale } from 'next-intl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslations } from 'use-intl';

export default function UXHeader() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <>
      <header className="text-white">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">CW</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <Nav.Link href="/">{capitalizeFirstLetter(t('route.homepage'))}</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={capitalizeFirstLetter(t('route.products'))}
                  menuVariant="dark"
                >
                  <NavDropdown.Item href={`/${locale}/${slugify(t('route.products'))}`}>
                    {capitalizeFirstLetter(t('route.products'))}
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${locale}/${t('route.categories')}`}>
                    {capitalizeFirstLetter(t('route.categories'))}
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`/${locale}/${t('route.projects')}`}>{capitalizeFirstLetter(t('route.projects'))}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header >
    </>
  );
}
