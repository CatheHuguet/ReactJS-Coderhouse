import products from '../assets/database/products.json'

export const getDetail = ({productId}) => {
  return new Promise ((res, rej) => {
    setTimeout(() => {
      res(products.find(product => product.id === productId))
    }, "2000")
  })
}
  