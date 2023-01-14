import { Item } from "../Item/Item"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export const ItemList = ({products}) => {
  const colPerRow = 4

  return (
    <Container>
          <Row md={colPerRow}>
            {/* key applied here: https://reactjs.org/docs/lists-and-keys.html#keys */}
            {products.map( product => <Item product={product}  key={product.id}/>)}
          </Row>
    </Container>  
  )} 