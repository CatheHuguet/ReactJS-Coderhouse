import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({productDetail}) => {

  const onAdd = (count) => alert(`Cantidad agregada al cart: ${count}`)
//agregar dos usestate para comenzar con el item count y despues cambiar a llamar al cart(con dos botones)
  return (
    <div className='row'>
      <div className='col'>
        <h1>{productDetail.name}</h1>
        <img src={productDetail.image} alt='imagennnnn' className='w-50' />
        <h2>$ {productDetail.price}</h2>
      </div>
        <div className='col'>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      </div>
    </div>
  )
}
