import { useState } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({productDetail}) => {
  const [ isCount, setIsCount ] = useState(true)
  const { addToCart } = useCartContext()
  const onAdd = (count) => {
    addToCart({ ...productDetail, count })
    setIsCount(false)
  }

  return (
    <Container fluid>
      <Row>
          <Col sm={8} className='rounded border'>
            <div className='item-detail'>
              <img className='rounded w-25' src={productDetail.image} />
              <h1>{productDetail.name}</h1>
              <h3>{productDetail.description}</h3>
              <h5 className='price'>$ {productDetail.price}</h5>
            </div>
          </Col>
          <Col sm={4} className='rounded border d-flex justify-content-center'>
            { isCount ? 
              <div className='add-to-cart'>
                <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd}/>
              </div>
            :
              <div>
                <Link to='/cart'>
                  <button> Ir al carrito </button>
                </Link>
                <Link to='/'>
                  <button> Seguir comprando </button>
                </Link>
              </div>
            }
          </Col>
      </Row>
    </Container>
  )}