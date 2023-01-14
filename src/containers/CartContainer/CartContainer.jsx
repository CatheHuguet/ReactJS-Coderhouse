import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button'
import OrderForm from "../../components/OrderForm/OrderForm"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"

const CartContainer = () => {

  const {cartList, emptyCart, totalPrice, totalCount, deleteItem, idGeneratedOrder} = useCartContext()
  const [showForm, setShowForm] = useState(false);
  const [buyDisabled, setBuyDisabled] = useState(false)


/**
 * When the user clicks the button Comprar, the form will show and the button will be disabled.
 */
  const handleFormShow = () => {
    setShowForm(!showForm)
    setBuyDisabled(!buyDisabled)
  }

  return (
    <>
    {totalCount() ? 
      <Container fluid>
        <h3> Carrito </h3>
        <Row>
          <Col sm={8}>
            {cartList.map (product => 
                <Row key={product.id}>
                  <Col>
                    <img src={product.image} className="rounded w-25"/>
                    <h5 className="">{product.name}</h5>
                  </Col>
                  <Col>
                      <p>Cantidad: {product.count}</p>
                      <span className='price'>$ </span>
                      {product.price}
                  </Col>
                  <Col>
                  <AiFillDelete onClick={()=>deleteItem(product.id)} size={25}/>
                  </Col>
                </Row>
            )}
            <h5> Cantidad de items en el carrito: {totalCount()} </h5>
            </Col>
            <Col sm={4}>
                    {totalPrice() > 0 && <h5> Precio total: ${totalPrice()}</h5>}
                <Button variant="dark" onClick={emptyCart}>Vaciar carrito</Button>
                <Button variant="dark" className='mx-2' onClick={handleFormShow} disabled={buyDisabled}>Comprar carrito</Button>
                {showForm && <OrderForm/>}
            </Col>
          </Row>
        </Container>
      :
      <>
        {idGeneratedOrder ? 
        <div>
          <h2> Compra realizada con éxito! </h2>
          <h4> Código de orden de compra: {idGeneratedOrder}</h4>
        </div>
        :
        <div>
          <h3>Tu carrito está vacío</h3>
          <Link to='/'>
            <Button variant="dark" className='mx-2'>Ir a home</Button>
          </Link>
        </div>
        }
      </>
    }
    </>
  )}

export default CartContainer