import React, {useState, useEffect} from 'react';

import './CartWidget.css'
import decorIcon from '../../assets/decorIcon.png'

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
      <img
        src={decorIcon}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="decorIcon"
      />
      <button onClick={handleCount} type="button" className="btn btn-primary position-relative">Cart
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {count}
      </span>
    </button>
    </div>
  )
}

export default CartWidget