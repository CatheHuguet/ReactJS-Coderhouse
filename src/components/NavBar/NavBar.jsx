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
    </Navbar>
  )
}

export default NavBar