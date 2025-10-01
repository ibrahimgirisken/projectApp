import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function UXHeader() {
  const logout = async () => {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    if (res.ok) {
      window.location.href = '/login';
    }
  };
  return (
    <>
      <header className="text-white">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/admin">SchaltKraft</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <Nav.Link href="../">Site</Nav.Link>
                <Nav.Link onClick={logout} href="../">Çıkış</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
