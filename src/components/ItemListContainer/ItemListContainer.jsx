import { useState } from 'react'
import { useEffect } from 'react'
import { getItem } from '../../helpers/getItem'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const[products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  
  useEffect(() => {
    getItem()
    .then(res => setProducts(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [])
  
  return (
    <>
        <h2>{greeting}</h2>

        { loading ? 
            <div className="spinner-border text-dark" role="status"/> :
            <ItemList products={products} />
        }
        <ItemCount/>
        
    </>
  )
}

export default ItemListContainer