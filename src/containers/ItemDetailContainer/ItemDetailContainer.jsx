import React, { useState,useEffect } from 'react'
import { getDetail } from '../../helpers/getDetail'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../../components/ItemCount/ItemCount'

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([])
  const [loading, setLoading] = useState(true) 

  //hook de reactrouterdom
  const {productId} = useParams()
  
  useEffect(() => {
    getDetail({productId})
    .then(res => setProductDetail(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [])
  
  return (
    <>
        { loading ? 
            <div style={{marginLeft:500}} className="spinner-border text-info" role="status"/> 
            :
            <>
              <ItemDetail productDetail={productDetail} />
              <ItemCount/>
            </>

        }
    </>
  )

}
export default ItemDetailContainer
