import { useState,useEffect } from 'react'
import { getProducts } from '../../helpers/getProducts'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const {catId} = useParams()
  
  useEffect(() => {
    if (catId) {
      //simulacion de get para api
      getProducts() 
      //filtro los productos que traigo por categoria SI HAY una seleccionada
      .then(res => setProducts(res.filter(product => product.catId == catId))) 
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
            <div style={{marginLeft:500}} className="spinner-border text-dark" role="status"/> 
            :
            <ItemList products={products} />
        }
    </>
  )
}

export default ItemListContainer