import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import decorIcon from '../../assets/decorIcon.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar d-flex flex-row mb-3">
      <Navbar.Brand href="#home" className="navbar-brand">
        <img src={decorIcon} width="30" height="30" className="d-inline-block align-top navv"/>
        DECO.ration
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#muebles">Muebles</Nav.Link>
          <Nav.Link href="#lamparas">Lámparas</Nav.Link>
          <Nav.Link href="#espejos">Espejos</Nav.Link>
          <Nav.Link href="#almohadones">Almohadones</Nav.Link>
          <Nav.Link href="#cortinas">Cortinas</Nav.Link>
          <Nav.Link href="#nuevo">NUEVO!</Nav.Link>
        </Nav>
        <Nav> 
          <Nav.Link eventKey={2} href="#carrito">
          <CartWidget/>
          </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar