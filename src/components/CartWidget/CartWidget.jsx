import { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const { totalCount } = useCartContext()

/* Returning the cart icon and the number of items in the cart. */
  return (
    <div>
      <BsFillCartFill className='CartIcon' size={25}/>
      <span className="top-0 start-100 translate-middle badge rounded-pill">
        {totalCount() > 0 && totalCount()}
      </span>
    </div>
  )
}

export default CartWidget