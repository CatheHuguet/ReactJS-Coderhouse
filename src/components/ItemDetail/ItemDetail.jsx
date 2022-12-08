import React from 'react'

export const ItemDetail = ({productDetail}) => {
  return (
    <div>
      <h1>{productDetail.name}</h1>
      <h2>{productDetail.price}</h2>
      <p>Imagen: {productDetail.image}</p>
    </div>
  )
}
