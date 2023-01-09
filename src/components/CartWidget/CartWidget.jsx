import { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const { totalCount } = useCartContext()

  return (
    <div>
      <BsFillCartFill className='CartIcon' size={20}/>
      <span className="top-0 start-100 translate-middle badge rounded-pill">
        {totalCount() > 0 && totalCount()}
      </span>
    </div>
  )
}

export default CartWidget