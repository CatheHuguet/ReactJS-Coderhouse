import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
  const [ count, setCount ] = useState(initial)

/**
 * If the count is less than the stock, then increase the count by 1.
 */
  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
/**
 * If the count is greater than 1, then decrease the count by 1
 */
  const decrease = () => {if (count > 1) setCount(count - 1)}
  
/**
 * When the user clicks the button, the onAdd function is called with the count as an argument.
 */
  const handleOnAdd = () => {
    onAdd(count) 
  }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center'>
            <AiFillPlusCircle className='icons' onClick={increase} size={30}/>
            <h4 className='count'> {count} </h4>
            <AiFillMinusCircle className='icons' onClick={decrease} size={30}/>
        </div>
        <div>
            <Button onClick={handleOnAdd} className="mt-2" variant="dark">
            Agregar al carrito
            </Button>
        </div>
    </>
)}
