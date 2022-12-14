import { useState,useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { getDetail } from '../../helpers/getDetail'


export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true) 
  const spinnerStyle = { position: "fixed", top: "50%", left: "50%" }

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
            <Spinner style={spinnerStyle} animation="border" role="status"/> 
            :
            <ItemDetail productDetail={productDetail} />
        }
    </>
  )
}
export default ItemDetailContainer
