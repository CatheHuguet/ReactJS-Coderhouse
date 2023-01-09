import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

  const {cartList, emptyCart, totalPrice, totalCount, deleteItem} = useCartContext()

  return (
    <>
    {totalCount() ? 
    <>
      <div>
        {cartList.map (product => 
            <li key={product.id}>
              <img src={product.image} className='w25' alt="" />
              {product.name} -Cantidad: {product.count} - Precio x 1: {product.price}
              <button className="btn" onClick={()=>deleteItem(product.id)}> X </button>
            </li>)}
            <p>
              {totalPrice() > 0 && <label> Precio total: {totalPrice()}</label>}
            </p>
      </div>
      <div>
        <p>
          Cantidad de items en el carrito: {totalCount()}
        </p>
          <button onClick={emptyCart}>Vaciar carrito</button>
      </div>
    </>
      :
    <>
      <p>no hay nada</p>
    </>
      }
  </>

  )}
export default CartContainer