import React, {useState, useEffect} from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'

const CartWidget = () => {
  const [ count, setCount] = useState(0) // me devuelve dos posiciones, hook de count

  const handleCount = () => {
    setCount(count + 1) //no sirve sugar sintax
  }

  //se ejecuta siempre, no sirve para llamar apis, evitar usarlo :)
  //usar el return para terminar funciones tipo addEventListener que quedan escuchando
  // useEffect(() => {
  //   console.log('ejecuta siempre')
  //   return () => {
  //     console.log('clean up - removerEventListener') 
  //   }
  // }) 

  //se ejecuta una sola vez despues del primer render, sirve para apis
  // useEffect(() => {
  //   console.log('ejecuta la primera vez')
  // }, []) 

  return (
    <div>
      <BsFillCartFill className='CartIcon' onClick={handleCount} size={25}/>
      <span className="top-0 start-100 translate-middle badge rounded-pill">
        {count}
      </span>
    </div>
  )
}

export default CartWidget