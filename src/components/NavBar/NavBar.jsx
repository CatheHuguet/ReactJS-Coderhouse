import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import decorIcon from '../../assets/decorIcon.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="d-flex flex-row mb-3">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={decorIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="decorIcon"
            />
            DECO.ration
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#furniture">Muebles</Nav.Link>
              <Nav.Link href="#lapms">Lámparas</Nav.Link>
              <Nav.Link href="#mirrors">Espejos</Nav.Link>
              <Nav.Link href="#pillows">Almohadones</Nav.Link>
              <Nav.Link href="#curtains">Cortinas</Nav.Link>
              <Nav.Link href="#new">NUEVO!</Nav.Link>
            </Nav>
            <Nav> 
              <Nav.Link eventKey={2} href="#cartwidget">
              <CartWidget/>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar