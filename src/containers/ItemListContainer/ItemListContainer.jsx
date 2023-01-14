import { useState,useEffect } from 'react'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'

import Loader from '../../components/LoaderComponent/Loader';
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true) 
  const {catId} = useParams()

  /* Getting the products from the firestore database. If catId is true, then it will bring products filtered by the selected category.
  If catId is false, then it will just bring al the products. */
  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    const queryFilter = catId ? query( queryCollection, where('catId', '==', catId)) : queryCollection

    getDocs(queryFilter)
    .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }) )) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    
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