import {  Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './Item.css'

export const Item = ({product}) => {
    return (
        <Col>
          <Link className='a' to={`/detail/${product.id}`}>
            <Card>
                <Card.Img src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <span className='price'>$ </span>
                  {product.price}
                </Card.Footer>
            </Card>
          </Link>
        </Col>
  )}

