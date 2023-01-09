import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
  const [ count, setCount ] = useState(initial)

  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const decrease = () => {if (count > 1) setCount(count - 1)}
  
  const handleOnAdd = () => {
    onAdd(count) 
    handleShow()
}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className='d-flex justify-content-center align-items-center'>
            <AiFillPlusCircle className='icons' onClick={increase} size={41}/>
            <h4 htmlFor="" className='count'>{count}</h4>
            <AiFillMinusCircle className='icons' onClick={decrease} size={40}/>
        </div>
        <div>
            <Button onClick={handleOnAdd} className="mb-2 add-button" variant="secondary">
            Agregar al carrito
            </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cantidad agregada al carrito: {count}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)}
