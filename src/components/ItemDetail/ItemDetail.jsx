import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({productDetail}) => {

  const onAdd = (count) => alert(`Cantidad agregada al cart: ${count}`)
//agregar dos usestate para comenzar con el item count y despues cambiar a llamar al cart(con dos botones)
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
            <div className='add-to-cart'>
              <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
          </Col>
      </Row>
    </Container>
  )}