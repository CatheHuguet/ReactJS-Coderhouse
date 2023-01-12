import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button';
import OrderForm from "../../components/OrderForm/OrderForm";

const CartContainer = () => {

  const {cartList, emptyCart, totalPrice, totalCount, deleteItem} = useCartContext()
  const [showForm, setShowForm] = useState(false);
  const [idGeneratedOrder, setIdGeneratedOrder] = useState()

    const handleFormShow = () => {
      setShowForm(!showForm)
    }

  return (
    <>
    {totalCount() ? 
    <>
      <div>
        {cartList.map (product => 
            <li key={product.id}>
              <img src={product.image} className='w25' alt="" />
              <Button className="btn" onClick={()=>deleteItem(product.id)}> X </Button>
              <p>{product.name}</p>
              <p>Cantidad: {product.count} <br/> 
              Precio único: ${product.price}</p>
            </li>)}
            <p>
              {totalPrice() > 0 && <label> Precio total: {totalPrice()}</label>}
            </p>
      </div>
      <div>
        <p>
          Cantidad de items en el carrito: {totalCount()}
        </p>
          <Button onClick={emptyCart}>Vaciar carrito</Button>
          <Button onClick={handleFormShow}>Comprar carrito</Button>
          {showForm && <OrderForm setIdGeneratedOrder={setIdGeneratedOrder}/>}
      </div>
    </>
      :
      <>
        {idGeneratedOrder ? 
        <label> Número de orden de compra: {idGeneratedOrder}</label>
        :
        <p>Carrito vacío</p>
        }
      </>
      }
  </>

  )}
export default CartContainer