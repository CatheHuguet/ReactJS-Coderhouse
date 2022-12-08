import { useState,useEffect } from 'react'
import { getItems } from '../../helpers/getItems'
import { ItemCount } from '../../components/ItemCount/ItemCount'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const[products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const {catId} = useParams()
  
  useEffect(() => {
    if (catId) {
      //simulacion de get para api
      getItems() 
      //filtro los productos que traigo por categoria SI HAY una seleccionada
      .then(res => setProducts(res.filter(product => product.cat = catId))) 
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getItems()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }

  }, [catId]) //para que renderice de nuevo lo pongo en el array de dependencia asi lo escucha
  
  return (
    <>
        <h2>{greeting}</h2>

        { loading ? 
            <div style={{marginLeft:500}} className="spinner-border text-dark" role="status"/> 
            :
            <ItemList products={products} />
        }
        <ItemCount/>
    </>
  )
}

export default ItemListContainer