import { useState,useEffect } from 'react'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

import Loader from '../../components/LoaderComponent/Loader';
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const {catId} = useParams()

  //if there's a category selected it brings the products filtered, if not, brings all the products.
  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    if (catId) {
    const queryFilter = query(
      queryCollection, 
      where('catId', '==', catId),
      orderBy('price', 'asc')
      )
      
      getDocs(queryFilter)
      .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }) )) )
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
    else {
      getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }) )) )
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  },[catId])

  return (
    <>
        <h2>{greeting}</h2>
        { loading ? 
            <Loader/>
            :
            <ItemList products={products} />
        }
    </>
)}

export default ItemListContainer