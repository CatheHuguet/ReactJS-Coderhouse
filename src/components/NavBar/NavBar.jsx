import { Nav, Navbar } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import CartWidget from '../CartWidget/CartWidget'
import decorIcon from '../../assets/decorIcon.png'
import './NavBar.css'


const NavBar = () => {
  const [categories, setCategories] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'categories')
    
        getDocs(queryCollection)
        .then(res => setCategories(res.docs.map(category => ({ id: category.id, ...category.data() }) )) )
        .catch(err => console.log(err))
      },[])

  return (
    <Navbar collapseOnSelect expand="lg" className="NavBar d-flex flex-row mb-3">
      <Link to='/' className="navbar-brand"> 
        <img src={decorIcon} width="30" height="30" className="d-inline-block align-top nav"/>
        DECO.ration
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        { categories.map( cat => <div key={cat.id}>
                                    <NavLink to={`/cat/${cat.catId}`} className={({isActive}) => isActive? 'a selected': 
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