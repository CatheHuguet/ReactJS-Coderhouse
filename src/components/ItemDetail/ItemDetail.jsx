import { useState } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useCartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap';
import './ItemDetail.css'

export const ItemDetail = ({productDetail}) => {
  const [ isCount, setIsCount ] = useState(true)
  const { addToCart } = useCartContext()
/**
 * When the user clicks the add to cart button, add the product to the cart and set the count to false.
 */
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
              <h4 className='product-name'>{productDetail.name}</h4>
              <h5>{productDetail.description}</h5>
              <span className='price'></span> $ <span className='priceprice'> {productDetail.price}</span>
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
                  <Button variant="dark"> Ir al carrito </Button>
                </Link>
                <Link to='/'>
                  <Button variant="dark" className='mx-2'> Seguir comprando </Button>
                </Link>
              </div>
            }
          </Col>
      </Row>
    </Container>
  )}