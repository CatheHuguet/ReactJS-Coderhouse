import React from 'react'
import { useState } from 'react'


export const ItemCount = () => {
  const [ contador, setearContador ] = useState(0) 
  const [booleano, setBooleano] = useState(true)
  const handleAddCount = () => {
    setearContador(contador + 1)
  }
  const handleSubstractCount = () => {
    setearContador(contador - 1)
  }
  const addToCart = () => {
    console.log('agregado al carrito: ' + contador)    
  }

  return (
    <center>
        <button 
            className="btn btn-outline-primary" 
            onClick={handleAddCount} 
        > 
            + 
        </button>     
        <label htmlFor="">{contador}</label>
      
        <button 
            className="btn btn-outline-primary" 
            onClick={handleSubstractCount} 
        > 
            - 
        </button> 
        <br />    
        <button 
            className="btn btn-outline-primary" 
            onClick={addToCart} 
        > 
            Agregar al carrito
        </button>     
        <br></br>
        {/* <button 
            className="btn btn-outline-primary" 
            onClick={hanldeBool} 
        > 
            Ejecutar Booleano
        </button>      */}
    </center>


  )
}
