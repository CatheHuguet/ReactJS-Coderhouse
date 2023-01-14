import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"

const OrderForm = ({}) => {
  const {cartList, emptyCart, totalPrice, setIdGeneratedOrder} = useCartContext()
  const [errors, setErrors] = useState({})
  
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    emailRepeated: "",
    phone: ""
  })
  
  const order = {
  buyer: dataForm,
  items: cartList.map(({name, id, price}) => ({name, id, price})),
  total: totalPrice()
  }
/**
 * When the user types in the input field, update the state with the new value and clear the error
 * message.
 */
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
    
    if (!!errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      })}
  }

  /**
   * If there are any errors in the form, set the errors state to the formErrors object to show them, 
   * otherwise add a new order.
   */
  const generateOrder = (ev) => {
      ev.preventDefault()
      const formErrors = validateForm()
      if (Object.keys(formErrors).length > 0 ) {
        setErrors(formErrors)
      } else {
        addNewOrder()
      }

    }

   /**
    * Validation of the form. If the name, email, emailRepeated, or phone fields are empty, then return an error message.
    * @returns an object with the keys name, email, emailRepeated, and phone.
    */
    const validateForm = () => {
      const{name, email,emailRepeated, phone} = dataForm
      const newErrors = {}
      if(!name) newErrors.name = "El nombre no puede quedar vacío"
      if (!email) newErrors.email = "El email no puede quedar vacío"
      if (!emailRepeated) newErrors.emailRepeated = "El email no puede quedar vacío"

      if (email !== emailRepeated) {
        newErrors.emailRepeated = "El email debe ser el mismo"
      }
      if (!phone) newErrors.phone = "El teléfono no puede quedar vacío"

      return newErrors
    }


  /**
   * AddNewOrder() is a function that adds a new order to the database, and then updates the stock of
   * the products in the order.
   */
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
        emailRepeated: "",
        phone: ""
      })
    })
  }

/**
 * For each product in the cartList, update the stock of the product in the database by subtracting the
 * count of the product from the stock of the product.
 */
  const updateStock = () => {
    const db = getFirestore()
    cartList.forEach(product => {
      const queryUpdateStock = doc(db, 'products', product.id)
      updateDoc(queryUpdateStock, {
        stock:( product.stock - product.count)
      })
      .catch((err) => console.log(err))
    })
  }
  
  return (
    <>
      <Form onSubmit={generateOrder}>
        <Form.Group className="mb-2 mt-2">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Ingrese el nombre" 
            maxLength="30"
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
            maxLength="30"
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
            name="emailRepeated" 
            maxLength="30"
            placeholder="Ingrese el email nuevamente" 
            value={dataForm.emailRepeated} 
            onChange={handleOnChange} 
            isInvalid={!!errors.emailRepeated}>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.emailRepeated}
          </Form.Control.Feedback>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control 
            type="number" 
            name="phone" 
            maxLength="10"
            placeholder="Ingrese el teléfono" 
            value={dataForm.phone} 
            onChange={handleOnChange} 
            isInvalid={!!errors.phone}>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="dark" type="submit">Generar orden</Button>
      </Form>
    </>
    )}

    export default OrderForm
    