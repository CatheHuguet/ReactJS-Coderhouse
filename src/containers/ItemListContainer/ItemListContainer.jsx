import { useState,useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { getProducts } from '../../helpers/getProducts'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const {catId} = useParams()
  const spinnerStyle = { position: "fixed", top: "50%", left: "50%" }
  
  useEffect(() => {
    if (catId) {
      setLoading(true) //lo seteo en true de nuevo para cuando solo cambia el cat id, sino queda en false y no muestra el spinner
      getProducts() 
      //filtro los productos que traigo por categoria SI HAY una seleccionada
      .then(res => setProducts(res.filter(product => product.catId === catId))) 
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }

  }, [catId]) //lo pongo en el array de dependencia para que renderice de nuevo cuando cambia

  return (
    <>
        <h2>{greeting}</h2>
        { loading ? 
            <Spinner style={spinnerStyle} animation="border" role="status"/> 
            :
            <ItemList products={products} />
        }
    </>
)}

export default ItemListContainer