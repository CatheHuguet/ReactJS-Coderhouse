import products from '../assets/database/products.json'

export const getProducts = () => {
  return new Promise ((res, rej) => {
    setTimeout(() => {
      res(products)
    }, "1000")
  })
}
  