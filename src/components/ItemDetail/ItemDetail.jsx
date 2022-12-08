import React from 'react'

export const ItemDetail = ({productDetail}) => {
  return (
    <div>
      <h1>ItemDetail</h1>
      <h2>Nombre: {productDetail.name}</h2>
      <h3>Precio: {productDetail.price}</h3>
      <p>Imagen1: {productDetail.image1}</p>
      <p>Imagen2: {productDetail.image2}</p>
    </div>
  )
}
