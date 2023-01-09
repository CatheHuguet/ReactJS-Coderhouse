import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/LoaderComponent/Loader'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true) 
  const {productId} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'products', productId)

    getDoc(queryDoc)
    .then(productDetail => setProductDetail({ id: productDetail.id, ...productDetail.data() } ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [])

  return (
    <>
        { loading ? 
           <Loader/>
            :
            <ItemDetail productDetail={productDetail} />
        }
    </>
  )
}
export default ItemDetailContainer
