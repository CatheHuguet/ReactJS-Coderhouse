import { Nav, Navbar } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import categories from '../../assets/database/categories.json'
import CartWidget from '../CartWidget/CartWidget'
import decorIcon from '../../assets/decorIcon.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar d-flex flex-row mb-3">
      {/* Link para brand y cart porque NO quiero ver cuando estan activados */}
      <Link to='/' className="navbar-brand"> 
        <img src={decorIcon} width="30" height="30" className="d-inline-block align-top nav"/>
        DECO.ration
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {/* NavLink para las opciones del nav porque SI quiero ver cuando estan activadas (clickeadas)*/}    
        {/* Categories a modularizar en el futuro */}
          { categories.map( cat => <div key={cat.id}>
                                    <NavLink to={`/cat/${cat.id}`} className={({isActive}) => isActive? 'a selected': 
                                      'a' }> {cat.name}
                                    </NavLink>
                                  </div>  
           )} 
        </Nav>
        <Nav> 
          <Link to='/cart'> 
          <CartWidget/>
          </Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)}

export default NavBar