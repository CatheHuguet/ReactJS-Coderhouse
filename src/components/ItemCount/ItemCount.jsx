import { useState } from 'react'

export const ItemCount = ({stock = 5, initial, onAdd}) => {
  const [ count, setCount ] = useState(initial) 

  const increase = () => {if (count < stock)setCount(count + 1)}
  const decrease = () => {if (count > 1) setCount(count - 1)}

  const addToCart = () => {
    console.log('agregado al carrito: ' + count)    
  }

  const handleOnAdd = () => onAdd(count)

  return (
    <center>
        <button 
            className="btn btn-outline-primary" 
            onClick={increase} 
        > 
            + 
        </button>     
        <label htmlFor="">{count}</label>
      
        <button 
            className="btn btn-outline-primary" 
            onClick={decrease} 
        > 
            - 
        </button> 
        <br />    
        <button 
            className="btn btn-outline-primary" 
            onClick={handleOnAdd} 
        > 
            Agregar al carrito
        </button>     
        <br></br>
    </center>
)}
