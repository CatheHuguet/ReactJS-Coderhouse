import { Container, Nav, Navbar } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import decorIcon from '../../assets/decorIcon.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar d-flex flex-row mb-3">
      {/* Link para brand y cart porque no quiero ver cuando estan activados */}
      <Link to='/' className="navbar-brand"> 
        <img src={decorIcon} width="30" height="30" className="d-inline-block align-top nav"/>
        DECO.ration
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          {/* NavLink para las opciones del nav porque quiero ver cuando estan activadas */}     
          {/* convertir todo esto a un MAP   */}
          <NavLink to='/cat/furniture' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> Muebles 
          </NavLink>
          <NavLink to='/cat/lamp' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> Lámparas 
          </NavLink>
          <NavLink to='/cat/mirror' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> Espejos 
          </NavLink>
          <NavLink to='/cat/cushion' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> Almohadones 
          </NavLink>
          <NavLink to='/cat/curtain' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> Cortinas 
          </NavLink>
          <NavLink to='/cat/new' className={({isActive}) => isActive? 'btn btn-success': 
            'btn btn-outline-success' }> NUEVO! 
          </NavLink>
        </Nav>
        <Nav> 
          <Link to='/cart'> 
          <CartWidget/>
          </Link>
          {/* <Nav.Link eventKey={2} href="#carrito">
          </Nav.Link> */}
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar