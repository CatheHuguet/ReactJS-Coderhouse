import React from 'react'

export const ItemDetail = ({productDetail}) => {
  return (
    <div>
      <img src={productDetail.image} alt='imagennnnn' className='w-50' />
      <h1>{productDetail.name}</h1>
      <h2>{productDetail.price}</h2>
    </div>
  )
}
