import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"

const OrderForm = ({setIdGeneratedOrder}) => {
  const {cartList, emptyCart, totalPrice} = useCartContext()
  const [errors, setErrors] = useState({})
  
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    email2: "",
    phone: ""
  })
  
  
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
    
    if (!!errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      })
      
    }
  }
  const generateOrder = (ev) => {
      ev.preventDefault()
      const formErrors = validateForm()
      if (Object.keys(formErrors).length > 0 ) {
        setErrors(formErrors)
      } else {
        addNewOrder()
      }

    }

    const validateForm = () => {
      const{name, email,email2, phone} = dataForm
      const newErrors = {}
      if(!name) newErrors.name = "El nombre no puede quedar vacío"
      if (!email) newErrors.email = "El email no puede quedar vacío"
      if (!email2) newErrors.email2 = "El email no puede quedar vacío"

      if (email !== email2) {
        newErrors.email2 = "El email debe ser el mismo"
      }
      if (!phone) newErrors.phone = "El teléfono no puede quedar vacío"

      return newErrors
    }

    const order = {
    buyer: dataForm,
    items: cartList.map(({name, id, price}) => ({name, id, price})),
    total: totalPrice()
  }

  const addNewOrder = () => {

    const db = getFirestore()
    const queryNewOrder = collection(db, 'orders')
    addDoc(queryNewOrder, order)
    .then (resp => {
      setIdGeneratedOrder(resp.id)
      updateStock()
    })
    .catch (err => console.log(err))
    .finally(() => {
      emptyCart()
      setDataForm({
        name: "",
        email: "",
        email2: "",
        phone: ""
      })
    })
  }

  const updateStock = () => {
    
  }
  
  return (
    <div>
        <Form onSubmit={generateOrder}>
          <Form.Group className="w-50">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              placeholder="Ingrese el nombre" 
              value={dataForm.name} 
              onChange={handleOnChange} 
              isInvalid={!!errors.name}>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Ingrese el email" 
              value={dataForm.email} 
              onChange={handleOnChange} 
              isInvalid={!!errors.email}>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            <Form.Label>Repetir email</Form.Label>
            <Form.Control 
              type="email" 
              name="email2" 
              placeholder="Ingrese el email nuevamente" 
              value={dataForm.email2} 
              onChange={handleOnChange} 
              isInvalid={!!errors.email2}>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.email2}
            </Form.Control.Feedback>
            
            <Form.Label>Teléfono</Form.Label>
            <Form.Control 
              type="text" 
              name="phone" 
              placeholder="Ingrese el teléfono" 
              value={dataForm.phone} 
              onChange={handleOnChange} 
              isInvalid={!!errors.phone}>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">Generar orden</Button>
        </Form>
    </div>
  )}

export default OrderForm
